const baseUrl = 'https://swapi.dev/api/'

export async function getStarshipList() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
} 

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/api/starships/${starships/:id/}`)
  return res.json()
} 