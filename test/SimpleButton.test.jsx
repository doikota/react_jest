import React from "react";
import { SimpleButton } from "../src/SimpleButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("OFF/ONボタンのテスト", () => {
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
    render(<SimpleButton name="電源"/>);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    const user = userEvent.setup();
    await user.click(simpleButton);
    screen.debug(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
  });

  it("スナップショットを取得して比較", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });
  
});