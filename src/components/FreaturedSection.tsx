import NftCard2 from './NftCard2'
import SeactionH2 from './SeactionH2'

const FreaturedSection = () => {
  return (
    <div style={{ background: 'rgba(217, 224, 236, 0.20)' }}>
      <div className="container pt-[65px] pb-[98px]">
        <SeactionH2 text="Collection Featured NFTs" />
        <div className="grid grid-cols-3 gap-8 mt-[55px]">
          <NftCard2 />
          <NftCard2 />
          <NftCard2 />
        </div>
      </div>
    </div>
  )
}

export default FreaturedSection
