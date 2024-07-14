import React, { useState } from "react";

export const SimpleButton = () => {
  // stateにボタンのOFFとONを格納
  const [state, setState] = useState(false);
  // 前回のステータス（OFF/ON）を反転する関数
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  // ボタンオブジェクト
  return <button onClick={handleClick}>{state ? "ON" : "OFF"}</button>;
};
