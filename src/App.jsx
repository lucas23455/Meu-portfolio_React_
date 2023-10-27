import MainContents from './components/MainContent'
import Sidebar from './components/sidebar'

import './styles/components/app.sass'

function App() {
 
  return (
    <div id="portfolio">
      <h1>Portifolio</h1>
      <Sidebar />
      <MainContents/>
  </div>
  )
}

export default App
