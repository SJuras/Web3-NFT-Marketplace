import Link from 'next/link'



export default function Dropdown({isOpen, toggle}){
  return(
    <div className={isOpen ? 'block text-center bg-yellow-500 py-2' : 'hidden'} onClick={toggle}>
      <div className="cursor-pointer my-2">
        <Link href="/marketplace">
          <h4 className="text-2xl font-Poppins">Marketplace</h4>
        </Link>
      </div>
      <div className="cursor-pointer my-2">
        <Link href="/mint">
          <h4 className="text-2xl font-Poppins">Mint</h4>
        </Link>
      </div>
      <div className="cursor-pointer my-2">
        <Link href="/collection">
          <h4 className="text-2xl font-Poppins">Collection</h4>
        </Link>
      </div>
      <div className="cursor-pointer my-2">
        <Link href="/dashboard">
          <h4 className="text-2xl font-Poppins">Dashboard</h4>
        </Link>
      </div>
    </div>
  );
}
