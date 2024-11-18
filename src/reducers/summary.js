export const summaryActions = {
  ADD_AGREEMENT: "ADD_AGREEMENT",
  ADD_ERROR: "ADD_ERROR",
  FINISH_GAME: "FINISH_GAME",
  ADD_SCORE: "ADD_SCORE",
  REMOVE_SCORE: "REMOVE_SCORE",
}

export function summaryReducer(state, action) {
  switch (action.type) {
    case summaryActions.ADD_AGREEMENT:
      return {
        ...state,
        agreements: [...state.agreements, action.formulaKey],
      }
    case summaryActions.ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.formulaKey],
      }
    case summaryActions.FINISH_GAME:
      return {
        ...state,
        finish: true
      }
    case summaryActions.RESET:
      return {
        finish: false,
        agreements: [],
        errors: [],
        score: 0,
      }
    case summaryActions.ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score,
      }
    case summaryActions.REMOVE_SCORE:
      return {
        ...state,
        score: state.score - action.score,
      }
    default:
      return state
  }
}