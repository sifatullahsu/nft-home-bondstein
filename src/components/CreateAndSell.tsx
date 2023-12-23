import { Link } from 'react-router-dom'
import sec1 from '../assets/images/sec1.png'
import SeactionH2 from './SeactionH2'

const CreateAndSell = () => {
  return (
    <div>
      <div className="container pt-[102px] pb-[82px]">
        <div className="flex items-center gap-10">
          <div className="basis-1/2">
            <img src={sec1} alt="" />
          </div>
          <div className="basis-1/2">
            <div className="max-w-xs">
              <SeactionH2 text="Create and sell your NFTs" />
            </div>
            <p className="text-lg text-[#636363] mt-10 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a
              pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
            </p>
            <Link
              to="/"
              className="py-5  px-10 bg-primary text-white text-xl font-bold  rounded-[60px] inline-block"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAndSell
