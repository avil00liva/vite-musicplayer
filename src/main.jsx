import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App'
import { DataContext } from './context/DataContext'
import './index.css'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <DataContext>
    <App />
  </DataContext>
)
