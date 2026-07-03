import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This is a single-page site where section links resolve to clean paths
// (e.g. /contact) instead of #hash anchors. Reloading should always land
// back on the home section rather than resuming wherever the URL points.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/')
}
window.scrollTo(0, 0)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
