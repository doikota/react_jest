import React, { useContext } from "react";
import { UserCount } from "./App.jsx"

export const Footer3 = () => {
  // useContext経由でプロパティを受け取る
  const countout = useContext(UserCount);
  return (
    <>
      <h3>Footer3A {countout}</h3>
      <UserCount.Consumer>
        {/* Consumer経由でプロパティを受け取る */}
        {(countin) => {
          return <h3>Footer3B {countin}</h3>;
        }}
      </UserCount.Consumer>
    </>
  );
};
