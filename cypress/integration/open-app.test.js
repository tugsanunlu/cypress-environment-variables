describe("Environment variables", () => {
  it("Open app URL", () => {
    cy.visit(Cypress.env("APP_URL"));
  });
});
