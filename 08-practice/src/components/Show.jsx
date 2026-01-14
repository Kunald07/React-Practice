import axios from "../utils/axios";
import { useEffect, useState } from "react";

const Show = () => {
  const [products, setproducts] = useState([]);

  const getproducts = () => {

    axios
      .get("/products")
      .then((products) => {
        // console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      {/* <button onClick={getproducts} className="px-5 rounded py-2 bg-red-300">
        Call Product API
      </button> */}
      <br />
      <br />
      <ul className="pt-5">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded p-5 bg-red-200 mb-3">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading.....</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
