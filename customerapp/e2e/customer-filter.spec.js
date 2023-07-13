describe("filter customer E2E", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("filter by button typing in textbox", () => {
        cy.get('#search').type('Sparrow').get('.row').then(rows => {
            expect(rows.length).to.eq(1);
        });
    });
})