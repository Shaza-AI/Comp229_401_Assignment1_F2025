import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'
import './App.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App
