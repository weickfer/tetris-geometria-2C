export const difficultyMap = {
  easy: {
    gravity: 0.015,
    interval: 10 * 1000,
    formulas: ['area', 'perimeter', 'circumference'],
    timeTotal: 60 * 3,
  },
  medium: {
    gravity: 0.025,
    interval: 6 * 1000,
    timeTotal: 60 * 2,
    formulas: '*',
  }, 
  hard: {
    gravity: 0.04,
    interval: 3 * 1000,
    timeTotal: 60 * 1,
    formulas: '*',
  }
}