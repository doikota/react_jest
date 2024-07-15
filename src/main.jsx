import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header.jsx'
import { SimpleButton } from './SimpleButton.jsx'
import { SimpleCounter } from './SimpleCounter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SimpleButton name="電源"/>
    <SimpleButton name="Switch"/>
    <SimpleCounter />
    <SimpleCounter />
  </React.StrictMode>,
)
