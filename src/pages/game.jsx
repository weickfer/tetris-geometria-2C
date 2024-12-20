import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Board } from "../components/board";
import GameSummaryModal from "../components/game-summary-modal";
import { TetrisGrid } from "../components/tetris-grid";
import { TogglePause } from "../components/toggle-pause";
import { useBlocks } from "../context/BlocksContext";
import { getFormulaByPath } from "../utils/formulas";
import { BonusGame } from "../components/bonus";

export function Game() {
  const { options, killBlock, summary: manager, retryGame } = useBlocks()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(window.MathJax) {
      window.MathJax.typeset()
    }
  }, [options, manager.agreements, manager.errors])
  
  return (
    <div className="w-full h-screen overflow-y-hidden">
      {
        manager.finish && (
          <GameSummaryModal 
            agreements={manager.agreements}
            errors={manager.errors}
            onRetry={retryGame}
            score={manager.score}
            onBackToHome={() => navigate('/')}
          />
        )
      }

      {
        manager.bonusGame && (
          <BonusGame
            data={manager.bonusGame}
          />
        )
      }

      <TogglePause />
      <Board />
      {/* <GoToFormulas /> */}
      <Canvas className="bg-slate-900" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <TetrisGrid />
      </Canvas>

      <div className="overflow-x-auto flex gap-3 flex-row items-center justify-center absolute bottom-0 right-0 left-0 h-16 bg-slate-600 border-t ">
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
