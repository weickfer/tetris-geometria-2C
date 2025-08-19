import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen w-full flex items-center justify-center px-4 py-2">
      <header className="absolute top-4 left-0 w-full flex justify-center pointer-events-none select-none">
        <span className="bg-stone-900/80 px-4 py-1 rounded-full text-xs text-stone-400 font-light shadow-sm pointer-events-auto">
          desenvolvido por <a href="https://instagram.com/weickfer" target="_blank" className="underline font-semibold text-green-400">@weickfer</a>
        </span>
      </header>

      <main className="flex flex-col gap-6 items-center bg-stone-800/90 px-6 py-8 rounded-2xl shadow-2xl max-w-md w-full border border-stone-700">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-center text-green-400 drop-shadow-lg">
          Bem-vindo ao GeoTris!
        </h1>
        <h2 className="text-xl font-semibold text-stone-200 mb-1">Escolha o modo de jogo:</h2>

        <section className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Link
              className="flex-1 bg-green-600 hover:bg-green-700 transition-colors text-center font-bold tracking-widest py-3 rounded-lg shadow-md text-lg"
              to="/game?difficulty=easy"
            >
              Fácil
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 transition-colors text-center font-bold tracking-widest py-3 rounded-lg shadow-md text-lg"
              to="/game?difficulty=medium"
            >
              Médio
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="flex-1 bg-red-600 hover:bg-red-700 transition-colors text-center font-bold tracking-widest py-3 rounded-lg shadow-md text-lg"
              to="/game?difficulty=hard"
            >
              Difícil
            </Link>
          </div>
        </section>

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-stone-300 text-sm font-light tracking-wide text-center">
            <span className="font-semibold text-white">Tempo Cronometrado:</span> Resolva o máximo de fórmulas possível antes do tempo acabar!
          </p>
          <Link
            to="/formulas"
            className="mt-2 text-xs text-blue-300 hover:underline hover:text-blue-400 transition"
          >
            Ver todas as fórmulas
          </Link>
        </div>
      </main>
    </div>
  )
}