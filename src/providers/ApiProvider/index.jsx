import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { beraTopApi } from "../../services";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    beraTopApi
      .get(`products?_embed=reviews`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [products]);

  const productReviews = (productId) => {
    beraTopApi
      .get(`reviews?productId=${productId}`)
      .then((res) => setReviews(res.data));
  };

  const register = (data) => {
    beraTopApi.post("signup", data);
  };

  const login = (data) => {
    beraTopApi.post("login", data);
  };

  const addReview = (token, data) => {
    beraTopApi
      .post("reviews", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast("🍺 Review adicionada com sucesso", {
          className: "toastify-color-progress-success",
        });
        setReviews([...reviews, response.data]);
      })
      .catch((err) => {
        toast("❌ Erro ao adicionar o comentário", {
          className: "toastify-color-progress-error",
        });
      });
  };

  const editReview = (idReview, token, data) => {
    beraTopApi.patch(`reviews/${idReview}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteReview = (token, idReview) => {
    beraTopApi
      .delete(`reviews/${idReview}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() =>
        toast("🍺 Comentário deletado com sucesso", {
          className: "toastify-color-progress-success",
        })
      )
      .catch(() =>
        toast("❌ Ops! Algo deu errado, tente novamente", {
          className: "toastify-color-progress-error",
        })
      );
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
        productReviews,
        reviews,
        setReviews,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
