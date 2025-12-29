describe("UI Smoke - Demo Fintech", () => {
  it("Debe cargar la home correctamente", () => {
    cy.visit("/");
    cy.contains("Demo Fintech").should("be.visible");
    cy.contains("Servidor levantado correctamente").should("be.visible");
  });
});