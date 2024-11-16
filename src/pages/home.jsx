export function Home() {
  return (
    <div className="bg-slate-900 text-white px-4 py-2 w-full h-screen flex items-center justify-center">
      <main className="flex flex-col gap-4 items-center bg-stone-800 px-2 py-4 py1 rounded-xl max-w-screen-sm w-full">
        <h2 className="text-2xl font-medium">Modos de Jogo</h2>

        <p className="font-light tracking-widest">Tempo Cronometrado</p>

        <a className="block w-full max-w-64 bg-green-600 text-center text-bold tracking-[0.5em]" href="/game?difficulty=easy">Fácil</a>
        <a className="block w-full max-w-64 bg-yellow-600 text-center text-bold tracking-[0.5em]" href="/game?difficulty=medium">Médio</a>
        <a className="block w-full max-w-64 bg-red-600 text-center text-bold tracking-[0.5em]" href="/game?difficulty=hard">Difícil</a>
      </main>
    </div>
  )
}