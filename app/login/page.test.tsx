import { render, screen } from "@testing-library/react";
import RegisterForm from "@/src/components/LoginForm";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
}));

describe("RegisterForm", () => {
  it("renders email input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  });
  it("renders create account button", () => {
    render(<RegisterForm />);

    expect(
      screen.getByRole("button", { name: /Log In/i })
    ).toBeInTheDocument();
  });
});