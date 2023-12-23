import { Link } from 'react-router-dom'
import ethereum from '../assets/icons/ethereum.svg'
import img1 from '../assets/images/image 1.png'
import user1 from '../assets/images/user1.svg'
import user2 from '../assets/images/user2.svg'
import user3 from '../assets/images/user3.svg'
import user4 from '../assets/images/user4.svg'

const NftCard = () => {
  return (
    <div
      className="p-[11px] bg-white rounded-[13px] border"
      style={{
        border: '1.097px solid rgba(242, 242, 242, 0.50)'
      }}
    >
      <img src={img1} alt="" className="rounded-xl" />
      <div className="px-4 relative">
        <div className="flex -space-x-3 absolute -top-11">
          <img src={user4} alt="" />
          <img src={user3} alt="" />
          <img src={user1} alt="" />
          <img src={user2} alt="" />
        </div>
        <h4 className="text-xl font-bold mt-[22px] mb-4">This NFT</h4>
        <div className="flex justify-between mb-5">
          <div className="text-[#00AC4F] text-[11px] leading-3 font-bold space-x-[6px]">
            <img src={ethereum} alt="" className="inline" />
            <span>0.25 ETH</span>
          </div>
          <span className="text-[#838383] text-[13px] font-medium">1 of 321</span>
        </div>
        <div className="border-t border-[#F4F4F4] pt-[10px] flex justify-between ">
          <Link
            to="/"
            className="text-[#5539A8] bg-[#F5F5F5] px-[10px] py-[2px] rounded-[100px] text-[10px] leading-6 font-bold"
          >
            3h 50m 2s left
          </Link>
          <Link
            to="/"
            className="text-[#5539A8] py-[2px] inline-block rounded-[100px] text-[15px] leading-6 font-medium"
          >
            Place a bid
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NftCard
