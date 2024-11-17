import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { randomSort } from '../utils/random-sort';
import { formulas, formulasKeys } from '../utils/formulas';
import { getRandomFormula } from '../utils/get-random-formula';
import { getParamsOptions } from '../utils/get-params-options';
import { difficultyMap } from '../utils/difficulty-map';


const BlocksContext = createContext();

export function useBlocks() {
  return useContext(BlocksContext);
}

const { difficulty } = getParamsOptions()

export function BlocksProvider({ children }) {
  const [blocks, setBlocks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  const blocksFormulas = [...new Set(blocks.map(block => block.formulaKey))];
  const options = useMemo(() => randomSort([
    ...blocksFormulas, 

    ...randomSort(formulasKeys)
      .filter(formulaKey => 
        !blocksFormulas.some(
          blockFormula => formulaKey.includes(blockFormula)
        )
      ).slice(
        0, 
        Math.max(3 - blocksFormulas.length, 0)
      )
  ]), [blocks])

  const handleSelectFormula = () => {
    const block = getRandomFormula(difficultyMap[difficulty].formulas ?? null)
        
    setBlocks((blocks) => [...blocks, block]);
  }

  useEffect(() => handleSelectFormula(), [])


  useEffect(() => {
    let blocksInterval;
    let timerInterval;

    if (isPlaying) {
      blocksInterval = setInterval(handleSelectFormula, difficultyMap[difficulty].interval);
      
  
      timerInterval = setInterval(() => {
        setTimerSeconds(timerSeconds => timerSeconds + 1)
      }, 1000)
    }

    return () => {
      clearInterval(blocksInterval);
      clearInterval(timerInterval);
    };
  }, [isPlaying]); 

  const killBlock = (formulaKey) => {
    const blockExists = blocks.findIndex(block => block.formulaKey === formulaKey)

    if(blockExists !== -1) {
      setBlocks(blocks => blocks.filter(block => block.formulaKey !== formulaKey))
      setCurrentScore(currentScore + 10)
    } else {
      setCurrentScore(currentScore - 5)
    }

  }

  const finishGame = () => {
    setIsPlaying(false)
    setBlocks([])
  }

  const value = { blocks, options, isPlaying, setIsPlaying, killBlock, timerSeconds, finishGame, currentScore };

  return (
    <BlocksContext.Provider value={value}>
      {children}
    </BlocksContext.Provider>
  );
}
