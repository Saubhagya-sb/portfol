import ThemedPage from './ThemedPage.jsx'
import './MessagePage.css'

// Shared layout for the version pages: heading, photo on the left, message tile on the right
function MessagePage({ background, heading, photo, photoAlt, children }) {
  return (
    <ThemedPage background={background}>
      <div className="message-page">
        <h1 className="message-page-heading">{heading}</h1>

        <div className="message-page-content">
          <img className="message-page-photo" src={photo} alt={photoAlt} />
          <div className="message-page-text">{children}</div>
        </div>
      </div>
    </ThemedPage>
  )
}

export default MessagePage
