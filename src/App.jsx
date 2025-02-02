import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import { quotes } from './quotes.js'

const App = () => {
  return (
    <div className="grid-container">
      <SideBar />
      <MainContent quotes={quotes} />
      <Footer />
    </div>
  )
}

export default App
