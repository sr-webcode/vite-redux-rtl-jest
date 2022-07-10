import { renderWithProviders } from "@/utils/testUtils";

import Home from "./HomePage";
import { fireEvent, screen } from "@testing-library/react";

const buttons = ["btnInc", "btnDec", "btnIncAmt"];

describe("App", () => {
  beforeEach(() => {
    renderWithProviders(<Home />, {
      preloadedState: { counter: { value: 10 } }
    });
  });

  it("should have all the buttons", () => {
    buttons.forEach((button) => {
      expect(screen.queryByLabelText(button)).toBeInTheDocument();
    });
  });
  it("add func is working", () => {
    const addBtn = screen.getByLabelText("btnInc");
    fireEvent.click(addBtn);
    const count = screen.getByLabelText("count");
    expect(count).toHaveTextContent("11");
  });

  it("dec func is working", () => {
    const btnDec = screen.getByLabelText("btnDec");
    fireEvent.click(btnDec);
    const count = screen.getByLabelText("count");
    expect(count).toHaveTextContent("9");
    fireEvent.click(btnDec);
    expect(count).toHaveTextContent("8");
  });
});
