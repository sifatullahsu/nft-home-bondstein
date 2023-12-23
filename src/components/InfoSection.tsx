import cardTick from '../assets/icons/card-tick.svg'
import chartSquere from '../assets/icons/chart-square.svg'
import SeactionH2 from './SeactionH2'

const InfoSection = () => {
  return (
    <div style={{ background: 'rgba(217, 224, 236, 0.20)' }} className="mb-2">
      <div className="container pt-[125px] pb-[97px]">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5">
            <SeactionH2 text="The amazing NFT art of the world here" />
          </div>
          <div className="col-span-7">
            <div className="flex">
              <div className="flex space-x-[15px]">
                <img src={cardTick} alt="" className="w-9 h-9" />
                <div>
                  <h4 className="text-xl font-bold mb-[10px]">Fast Transaction</h4>
                  <p className="text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                    imperdiet.
                  </p>
                </div>
              </div>
              <div className="flex space-x-[15px]">
                <img src={chartSquere} alt="" className="w-9 h-9" />
                <div>
                  <h4 className="text-xl font-bold mb-[10px]">Fast Transaction</h4>
                  <p className="text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                    imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
