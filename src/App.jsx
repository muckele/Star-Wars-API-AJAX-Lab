//npm modules 
import { Route, Routes } from "react-router-dom"

// components 
import NavBar from "./components/NavBar/NavBar"

//Pages
import StarshipList from "./StarshipList/Starship"
import StarshipDetails from "./StarshipDetails/StarshipDetails"

// css
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:starshipId" element={<StarshipDetails />} />
      </Routes>
    </>

  )
}

export default App
