import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useBlocks } from '../context/BlocksContext';
import { difficultyMap } from '../utils/difficulty-map';


export function Timer() {
  const { timerSeconds, finishGame } = useBlocks()
  const [params] = useSearchParams()
  const difficulty = params.get('difficulty')
  const { timeTotal } = difficultyMap[difficulty]
  const time = Math.max(timeTotal - timerSeconds, 0)
  const minutes = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  useEffect(() => {
    if(time === 0) {
      finishGame()
    }
  }, [time])

  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
};
