
// function Navbar({data}) {
//   return (
//     <div className="w-full px-20 py-3 flex justify-between items-center">
//       <h3>My Songs - click on Add to Favourites to add it on Favourites </h3>
//       <div className="flex p-2 px-4 bg-orange-500 text-white rounded-md text-sm gap-3">
//         <h3>Favourites</h3>
//         {/* <h4>{data.filter(item => item.added).length}</h4> */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;



const Navbar = () => {
  return (
    <nav className="w-full bg-gray-300 px-6 py-4 flex items-center justify-between">
      <button className="text-white font-semibold bg-teal-400 px-4 py-2 rounded hover:bg-blue-700 transition">
        Fill the Details $ sumbit to Make a Card.
      </button>
      <button className="text-white font-semibold bg-teal-400 px-4 py-2 rounded hover:bg-blue-700 transition">
        After Making Card You can Remove It.
      </button>
      <ul className="flex space-x-6 text-white font-medium">
        <li className="hover:text-blue-400 text-black cursor-pointer">Home</li>
        <li className="hover:text-blue-400 text-black cursor-pointer">About</li>
        <li className="hover:text-blue-400 text-black cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;