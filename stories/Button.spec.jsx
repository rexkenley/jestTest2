import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import { Primary, Secondary, Large, Small } from "./Button.stories";

describe("", () => {
  test("Primary", () => {
    const { container } = render(<Primary {...Primary.args} />);
    expect(container.firstChild).toBeDefined();
  });
  test("Secondary", () => {
    const { container } = render(<Secondary {...Secondary.args} />);
    expect(container.firstChild).toBeDefined();
  });
  test("Large", () => {
    const { container } = render(<Large {...Large.args} />);
    expect(container.firstChild).toBeDefined();
  });
  test("Small", () => {
    const { container } = render(<Small {...Small.args} />);
    expect(container.firstChild).toBeDefined();
  });
});
