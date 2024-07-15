import React, { useState } from "react";
import { SimpleButton } from "../src/SimpleButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("ON/OFFボタンのテスト", () => {
  it("ボタンに電源とOFFが表示される", async () => {
    // ボタン描画
    render(<SimpleButton name="電源"/>);
    screen.debug();
    const simpleButton = screen.getByRole("button");
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("電源");
    expect(simpleButton).toHaveTextContent("OFF");
  });
  
  it("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    const SimpleButtonTestComponent = () => {
      const [state, setState] = useState(false);
      const handleClick = () => {
        setState((prevState) => !prevState);
      };
      return <SimpleButton name="電源" state={state} handleClick={handleClick} />;
    };
    // 初期状態（期待値はOFF）
    render(<SimpleButtonTestComponent />);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    // 1回目クリック（期待値はON）
    const user = userEvent.setup();
    await user.click(simpleButton);
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
    // 2回目クリック（期待値はOFF）
    await user.click(simpleButton);
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("OFF");
  });

  it("スナップショットを取得して比較", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });
  
});