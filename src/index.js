import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Recipes } from './components/Recipes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Recipes />
  </React.StrictMode>
)
