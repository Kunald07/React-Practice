import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../context/Context";

const User = () => {
  // const {users, setusers} = useContext(UserContext);

  const { user: users, setuser: setusers } = useContext(UserContext);


  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="flex flex-col w-1/2 mt-10">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className="bg-red-100 mb-3 p-3">
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
