import supertest from "supertest";
import app from "../../../app.js";
import userService from "../../../service/userService.js";

jest.mock("../../../service/userService.js");

describe("Login Controller", () => {
  it("should return 200 and token for valid credentials", async () => {
    const mockUser = { email: "test@example.com", subscription: "starter" };
    userService.validateUser.mockResolvedValue(mockUser);
    userService.updateToken.mockResolvedValue(true);

    const response = await supertest(app)
      .post("/api/users/login")
      .send({ email: "test@example.com", password: "password123" });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    expect(response.body.user).toEqual({
      email: mockUser.email,
      subscription: mockUser.subscription,
    });
  });
});
