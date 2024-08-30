import React from "react";
import Navbar from "./frame/navbar";
import "boxicons/css/boxicons.min.css";
import Body from "./frame/body.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <div className="bg-ungu font-medium text-white flex justify-end p-3 "><p>© 2024 Regis. All Rights Reversed.</p></div>
    </>
  );
}

export default App;
