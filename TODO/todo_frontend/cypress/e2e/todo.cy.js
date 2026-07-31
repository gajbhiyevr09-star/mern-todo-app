describe("Todo App E2E Test", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should load the Todo application", () => {
    cy.contains("Todo").should("exist");
  });

  it("should add a new todo", () => {
    cy.get("input").type("Cypress Testing");
    cy.contains("ADD").click();

    cy.contains("Cypress Testing").should("exist");
  });

  it("should edit a todo", () => {

  // Click the first pencil (edit) icon
  cy.get(".task").first().find("svg").eq(1).click();

  // The second input is the edit input
  cy.get('input').eq(1)
    .clear()
    .type("Updated Task");

  // Click the same pencil again to save
  cy.get(".task").first().find("svg").eq(1).click();

  // Verify updated text
  cy.contains("Updated Task").should("exist");

});

  it("should delete a todo", () => {
    cy.get("svg").last().click();
  });

});