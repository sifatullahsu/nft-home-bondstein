import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="border-b border-border">
      <div className="container">
        <div className="flex justify-between items-center pt-[31px] pb-[28px]">
          <div className="flex space-x-[66px]">
            <img src={logo} alt="" />
            <ul className="flex font font-medium tracking-wide space-x-[47px]">
              <li>
                <Link to="/">Marketplace</Link>
              </li>
              <li>
                <Link to="/">Resource</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
          <div className="space-x-5">
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] h-[50px] rounded-[100px] border border-border py-[15px] px-[30px]"
            />
            <Link
              to="/"
              className="py-[18px] px-[40px] bg-primary text-white text-sm font-bold leading-[14px] rounded-[60px] inline-flex"
            >
              Upload
            </Link>
            <Link
              to="/"
              className="py-[16px] px-[22px] border-2 border-primary text-primary  text-sm font-bold leading-[14px] rounded-[60px] inline-flex"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
