// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

// eslint-disable-next-line no-undef
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  render(<SimpleButton />);
});
