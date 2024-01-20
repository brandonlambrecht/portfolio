import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './components/home.jsx'
import ProjectPage from './components/project.jsx'
import ContactPage from './components/contact.jsx'
import ResumePage from './components/resume.jsx'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>Err</h1>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/projects',
                element: <ProjectPage/>,
            },
            {
                path: '/contact',
                element: <ContactPage/>,
            },
            {
                path: '/resume',
                element: <ResumePage/>,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
