import { Link } from 'react-router-dom'
import { VERSIONS } from '../versions.js'
import './HomePage.css'

function HomePage() {
  return (
    <main className="home">
      <Link to="/final" className="pill-link home-next">
        Next →
      </Link>

      <p className="home-message">
        I knew ittt, I love you more babyyyyy, I am so lucky to have you in my
        life. You mean the world to me. Talking to you brightens my day,
        thinking of you gives me a warmth I can't describe in words. I love you
        and every version of you. You might be thinking versions? Yes, versions,
        and below is just a glimpse of the different ways I see you.
      </p>

      <div className="home-tiles">
        {VERSIONS.map((version) => (
          <Link key={version.path} to={version.path} className="home-tile">
            {version.name}
          </Link>
        ))}
      </div>
    </main>
  )
}

export default HomePage
