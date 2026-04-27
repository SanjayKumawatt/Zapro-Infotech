import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Solutions from './Pages/Solutions'
import Company from './Pages/Company'
import ReachUs from './Pages/ReachUs'
import WebDevelopment from './Pages/WebDevelopment'
import GraphicDesign from './Pages/GraphicDesign'
import WordPressDevelopment from './Pages/WordPressDevelopment'
import WebHosting from './Pages/WebHosting'
import WebDesign from './Pages/WebDesign'
import SEO from './Pages/SEO'
import ECommerce from './Pages/Ecommerce'
import Legal from './Pages/Legal'
import MobileAppDevelopment from './Pages/MobileAppDevelopment'
// import MobileAppDevelopment from './Pages/WebDesign'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }, 
        {
          path:"/solutions",
          element:<Solutions/>
        }, 
        {
          path:"/company",
          element:<Company/>
        }, 
        {
          path:"/reach-us",
          element:<ReachUs/>
        }, 
        {
          path:"/solutions/web-development",
          element:<WebDevelopment/>
        }, 
        {
          path:"/solutions/graphic-design",
          element:<GraphicDesign/>
        }, 
        {
          path:"/solutions/wordpress-development",
          element:<WordPressDevelopment/>
        }, 
        {
          path:"/solutions/web-hosting",
          element:<WebHosting/>
        }, 
        {
          path:"/solutions/web-design",
          element:<WebDesign/>
        }, 
        {
          path:"/solutions/mobile-app-development",
          element:<MobileAppDevelopment/>
        }, 
        {
          path:"/solutions/seo",
          element:<SEO/>
        }, 
        {
          path:"/solutions/e-commerce",
          element:<ECommerce/>
        }, 
        {
          path:"/legal",
          element:<Legal/>
        }, 


      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App