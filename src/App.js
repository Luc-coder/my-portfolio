import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './components/css/App.module.css'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

import SideBar from './components/layout/SideBar'

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
