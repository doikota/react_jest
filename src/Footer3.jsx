import React, { useContext } from "react";
import { UserCount } from "./App.jsx"

export const Footer3 = () => {
  // コンテキスト経由でプロパティを受け取る
  const count = useContext(UserCount);
  return (
    <h3>Footer3A {count}</h3>
  );
}
