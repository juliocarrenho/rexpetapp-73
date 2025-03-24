
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a DOM element to render to
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Apply full-width styling to root element
rootElement.style.width = '100%';
rootElement.style.maxWidth = 'none';
rootElement.style.padding = '0';

createRoot(rootElement).render(<App />);
