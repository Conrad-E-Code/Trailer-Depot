import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
//import ReviewCard from './ReviewCard';
import Search from './Search'
import MainList from './MainList';
import { Routes, Route } from "react-router-dom"
import ReviewList from "./ReviewList"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Search />
      <Routes>
        <Route path="/reviews">
            <ReviewList />
        </Route>
          <Route path="/">
            <MainList />
          </Route>

        </Routes>
    </div>
  )
}

export default App;
