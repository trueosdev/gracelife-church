"use client"

import { useRef, useEffect } from "react"

export function SubscribeSection() {
  const popupRef = useRef<Window | null>(null)
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const hasDetectedSuccessRef = useRef(false)

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
    }
  }, [])

  const handleSubscribe = () => {
    // Build Mailchimp URL
    // Try HTTPS first, fallback to HTTP if needed
    let mailchimpUrl: URL
    try {
      mailchimpUrl = new URL('https://eepurl.com/iXzmp-')
    } catch {
      mailchimpUrl = new URL('http://eepurl.com/iXzmp-')
    }

    // Open popup window (small size)
    const width = 600
    const height = 700
    const left = (window.innerWidth - width) / 2
    const top = (window.innerHeight - height) / 2

    popupRef.current = window.open(
      mailchimpUrl.toString(),
      'mailchimpSignup',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    )

    // Check if popup was blocked
    if (!popupRef.current) {
      alert('Please allow popups for this site to open the signup form.')
      return
    }

    // Reset success detection flag
    hasDetectedSuccessRef.current = false

    // Monitor the popup to close it after submission
    // Mailchimp redirects after successful submission, so we check for URL changes
    checkIntervalRef.current = setInterval(() => {
      if (popupRef.current) {
        try {
          // Check if popup is closed
          if (popupRef.current.closed) {
            if (checkIntervalRef.current) {
              clearInterval(checkIntervalRef.current)
            }
            return
          }

          // Try to access the popup's location (will throw if cross-origin)
          const popupUrl = popupRef.current.location.href
          
          // Mailchimp typically redirects to a success page after submission
          // Check for common Mailchimp success indicators
          if (
            popupUrl.includes('success') ||
            popupUrl.includes('thank') ||
            popupUrl.includes('subscribed') ||
            popupUrl.includes('confirm')
          ) {
            hasDetectedSuccessRef.current = true
            // Close the popup after a short delay
            setTimeout(() => {
              if (popupRef.current && !popupRef.current.closed) {
                popupRef.current.close()
              }
              if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current)
              }
            }, 1000)
          }
        } catch (e) {
          // Cross-origin error - can't access popup URL
          // This is normal when the popup navigates to Mailchimp
          // We'll just keep checking until the popup is closed
        }
      } else {
        // Popup was closed manually
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current)
        }
      }
    }, 500)

    // Fallback: Close popup after 30 seconds if still open
    // (in case we can't detect the success redirect due to CORS)
    setTimeout(() => {
      if (popupRef.current && !popupRef.current.closed && !hasDetectedSuccessRef.current) {
        popupRef.current.close()
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
    }, 30000)
  }

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center" data-reveal>
        <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-10">
          Stay Connected
        </h2>

        <div className="flex justify-center mb-10">
          <img 
            src="/mail.svg" 
            alt="" 
            className="w-auto h-28 md:h-32 float-soft"
          />
        </div>
        
        <button
          onClick={handleSubscribe}
          className="px-9 py-4 bg-[#2C4061] rounded-full text-[#F5F3EE] text-base font-medium hover:bg-[#3b5479] transition-colors"
        >
          Subscribe To Our Newsletter
        </button>
      </div>
    </section>
  )
}
