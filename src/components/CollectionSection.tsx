import { Link } from 'react-router-dom'
import etherium from '../assets/icons/ethereum.svg'
import etherium2 from '../assets/icons/ethereum2.svg'
import f1 from '../assets/images/fe1.png'
import g1 from '../assets/images/g1.png'
import user1 from '../assets/images/user5.svg'

const CollectionSection = () => {
  return (
    <div className="bg-white">
      <div className="container py-[134px]">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9 border-r">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div>
                  <img src={f1} alt="" className="w-full inline-block" />
                </div>
                <div className="flex justify-between mt-8">
                  <div className="flex space-x-[10px]">
                    <img src={user1} alt="" className="inline-block w-12 h-12" />
                    <div>
                      <div className="text-xl font-bold mb-1">The Futr Abstr</div>
                      <div className="text-sm font-medium text-[#363639]">10 in the stock</div>
                    </div>
                  </div>
                  <div>
                    <div>Highest Bid</div>
                    <div className="space-x-[10px]">
                      <img src={etherium2} alt="" className="inline-block" />
                      <span className="font-bold text-[#3A3A3A]">0.25 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-[41px]">
                {[1, 2, 3].map(i => (
                  <div key={i} className="grid grid-cols-5 space-x-5">
                    <div className="col-span-2">
                      <img src={g1} alt="" />
                    </div>
                    <div className="col-span-3">
                      <div className="text-xl font-bold mb-1">The Futr Abstr</div>
                      <div className="flex items-center space-x-[10px]">
                        <img src={user1} alt="" className="inline-block w-9 h-9" />
                        <div className="border space-x-[5px] border-[#00AC4F] text-[#00AC4F] text-[12px] rounded-md p-2">
                          <img src={etherium} alt="" className="inline-block" />
                          <span>0.25 ETH</span>
                        </div>
                        <div className="text-[#757575] text-sm">1 of 8</div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to="/"
                          className="py-[14px] border-2 border-primary text-primary px-5 hover:bg-primary hover:text-white text-sm font-bold leading-[14px] rounded-[60px] inline-flex"
                        >
                          Place a bid
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-Integral-CF font-bold mb-[10px]">Top Collections over </h4>
            <span className="text-primary font-bold">Last 7 days</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionSection
