import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {

    const [user, setuser] = useState([
        {id: 0 , username: "Abhishek", city: "Mumbai"},
        {id: 1 , username: "John", city: "New York"},
        {id: 2 , username: "Manuel", city: "Colombia"}
    ]);

  return (
    <>
    <UserContext.Provider value={{user, setuser}} >
        {props.children}
    </UserContext.Provider>
    </>
  );
};

export default Context;
