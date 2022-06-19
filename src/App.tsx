import {Routes, Route} from 'react-router-dom'
import React from 'react'
import App2 from 'app2/App2'
function App() {
  return (
    <div className="App">
      <React.Suspense fallback="...loading">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>Home</p>
              </div>
            }
          />
          <Route
            path="/app2/about"
            element={
              <div>
                <p>Home</p>
              </div>
            }
          />
          <Route path="/contact">
            {' '}
            <App2 />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App
