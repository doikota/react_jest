import React from "react";
import { SimpleButton } from "./SimpleButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("ボタンのテスト", () => {
  test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    render(<SimpleButton />);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    const user = userEvent.setup();
    await user.click(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
  });

  test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });
  
});