import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter ([{
  path: '/',
  element: <Layout />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This component cannot be used directly as we have used react router in this project --> <App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
