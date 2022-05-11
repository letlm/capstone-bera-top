import { createContext, useEffect, useState } from "react";
import { beraTopApi } from "../../services";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    beraTopApi
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const register = (data) => {
    beraTopApi.post("signup", data);
  };

  const login = (data) => {
    beraTopApi.post("login", data);
  };

  const addReview = (idProduct, token, data) => {
    beraTopApi.post(`products/${idProduct}/reviews`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const editReview = (idProduct, idReview, token, data) => {
    beraTopApi.patch(`products/${idProduct}/reviews/${idReview}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteReview = (idProduct, idReview) => {
    beraTopApi.delete(`products/${idProduct}/reviews/${idReview}`);
  };

  return (
    <ApiContext.Provider
      value={{
        products,
        setProducts,
        addReview,
        editReview,
        deleteReview,
        register,
        login,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;