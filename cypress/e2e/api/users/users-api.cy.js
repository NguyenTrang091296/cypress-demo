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
        name: "Trang",
        job: "QA Automation",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", "Trang");
      expect(response.body).to.have.property("job", "QA Automation");
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
        name: "Trang",
        job: "QC Leader",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Trang");
      expect(response.body).to.have.property("job", "QC Leader");
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
      expect(response.status).to.eq(204); // Không có nội dung trả về
    });
  });
});
