import React, { useState } from "react";

export const SimpleCounter = () => {
  // countに回数を格納
  const [count, setCount] = useState(0);
  // カウンター
  const increment = () => {
    setCount((count) => count + 1) };
  // ボタンオブジェクト
  return <button onClick={increment}>{count}</button>;
};