export default function ThemeToggle() {
  const toggle = () => {
    localStorage.theme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light'
  }
  return <button onClick={toggle} className="border-2 p-1 left-0 top-0">
    Toggle theme
  </button>
}