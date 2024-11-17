import { formulasKeys } from "./formulas";

export function getRandomFormula(filtersArray) {
  const filteredFormulasKeys = formulasKeys.filter(
    formula => 
      filtersArray === '*' || 
      filtersArray.some(
        filter => formula.includes(filter)
      )
  )

  const formulaKey = filteredFormulasKeys[Math.floor(Math.random() * filteredFormulasKeys.length)]

  const [shape, property] = formulaKey.split('.')

  return {
    id: `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    formulaKey,
    shape, 
    property,
    position: [(Math.random() * 6) - 3, 8], // Posição inicial aleatória
  }
}