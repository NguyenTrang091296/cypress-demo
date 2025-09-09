import userData from "../../../fixtures/api/userApiData.json";
describe("API Testing - Users", () => {
  const baseUrl = "https://reqres.in/api";
  let userId;

  it("Get list of users successfully", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users?page=2`,
      headers: {
        "x-api-key": Cypress.env("API_KEY"),
      },
    }).then((response) => {
      // Kiểm tra status code
      expect(response.status).to.eq(200);

      // Kiểm tra response body
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
  it("Create a new user successfully", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: {
        "x-api-key": Cypress.env("API_KEY"),
      },
      body: {
        first_name: userData.createUser.first_name,
        last_name: userData.createUser.last_name,
        email: userData.createUser.email,
        avatar: userData.createUser.avatar,
        job: userData.createUser.job,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "first_name",
        userData.createUser.first_name
      );
      expect(response.body).to.have.property(
        "last_name",
        userData.createUser.last_name
      );
      expect(response.body).to.have.property(
        "email",
        userData.createUser.email
      );
      expect(response.body).to.have.property(
        "avatar",
        userData.createUser.avatar
      );
      expect(response.body).to.have.property("job", userData.createUser.job);
      expect(response.body).to.have.property("id");
      userId = response.body.id;
    });

    cy.log("User ID: " + userId);
  });
  it("Update user successfully", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/users/${userId}`,
      headers: {
        "x-api-key": Cypress.env("API_KEY"),
      },
      body: {
        first_name: userData.updateUser.first_name,
        last_name: userData.updateUser.last_name,
        email: userData.updateUser.email,
        avatar: userData.updateUser.avatar,
        job: userData.updateUser.job,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "first_name",
        userData.updateUser.first_name
      );
      expect(response.body).to.have.property(
        "last_name",
        userData.updateUser.last_name
      );
      expect(response.body).to.have.property(
        "email",
        userData.updateUser.email
      );
      expect(response.body).to.have.property(
        "avatar",
        userData.updateUser.avatar
      );
      expect(response.body).to.have.property("job", userData.updateUser.job);
    });
  });
  it("Delete user successfully", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/users/${userId}`,
      headers: {
        "x-api-key": Cypress.env("API_KEY"),
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
