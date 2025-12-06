"use client"

import { Suspense, lazy, useState, useEffect } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset error state when scene changes
    setHasError(false)
  }, [scene])

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900/80 to-black/80 border border-cyan-500/20 rounded-lg">
        <div className="flex flex-col items-center gap-3 p-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <p className="text-sm text-neutral-400 text-center">3D Scene</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900/50 to-black/50">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
            <p className="text-xs text-neutral-400">Loading 3D scene...</p>
          </div>
        </div>
      }
    >
      <div className="w-full h-full">
        <Spline 
          scene={scene} 
          className={className}
          onError={() => setHasError(true)}
        />
      </div>
    </Suspense>
  )
}
