export const Backend = {
  fetchMarkers,
  saveMarkers
}

function fetchMarkers () {
  return JSON.parse(localStorage.getItem('locations')) ?? []
}

function saveMarkers (markers) {
  localStorage.setItem('locations', JSON.stringify(markers))
}
