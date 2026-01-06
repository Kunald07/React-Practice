

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-300 shadow-md">
            <div className="max-w-7xl  mx-auto px-6 py-4 flex items-center justify-between">

                {/* Left Side - Logo */}
                <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
                    <i>change image</i>
                </div>

                {/* Right Side - Menu */}
                <ul className="flex space-x-8 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-indigo-700 transition-colors duration-300">
                        <i>Home</i>
                    </li>
                    <li className="cursor-pointer hover:text-indigo-700 transition-colors duration-300">
                        <i>About</i>
                    </li>
                    <li className="cursor-pointer hover:text-indigo-700 transition-colors duration-300">
                        <i>Service</i>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;

