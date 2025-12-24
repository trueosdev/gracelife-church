import { NextResponse } from 'next/server'

export const runtime = 'edge'

interface PodcastEpisode {
  title: string
  description: string
  link: string
  pubDate: string
  duration: string
  audioUrl: string
  guid: string
  image?: string
}

// Helper function to extract text content from XML tags
function getTextContent(xml: string, tagName: string, namespace?: string): string {
  const fullTag = namespace ? `${namespace}:${tagName}` : tagName
  const regex = new RegExp(`<${fullTag}[^>]*>([\\s\\S]*?)<\\/${fullTag}>`, 'i')
  const match = xml.match(regex)
  if (!match) return ''
  
  // Remove CDATA wrapper if present
  let content = match[1].trim()
  if (content.startsWith('<![CDATA[') && content.endsWith(']]>')) {
    content = content.slice(9, -3).trim()
  }
  
  // Strip HTML tags
  return content.replace(/<[^>]*>/g, '').trim()
}

// Helper function to extract attribute value
function getAttribute(xml: string, tagName: string, attrName: string, namespace?: string): string {
  const fullTag = namespace ? `${namespace}:${tagName}` : tagName
  const regex = new RegExp(`<${fullTag}[^>]*${attrName}=["']([^"']+)["'][^>]*>`, 'i')
  const match = xml.match(regex)
  return match ? match[1] : ''
}

// Helper function to extract enclosure URL
function getEnclosureUrl(xml: string): string {
  const regex = /<enclosure[^>]*url=["']([^"']+)["'][^>]*>/i
  const match = xml.match(regex)
  return match ? match[1] : ''
}

export async function GET() {
  try {
    const rssUrl = 'https://anchor.fm/s/cee61210/podcast/rss'
    const response = await fetch(rssUrl, {
      next: { revalidate: 1800 } // Revalidate every 30 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed')
    }

    const xmlText = await response.text()
    
    // Extract channel info
    const channelMatch = xmlText.match(/<channel[^>]*>([\s\S]*?)<\/channel>/i)
    if (!channelMatch) {
      throw new Error('No channel found in RSS feed')
    }

    const channelXml = channelMatch[1]
    
    const channelTitle = getTextContent(channelXml, 'title') || 'GraceLife Church Podcast'
    const channelDescription = getTextContent(channelXml, 'description') || ''
    const channelLink = getTextContent(channelXml, 'link') || ''
    
    // Get Spotify show image
    let channelImage = ''
    try {
      const spotifyShowId = '5NAtfGfB9BEs5LCk1tnvd1'
      const spotifyOEmbedUrl = `https://open.spotify.com/oembed?url=https://open.spotify.com/show/${spotifyShowId}`
      const spotifyResponse = await fetch(spotifyOEmbedUrl, {
        next: { revalidate: 1800 } // Revalidate every 30 minutes
      })
      
      if (spotifyResponse.ok) {
        const spotifyData = await spotifyResponse.json()
        channelImage = spotifyData.thumbnail_url || ''
      }
    } catch (error) {
      console.error('Error fetching Spotify image:', error)
    }
    
    // Fallback to iTunes image if Spotify image not available
    if (!channelImage) {
      channelImage = getAttribute(channelXml, 'image', 'href', 'itunes')
      if (!channelImage) {
        // Try regular image tag
        const imageMatch = channelXml.match(/<image[^>]*>([\s\S]*?)<\/image>/i)
        if (imageMatch) {
          channelImage = getTextContent(imageMatch[1], 'url')
        }
      }
    }

    // Extract episodes
    const itemMatches = xmlText.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/gi)
    const episodes: PodcastEpisode[] = []

    for (const itemMatch of itemMatches) {
      const itemXml = itemMatch[1]
      
      const title = getTextContent(itemXml, 'title')
      const description = getTextContent(itemXml, 'description')
      const link = getTextContent(itemXml, 'link')
      const pubDate = getTextContent(itemXml, 'pubDate')
      
      // Get GUID
      const guidMatch = itemXml.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i)
      let guid = guidMatch ? guidMatch[1].trim() : ''
      // Remove CDATA markers if present
      if (guid.startsWith('<![CDATA[') && guid.endsWith(']]>')) {
        guid = guid.slice(9, -3).trim()
      }
      
      const audioUrl = getEnclosureUrl(itemXml)
      const duration = getTextContent(itemXml, 'duration', 'itunes')
      const episode = getTextContent(itemXml, 'episode', 'itunes')
      
      // Use Spotify show image for all episodes
      const episodeImage = channelImage

      // Skip the "Launch - Coming Soon!" episode
      if (title.includes('Launch') || title.includes('Coming Soon')) {
        continue
      }

      episodes.push({
        title,
        description: description.replace(/<[^>]*>/g, '').trim(), // Strip HTML tags
        link,
        pubDate,
        duration,
        audioUrl,
        guid,
        image: episodeImage,
      })
    }

    return NextResponse.json({
      channel: {
        title: channelTitle,
        description: channelDescription,
        link: channelLink,
        image: channelImage,
      },
      episodes,
    })
  } catch (error) {
    console.error('Error fetching podcast feed:', error)
    return NextResponse.json(
      { error: 'Failed to fetch podcast feed' },
      { status: 500 }
    )
  }
}

