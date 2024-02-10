import { useState } from "react";

import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Modal from "./Components/Modal/Modal";
import UserContextProvider from "./Context/UsercontextProvider";
import Table from "./Components/Table/Table";

function App() {
  return (
    <>
      <UserContextProvider>
        <NavBar />
        <Table />
      </UserContextProvider>
    </>
  );
}

export default App;
