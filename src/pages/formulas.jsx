import { useEffect } from "react"
import { formulas } from "../utils/formulas"

export function Formulas() {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset()
    }
  }, [])

  return (
    <div className="bg-slate-900 text-white px-4 py-2">
      <h1 className="text-3xl font-semibold">Todas as formulas</h1>

      <div className="px-2">
        <p className="text-lg -tracking-tighter mt-2">Figuras Planas</p>

        <div className="flex flex-col gap-2 px-2 italic">
          <h2>Quadrado</h2>
          {`\\(${formulas.square.area}\\)`}
          {`\\(${formulas.square.perimeter}\\)`}

          <h2>Hexágono</h2>
          {`\\(${formulas.hexagon.area}\\)`}
          {`\\(${formulas.hexagon.perimeter}\\)`}

          <h2>Retângulo</h2>
          {`\\(${formulas.rectangle.area}\\)`}
          {`\\(${formulas.rectangle.perimeter}\\)`}

          <h2>Triângulo</h2>
          {`\\(${formulas.triangle.area}\\)`}
          {`\\(${formulas.triangle.perimeter}\\)`}

          <h2>Paralelogramo</h2>
          {`\\(${formulas.parallelogram.area}\\)`}
          {`\\(${formulas.parallelogram.perimeter}\\)`}

          <h2>Círculo</h2>
          {`\\(${formulas.circle.area}\\)`}
          {`\\(${formulas.circle.circumference}\\)`}
        </div>
      </div>

      <div className="px-2">
        <p className="text-lg -tracking-tighter mt-2">Sólidos Geométricos</p>

        <div className="flex flex-col gap-2 px-2  italic">
          <h2>Esfera</h2>
          {`\\(${formulas.sphere.surfaceArea}\\)`}
          {`\\(${formulas.sphere.volume}\\)`}

          <h2>Prisma de Base Triangular</h2>
          {`\\(${formulas.triangularPrism.base}\\)`}
          {`\\(${formulas.triangularPrism.sideArea}\\)`}
          {`\\(${formulas.triangularPrism.volume}\\)`}

          <h2>Prisma de Base Quadrada</h2>
          {`\\(${formulas.squarePrism.base}\\)`}
          {`\\(${formulas.squarePrism.sideArea}\\)`}
          {`\\(${formulas.squarePrism.volume}\\)`}

          <h2>Prisma de Base Hexagonal</h2>
          {`\\(${formulas.hexagonalPrism.base}\\)`}
          {`\\(${formulas.hexagonalPrism.sideArea}\\)`}
          {`\\(${formulas.hexagonalPrism.volume}\\)`}

          <h2>Cubo</h2>
          {`\\(${formulas.cube.totalArea}\\)`}
          {`\\(${formulas.cube.volume}\\)`}

          <h2>Paralelepípedo</h2>
          {`\\(${formulas.cuboid.totalArea}\\)`}
          {`\\(${formulas.cuboid.volume}\\)`}

          <h2>Pirâmide de Base Triangular</h2>
          {`\\(${formulas.triangularPyramid.base}\\)`}
          {`\\(${formulas.triangularPyramid.sideArea}\\)`}
          {`\\(${formulas.triangularPyramid.volume}\\)`}

          <h2>Pirâmide de Base Quadrada</h2>
          {`\\(${formulas.squarePyramid.base}\\)`}
          {`\\(${formulas.squarePyramid.sideArea}\\)`}
          {`\\(${formulas.squarePyramid.volume}\\)`}

          <h2>Pirâmide de Base Hexagonal</h2>
          {`\\(${formulas.hexagonalPyramid.base}\\)`}
          {`\\(${formulas.hexagonalPyramid.sideArea}\\)`}
          {`\\(${formulas.hexagonalPyramid.volume}\\)`}

          <h2>Cilindro</h2>
          {`\\(${formulas.cylinder.base}\\)`}
          {`\\(${formulas.cylinder.sideArea}\\)`}
          {`\\(${formulas.cylinder.totalArea}\\)`}
          {`\\(${formulas.cylinder.volume}\\)`}

          <h2>Cone</h2>
          {`\\(${formulas.cone.base}\\)`}
          {`\\(${formulas.cone.sideArea}\\)`}
          {`\\(${formulas.cone.totalArea}\\)`}
          {`\\(${formulas.cone.volume}\\)`}
        </div>
      </div>


    </div>
  )
}