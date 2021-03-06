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
        <title>Privacy Policy | NFTRAFFICKER NFT Marketplace</title>
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
          <div className="w-full md:w-2/3">
            <h2 className="text-center md:text-left font-Poppins text-4xl text-white font-bold drop-shadow-lg">Privacy Policy</h2>
          </div>
          <div className="w-full md:w-1/3 p-2 drop-shadow-2xl">
            <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
              <p className="text-2xl font-bold font-Poppins pb-4">
                Privacy Policy
              </p>
              <p className="text-2xl font-bold font-Poppins pb-4">
                Buy 'em now!'
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


    {/* PRIVACY section */}
    <div className="w-full bg-blue-300">
      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <p className="text-xl font-Poppins pb-4">
              Sarif-Design d/b/a Nftrafficker! (???Nftrafficker!,??? ???we???, ???us???, or ???our???) is committed
              to protecting your privacy. We have prepared this Privacy Policy to describe to you our
              practices regarding the Personal Data (as defined below) we collect, use, and share in
              connection with the Nftrafficker! website, mobile app, and other software provided
              on or in connection with our services, as described in our Terms of Service
              (collectively, the ???Service???). ???NFT??? in this Privacy Policy means a non-
              fungible token or similar digital item implemented on a blockchain
              (such as the Ethereum blockchain), which uses smart contracts to
              link to or otherwise be associated with certain content or data.
            </p>
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">1. Types of Data We Collect</h2>
            <p className="text-xl font-Poppins pb-4">
              ???Personal Data??? means data that allows someone to identify you
              individually, including, for example, your name, email address,
              as well as any other non-public information about you that is
              associated with or linked to any of the foregoing. ???Anonymous Data???
              means data, including aggregated and de-identified data, that is not
              associated with or linked to your Personal Data; Anonymous Data does
              not, by itself, permit the identification of individual persons. We collect
              Personal Data and Anonymous Data as described below.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">a. Information You Provide Us.</h3>
            <ul className="pb-4">
              <li className="text-xl font-Poppins">- When you use our Service, update your account profile, or contact us, we may collect Personal Data from you, such as email address, first and last name, user name, and other information you provide. We also collect your blockchain address, which may become associated with Personal Data when you use our Service.</li>
              <li className="text-xl font-Poppins">- Our Service lets you store preferences like how your content is displayed, notification settings, and favorites. We may associate these choices with your ID, browser, or mobile device.</li>
              <li className="text-xl font-Poppins">- If you provide us with feedback or contact us, we will collect your name and contact information, as well as any other content included in the message.</li>
              <li className="text-xl font-Poppins">- We may also collect Personal Data at other points in our Service where you voluntarily provide it or where we state that Personal Data is being collected.</li>
            </ul>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">b. Information Collected via Technology.</h3>
            <p className="text-xl font-Poppins pb-4">
              As you navigate through and interact with our Service, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
            </p>
            <ul className="pb-4">
              <li className="text-xl font-Poppins">- Information Collected by Our Servers. To provide our Service and make it more useful to you, we (or a third party service provider) collect information from you, including, but not limited to, your browser type, operating system, Internet Protocol (???IP???) address, mobile device ID, blockchain address, wallet type, and date/time stamps.</li>
              <li className="text-xl font-Poppins">- Log Files. As is true of most websites and applications, we gather certain information automatically and store it in log files. This information includes IP addresses, browser type, Internet service provider (???ISP???), referring/exit pages, operating system, date/time stamps, and clickstream data. We use this information to analyze trends, administer the Service, track users??? movements around the Service, and better tailor our Services to our users??? needs. For example, some of the information may be collected so that when you visit the Service, it will recognize you and the information can be used to personalize your experience.</li>
              <li className="text-xl font-Poppins">- Cookies. Like many online services, we use cookies to collect information. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to analyze how users interact with our Service, make improvements to our product quality, and provide users with a more personalized experience.</li>
              <li className="text-xl font-Poppins">- Pixel Tag. In addition, we use ???Pixel Tags??? (also referred to as clear Gifs, Web beacons, or Web bugs). Pixel Tags allow us to analyze how users find our Service, make the Service more useful to you, and tailor your experience with us to meet your particular interests and needs.</li>
              <li className="text-xl font-Poppins">- How We Respond to Do Not Track Signals. Our systems do not currently recognize ???do not track??? signals or other mechanisms that might enable Users to opt out of tracking on our site.</li>
              <li className="text-xl font-Poppins">- Analytics Services. In addition to the tracking technologies we place like Cookies and Pixel Tags, other companies may set their own cookies or similar tools when you visit our Service. This includes third-party analytics services (???Analytics Services???) that we engage to help analyze how users use the Service. The information generated by the Cookies or other technologies about your use of our Service (the ???Analytics Information???) is transmitted to the Analytics Services. The Analytics Services use Analytics Information to compile reports on user activity, which we may receive on an individual or aggregate basis. We use the information we get from Analytics Services to improve our Service. The Analytics Services may also transfer information to third parties where required to do so by law, or where such third parties process Analytics Information on their behalf. Each Analytics Services??? ability to use and share Analytics Information is restricted by such Analytics Services??? terms of use and privacy policy. By using our Service, you consent to the processing of data about you by Analytics Services in the manner and for the purposes set out above.</li>
            </ul>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">c. Information Collected from Third-Party Companies.</h3>
            <p className="text-xl font-Poppins pb-4">
              We may receive Personal and/or Anonymous Data about you from companies that offer their products and/or services for use in conjunction with our Service or whose products and/or services may be linked from our Service. For example, third-party wallet providers provide us with your blockchain address and certain other information you choose to share with those wallets providers. We may add this to the data we have already collected from or about you through our Service.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">d. Public Information Observed from Blockchains.</h3>
            <p className="text-xl font-Poppins pb-4">
              We collect data from activity that is publicly visible and/or accessible on blockchains. This may include blockchain addresses and information regarding purchases, sales, or transfers of NFTs, which may then be associated with other data you have provided to us.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">2. Use of Your Personal Data.</h2>
            <p className="text-xl font-Poppins pb-4">
              We process your Personal Data to run our business, provide the Service, personalize your experience on the Service, and improve the Service. Specifically, we use your Personal Data to:
            </p>
            <ul className="pb-4">
              <li className="text-xl font-Poppins">- facilitate the creation of and secure your account;</li>
              <li className="text-xl font-Poppins">- identify you as a user in our system;</li>
              <li className="text-xl font-Poppins">- provide you with our Service, including, but not limited to, helping you view, explore, and create NFTs using our tools and, at your own discretion, connect directly with others to purchase, sell, or transfer NFTs on public blockchains;</li>
              <li className="text-xl font-Poppins">- improve the administration of our Service and quality of experience when you interact with our Service, including, but not limited to, by analyzing how you and other users find and interact with the Service;</li>
              <li className="text-xl font-Poppins">- provide customer support and respond to your requests and inquiries;</li>
              <li className="text-xl font-Poppins">- investigate and address conduct that may violate our Terms of Service;</li>
              <li className="text-xl font-Poppins">- detect, prevent, and address fraud, violations of our terms or policies, and/or other harmful or unlawful activity;</li>
              <li className="text-xl font-Poppins">- display your username next to the NFTs currently or previously accessible in your third-party wallet, and next to NFTs on which you have interacted;</li>
              <li className="text-xl font-Poppins">- comply with applicable laws, cooperate with investigations by law enforcement or other authorities of suspected violations of law, and/or to pursue or defend against legal threats and/or claims; and</li>
              <li className="text-xl font-Poppins">- act in any other way we may describe when you provide the Personal Data.</li>
            </ul>
            <p className="text-xl font-Poppins pb-4">
              We may create Anonymous Data records from Personal Data. We use this Anonymous Data to analyze request and usage patterns so that we may improve our Services and enhance Service navigation. We reserve the right to use Anonymous Data for any purpose and to disclose Anonymous Data to third parties without restriction.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">3. Disclosure of Your Personal Data.</h2>
            <p className="text-xl font-Poppins pb-4">
              We disclose your Personal Data as described below and as described elsewhere in this Privacy Policy.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">a. Third Party Service Providers.</h3>
            <p className="text-xl font-Poppins pb-4">
              We may share your Personal Data with third party service providers to: provide technical infrastructure services; conduct quality assurance testing; analyze how our Service is used; prevent, detect, and respond to unauthorized activities; provide technical and customer support; and/or to provide other support to us and to the Service.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">b. Affiliates.</h3>
            <p className="text-xl font-Poppins pb-4">
              We may share some or all of your Personal Data with any subsidiaries, joint ventures, or other companies under our common control (???Affiliates???), in which case we will require our Affiliates to honor this Privacy Policy.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">c. Corporate Restructuring.</h3>
            <p className="text-xl font-Poppins pb-4">
              We may share some or all of your Personal Data in connection with or during negotiation of any merger, financing, acquisition, or dissolution transaction or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of our business or assets. In the event of an insolvency, bankruptcy, or receivership, Personal Data may also be transferred as a business asset. If another company acquires our company, business, or assets, that company will possess the Personal Data collected by us and will assume the rights and obligations regarding your Personal Data as described in this Privacy Policy.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">d. Legal Rights.</h3>
            <p className="text-xl font-Poppins pb-4">
              Regardless of any choices you make regarding your Personal Data (as described below), Nftrafficker! may disclose Personal Data if it believes in good faith that such disclosure is necessary: (a) in connection with any legal investigation; (b) to comply with relevant laws or to respond to subpoenas, warrants, or other legal process served on Nftrafficker!; (c) to protect or defend the rights or property of Nftrafficker! or users of the Service; and/or (d) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Service.
            </p>
            <h3 className="text-2xl pb-2 font-Poppins pb-4">e. Other Disclosures.</h3>
            <p className="text-xl font-Poppins pb-4">
              We may also disclose your Personal Data: to fulfill the purpose for which you provide it; for any other purpose disclosed by us when you provide it; or with your consent.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">4. Third-Party Websites.</h2>
            <p className="text-xl font-Poppins pb-4">
              Our Service may contain links to third-party websites. When you click on a link to any other website or location, you will leave our Service and go to another site, and another entity may collect Personal Data from you. We have no control over, do not review, and cannot be responsible for these third-party websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these third-party websites or their content, or to any collection of your Personal Data after you click on links to such third-party websites. We encourage you to read the privacy policies of every website you visit. Any links to third-party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content, or websites.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">5. Third-Party Wallets.</h2>
            <p className="text-xl font-Poppins pb-4">
              To use our Service, you must use a third-party wallet which allows you to engage in transactions on public blockchains. Your interactions with any third-party wallet provider are governed by the applicable terms of service and privacy policy of that third party.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex py-5 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">6. Data Protection.</h2>
            <p className="text-xl font-Poppins pb-4">
              We care about the security of your information and use physical, administrative, and technological safeguards to preserve the integrity and security of information collected through our Service. However, no security system is impenetrable and we cannot guarantee the security of our systems. In the event that any information under our custody and control is compromised as a result of a breach of security, we will take steps to investigate and remediate the situation and, in accordance with applicable laws and regulations, notify those individuals whose information may have been compromised.
            </p>
            <p className="text-xl font-Poppins pb-4">
              You are responsible for the security of your digital wallet, and we urge you to take steps to ensure it is and remains secure. If you discover an issue related to your wallet, please contact your wallet provider.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex pt-5 pb-10 max-w-7xl mx-auto">
        <div className="w-full p-2 drop-shadow-2xl">
          <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-white">
            <h2 className="text-2xl font-bold pb-2 font-Poppins pb-4">7. Changes to This Privacy Policy.</h2>
            <p className="text-xl font-Poppins pb-4">
              This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy.
            </p>
            <p className="text-xl font-Poppins pb-4">
              You are responsible for periodically visiting our Service and this Privacy Policy to check for any changes.
            </p>
          </div>
        </div>
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
