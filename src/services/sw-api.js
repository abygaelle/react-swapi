const baseUrl = "https://swapi.dev/api/starships/"

export function getAllShips() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}