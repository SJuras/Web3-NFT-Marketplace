

export default function Intro2(){
  return(
    <div className="w-full flex flex-col md:flex-row py-4 md:py-6">
      <div className="w-full md:w-1/2 p-2 drop-shadow-2xl">
        <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-yellow-500">
          <p className="text-2xl font-bold font-Poppins pb-4">
            What? Can't believe I have to explain this to ya. Ok, here's the deal: <br />
            You wanna buy, sell and mint quick. It's skull-crackin' out there, there's a lot of competition
          </p>
          <p className="text-2xl font-bold font-Poppins pb-4">
            First thigs first, get your <a href="https://metamask.io/" className="text-pink-700 transition duration-300 hover:text-white">MetaMask</a> ready. <br />
            Got it? Good.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        right
      </div>
    </div>
  );
}
