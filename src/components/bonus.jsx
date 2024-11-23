import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { cn } from "../utils/utils"
import { useBlocks } from '../context/BlocksContext'
import { getFormulaByPath } from '@/utils/formulas'

export function BonusGame({ data }) {
  const { imageUrl, options, answer } = data
  const { finishGame } = useBlocks()
  const [selectedOption, setSelectedOption] = useState(null)
  const [result, setResult] = useState(null)

  const handleOptionSelect = async (option) => {
    setSelectedOption(option)
    setResult(answer === option ? "win" : "lose")

    await new Promise(res => setTimeout(res, 1000))

    finishGame(answer === option ? 25 : 0)
  }

  useEffect(() => {
    if(window.MathJax) {
      setTimeout(() => {
        window.MathJax.typeset()
      }, 10)
    }
  }, [])

  return (
    <>
      <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px] text-white bg-gray-800">
          <DialogHeader>
            <DialogTitle>Pontuação Bonus</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 ">
            <img
              src={imageUrl}
              alt="Random game image"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div className="flex gap-2">
              {options.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className="text-black"
                  variant={selectedOption === option ? "default" : "outline"}
                >
                  { `\\(${getFormulaByPath(option)}\\)` }
                </Button>
              ))}
            </div>
            {result && (
              <div
                className={cn(
                  "text-lg font-semibold",
                  result === "win" ? "text-green-600" : "text-red-600"
                )}
              >
                {
                  result === 'win' ? 'Certo :)' : 'Errado :('
                }
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

