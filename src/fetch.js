export default function fetchData() {
  return fetch('/fake-api.json')
  .then(response => response.json())
  // the API response is nested
  .then(response => response.data)
}
