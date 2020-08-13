describe("Example to leverage each and use cy.wrap", () => {
  it("should iterate over each data-test=content div and acess its elements via within and get", () => {
    cy.visit("http://localhost:8080/example-html/each-get.html");
    cy.get("[data-test=content]").each((content) => {
      cy.wrap(content).within(() => {
        cy.get("[data-test=no1]").click();
      });
    });
  });

  it("should iterate over each data-test=content div and acess its elements via find", () => {
    cy.visit("http://localhost:8080/example-html/each-get.html");
    cy.get("[data-test=content]").each((content) => {
      cy.wrap(content).find("[data-test=no1]").click();
    });
  });
});