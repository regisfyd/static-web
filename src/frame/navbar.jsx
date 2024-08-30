import React from "react";

function navbar() {
  return (
    <div className="w-full flex justify-center bg-ungu">
      <div className="container px-10 h-14 flex justify-between items-center">
        <div className="">
          <img src="Logo-React.png" alt="" width="35px" />
        </div>
        <div className="font-medium flex gap-2 text-white">
          <a
            href=""
            className="hover:bg-ungumuda transition ease-in-out duration-300 rounded-full p-2 px-4 hover:translate-y-px"
          >
            Home
          </a>
          <a
            href=""
            className="hover:bg-ungumuda transition ease-in-out duration-300 rounded-full p-2 px-4 hover:translate-y-px"
          >
            About Me
          </a>
          <a
            href=""
            className="hover:bg-ungumuda transition ease-in-out duration-300 rounded-full p-2 px-4 hover:translate-y-px"
          >
            Skills
          </a>
          <a
            href=""
            className="hover:bg-ungumuda transition ease-in-out duration-300 rounded-full p-2 px-4 hover:translate-y-px"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
