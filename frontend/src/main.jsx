import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './gallery.jsx'
import Whoami from './whoami.jsx'
import Projects from './projects.jsx'
import Contacts from './contacts.jsx'
import './main.css'


document.getElementById('root').className = "scanlines min-h-screen"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="border-4 m-3 p-3">
            <Whoami />
            <Gallery />
            <div className="relative flex gap-5 mx-3 my-6 border-dashed border-4 p-2">
            <Projects />
            <Contacts />
            </div>
        </div>
    </StrictMode>
)