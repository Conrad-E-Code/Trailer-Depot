import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
//import ReviewCard from './ReviewCard';
import Search from './Search'
import MainList from './MainList';
import SaleList from './SaleList';
import { Routes, Route } from "react-router-dom"
import NewForm from "./NewForm"
import {useEffect, useState} from 'react'

function App() {
const [trailers, setTrailers] = useState([])

useEffect(() => {

  fetch('http://localhost:3000/trailers')
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
        <Route element={<SaleList />} path="/sales"/>
        <Route element={<MainList trailers={trailers}/>} path="/"/>


        </Routes>
    </div>
  )
}

export default App;
