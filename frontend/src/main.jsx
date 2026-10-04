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
  if (!(target instanceof HTMLElement)) return

  if (target.closest('img')) {
    document.body.classList.add('img-hover')
    document.body.classList.remove('interactive')
    return
  }

  if (target.closest('a, button, input, textarea, select')) {
    document.body.classList.add('interactive')
    document.body.classList.remove('img-hover')
  }
})

document.body.addEventListener('pointerout', (e) => {
  const target = e.target
  if (!(target instanceof HTMLElement)) return

  if (target.closest('img') || target.closest('a, button, input, textarea, select')) {
    const related = e.relatedTarget
    if (!(related instanceof HTMLElement)) {
      document.body.classList.remove('interactive')
      document.body.classList.remove('img-hover')
      return
    }

    if (!related.closest('img') && !related.closest('a, button, input, textarea, select')) {
      document.body.classList.remove('interactive')
      document.body.classList.remove('img-hover')
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