export const geometricFormulas = {
  square: {
    area: "A = a²",
    perimeter: "P = 4a"
  },
  rectangle: {
    area: "A = l × w",
    perimeter: "P = 2(l + w)"
  },
  triangle: {
    area: "A = (b × h) / 2",
    perimeter: "P = a + b + c"
  },
  trapezoid: {
    area: "A = ((B + b) × h) / 2",
    perimeter: "P = B + b + a + c"
  },
  parallelogram: {
    area: "A = b × h",
    perimeter: "P = 2(a + b)"
  },
  circle: {
    area: "A = πr²",
    circumference: "C = 2πr"
  },
  cube: {
    volume: "V = a³",
    surfaceArea: "S = 6a²"
  },
  cuboid: {
    volume: "V = a² × h",
    surfaceArea: "At = 2(a² × h) + 4(a × H)"
  },
  prism: {
    volume: "V = Ab × h", // Ab é a área da base
    surfaceArea: "S = 2Ab + Pb × h" // Pb é o perímetro da base
  },
  // hexagonalPrism: {
  //   volume: "V = (3√3/2)a² × h",
  //   surfaceArea: "S = 6a × h + 3√3a²"
  // },
  pyramid: {
    volume: "V = (Ab × h) / 3", // Ab é a área da base
    surfaceArea: "S = Ab + área das faces laterais"
  },
  cylinder: {
    volume: "V = πr²h",
    surfaceArea: "S = 2πr(r + h)"
  },
  cone: {
    volume: "V = (πr²h) / 3",
    surfaceArea: "S = πr(r + √(r² + h²))"
  },
  sphere: {
    volume: "V = (4/3)πr³",
    surfaceArea: "S = 4πr²"
  }
};

export const geometricFormulasEntries = Object.entries(geometricFormulas).map(
  ([key, value]) => ({ id: key, ...value })
)
