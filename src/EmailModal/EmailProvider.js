import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function EMProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModalAction = () => {
    Cookies.set("modalOpenBefore", true, { expires: 7 });
    setModalOpen(true);
  };
  const closeModalAction = () => {
    setModalOpen(false);
  };
 
  const [email, setEmail] = useState('');
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
 
  return (
    <StateContext.Provider value={{email,handleEmailInput, modalOpen, closeModalAction, openModalAction}}>{children}</StateContext.Provider>
  );
}
