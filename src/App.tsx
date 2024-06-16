import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/loader';

const Home = lazy(() => import ('./pages/home'))


const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  } />)
);

function App() {
  return <RouterProvider router={routes} />
}

export default App
