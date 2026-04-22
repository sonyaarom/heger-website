'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  ariaLabel?: string
}

export default function Gyroscope3D({ src, ariaLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.play().catch(() => setPlaying(false))
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play()
    else v.pause()
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
        aria-label={ariaLabel}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          cursor: 'pointer',
          background: '#000',
        }}
      />
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Play"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.25)',
            border: 'none',
            color: '#fff',
            fontSize: 48,
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          ▶
        </button>
      )}
    </div>
  )
}
