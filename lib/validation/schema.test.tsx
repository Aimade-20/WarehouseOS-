import { registerSchema } from "../../lib/validation/registerSchema";

describe("Register validation", () => {
  it("accepts valid data", () => {
    const result = registerSchema.safeParse({
      fullname: "Imad",
      email: "imad@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = registerSchema.safeParse({
      fullname: "Imad",
      email: "abc",
      password: "12345678",
      confirmPassword: "12345678",
    });

    expect(result.success).toBe(false);
  });

  it("rejects different passwords", () => {
    const result = registerSchema.safeParse({
      fullname: "Imad",
      email: "imad@gmail.com",
      password: "12345678",
      confirmPassword: "87654321",
    });

    expect(result.success).toBe(false);
  });
});