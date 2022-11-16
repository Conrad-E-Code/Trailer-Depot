import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
//import ReviewCard from './ReviewCard';
import Search from './Search'
import MainList from './MainList';
import SaleList from './SaleList';
import { Routes, Route } from "react-router-dom"
import NewForm from "./NewForm"
import {useState, useEffect} from 'react'
import ReviewCard from "./ReviewCard"
function App() {

  const [initialData, setInitialData] = useState([])

useEffect(() =>{
  fetch( 'http://localhost:3001/trailers')
  .then(r=> r.json())
  .then(trailerData => {setInitialData(trailerData)})

},[])

const mappedTrailers = initialData.map(trailer=>{
  return <ReviewCard key={trailer.name} price={trailer.price} forSale={trailer['for-sale']} name={trailer.name} imageAlbum={trailer['image-album']} />})
  
  
  return (
    <div className="App">
      <Header />
      <Search />
      <NavBar  />
      
      <Routes>
        <Route element={<NewForm />} path="/reviews"/>
        <Route element={<SaleList />} path="/sales"/>
        <Route element={<MainList mappedTrailers={mappedTrailers} />} path="/"/>


        </Routes>
    </div>
  )
}

export default App;
