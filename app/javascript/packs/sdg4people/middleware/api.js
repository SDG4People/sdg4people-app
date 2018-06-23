// Private API
let post = (payload) => {
  let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  return fetch('http://localhost:3000/reports', {
    body: JSON.stringify(payload),
    method: 'POST',
    credentials: "same-origin",
    headers: {
      'content-type': 'application/json',
      'X-CSRF-Token': token,
    }
  })
  .then(response => response.json())
  .catch(error => console.error('Error: ', error))
}

let get = () => {
  return fetch('http://localhost:3000/reports')
    .then(response => response.json())
    .catch(error => console.error('Error: ', error))
}
// Public API
const createReport = (reportData) => {
  post(reportData)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const getReports = (callback) => {
  get()
    .then(data => callback(data))
    .catch(error => console.log(error))
}
// Export Api
export const Api = {
  createReport,
  getReports
}
