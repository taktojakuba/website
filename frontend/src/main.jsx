import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './gallery.jsx'
import Whoami from './whoami.jsx'
import Projects from './projects.jsx'
import Contacts from './contacts.jsx'
import './main.css'

const cursor = document.createElement('div')
cursor.className = 'cursor'
document.body.appendChild(cursor)

document.addEventListener('pointermove', (e) => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})

document.body.addEventListener('pointerover', (e) => {
  const target = e.target
  if (target instanceof HTMLElement) {
    const interactive = target.closest('a, button, input, textarea, select')
    if (interactive) {
      document.body.classList.add('interactive')
    }
  }
})

document.body.addEventListener('pointerout', (e) => {
  const target = e.target
  if (target instanceof HTMLElement) {
    const interactive = target.closest('a, button, input, textarea, select')
    if (interactive) {
      document.body.classList.remove('interactive')
    }
  }
})

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element not found')

rootEl.className = 'scanlines min-h-screen'

createRoot(rootEl).render(
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