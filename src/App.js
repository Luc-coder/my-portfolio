import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import styles from './components/css/App.module.css'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Contato from './pages/Contato'

import SideBar from './components/layout/SideBar'

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/*' element={<Navigate to='/home' />} />
          <Route path='/home' exact={true} element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
