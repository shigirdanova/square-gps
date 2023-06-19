export const LocalStorage = {
  fetchMarkers,
  saveMarkers,
  deleteMarker
}

function fetchMarkers () {
  return JSON.parse(localStorage.getItem('locations')) ?? []
}

function saveMarkers (markers) {
  localStorage.setItem('locations', JSON.stringify(markers))
}

function deleteMarker (id) {
  const markers = fetchMarkers()
  markers.splice(id, 1)
  saveMarkers(markers)
}
