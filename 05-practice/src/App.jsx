import { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {

  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data)=>{
    setUsers([...users, data ])
  }

  const handleRemove = (id)=>{
    setUsers(()=> users.filter((item, index)=> index!=id))
  }

  return (
  

    <div>
      <Navbar/>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center ">
  
      <div className="container mx-auto">
        
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData}/>
      </div>
    </div>
    </div>
  )
}

export default App;
