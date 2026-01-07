

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-500 px-6 py-4 flex items-center justify-between">
      <button className="text-white font-semibold bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
        Add Friend to click Button
      </button>
      <ul className="flex space-x-6 text-white font-medium">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

