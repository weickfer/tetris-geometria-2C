import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { shapes } from '../utils/get-geometry';
import { randomSort } from '../utils/random-sort';
import { formulas, formulasKeys } from '../utils/formulas';
import { config } from '../utils/config';


const BlocksContext = createContext();

export function useBlocks() {
  return useContext(BlocksContext);
}

export function BlocksProvider({ children }) {
  const [blocks, setBlocks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true)
  const uniqueFormulas = [...new Set(blocks.map(block => block.formulaId))];
  const options = randomSort([
    ...uniqueFormulas, 

    ...Object.keys(formulas).slice(0, Math.max(0, 3 - uniqueFormulas.length))
  ])

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        const randomShape = formulasKeys[Math.floor(Math.random() * formulasKeys.length)];
        const shapeFormulas = Object.keys(formulas[randomShape])
        const selectedFormula = shapeFormulas[Math.floor(Math.random() * shapeFormulas.length)]
        const formulaId = `${randomShape}.${selectedFormula}`
  
        const newBlock = {
          id: `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
          formulaId,
          shape: randomShape, 
          selectedFormula,
          position: [(Math.random() * 6) - 3, 8], // Posição inicial aleatória
        };
        
        setBlocks((blocks) => [...blocks, newBlock]);
      }, 1000 * config.dropInterval); // A cada 1000ms (1 segundo)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]); 

  const handleSettle = (position) => {
    // Quando um bloco "para", ele é movido para `settledBlocks`
    // setSettledBlocks((prev) => [...prev, position]);
    setBlocks((prev) => prev.slice(1)); // Remove o bloco atual
  };

  const killBlock = (formulaId) => {
    setBlocks(blocks => blocks.filter(block => block.formulaId !== formulaId))
  }

  const value = { blocks, handleSettle, options, isPlaying, setIsPlaying, killBlock };

  return (
    <BlocksContext.Provider value={value}>
      {children}
    </BlocksContext.Provider>
  );
}
