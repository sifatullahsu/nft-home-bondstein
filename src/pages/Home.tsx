import CollectionSection from '../components/CollectionSection'
import CreateAndSell from '../components/CreateAndSell'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import FreaturedSection from '../components/FreaturedSection'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'

const Home = () => {
  return (
    <>
      <Header />
      <InfoSection />
      <CollectionSection />
      <FreaturedSection />
      <CreateAndSell />
      <Discover />
      <Footer />
    </>
  )
}

export default Home
