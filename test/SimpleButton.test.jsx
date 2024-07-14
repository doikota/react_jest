import React from "react";
import { SimpleButton } from "../src/SimpleButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("OFF/ONボタンのテスト", () => {
  test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    // ボタン描画
    render(<SimpleButton />);
    screen.debug();
    const simpleButton = screen.getByRole("button");
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("OFF");
    // ボタンクリックイベント
    const user = userEvent.setup();
    await user.click(simpleButton);
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
  });

  test("スナップショットを取得して比較", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });
  
});