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
import CorePlatform from './Pages/CorePlatform'
import AIInfrastructure from './Pages/AiInfrastructure'
import CloudPlatform from './Pages/CloudPlatform'
import DeveloperTools from './Pages/Developertool'
import WorkflowsPlatform from './Pages/WorkFlow'
import SecurityPlatform from './Pages/SecurityPlatform'
import PlatformHub from './Pages/Platform'
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
        // {
        //   path:"/solutions",
        //   element:<Solutions/>
        // }, 
        {
          path:"/company",
          element:<Company/>
        }, 
        {
          path:"/reach-us",
          element:<ReachUs/>
        }, 
        
        {
          path:"/platform/core",
          element:<CorePlatform/>
        }, 
        
        {
          path:"/platform/ai-infrastructure",
          element:<AIInfrastructure/>
        }, 
        {
          path:"/platform/cloud",
          element:<CloudPlatform/>
        }, 
        {
          path:"/platform/developer-tools",
          element:<DeveloperTools/>
        }, 
        {
          path:"/platform/workflows",
          element:<WorkflowsPlatform/>
        }, 
        {
          path:"/platform/security",
          element:<SecurityPlatform/>
        }, 
        {
          path:"/platform",
          element:<PlatformHub/>
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