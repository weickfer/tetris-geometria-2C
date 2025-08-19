import { Analytics } from "@vercel/analytics/react";
import { createRoot } from 'react-dom/client';

import './styles.css';

import { RouterProvider } from './router.jsx';


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider />
    <Analytics />
  </>
)
