import { useEffect, useRef } from "react";
import { useBlocks } from "../context/BlocksContext";
import { Canvas, useFrame } from "@react-three/fiber";
import { GeometryMesh } from "../components/geometry-mesh";
import { OrbitControls } from "@react-three/drei";

export function Playground() {
  return (
    <div className="w-full h-screen">
      <Canvas className="bg-slate-900" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 5]} intensity={0.6} />
        <OrbitControls enableRotate />
        
        <GeometryMesh shape="sphere" variant="totalArea" position={[0, 0, 0]} />
        <GeometryMesh shape="sphere" variant="volume" position={[2, 0, 0]} />

      </Canvas>
    </div>
  );
}
