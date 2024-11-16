import React from "react"
import { getGeometry } from "../utils/get-geometry"

export const GeometryMesh = React.forwardRef(({ shape, variant, position }, ref) => {
  const geometry = getGeometry(shape)

  const object = geometry[variant] ?? geometry.default
  return (
    <mesh ref={ref} position={position}>
      {object ?? geometry }
      {/* <meshStandardMaterial color="#fff" /> */}
    </mesh>
  )
})