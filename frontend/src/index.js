import React from 'react';
import { createRoot } from 'react-dom/client';
import Github_info from './components/Github_info';
import './styles/main.css'

const App = () => {
    return (
        <Github_info/>
    );
  };
  
const root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);
  