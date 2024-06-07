import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'

const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={routes} />
}

export default App
