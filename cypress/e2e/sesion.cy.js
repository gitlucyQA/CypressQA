it("inicio_sesion", () => {
    cy.visit("https://www.google.es");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("#APjFqb").type("Cypress{enter}");
    cy.get('[href="https://www.cypress.io/"] > .LC20lb').click();
  });