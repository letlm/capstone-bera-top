import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { beraTopApi } from "../../services";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    beraTopApi
      .get(`products?_embed=reviews`)
      .then((res) => setProducts(res.data))
      .catch((err) => err);
  }, [change]);

  const productReviews = (productId) => {
    beraTopApi
      .get(`reviews?productId=${productId}`)
      .then((res) => setReviews(res.data));
  };

  const addReview = (token, data) => {
    beraTopApi
      .post("reviews", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("🍺 Review adicionada com sucesso", {
          className: "toastify-color-progress-success",
        });
        setReviews([...reviews, response.data]);
        setChange(!change);
      })
      .catch(() => {
        toast("❌ Erro ao adicionar o comentário", {
          className: "toastify-color-progress-error",
        });
      });
  };

  const editReview = (idReview, token, data, productId) => {
    beraTopApi
      .patch(`reviews/${idReview}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("🍺 Review editada com sucesso", {
          className: "toastify-color-progress-success",
        });
        productReviews(productId);
      })
      .catch((err) => {
        toast("❌ Erro ao editar o comentário", {
          className: "toastify-color-progress-error",
        });
      });
  };

  const deleteReview = (token, idReview) => {
    beraTopApi
      .delete(`reviews/${idReview}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        () => setChange(!change),
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
