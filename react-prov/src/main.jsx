import React from 'react'
import ReactDOM from 'react-dom/client'
import Bostad from './components/bostadsrätt'
import Villa from './components/villa'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bostad />
    <br/>
    <Villa />
  </React.StrictMode>,
)
