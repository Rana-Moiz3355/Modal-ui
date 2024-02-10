import React, { useState } from "react";
import userContext from "./userContext";
import { createPortal } from "react-dom";

function UserContextProvider({ children }) {
  const [open, setIsopen] = useState(false);
  const [User, setUser] = useState([]);
  const [Toast, setToast] = useState("")

  const openModal = () => {
    setIsopen(true);
  };

  const showToast = (message) => {

    setToast(message);
    setTimeout(() => {
      setToast("")
    }, 3000);

  }
  return (
    <userContext.Provider value={{ open, openModal, setIsopen, User, setUser, showToast }}>
      {children}
      {
        createPortal(

          <div className="bg-green-600 fixed top-8 right-3 rounded-lg px-8 ">
            <div className="text-white text-sm">{Toast}</div>
          </div>,
          document.body
        )

      }
    </userContext.Provider>
  );
}

export default UserContextProvider;
