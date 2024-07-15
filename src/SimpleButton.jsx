import React from "react";

// eslint-disable-next-line react/prop-types
export const SimpleButton = ({name, state, handleClick}) => {
  // ON/OFFボタンオブジェクト
  return (
    <button onClick={handleClick}>
      {name} {state ? "ON" : "OFF"}
    </button>
  );
};
