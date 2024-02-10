import React, { useContext, useEffect } from "react";

import ReactDOM from "react-dom";
import Form from "../Pages/Form/Form";
import Button from "../Button/Button";
import UserContext from "../../Context/userContext";
function Modal({ children }) {
  const context = useContext(UserContext)
  const { setIsopen } = context
  const CloseModal = () => {
    setIsopen(false);
  };
  useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
          document.body.style.overflowY = "scroll";
      };
  });

  return ReactDOM.createPortal(
    <>
      <div
        onClick={CloseModal}
        className=" fixed z-10 inset-0 w-screen bg-black bg-opacity-20  flex justify-center  items-center"></div>
      <div className="fixed  left-[500px] top-[150px]  w-[280px] py-8  z-20  rounded-lg ">
        {children}
      </div>
    </>,
    document.body
  );
}

export default Modal;
