import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom';

const Userdetails = () => {

  const {id} = useParams();
  const navigate = useNavigate();
   const { user: users,}  = useContext(UserContext);
  console.log(users[id]);
  

  return (

    <div>
      <h1 className='text-red-300 text-4xl font-bold'>{users[id].username} </h1>
      <h3 className='text-red-200'>{users[id].city}</h3>
      <button onClick={()=> navigate(-1)} className='rounded bg-red-100 p-2 mt-5'>Go Back</button>
    </div>
  )
}

export default Userdetails
