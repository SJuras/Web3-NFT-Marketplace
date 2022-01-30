import Link from 'next/link'

import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer className="w-full p-4 bg-pink-700">
      <div className="w-full flex flex-col md:flex-row justify-center mb-6">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-white font-Massedi text-2xl">NFTRAFFICKER!</h2>
          <p className="w-3/4 text-white font-Poppins mb-4">Your alternative NFT marketplace</p>
          <ul>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/privacy">Privacy Policy</Link></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-center mb-4 md:mb-0">
          <h3 className="text-white text-xl font-bold font-Poppins mb-2">Navigation</h3>
          <ul>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/">Home</Link></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/marketplace">Marketplace</Link></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/mint">Mint</Link></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/collection">Collection</Link></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-right mb-4 md:mb-0">
          <h3 className="text-white text-xl font-bold font-Poppins mb-2">Useful Links</h3>
          <ul>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><a href="https://metamask.io/">MetaMask.io</a></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><a href="https://ethereum.org/en/">Ethereum.org</a></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><a href="https://ethereum.org/en/nft/">What is an NFT?</a></li>
            <li className="text-white text-lg transition duration-300 hover:text-yellow-500"><a href="https://polygon.technology/">Polygon</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="w-1/2">
          <p className="text-white text-Poppins">&copy; nftrafficker! 2022</p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-left md:text-right text-white text-Poppins">Created with <span><FaHeart className="inline" /></span> by: Sarif-Design</p>
        </div>
      </div>
    </footer>
  );
}
