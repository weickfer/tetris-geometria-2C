import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GeometryMesh } from "./geometry-mesh";
import { shapes2D } from "../utils/get-geometry";
import { useBlocks } from "../context/BlocksContext";
import { config } from "../utils/config";

export function FallingBlock({ position, shape, variant }) {
  const meshRef = useRef();
  const { handleSettle, isPlaying } = useBlocks()
  const [y, setY] = useState(position[1]);

  useFrame((_, delta) => {
    // var isColliding = false;
    if(!isPlaying) return
    // for (const settledBlock of settledBlocks) {
    //   const distanceX = Math.abs(position[0] - settledBlock[0]);
    //   const distanceY = Math.abs(y - settledBlock[1]);
      
    //   // Checa a colisão quando está próximo em X e a posição Y é a mesma ou menor
    //   if (distanceX < 1 && distanceY < 1) {
    //     isColliding = true;
    //     break;
    //   }
    // }

    // if(isColliding) {
    //   handleSettle([position[0], y])
    // }

    // Faz o cubo "cair" enquanto não toca o chão ou outros cubos
    if (y > -7) {
      setY(y - config.fallFactor);
    } else {
      // Chama a função `onSettle` para notificar que o cubo atingiu o chão
      handleSettle([position[0], y]);
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
