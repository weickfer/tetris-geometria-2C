import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { randomSort } from '../utils/random-sort';
import { formulas, formulasKeys } from '../utils/formulas';
import { getRandomFormula } from '../utils/get-random-formula';
import { getParamsOptions } from '../utils/get-params-options';
import { difficultyMap } from '../utils/difficulty-map';
import { summaryActions, summaryReducer } from '../reducers/summary';


const BlocksContext = createContext();

export function useBlocks() {
  return useContext(BlocksContext);
}

const { difficulty } = getParamsOptions()

export function BlocksProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [timerSeconds, setTimerSeconds] = useState(0)
  // const [currentScore, setCurrentScore] = useState(0)
  const [summary, dispatch] = useReducer(summaryReducer, {
    agreements: [],
    errors: [],
    finish: false,
    score: 0,
  })
  
  const [blocks, setBlocks] = useState([]);
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
    const blockToKill = blocks.find(block => block.formulaKey === formulaKey)

    if(blockToKill) {
      setBlocks(blocks => blocks.filter(block => block.formulaKey !== formulaKey))
      dispatch({
        type: summaryActions.ADD_SCORE,
        score: 10
      })
      dispatch({
        type: summaryActions.ADD_AGREEMENT,
        formulaKey: blockToKill.formulaKey,
      })
    } else {
      dispatch({
        type: summaryActions.ADD_ERROR,
        formulaKey,
      })
      dispatch({
        type: summaryActions.REMOVE_SCORE,
        score: 5
      })
      // setCurrentScore(currentScore - 5)
    }

  }

  const blockLanded = (blockId) => {
    const block = blocks.find(block => block.id === blockId)

    if(!block) return

    const formulaKey = block.formulaKey

    dispatch({
      type: summaryActions.ADD_ERROR,
      formulaKey,
    })

    setBlocks(state => state.filter(block => block.id !== blockId))
    // setCurrentScore(currentScore - 20)
  }

  const finishGame = () => {
    setIsPlaying(false)
    setBlocks([])
    dispatch({
      type: summaryActions.FINISH_GAME,
    })
  }

  const retryGame = () => {
    dispatch({
      type: summaryActions.RESET,
    })
    setTimerSeconds(0)
    setIsPlaying(true)
  }

  const value = { blocks, options, isPlaying, setIsPlaying, retryGame, killBlock, timerSeconds, finishGame, blockLanded, summary };

  return (
    <BlocksContext.Provider value={value}>
      {children}
    </BlocksContext.Provider>
  );
}
