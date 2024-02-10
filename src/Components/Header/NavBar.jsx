import React, { useRef, useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Form from "../Pages/Form/Form";
import { useForm } from "react-hook-form";
import Inputfield from "../Input/Inputfield";
import UserContext from "../../Context/userContext";

function NavBar() {
  const { User, setUser, openModal, setIsopen, open, showToast } = useContext(UserContext);
  const form = useForm();
  const { register, handleSubmit, formState, getValues, reset } = form;
  const { errors } = formState;
  const inputRef = useRef();

  const FormSubmit = (data, e) => {
    e.preventDefault();
    setUser([...User, data]);
    setIsopen(false);
    reset()
    showToast("User Add successfully!")
  };

  return (
    <>
      <nav className="bg-gray-600 font-bold p-2 text-white fixed w-screen ">
        <div className="flex  items-center justify-between max-w-screen-xl px-4 mx-auto">
          <div>
            <span>Modal UI</span>
          </div>
          <div>
            <Button onClick={openModal}>Open Modal</Button>
          </div>
        </div>
      </nav>
      {open && (
        <Modal>
          <Form>
            <form
              className="flex flex-col items-center shadow-2xl  space-y-6 font-serif bg-gray-100 bg-opacity-80     rounded-xl p-4"
              onSubmit={handleSubmit(FormSubmit)}>
              <h1 className="font-extrabold  text-blue-600"> Login Form</h1>

              <div>
                <Inputfield
                  ref={inputRef}
                  label="Name"
                  {...register("Name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}></Inputfield>

                <p className="text-red-600 text-sm">{errors.Name?.message}</p>
              </div>
              <div>
                <Inputfield
                  ref={inputRef}
                  label="E-Mail"
                  {...register("mail", {
                    required: {
                      value: true,
                      message: "E_Mail is required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format",
                    },
                  })}></Inputfield>

                <p className="text-red-600 text-sm">{errors.mail?.message}</p>
              </div>
              <Button type="submit">submit</Button>
            </form>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default NavBar;
