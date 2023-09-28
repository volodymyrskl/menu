import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from './App';
import reportWebVitals from './reportWebVitals';

const appRootElement: HTMLElement | null = document.getElementById("menu");
const root = createRoot(appRootElement!);

root!.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
