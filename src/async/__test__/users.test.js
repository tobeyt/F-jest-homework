import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const result = getUsers();
    await expect(result).resolves.toEqual({ name: "QinDi" });
  });
});
