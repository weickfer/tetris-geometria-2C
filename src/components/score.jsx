import { useEffect, useRef, useState } from "react"
import { useBlocks } from "../context/BlocksContext"

export function Score() {
  const lastScore = useRef()
  const [differenceScore, setDifferenceScore] = useState(0)
  const { currentScore } = useBlocks()
  const hasPositive = differenceScore > 0


  useEffect(() => {
    (async () => {
      const difference = currentScore - (lastScore.current ?? 0)

      setDifferenceScore(difference)

      await new Promise(resolve => setTimeout(resolve, 1000))

      setDifferenceScore(0)
      lastScore.current = currentScore
    })()
  }, [currentScore])

  return (
    <div className="relative text-white px-2 flex items-center">
      <p className="absolute right-2">{`${currentScore}`.padStart(2, '0')}</p>

      {
        differenceScore !== 0 && (
          <div className={`absolute right-2 animate-textDown ${hasPositive ? 'text-green-500' : 'text-red-500'}`}>
            {
              hasPositive ? `+${Math.abs(differenceScore)}` : `-${Math.abs(differenceScore)}`
            }
          </div>
        )
      }
    </div>
  )
}