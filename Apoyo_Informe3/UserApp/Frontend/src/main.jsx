import { createRoot } from 'react-dom/client'
import { Principal } from './Principal'
import { BrowserRouter } from 'react-router-dom'
import './Styles/Form.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal />
  </BrowserRouter>,
)
