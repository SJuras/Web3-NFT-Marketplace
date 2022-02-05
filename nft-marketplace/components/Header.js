import Link from 'next/link'

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Header({isOpen, toggle}){
  return(
    <div className="flex w-full justify-end md:justify-between flex py-5 px-4 md:px-0 max-w-7xl mx-auto">
      <div className="hidden md:flex w-full justify-between flex py-5 max-w-7xl mx-auto">
        <div className="px-6 transition duration-300 hover:scale-125 cursor-pointer">
          <Link href="/marketplace">
            <h4 className="md:text-2xl lg:text-4xl font-bold font-Poppins text-yellow-500">Marketplace</h4>
          </Link>
        </div>
        <div className="px-6 transition duration-300 hover:scale-125 cursor-pointer">
          <Link href="/mint">
            <h4 className="md:text-2xl lg:text-4xl font-bold font-Poppins text-yellow-500">Mint</h4>
          </Link>
        </div>
        <div className="px-6 transition duration-300 hover:scale-125 cursor-pointer">
          <Link href="/collection">
            <h4 className="md:text-2xl lg:text-4xl font-bold font-Poppins text-yellow-500">Collection</h4>
          </Link>
        </div>
        <div className="px-6 transition duration-300 hover:scale-125 cursor-pointer">
          <Link href="/dashboard">
            <h4 className="md:text-2xl lg:text-4xl font-bold font-Poppins text-yellow-500">Dashboard</h4>
          </Link>
        </div>
      </div>
      <button onClick={toggle} className="block md:hidden bg-pink-700 p-2 transition duration-300">
        {isOpen ? <FaTimes className="text-2xl text-yellow-500"/> : <FaBars className="text-2xl text-yellow-500" /> }
      </button>
    </div>
  );
}
