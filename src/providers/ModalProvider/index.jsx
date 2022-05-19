import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [editBeer, setEditBeer] = useState([]);

  const handleOpenModal = (modal = "add") => {
    if (modal === "edit") {
      setModalOpenEdit(true);
    } else {
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = (modal = "add") => {
    if (modal === "edit") {
      setEditBeer([]);
      setModalOpenEdit(false);
    } else {
      setEditBeer([]);
      setModalIsOpen(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        editBeer,
        setEditBeer,
        modalOpenEdit,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
