import React, { useEffect } from 'react';
import { useBlocks } from '../context/BlocksContext';
import { getParamsOptions } from '../utils/get-params-options';
import { difficultyMap } from '../utils/difficulty-map';


export function Timer() {
  const { timerSeconds, finishGame } = useBlocks()
  const { difficulty } = getParamsOptions()
  const { timeTotal } = difficultyMap[difficulty]
  const time = Math.max(timeTotal - timerSeconds, 0)
  const minutes = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  useEffect(() => {
    if(time === 0) {
      finishGame()
    }
  }, [time])

  return (
    <div className="absolute top-2 font-mono right-2 z-50 cursor-pointer text-white">
      {`${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`}
    </div>
  );
};
