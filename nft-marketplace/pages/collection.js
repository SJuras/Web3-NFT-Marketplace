import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react';

import Header from '../components/Header.js';
import Dropdown from '../components/Dropdown.js';
import Footer from '../components/Footer.js';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
  <div>
    <div className="bg-black relative">
      <Head>
        <title>Collection | NFTRAFFICKER NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-50 w-full">

      {/* header */}
        <div className="py-4">
          <div className="px-2 md:px-0 flex justify-center items-center">
            <Link href="/">
              <Image
                src="/images/nftraffickerLogo.png"
                height={90}
                width={900}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* menu */}
        <Header isOpen={isOpen} toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />


        <div className="flex flex-col md:flex-row h-96 px-6 py-5 max-w-7xl mx-auto justify-center items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-center md:text-left font-Poppins text-4xl text-white font-bold drop-shadow-lg">Your one stop shop<br /> for buying, selling and minting NFTs</h2>
          </div>
          <div className="w-full md:w-1/2 p-2 drop-shadow-2xl">
            <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
              <p className="text-2xl font-bold font-Poppins pb-4">
                Collection
              </p>
              <p className="text-2xl font-bold font-Poppins pb-4">
                Marvel 'em...
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/background.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>

    {/* footer */}
    <div className="w-full bg-pink-700">
      <div className="w-full flex pt-5 max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>

  </div>
  )
}
