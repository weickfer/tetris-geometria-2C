import { Pyramid } from "lucide-react"

export function GoToFormulas() {
  return (
    <a href="/formulas" className="block bg-slate-500 rounded-lg p-1 absolute top-2 right-2 z-50 cursor-pointer text-white">
      <Pyramid className="size-8"  />
    </a>
  ) 
}