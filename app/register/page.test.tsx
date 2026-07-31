import { render, screen } from "@testing-library/react";
import RegisterForm from "@/src/components/RegisterForm";

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
  it("renders fullname input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  });

  it("renders confirm password input", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });

  it("renders create account button", () => {
    render(<RegisterForm />);

    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });
});