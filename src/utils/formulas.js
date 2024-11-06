import { getValueByPath } from "./get-value-by-path"

export const formulas = {
  square: {
    area: 'A = a^2',
    perimeter: 'P = 4 \\cdot a'
  },
  rectangle: {
    area: 'A = b \\cdot h',
    perimeter: 'P = 2(b + h)'
  },
  parallelogram: {
    area: 'A = b \\cdot h',
    perimeter: 'P = 2 \\cdot (a + b)'
  },
  triangle: {
    area: 'A = \\frac{b \\cdot h}{2}',
    perimeter: 'P = a + b + c'
  },
  hexagon: {
    area: 'A = 6 \\cdot \\frac{a^{2}\\sqrt{3}}{4}', // Área do hexágono
    perimeter: 'P = 6 \\cdot a'                   // Perímetro do hexágono
  },
  circle: {
    area: 'A = \\pi \\cdot r^2',
    circumference: 'C = 2 \\pi \\cdot r'
  },
  cube: {
    totalArea: 'At = 6 \\cdot a^2',
    volume: 'V = a^3'
  },
  cuboid: {
    totalArea: 'At = 2 \\cdot (ab + bc + ac)',
    volume: 'V = a \\cdot b \\cdot c'
  },
  triangularPrism: {
    base: 'Ab = \\frac{a^{2}\\sqrt{3}}{4}',
    sideArea: 'Al = 3(a \\cdot H)',
    volume: 'V = \\frac{a^{2}\\sqrt{3}}{4} \\cdot H'
  },
  squarePrism: {
    base: 'Ab = a^{2}',
    sideArea: 'Al = 4(a \\cdot H)',
    volume: 'V = a^{2} \\cdot H'
  },
  hexagonalPrism: {
    base: 'Ab = 6 \\cdot \\frac{a^{2}\\sqrt{3}}{4}',
    sideArea: 'Al = 6(a \\cdot H)',
    volume: 'V = 6 \\cdot \\frac{a^{2}\\sqrt{3}}{4} \\cdot H'
  },
  triangularPyramid: {
    base: 'Ab = \\frac{a^{2}\\sqrt{3}}{4}',
    sideArea: 'Al = 3 \\cdot \\frac{a \\cdot g}{2}',
    volume: 'V = \\frac{Ab \\cdot h}{3}'
  },
  squarePyramid: {
    base: 'Ab = a^{2}',
    sideArea: 'Al = 4 \\cdot \\frac{a \\cdot g}{2}',
    volume: 'V = \\frac{Ab \\cdot h}{3}'
  },
  hexagonalPyramid: {
    base: 'Ab = 6 \\cdot \\frac{a^{2}\\sqrt{3}}{4}',
    sideArea: 'Al = 6 \\cdot \\frac{a \\cdot g}{2}',
    volume: 'V = \\frac{Ab \\cdot h}{3}'
  },
  cylinder: {
    base: 'Ab = \\pi \\cdot r^2',
    sideArea: 'Al = 2 \\pi r \\cdot H',
    totalArea: 'At = 2 \\cdot \\pi r (r + H)',
    volume: 'V = \\pi r^2 \\cdot H'
  },
  cone: {
    base: 'Ab = \\pi \\cdot r^2',
    sideArea: 'Al = \\pi \\cdot r \\cdot g',
    totalArea: 'At = \\pi r (r + g)',
    volume: 'V = \\frac{Ab \\cdot h}{3}'
  },

  sphere: {
    surfaceArea: 'A = 4 \\cdot \\pi \\cdot r^2',
    volume: 'V = \\frac{4}{3} \\cdot \\pi \\cdot r^3'
  }
}
export const formulasKeys = Object.keys(formulas)

export function getFormulaByPath(path) {
  const formula = getValueByPath(formulas, path)

  if (typeof formula === 'string') {
    return formula
  }

  return Object.values(formula)[0]
}
