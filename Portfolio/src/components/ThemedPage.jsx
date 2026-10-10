import { Link } from 'react-router-dom'
import './ThemedPage.css'

// Full-page background plus a way back home, shared by the pages under /home
function ThemedPage({ background, children }) {
  return (
    <main className="themed" style={{ backgroundImage: `url(${background})` }}>
      <Link to="/home" className="pill-link themed-back">
        ← Back
      </Link>
      {children}
    </main>
  )
}

export default ThemedPage
