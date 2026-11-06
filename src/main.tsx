import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadAllImages } from './utils/imagePreloader';

// Lance le préchargement immédiat de tous les médias en arrière-plan
preloadAllImages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

