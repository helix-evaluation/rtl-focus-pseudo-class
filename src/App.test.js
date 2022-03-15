import { act, render, screen } from "@testing-library/react";
import App from "./App";

function renderWithStyle(styleArg) {
  render(<App />);

  const style = document.createElement("style");
  style.innerHTML = styleArg;
  document.head.appendChild(style);
}

test("Hide on focus", () => {
  renderWithStyle("#focus_input:focus + #focus_label { display: none; }");

  expect(screen.getByTestId("focus_label")).toBeVisible();

  act(() => {
    screen.getByTestId("focus_input").focus();
  });
  expect(screen.getByTestId("focus_input")).toHaveFocus();

  expect(screen.getByTestId("focus_label")).toHaveStyle({ display: "none" });
  expect(screen.getByTestId("focus_label")).not.toBeVisible();
});

test("Hide on checked", () => {
  renderWithStyle("#check_input:checked + #check_label { display: none; }");

  expect(screen.getByTestId("check_label")).toBeVisible();

  act(() => {
    screen.getByTestId("check_input").click();
  });

  expect(screen.getByTestId("check_label")).toHaveStyle({
    display: "none",
  });
  expect(screen.getByTestId("check_label")).not.toBeVisible();
});
