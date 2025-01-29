import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import { quotes } from './quotes.js'

const App = () => {
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent quotes={quotes} />
    </div>
  )
}

export default App
