import { Default, CustomColorIcon } from "./CartIcon.stories";

import { render, screen } from "@testing-library/react";

test("should render default cart icon", () => {
  render(<Default {...Default.args} />);

  const icon = screen.getByTestId("cart-icon");

  expect(icon.getAttribute("fill")).toBe("white");
});

test("should render icon with custom color", () => {
  render(<CustomColorIcon {...CustomColorIcon.args} />);

  const icon = screen.getByTestId("cart-icon");

  expect(icon.getAttribute("fill")).toBe(CustomColorIcon.args?.fill);
});
