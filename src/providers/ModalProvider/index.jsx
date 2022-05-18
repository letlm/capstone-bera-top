import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
