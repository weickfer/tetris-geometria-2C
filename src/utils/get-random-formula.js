import { formulasKeys } from "./formulas";

export function getRandomFormula(filter) {
  const formulas = formulasKeys.filter(
    formula => filter ? filter.some(f => formula.includes(f)) : true
  )

  const formula = formulas[Math.floor(Math.random() * formulas.length)]

  const [shape, selectedFormula] = formula.split('.')
  // const randomShape = formulasKeys[Math.floor(Math.random() * formulasKeys.length)];
  // const shapeFormulas = Object.keys(formulas[randomShape])
  // const selectedFormula = shapeFormulas[Math.floor(Math.random() * shapeFormulas.length)]
  // const formulaId = `${randomShape}.${selectedFormula}`

  return {
    id: `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    formulaId: formula,
    shape, 
    selectedFormula,
    position: [(Math.random() * 6) - 3, 8], // Posição inicial aleatória
  }
}