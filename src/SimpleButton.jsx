import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export const SimpleButton = ({name}) => {
  // stateにボタンのOFFとONを格納
  const [state, setState] = useState(false);
  // 前回のステータス（OFF/ON）を反転する関数
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  // ボタンオブジェクト
  return <button onClick={handleClick}>{name} {state ? "ON" : "OFF"}</button>;
};
