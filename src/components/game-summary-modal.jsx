import React from 'react'
import { XCircle, CheckCircle, Home, RefreshCw } from 'lucide-react'
import { Button } from "./ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

import { getValueByPath } from '../utils/get-value-by-path'
import { formulas } from '../utils/formulas'
import { useBlocks } from '@/context/BlocksContext'

export default function GameSummaryModal({
  onBackToHome = () => console.log("Back to home clicked"),
  onRetry = () => console.log("Retry clicked")
}) {
  const { summary: manager } = useBlocks()
  const { errors, agreements, score, bonus } = manager
  const formatFormula = async () => {
    await new Promise(res => setTimeout(res, 150))
    window.MathJax.typeset()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="overflow-y-auto max-h-[85vh] text-white bg-gray-800 rounded-lg shadow-xl max-w-md w-full my-2">
        <div className="px-6 py-2">
          <h2 className="text-2xl font-bold text-center ">Resumo</h2>
        
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="agreements">
                <AccordionTrigger className="text-lg font-semibold" onClick={formatFormula}>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Acertos ({agreements.length})
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 pl-7">
                    {agreements.map((agreement, index) => (
                      <li key={index} className="text-sm">{
                        `\\(${getValueByPath(formulas, agreement)}\\)`
                      }</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="errors">
                <AccordionTrigger className="text-lg font-semibold" onClick={formatFormula}>
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 mr-2 text-red-500" />
                    Erros ({errors.length})
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 pl-7">
                    {errors.map((error, index) => (
                      <li key={index} className="text-sm">{
                        `\\(${getValueByPath(formulas, error)}\\)`
                      }</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-2">
            <section className="flex flex-row justify-between items-center p-1 border-b border-gray-700">
              <h2>Pontuação</h2>
              <p>{score}</p>
            </section>
            <section className="flex flex-row justify-between items-center p-1 border-b border-gray-700">
              <h2>Bonus</h2>
              <p>{bonus}</p>
            </section>
            <section className="flex flex-row justify-between items-center p-1 border-b border-gray-700">
              <h2>Total</h2>
              <p>{score + bonus}</p>
            </section>
            {/* <h3 className="text-lg font-semibold">Pontuação Total</h3>
            <p className="text-3xl font-bold">{score}</p> */}
          </div>
          
          <div className="flex justify-center mt-4 space-x-4">
            <Button onClick={onBackToHome}  variant="outline" className="flex items-center text-gray-800">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
            <Button onClick={onRetry}  variant="default" className="flex items-center">
              <RefreshCw className="w-4 h-4 mr-2" />
              Jogar novamente
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}