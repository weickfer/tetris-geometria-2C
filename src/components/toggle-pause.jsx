import { Pause, Play } from "lucide-react"
import { useBlocks } from "../context/BlocksContext"

export function TogglePause() {
  const { isPlaying, setIsPlaying } = useBlocks()

  return (
    <button className="absolute top-2 left-2 z-40 cursor-pointer text-white" onClick={() => setIsPlaying(!isPlaying)}>
      {
        isPlaying ? <Pause className="size-10" /> : <Play className="size-10" /> 
      }
    </button>
  )
}