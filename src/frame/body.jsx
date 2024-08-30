import React from "react";
import Transition from "../component/transition.jsx"; 

function body() {
  return (
    <>
      <div className="w-full flex justify-center bg-ungu">
        <div className="flex justify-between container items-center p-10">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold text-white">
              Hi I'm Regis Fayyadh
            </h1>
            <h3 className="text-xl font-bold text-pink mt-2">
              Full Stack Developer |
            </h3>
            <p className="font-medium text-white mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              fuga? Quibusdam, molestias officiis? Nihil doloremque quibusdam
              perferendis laboriosam atque nobis earum! Quia iste placeat vitae
              perspiciatis omnis adipisci autem ducimus.
            </p>
            <div className="mt-4 mb-10">
              <button className="border-2 px-4 py-2 rounded-md text-pink border-pink hover:bg-pink hover:text-white font-medium transition ease-in-out duration-300">
                Hire Me
              </button>
              <button className="border-2  px-4 py-2 ml-3 rounded-md text-pink border-pink hover:bg-pink hover:text-white font-medium transition ease-in-out duration-300">
                Let's Talk
              </button>
            </div>
            <div className="">
              <Transition logo="bx bxl-discord-alt" link="https://discord.gg/dDpsnrS6r9" />
              <Transition logo="bx bxl-instagram" link="https://www.instagram.com/regisfyd/"/>
              <Transition logo="bx bxl-whatsapp" link="https://chat.whatsapp.com/G7ilsbxiGYZJ8v1mm88I9G" />
            </div>
          </div>
          <div className="w-1/2">
            <img src="Gif-Developer.gif" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full p-10 bg-ungu flex justify-center">
        <div className="container">
          <h1 className="text-white font-bold text-4xl text-center">About Me</h1>
          <div className="w-full flex justify-center mt-5">
            <div className="w-36 h-36 border-2 border-pink rounded-full flex justify-center items-center">
              <img src="Logo-React.png" width="150px" alt="" />
            </div>
          </div>
          <h3 className="text-white font-bold text-3xl text-center mt-5">Fullstack Developer</h3>
          <h3 className="text-white text-center text-xl mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rem cum. Unde, laboriosam quo? Aliquid in laboriosam vero ipsa distinctio placeat possimus perspiciatis ullam earum, obcaecati cupiditate, dicta error veritatis assumenda commodi sint. Minus error neque dolores non repellat perferendis quae debitis earum velit sint! Sit eaque neque quasi officia.</h3>
        </div>
      </div>
    </>
  );
}

export default body;
