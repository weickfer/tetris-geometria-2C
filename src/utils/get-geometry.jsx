import { Edges } from '@react-three/drei';
import * as THREE from 'three';

// trapezoid: (
//   <shapeGeometry
//     args={[
//       new THREE.Shape()
//         .moveTo(-1, -1)
//         .lineTo(-0.5, 1)
//         .lineTo(0.5, 1)
//         .lineTo(1, -1)
//         .closePath(),
//     ]}
//   />
// ),

function TriangularBase({ position, color }) {
  const triangleShape = new THREE.Shape();
  const radius = 0.5; // Raio da base triangular

  // Adicionando os pontos ao shape
  triangleShape.moveTo(0, radius); // Ponto superior
  triangleShape.lineTo(-radius * Math.sin(Math.PI / 3), -radius * Math.cos(Math.PI / 3)); // Ponto inferior esquerdo
  triangleShape.lineTo(radius * Math.sin(Math.PI / 3), -radius * Math.cos(Math.PI / 3)); // Ponto inferior direito
  triangleShape.closePath(); // Fecha o triângulo

  return (
    <mesh position={position}>
      <shapeGeometry args={[triangleShape]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  )
}

function SquareBase({ position, color }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[0.7, 0.7]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  )
}

function CircleBase({ position, color }) {
  return (
    <mesh position={position}>
      <circleGeometry args={[0.5, 32]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  )
}

function HexagonBase({ position, color }) {
  const hexagonShape = new THREE.Shape();
  const scaleFactor = 0.5; // Fator de escala (50% do tamanho original)

  // Adicionando os pontos ao shape com escala aplicada
  hexagonShape.moveTo(1 * scaleFactor, 0);                                   // Primeiro ponto
  hexagonShape.lineTo(0.5 * scaleFactor, Math.sqrt(3) / 2 * scaleFactor); // Segundo ponto
  hexagonShape.lineTo(-0.5 * scaleFactor, Math.sqrt(3) / 2 * scaleFactor); // Terceiro ponto
  hexagonShape.lineTo(-1 * scaleFactor, 0);                                 // Quarto ponto
  hexagonShape.lineTo(-0.5 * scaleFactor, -Math.sqrt(3) / 2 * scaleFactor); // Quinto ponto
  hexagonShape.lineTo(0.5 * scaleFactor, -Math.sqrt(3) / 2 * scaleFactor); // Sexto ponto
  hexagonShape.closePath(); // Fecha o hexágono


  return (
    <mesh position={position}>
      <shapeGeometry
        args={[
          hexagonShape,
        ]}
      />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  )
}

const geometries = {
  square: {
    area: <planeGeometry args={[1, 1]} />,
    perimeter: (
      <>
        <planeGeometry args={[1, 1]} />
        <Edges color="red" lineWidth={5} />
      </>
    ),
  },
  rectangle: {
    area: <planeGeometry args={[1, 2]} />,
    perimeter: (
      <>
        <planeGeometry args={[1, 2]} />
        <Edges color="red" lineWidth={5} />
      </>
    ),
  },
  parallelogram: {
    area: (
      <shapeGeometry
        args={[
          new THREE.Shape()
            .moveTo(-1, -1)
            .lineTo(0, 1)
            .lineTo(2, 1)
            .lineTo(1, -1)
            .closePath(),
        ]}
      />
    ),
    perimeter: (
      <>
        <shapeGeometry
          args={[
            new THREE.Shape()
              .moveTo(-1, -1)
              .lineTo(0, 1)
              .lineTo(2, 1)
              .lineTo(1, -1)
              .closePath(),
          ]}
        />
        <Edges color="red" lineWidth={5} />
      </>
    )
  },
  triangle: {
    area: (
      <shapeGeometry
        args={[new THREE.Shape().moveTo(0, 1.2).lineTo(1.2, -1.2).lineTo(-1.2, -1.2).closePath()]}
      />
    ),
    perimeter: (
      <>
        <shapeGeometry
          args={[new THREE.Shape().moveTo(0, 1.2).lineTo(1.2, -1.2).lineTo(-1.2, -1.2).closePath()]}
        />
        <Edges color="red" lineWidth={5} />
      </>
    )
  },
  hexagon: {
    area: (
      <shapeGeometry
        args={[
          new THREE.Shape()
            .moveTo(1, 0)                           // Primeiro ponto
            .lineTo(0.5, Math.sqrt(3) / 2)         // Segundo ponto (ângulo de 60 graus)
            .lineTo(-0.5, Math.sqrt(3) / 2)        // Terceiro ponto
            .lineTo(-1, 0)                          // Quarto ponto
            .lineTo(-0.5, -Math.sqrt(3) / 2)       // Quinto ponto
            .lineTo(0.5, -Math.sqrt(3) / 2)        // Sexto ponto
            .closePath(),
        ]}
      />
    ),
    perimeter: (
      <>
        <shapeGeometry
          args={[
            new THREE.Shape()
              .moveTo(1, 0)                           // Primeiro ponto
              .lineTo(0.5, Math.sqrt(3) / 2)         // Segundo ponto (ângulo de 60 graus)
              .lineTo(-0.5, Math.sqrt(3) / 2)        // Terceiro ponto
              .lineTo(-1, 0)                          // Quarto ponto
              .lineTo(-0.5, -Math.sqrt(3) / 2)       // Quinto ponto
              .lineTo(0.5, -Math.sqrt(3) / 2)        // Sexto ponto
              .closePath(),
          ]}
        />
        <Edges color="red" lineWidth={5} />
      </>
    )
  },
  circle: {
    area: <circleGeometry args={[0.5, 32]} />,
    circumference: (
      <>
        <circleGeometry args={[0.5, 32]} />
        <Edges color="red" lineWidth={5} />
      </>
    )
  },

  cube: {
    totalArea: (
      <>
        <boxGeometry args={[2, 2, 2]} />),
        <meshStandardMaterial color="orange" />
      </>
    ),
    volume: (
      <group>
        <mesh>
          <boxGeometry args={[2, 2, 2]} /> {/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <boxGeometry args={[1.7, 1.7, 1.7]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    )
  },
  cuboid: {
    totalArea: (
      <>
        <boxGeometry args={[2, 2, 1]} />,
        <meshStandardMaterial color="orange" />
      </>
    ),
    volume: (
      <group>
        <mesh>
          <boxGeometry args={[2, 1, 1]} /> {/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <boxGeometry args={[1.7, 0.7, 0.7]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    )
  },

  triangularPrism: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 3]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <TriangularBase position={[0, 0, 0.501]} color="orange" />
        <TriangularBase position={[0, 0, -0.501]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 3]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <TriangularBase position={[0, 0, 0.501]} color="white" />
        <TriangularBase position={[0, 0, -0.501]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 1, 3]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.9, 3]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    )
  }, // Triangular prism
  squarePrism: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 4]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <SquareBase position={[0, 0, 0.501]} color="orange" />
        <SquareBase position={[0, 0, -0.501]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 4]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <SquareBase position={[0, 0, 0.501]} color="white" />
        <SquareBase position={[0, 0, -0.501]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 1, 4]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.9, 4]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  }, // Square prism
  hexagonalPrism: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 6]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <HexagonBase position={[0, 0, 0.501]} color="orange" />
        <HexagonBase position={[0, 0, -0.501]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 6]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <HexagonBase position={[0, 0, 0.501]} color="white" />
        <HexagonBase position={[0, 0, -0.501]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 1, 6]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.9, 6]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  }, // Hexagonal prism

  triangularPyramid: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 3]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <TriangularBase position={[0, 0, 0.751]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 3]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <TriangularBase position={[0, 0, 0.751]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <coneGeometry args={[0.7, 1.5, 3]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <coneGeometry args={[0.5, 1.3, 3]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  },
  squarePyramid: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 4]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <SquareBase position={[0, 0, 0.751]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 4]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <SquareBase position={[0, 0, 0.751]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <coneGeometry args={[0.7, 1.5, 4]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <coneGeometry args={[0.5, 1.3, 4]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    )
  },
  hexagonalPyramid: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 6]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <HexagonBase position={[0, 0, 0.751]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}>
          <coneGeometry args={[0.5, 1.5, 6]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <HexagonBase position={[0, 0, 0.751]} color="white" />
      </group>
    ),
    volume: (
      <group>
        <mesh>
          <coneGeometry args={[0.7, 1.5, 6]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <coneGeometry args={[0.5, 1.3, 6]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    )
  },

  cylinder: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        {/* Base Triangular destacada */}
        <CircleBase position={[0, 0, 0.501]} color="orange" />
        <CircleBase position={[0, 0, -0.501]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <CircleBase position={[0, 0, 0.501]} color="white" />
        <CircleBase position={[0, 0, -0.501]} color="white" />
      </group>
    ),
    totalArea: (
      <>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="orange" />
      </>
    ),
    volume: (
      <group>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />{/* Cubo externo maior */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.9, 32]} /> {/* Cubo interno menor */}
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  },
  cone: {
    base: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="white" transparent={true} opacity={0.3} />
        </mesh>

        <CircleBase position={[0, 0, 0.501]} color="orange" />
      </group>
    ),
    sideArea: (
      <group>
        {/* Prisma Triangular (visível) */}
        <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI]}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Base Triangular destacada */}
        <CircleBase position={[0, 0, 0.501]} color="white" />
      </group>
    ),
    totalArea: (
      <>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="orange" />
      </>
    ),
    volume: (
      <group>
        <mesh>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <coneGeometry args={[0.3, 0.8, 32]} />
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  },
  sphere: {
    surfaceArea: (
      <>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </>
    ),
    volume: (
      <group>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="green" /> {/* Material sólido */}
        </mesh>
      </group>
    ),
  },
};

export const shapes = Object.keys(geometries)
export const shapes2D = [
  "square", "rectangle", "triangle", "hexagon", "parallelogram", "circle"
]

export function getGeometry(shape) {
  return geometries[shape]; // Default to cube if shape is not found
}
