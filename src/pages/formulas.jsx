import { useEffect } from "react"
import { Link } from "react-router-dom"
import { formulas } from "../utils/formulas"

export function Formulas() {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset()
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4 py-8">
      <main className="bg-stone-800/90 rounded-2xl shadow-2xl max-w-2xl w-full border border-stone-700 p-6 flex flex-col gap-8">
        <header className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-green-400 drop-shadow-lg text-center">
            Todas as Fórmulas
          </h1>
          <p className="text-stone-300 text-sm font-light tracking-wide text-center max-w-lg">
            Consulte rapidamente as principais fórmulas de figuras planas e sólidos geométricos. Clique em cada categoria para expandir e visualizar as fórmulas.
          </p>
          <Link
            to="/"
            className="mt-2 text-xs text-blue-300 hover:underline hover:text-blue-400 transition"
          >
            Voltar para o início
          </Link>
        </header>

        <section>
          <details open className="mb-4 group">
            <summary className="cursor-pointer text-2xl font-semibold text-green-300 group-open:underline mb-2">
              Figuras Planas
            </summary>
            <div className="flex flex-col gap-4 px-2 mt-2">
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Quadrado</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.square.area}\\)`}</li>
                  <li>Perímetro: {`\\(${formulas.square.perimeter}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Hexágono</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.hexagon.area}\\)`}</li>
                  <li>Perímetro: {`\\(${formulas.hexagon.perimeter}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Retângulo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.rectangle.area}\\)`}</li>
                  <li>Perímetro: {`\\(${formulas.rectangle.perimeter}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Triângulo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.triangle.area}\\)`}</li>
                  <li>Perímetro: {`\\(${formulas.triangle.perimeter}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Paralelogramo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.parallelogram.area}\\)`}</li>
                  <li>Perímetro: {`\\(${formulas.parallelogram.perimeter}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Círculo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área: {`\\(${formulas.circle.area}\\)`}</li>
                  <li>Circunferência: {`\\(${formulas.circle.circumference}\\)`}</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-2xl font-semibold text-yellow-300 group-open:underline mb-2">
              Sólidos Geométricos
            </summary>
            <div className="flex flex-col gap-4 px-2 mt-2">
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Esfera</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área superficial: {`\\(${formulas.sphere.surfaceArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.sphere.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Prisma de Base Triangular</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.triangularPrism.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.triangularPrism.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.triangularPrism.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Prisma de Base Quadrada</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.squarePrism.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.squarePrism.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.squarePrism.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Prisma de Base Hexagonal</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.hexagonalPrism.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.hexagonalPrism.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.hexagonalPrism.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Cubo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área total: {`\\(${formulas.cube.totalArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.cube.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Paralelepípedo</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área total: {`\\(${formulas.cuboid.totalArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.cuboid.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Pirâmide de Base Triangular</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.triangularPyramid.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.triangularPyramid.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.triangularPyramid.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Pirâmide de Base Quadrada</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.squarePyramid.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.squarePyramid.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.squarePyramid.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Pirâmide de Base Hexagonal</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.hexagonalPyramid.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.hexagonalPyramid.sideArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.hexagonalPyramid.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Cilindro</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.cylinder.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.cylinder.sideArea}\\)`}</li>
                  <li>Área total: {`\\(${formulas.cylinder.totalArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.cylinder.volume}\\)`}</li>
                </ul>
              </div>
              <div className="bg-stone-700/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-stone-100 mb-1">Cone</h2>
                <ul className="ml-4 list-disc text-base italic">
                  <li>Área da base: {`\\(${formulas.cone.base}\\)`}</li>
                  <li>Área lateral: {`\\(${formulas.cone.sideArea}\\)`}</li>
                  <li>Área total: {`\\(${formulas.cone.totalArea}\\)`}</li>
                  <li>Volume: {`\\(${formulas.cone.volume}\\)`}</li>
                </ul>
              </div>
            </div>
          </details>
        </section>
      </main>
    </div>
  )
}