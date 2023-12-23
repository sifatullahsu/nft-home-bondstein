import { Link } from 'react-router-dom'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import logo from '../assets/images/logo-black.png'

const Footer = () => {
  return (
    <div>
      <div className="container pt-20 pb-[70px]">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-2">
            <img src={logo} alt="" className="mb-[27px]" />
            <p className="mb-8 text-base text-sm">
              The world's first and largest digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
            <div className="flex space-x-4">
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Market Place</h4>
            <ul className="text-sm  font-medium text-[#3D3D3D] tracking-wide space-y-[10px]">
              <li>
                <Link to="/">All NFTs</Link>
              </li>
              <li>
                <Link to="/">New</Link>
              </li>
              <li>
                <Link to="/">Art</Link>
              </li>
              <li>
                <Link to="/">Sports</Link>
              </li>
              <li>
                <Link to="/">Utility</Link>
              </li>
              <li>
                <Link to="/">Music</Link>
              </li>
              <li>
                <Link to="/">Domain Name</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">My Account</h4>
            <ul className="text-sm  font-medium text-[#3D3D3D] tracking-wide space-y-[10px]">
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/">Favorite</Link>
              </li>
              <li>
                <Link to="/">My Collections</Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-6">
            <h4 className="text-lg font-bold">Stay in the loop</h4>
            <p className="text-sm leading-[22px] text-[#363639]">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips
              and tricks for navigating NFTs.
            </p>
          </div>
        </div>
      </div>
      <div className="container border-t border-border pt-4 pb-6">
        <p className="text-sm text-[#A4A4A4] text-center">Copyright © 2022 Avi Yansah</p>
      </div>
    </div>
  )
}

export default Footer
