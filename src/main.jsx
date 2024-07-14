import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleButton } from './SimpleButton.jsx'
import { SimpleCounter } from './SimpleCounter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleButton />
    <SimpleCounter />
  </React.StrictMode>,
)
