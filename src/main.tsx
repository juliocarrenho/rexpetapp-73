
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add more debugging information
console.log("Starting application with base path:", document.baseURI);
console.log("Current location:", window.location.href);

// Make sure we have a DOM element to render to
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Failed to find the root element");
}

// Apply full-width styling to root element
rootElement.style.width = '100%';
rootElement.style.maxWidth = 'none';
rootElement.style.padding = '0';

// Explicitly clean up any existing rendering before creating a new one
try {
  console.log("Attempting to render application...");
  createRoot(rootElement).render(<App />);
  console.log("Application mounted successfully with basename: /rexpetapp/");
} catch (error) {
  console.error("Error rendering application:", error);
}
