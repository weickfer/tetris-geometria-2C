import { useEffect } from "react";
import { useBlocks } from "../context/BlocksContext";
import { TogglePause } from "../components/toggle-pause";
import { Canvas } from "@react-three/fiber";
import { TetrisGrid } from "../components/tetris-grid";
import { getFormulaByPath } from "../utils/formulas";

export function Game() {
  const { options, killBlock } = useBlocks()

  useEffect(() => {
    if(window.MathJax) {
      window.MathJax.typeset()
    }
  }, [options])

  return (
    <div className="w-full h-screen">
      <TogglePause />
      <Canvas className="bg-slate-900" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <TetrisGrid />
      </Canvas>

      <div className="flex gap-3 flex-row items-center justify-center absolute bottom-0 right-0 left-0 h-16 bg-slate-600 border-t ">
          {
            options.map(option => (
              <button key={option} onClick={() => killBlock(option)} className="bg-white rounded-xl h-8 px-4 font-semibold text-sm text-gray-800">
                { `\\(${getFormulaByPath(option)}\\)` }
              </button>
            ))
          }
      </div>
    </div>
  );
}
