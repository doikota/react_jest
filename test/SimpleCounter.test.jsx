import React from "react";
import { SimpleCounter } from "../src/SimpleCounter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("カウンターボタンのテスト", () => {
  test("ボタンをクリックするとカウンターの表示1ずつ増える", async () => {
    // ボタン描画
    render(<SimpleCounter />);
    screen.debug();
    const simpleCoutner = screen.getByRole("button");
    screen.debug(simpleCoutner);
    expect(simpleCoutner).toHaveTextContent("0");
    // ボタンクリックイベント
    const user = userEvent.setup();
    await user.click(simpleCoutner);
    screen.debug(simpleCoutner);
    expect(simpleCoutner).toHaveTextContent("1");
  });

  test("スナップショットを取得して比較", () => {
    const view = render(<SimpleCounter />);
    expect(view.container).toMatchSnapshot();
  });
  
});