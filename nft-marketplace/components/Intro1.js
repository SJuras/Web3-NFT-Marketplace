

export default function Intro1(){
  return(
    <div className="w-full flex flex-col md:flex-row py-4 md:py-6">
      <div className="w-full md:w-1/2">
        left
      </div>
      <div className="w-full md:w-1/2 p-2 drop-shadow-2xl">
        <div className="w-full border border-2 rounded-md border-zinc-700 p-4 bg-yellow-500">
          <p className="text-2xl font-bold font-Poppins pb-4">
            Hey hey hey! You, yes YOU! <br /> Wanna buy some NFTs? <br /> Sell 'em? Mint 'em? <br />
            I've got you covered.
          </p>
          <p className="text-2xl font-bold font-Poppins pb-4">
            I'm your <span className="font-Massedi">NFTRAFFICKER!</span> with an exclamation mark
          </p>
        </div>
      </div>
    </div>
  );
}
