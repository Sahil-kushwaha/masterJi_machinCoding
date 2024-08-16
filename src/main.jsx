import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
  
} from 'react-router-dom'
import RandomUser from './pages/RandomUser.jsx'
import RandomJokes from './pages/RandomJokes.jsx'
import CatsListing from './pages/CatsListing.jsx'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
       <Route path='/' element={<App/>}>
           <Route index element={<RandomUser/>}/>
           <Route path='random-user' element={<RandomUser/>} />
           <Route path='random-jokes' element={<RandomJokes/>} />
           <Route path='cats-listing' element={<CatsListing/>} />
       </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider  router={router}/>
  </StrictMode>,
)
