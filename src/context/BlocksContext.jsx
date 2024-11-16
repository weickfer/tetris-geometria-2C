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
  const nowRef = useRef()


  const uniqueFormulas = [...new Set(blocks.map(block => block.formulaId))];
  const options = useMemo(() => randomSort([
    ...uniqueFormulas, 

    // ...Object.keys(formulas).slice(0, Math.max(0, 3 - uniqueFormulas.length))
    ...formulasKeys.filter(fK => !uniqueFormulas.some(uF => fK.includes(uF))).slice(0, 3 - uniqueFormulas.length)
  ]), [blocks])

  const handleSelectFormula = () => {
    const block = getRandomFormula(difficultyMap[difficulty].formulas ?? null)
        
    setBlocks((blocks) => [...blocks, block]);
  }

  useEffect(() => handleSelectFormula(), [])


  useEffect(() => {
    let blocksInterval;
    let timerInterval;
    nowRef.current = Date.now()

    if (isPlaying) {
      blocksInterval = setInterval(handleSelectFormula, difficultyMap[difficulty].interval);
      
  
      timerInterval = setInterval(() => {
        const now = Date.now()
  
        setTimerSeconds((now - nowRef.current) / 1000)
      }, 1000)
    }

    return () => {
      clearInterval(blocksInterval);
      clearInterval(timerInterval);
    };
  }, [isPlaying]); 

  const killBlock = (formulaId) => {
    setBlocks(blocks => blocks.filter(block => block.formulaId !== formulaId))
  }

  const finishGame = () => {
    setIsPlaying(false)
  }

  const value = { blocks, options, isPlaying, setIsPlaying, killBlock, timerSeconds, finishGame };

  return (
    <BlocksContext.Provider value={value}>
      {children}
    </BlocksContext.Provider>
  );
}
