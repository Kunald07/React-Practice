
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#131921] text-white">
      <div className="flex items-center px-4 py-2 gap-4">

        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          Amazon
        </div>

        {/* Location */}
        <div className="hidden md:flex items-center text-sm cursor-pointer">
          <FaMapMarkerAlt className="mr-1" />
          <div>
            <p className="text-gray-300 text-xs">Deliver to</p>
            <p className="font-bold">India</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
          />
          <button className="bg-orange-400 px-4 rounded-r-md text-black">
            <FaSearch />
          </button>
        </div>

        {/* Language */}
        <div className="hidden md:block cursor-pointer text-sm">
          <p className="font-bold">EN</p>
        </div>

        {/* Account */}
        <div className="hidden md:block cursor-pointer text-sm">
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        {/* Returns */}
        <div className="hidden md:block cursor-pointer text-sm">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Cart */}
        <div className="flex items-center cursor-pointer">
          <FaShoppingCart className="text-2xl" />
          <span className="ml-1 font-bold">Cart</span>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="bg-[#232f3e] px-4 py-2 text-sm flex gap-4">
        <p className="cursor-pointer hover:underline">All</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="cursor-pointer hover:underline">Customer Service</p>
        <p className="cursor-pointer hover:underline">Registry</p>
        <p className="cursor-pointer hover:underline">Gift Cards</p>
        <p className="cursor-pointer hover:underline">Sell</p>
      </div>
    </nav>
  );
}

