import axios from '../utils/axios';
import  { useEffect, useState } from 'react'

const Services = () => {

    const [first, setfirst] = useState("this is normal data");
    const [second, setsecond] = useState("this is very large data")

    const getusers = () => {

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err));
  };

    useEffect(()=>{
        getusers();
        console.log("Service Components is Created");

        return () => {
            console.log("Service component is Deleted");
            
        };
        
    },[second]);

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=> setfirst("Normal Data has been Chnaged")} className='rounded mb-10 bg-red-200 p-2'> Change Normal Data</button>

      <h1>{second}</h1>
      <button onClick={()=> setsecond("Large Data has been Changed")} className='rounded mb-10 bg-blue-200 p-2'> Change Very Large Data</button>
    </div>
  )
}

export default Services
