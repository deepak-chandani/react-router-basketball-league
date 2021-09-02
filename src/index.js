import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as utils from './helpers/utils'
import './index.css'
import App from './components/App'

function ColorfulBorder() {
  return (
    <ul className='border-container'>
      <li className='border-item' style={{ background: 'var(--red)' }} />
      <li className='border-item' style={{ background: 'var(--blue)' }} />
      <li className='border-item' style={{ background: 'var(--pink)' }} />
      <li className='border-item' style={{ background: 'var(--yellow)' }} />
      <li className='border-item' style={{ background: 'var(--aqua)' }} />
    </ul>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ColorfulBorder />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)