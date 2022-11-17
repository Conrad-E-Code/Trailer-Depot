import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
import Search from './Search'
import MainList from './MainList';
import { Routes, Route } from "react-router-dom"
import NewForm from "./NewForm"
import {useEffect, useState} from 'react'
import ReviewPage from "./ReviewPage"
import BuildList from "./BuildList"
import PackageList from './PackageList';
import BuildForm from './BuildForm';

function App() {

const [trailers, setTrailers] = useState([])
const  trailersFS = trailers.filter((trailer) => { return trailer["for_sale"] === true})
const  trailersFR = trailers.filter((trailer) => { return trailer["for_rent"] === true})
const [search, setSearch] = useState('')
const [builds, setBuilds] = useState([])

useEffect(() => {
fetch("http://localhost:3001/builds")
.then(r => r.json())
.then((buildsData) => setBuilds(buildsData))
}, [])

useEffect(() => {

  fetch('http://localhost:3001/trailers')
  .then((r) => r.json())
  .then(setTrailers)

}, [])


function filterTrailers() {
  return trailers.filter((trailer) => {
    return trailer.name.includes(search)
  })
}

function handleDelete(id) {
  console.log(id)

  const trailersminusOne = trailers.filter((trailer) => trailer.id !== id)
  console.log(trailersminusOne)
  console.log(trailers)
  const configObj = {
      method:"DELETE",
      headers: {"content-type": "application/json"}
  }
fetch(`http://localhost:3001/trailers/${id}`, configObj)
.then(setTrailers(trailersminusOne)
)
}  
  
  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch}/>
      <NavBar />
      <Routes>
        <Route element={<BuildList builds={builds}/>} path="/builds"></Route>
        <Route element={<PackageList/>} path="/packages"></Route>
        <Route element={<NewForm trailers={trailers} setTrailers={setTrailers} />} path="/trailers/new"/>
        <Route element={<MainList handleDelete={handleDelete} trailers={trailersFS} />} path="/sales"/>
        <Route element={<MainList handleDelete={handleDelete} trailers={trailersFR} />} path="/rent"/>
        <Route element={<MainList handleDelete={handleDelete} trailers={filterTrailers()}/>} path="/trailers"/>
        <Route element={<MainList handleDelete={handleDelete} trailers={filterTrailers()}/>} path="/"/>
        <Route element={<ReviewPage />} path="/trailers/:id/details"/>
        <Route element={<BuildForm builds={builds} setBuilds={setBuilds} />} path="/builds/new"></Route>
      </Routes>
    </div>
  )
}

export default App;
