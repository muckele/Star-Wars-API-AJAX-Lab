//npm modules 
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
      <h1>Star Wars Starships</h1>
      <nav>
        <Link to="/starships">Starships</Link>
      </nav>
    </header>
  )
}

export default NavBar