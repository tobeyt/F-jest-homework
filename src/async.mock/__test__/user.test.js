import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    const result = register("username", "password");
    await expect(result).resolves.toEqual({});
    expect(verifyUsername).toHaveBeenCalledTimes(1);
    expect(verifyPassword).toHaveBeenCalledTimes(1);
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockReturnValue(false);
    const result = register("username", "password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
