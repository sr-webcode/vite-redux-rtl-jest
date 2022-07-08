import { render, screen } from "@testing-library/react";
import Home from "./HomePage";

describe("App", () => {
  it("should work as expected", () => {
    render(<Home />);
    const homePage = screen.getByText(/homepage/i);
    expect(homePage).not.toBeInTheDocument();
  });
});