import { Link } from 'react-router-dom'
import SeactionH2 from './SeactionH2'

const CreateAndSell = () => {
  return (
    <div>
      <div className="container pt-[102px] pb-[82px]">
        <div className="grid grid-cols-2 gap-10">
          <div></div>
          <div>
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
