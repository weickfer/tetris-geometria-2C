import { Score } from "./score";
import { Timer } from "./timer";

export function Board() {
  return (
    <div className="absolute flex flex-row gap-2 top-2 font-mono right-2 z-50 cursor-pointer text-white">
      <Score />
      {' | '}
      <Timer />
    </div>
  )
}