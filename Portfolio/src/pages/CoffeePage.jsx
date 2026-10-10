import MessagePage from '../components/MessagePage.jsx'
import background from '../../background_assets/coffee.png'
import photo from '../../background_assets/coffe_brownie.jpeg'

function CoffeePage() {
  return (
    <MessagePage
      background={background}
      heading="Coffee addict"
      photo={photo}
      photoAlt="The two of us having coffee together"
    >
      <p>
        My coffee girly, ever since we have been together I have been competing
        with this evil entity "coffee" for your love, but somewhere in the
        middle of the battle I decided it would be better to join hands with
        it, coz coffee se mai haar hi jaata XD.
      </p>
      <p>
        As someone who never drank coffee, to going to different coffee places
        and having a favourite coffee (vietnamese brew), I came a long way, but
        I came here coz of you. Mai aur kya hi krta, har baar coffee peeta hu
        toh aapki yaad aati hai, even the aroma of coffee and coffee places
        remind me of you.
      </p>
      <p>
        I love getting coffee for you, every coffee is like a sign of me saying
        I'm there with you. Honestly I want to be what coffee is to you:
        something to look forward to, something you get happy about, something
        you associate sweetness with, and bhyi I won't ever understand ki
        coffee me no sugar ke baad cheesecake kon khata haiiii XD. Wishing a
        lifetime of my coffee cup next to yours, I love you a billionnn
      </p>
    </MessagePage>
  )
}

export default CoffeePage
