import Hero from '../Components/Hero/Hero'
import Places from '../Components/Places/Places'
import Experiences from '../Components/Experiences/Experiences'
import Discover from '../Components/Discover/Discover'
import Explore from '../Components/Explore/Explore'
import Conditions from '../Components/Conditions/Conditions'


function Home() {
  return (
    <div>
      <Hero />
      <Conditions />
        <Places />
        <Experiences />
        <Discover />
        {/* <Explore /> */}
    </div>
  )
}

export default Home
