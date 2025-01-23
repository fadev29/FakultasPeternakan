import React from "react";

function Button(props) {
  return (
    <div className="mt-6">
      <button
        className={`bg-green-800 text-white hover:bg-white hover:text-green-800 px-6 py-2 rounded text-sm lg:text-base w-full `}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
