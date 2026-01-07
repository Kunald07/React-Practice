

function Navbar({data}) {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3>My Songs - click on Add to Favourites to add it on Favourites </h3>
      <div className="flex p-2 px-4 bg-orange-500 text-white rounded-md text-sm gap-3">
        <h3>Favourites</h3>
        <h4>{data.filter(item => item.added).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
