import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import { BlocksProvider } from './context/BlocksContext.jsx'
import { Game } from './pages/game.jsx'
import { Playground } from './pages/playground.jsx'
import { RouterProvider } from './router.jsx'

const Tetris = () => (
  <BlocksProvider>
    <Game />
  </BlocksProvider>
)

createRoot(document.getElementById('root')).render(
  <RouterProvider />
)
