
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

// Explicitly clean up any existing rendering before creating a new one
createRoot(rootElement).render(<App />);

console.log("Application mounted successfully");
