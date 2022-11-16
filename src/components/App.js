import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
import Search from './Search'
import MainList from './MainList';
import SaleList from './SaleList';
import { Routes, Route } from "react-router-dom"
import NewForm from "./NewForm"
import {useEffect, useState} from 'react'

function App() {
const [trailers, setTrailers] = useState([])

const  trailersFS = trailers.filter((trailer) => { return trailer["for_sale"] === true})
const  trailersFR = trailers.filter((trailer) => { return trailer["for_rent"] === true})
useEffect(() => {

  fetch('http://localhost:3001/trailers')
  .then((r) => r.json())
  .then(setTrailers)

}, [])
  
  
  return (
    <div className="App">
      <Header />
      <Search />
      <NavBar />
      <Routes>
        <Route element={<NewForm />} path="/trailers/new"/>
        <Route element={<MainList trailers={trailersFS} />} path="/sales"/>
        <Route element={<MainList trailers={trailersFR} />} path="/rent"/>
        <Route element={<MainList trailers={trailers}/>} path="/"/>
      </Routes>
    </div>
  )
}

export default App;
