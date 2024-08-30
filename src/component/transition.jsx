import React from "react";

function transition(props) {
  return (
    <>
      <a
        href={props.link}
        class="text-4xl text-pink mr-3 hover:text-white transition ease-in-out duration-300"
      >
        <i className={props.logo}></i>
      </a>
    </>
  );
}

export default transition;
