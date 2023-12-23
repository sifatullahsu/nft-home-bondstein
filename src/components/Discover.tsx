import { Link } from 'react-router-dom'
import NftCard from './NftCard'
import SeactionH2 from './SeactionH2'

const Discover = () => {
  return (
    <div className="" style={{ background: 'rgba(217, 224, 236, 0.20)' }}>
      <div className="container pt-16 pb-12 space-y-10">
        <SeactionH2 text="Discover more NFTs" />
        <div className="space-x-3">
          <Link
            to="/"
            className="py-[10px] px-5 bg-primary text-white text-sm font-bold leading-[14px] rounded-[60px] inline-flex"
          >
            All Categories
          </Link>
          {['Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto'].map((text, index) => (
            <Link
              key={index}
              to="/"
              className="py-[10px] px-5 text-sm font-bold leading-[14px] rounded-[60px] inline-flex"
              style={{ background: 'rgba(220, 220, 220, 0.20)' }}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-10">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
        <div className="text-center mt-[55px]">
          <Link
            to="/"
            className="py-5 px-10 border-2 border-primary text-primary  text-xl font-bold rounded-[50px] inline-block"
          >
            More NFTs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Discover
