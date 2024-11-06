import { useEffect } from "react"
import { formulas } from '../utils/formulas'

export function Math() {
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.MathJax) {
        window.MathJax.typeset()
        clearInterval(timer)
      }
    }, 1) // Verifica a cada 100ms
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col">

     

      

    </div>
  )
}