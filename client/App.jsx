import React from 'react'
import {Routes, Route, Link, Router} from 'react-router-dom'
import fetchData1 from './fetchData1'
import fetchData2 from './fetchData2'
import fetchData3 from './fetchData3'
import fetchData4 from './fetchData4'
import contextApi from './contextApi'
const App = () => {

  return (
    <div>
  <Router>
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/about'>About</Link>
            <Link to= {`/user/${user._id}`}></Link>
        </nav>
      <Routes>
        <Route path='/' element={<fetchData1/>} />
        <Route path='/about' element={<fetchData2/>}/>
        <Route path='/*' element={<h1>path not found</h1>} />

      </Routes>
      </Router>
    </div>
  )
}

export default App
