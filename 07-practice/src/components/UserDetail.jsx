import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {

    const {name} = useParams();
    const navigate = useNavigate()

    const GoBackHandler = ()=>{
      navigate("/user");
    }

  return (
    <div className="  mt-10">
      <h1 className="text-5xl text-red-200 mb-2">User Detail</h1>
      <h1 className="text-2xl mt-3">Hii! {name}</h1>
      <button onClick={GoBackHandler} className="mt-5 px-3 py-2 text-white bg-red-300">Go Back</button>
    </div>
  );
};

export default UserDetail;
