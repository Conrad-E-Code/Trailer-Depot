import '../styles.css';
import Header from './Header'
import NavBar from './NavBar'
//import ReviewCard from './ReviewCard';
import Search from './Search'
import MainList from './MainList';
import SaleList from './SaleList';
import { Switch, Route } from "react-router-dom"
import ReviewList from "./ReviewList"
import {useState} from 'react'

function App() {
const [renderState, setRenderState] = useState(true)

  return (
    <div className="App">
      <Header />
      <Search />
      <NavBar renderState={renderState} setRenderState={setRenderState} />
      <Switch>
        <Route path="/reviews">
            <ReviewList />
        </Route>
        <Route path="/sales">
            <SaleList />
          </Route>
          <Route path="/">
            <MainList />
          </Route>


        </Switch>
    </div>
  )
}

export default App;
