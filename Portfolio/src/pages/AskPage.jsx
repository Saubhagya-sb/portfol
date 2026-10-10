import { useEffect, useRef, useState } from 'react'
import noGif from '../../background_assets/no_gif.gif'
import yesGif from '../../background_assets/yes_gif.gif'
import './AskPage.css'

// How far the No button travels around the Yes button on each hover
const STEP_DEG = 60
const GIF_DURATION_MS = 2000

const REACTIONS = {
  no: { gif: noGif, message: 'Really no?' },
  yes: { gif: yesGif, message: 'I knew itt !!!!!' },
}

function AskPage({ onYes }) {
  // null until the first hover, so No starts out sitting next to Yes
  const [angle, setAngle] = useState(null)
  // Kept after hiding so the gif doesn't swap out mid fade
  const [reaction, setReaction] = useState('no')
  const [showGif, setShowGif] = useState(false)
  const hideTimer = useRef(null)

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  // Both buttons show their gif and message the same way, for the same time
  const react = (kind) => {
    setReaction(kind)
    setShowGif(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowGif(false), GIF_DURATION_MS)
  }

  const dodge = () => {
    setAngle((a) => (a === null ? STEP_DEG : a + STEP_DEG))
    react('no')
  }

  const moved = angle !== null
  const rad = ((angle ?? 0) * Math.PI) / 180
  const { gif, message } = REACTIONS[reaction]

  return (
    <main className="ask">
      <div className={`ask-reaction${showGif ? ' is-visible' : ''}`} aria-live="polite">
        <img src={gif} alt="" />
        <p>{message}</p>
      </div>

      <h1 className="ask-question">Do you love me?</h1>

      <div className="ask-buttons">
        <button
          type="button"
          className="ask-btn ask-yes"
          onPointerEnter={() => react('yes')}
          onFocus={() => react('yes')}
          onClick={onYes}
        >
          Yes
        </button>
        <button
          type="button"
          className={`ask-btn ask-no${moved ? ' is-moved' : ''}`}
          style={{ '--x': Math.cos(rad), '--y': Math.sin(rad) }}
          onPointerEnter={dodge}
          onFocus={dodge}
          onClick={(e) => e.preventDefault()}
        >
          No
        </button>
      </div>
    </main>
  )
}

export default AskPage
