import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Latest from './pages/Latest'
import Trending from './pages/Trending'
import Search from './pages/Search'
import './index.css'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path: '/latest',
        element: <Latest />
    },
    {
        path: '/popular',
        element: <Trending />
    },
    {
        path: '/search',
        element: <Search />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
