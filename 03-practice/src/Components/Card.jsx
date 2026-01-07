

function Card({ values, index, handleClick }) {

  const { name, profession, image, friends } = values;

  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full ovject-cover' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold' >{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={() => handleClick(index)} className='mt-4 px-3 px-1 text-xs text-white bg-blue-500 font-semibolld rounded-md'> {friends === true ? "Friend" : "Add Friend"} </button>
      </div>
    </div>
  )
}

export default Card
