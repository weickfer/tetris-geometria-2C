import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useBlocks } from "../context/BlocksContext";
import { difficultyMap } from "../utils/difficulty-map";
import { shapes2D } from "../utils/get-geometry";
import { GeometryMesh } from "./geometry-mesh";

export function FallingBlock({ id, position, shape, variant }) {
  const meshRef = useRef();
  const [params] = useSearchParams()
  const difficulty = params.get('difficulty')
  const { gravity } = difficultyMap[difficulty]
  const { blockLanded, isPlaying } = useBlocks()
  const [y, setY] = useState(position[1]);

  useFrame((_, delta) => {
    // var isColliding = false;
    if(!isPlaying) return
    // Faz o cubo "cair" enquanto não toca o chão ou outros cubos
    if (y > -7) {
      //La velocidad con la que caen las figuras. 
      setY(y - gravity);
    } else {
      // Chama a função `onSettle` para notificar que o cubo atingiu o chão
      // handleSettle([position[0], y]);
      blockLanded(id)
    }

    if(!shapes2D.includes(shape)) {
      meshRef.current.rotation.y += delta
      meshRef.current.rotation.x += delta
    }
  });

  return (
    <GeometryMesh ref={meshRef} shape={shape} variant={variant} position={[position[0], y, 0]} />
  );
}
