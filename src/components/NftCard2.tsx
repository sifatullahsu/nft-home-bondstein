import { Link } from 'react-router-dom'
import f1 from '../assets/images/fe1.png'
import f2 from '../assets/images/fe2.png'
import f3 from '../assets/images/fe3.png'
import f4 from '../assets/images/fe4.png'
import user1 from '../assets/images/user5.svg'

const NftCard2 = () => {
  return (
    <div>
      <div className="card-2 grid grid-cols-3 gap-2">
        <img src={f1} alt="" className="col-span-2 row-span-3 " />
        <img src={f2} alt="" />
        <img src={f3} alt="" />
        <img src={f4} alt="" />
      </div>
      <div className="mt-[30px]">
        <h4 className="text-xl font-bold mb-[10px]">Amazing Collection</h4>
        <div className="flex justify-between">
          <div className="space-x-[5px]">
            <img src={user1} alt="" className="inline-block" />
            <span className="text-sm font-medium">by Arkhan</span>
          </div>
          <div>
            <Link
              to="/"
              className="text-primary border border-primary py-[10px] px-5 rounded-[100px] text-[12px] font-bold"
            >
              Total 54 Items
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard2
