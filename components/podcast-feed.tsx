"use client"

import { useEffect, useState, useRef } from "react"
import { Play, Calendar, Clock, ExternalLink } from "lucide-react"

interface PodcastEpisode {
  title: string
  description: string
  link: string
  pubDate: string
  duration: string
  audioUrl: string
  guid: string
  image?: string
  season?: string
  episode?: string
}

interface PodcastChannel {
  title: string
  description: string
  link: string
  image: string
}

interface PodcastFeedData {
  channel: PodcastChannel
  episodes: PodcastEpisode[]
}

interface AudioPlayerProps {
  src: string
  onEnded: () => void
}

function AudioPlayer({ src, onEnded }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Auto-play when the audio element is mounted
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Handle autoplay restrictions (browsers may block autoplay)
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <audio
        ref={audioRef}
        controls
        className="w-full"
        src={src}
        onEnded={onEnded}
        autoPlay
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export function PodcastFeed() {
  const [data, setData] = useState<PodcastFeedData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [playingEpisode, setPlayingEpisode] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/podcast')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setData(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to load podcast episodes')
        setLoading(false)
        console.error(err)
      })
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  const formatDuration = (duration: string) => {
    if (!duration) return ''
    // Handle formats like "00:45:16" or "45:16"
    const parts = duration.split(':')
    if (parts.length === 3) {
      const hours = parseInt(parts[0])
      const minutes = parseInt(parts[1])
      if (hours > 0) {
        return `${hours}h ${minutes}m`
      }
      return `${minutes}m`
    }
    if (parts.length === 2) {
      const minutes = parseInt(parts[0])
      return `${minutes}m`
    }
    return duration
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-[#2C4061] text-lg">Loading episodes...</div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-red-600 text-lg">
          {error || 'Failed to load podcast episodes'}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Channel Info */}
      <div className="mb-8 text-center">
        {data.channel.image && (
          <div className="flex justify-center mb-4">
            <img
              src={data.channel.image}
              alt={data.channel.title}
              className="w-48 h-48 rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
        <h2 className="text-3xl font-bold text-[#2C4061] mb-2">
          {data.channel.title}
        </h2>
        {data.channel.description && (
          <p className="text-gray-600">{data.channel.description}</p>
        )}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://anchor.fm/s/cee61210/podcast/rss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C4061] hover:underline text-sm flex items-center gap-1"
          >
            RSS Feed <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://open.spotify.com/show/5NAtfGfB9BEs5LCk1tnvd1?si=d46394a47b654587"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C4061] hover:underline text-sm flex items-center gap-1"
          >
            Spotify <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-4">
        {data.episodes.map((episode) => (
          <div
            key={episode.guid}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex items-start gap-4">
              {/* Episode Image */}
              {episode.image && (
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="flex-shrink-0 w-24 h-24 rounded-lg object-cover"
                />
              )}
              
              {/* Play Button */}
              <button
                onClick={() => {
                  if (playingEpisode === episode.guid) {
                    setPlayingEpisode(null)
                  } else {
                    setPlayingEpisode(episode.guid)
                  }
                }}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C4061] text-[#F5F3EE] flex items-center justify-center hover:bg-[#1e2a42] transition-colors"
                aria-label={`Play ${episode.title}`}
              >
                <Play className="w-6 h-6 ml-1" />
              </button>

              {/* Episode Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-[#2C4061] mb-2">
                  {episode.title}
                </h3>
                {episode.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {episode.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(episode.pubDate)}</span>
                  </div>
                  {episode.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(episode.duration)}</span>
                    </div>
                  )}
                  {episode.season && episode.episode && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      S{episode.season} E{episode.episode}
                    </span>
                  )}
                </div>
              </div>

              {/* External Link */}
              <a
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[#2C4061] hover:text-[#1e2a42] transition-colors"
                aria-label={`Open ${episode.title} on podcast platform`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Audio Player */}
            {playingEpisode === episode.guid && (
              <AudioPlayer
                src={episode.audioUrl}
                onEnded={() => setPlayingEpisode(null)}
              />
            )}
          </div>
        ))}
      </div>

      {data.episodes.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No episodes available at this time.
        </div>
      )}
    </div>
  )
}

