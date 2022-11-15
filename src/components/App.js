import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
//import ReviewCard from './ReviewCard';
import Search from './Search'
import MainList from './MainList';
import SaleList from './SaleList';
import { Routes, Route } from "react-router-dom"
import ReviewList from "./ReviewList"
import {useState} from 'react'

function App() {
const [renderState, setRenderState] = useState(true)

  return (
    <div className="App">
      <Header />
      <Search />
      <NavBar renderState={renderState} setRenderState={setRenderState} />
      <Routes>
        <Route element={<ReviewList />} path="/reviews"/>
        <Route element={<SaleList />} path="/sales"/>
        <Route element={<MainList />} path="/"/>


        </Routes>
    </div>
  )
}

export default App;
