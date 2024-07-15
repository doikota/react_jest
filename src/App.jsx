import React, {useState} from "react";
import { Header } from './Header.jsx'
import { SimpleButton } from './SimpleButton.jsx'
import { SimpleCounter } from './SimpleCounter.jsx'

export const App = () => {
  // stateにボタンのOFFとONを格納
  const [state, setState] = useState(false);
  // 前回のステータス（OFF/ON）を反転する関数
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return (
    <React.StrictMode>
      <Header />
      {/* SimpleButtonはstateをAppで同時制御 */}
      <SimpleButton name="電源" state={state} handleClick={handleClick} />
      <SimpleButton name="Switch" state={state} handleClick={handleClick} />
      {/* SimpleCounterはstateをSimpleCounter内部で別々に制御 */}
      <SimpleCounter />
      <SimpleCounter />
    </React.StrictMode>
  );
};