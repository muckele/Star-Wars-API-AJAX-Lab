// npm modules 
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getStarshipList } from "../../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData)
    }
    fetchStarshipList()
  }, [])
  
  if(!starshipList.length) return <h1>Loading Star Wars Starships...</h1>

  return (
    <main className="starship-list">
      <h1>Starship List</h1>
      {starshipList.map(starship =>
        <div className="link-container" key={starship.url}>
          <Link to={`/starships/${starship._id}`}>{starship.name}</Link>
        </div>
      )}
    </main>
  )
}

export default StarshipList