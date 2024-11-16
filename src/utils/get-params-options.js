export function getParamsOptions() {
  const params = new URLSearchParams(window.location.search);

  return {
    difficulty: params.get('difficulty'),
  }
}