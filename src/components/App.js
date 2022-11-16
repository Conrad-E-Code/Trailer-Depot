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
const [search, setSearch] = useState('')

useEffect(() => {

  fetch('http://localhost:3000/trailers')
  .then((r) => r.json())
  .then(setTrailers)

}, [])

function filterTrailers() {
  return trailers.filter((trailer) => {
    return trailer.name.includes(search)
  })
}
  
  
  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch}/>
      <NavBar />
      <Routes>
        <Route element={<NewForm trailers={trailers} setTrailers={setTrailers} />} path="/trailers/new"/>
        <Route element={<MainList trailers={trailersFS} />} path="/sales"/>
        <Route element={<MainList trailers={trailersFR} />} path="/rent"/>
        <Route element={<MainList trailers={filterTrailers()}/>} path="/"/>
      </Routes>
    </div>
  )
}

export default App;
