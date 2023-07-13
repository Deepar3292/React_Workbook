describe("delete customer E2E", () => {
    it("delete by button click", () => {
        cy.visit('http://localhost:3000')
        cy.get('button').eq(1).click().get('.row').then(rows => {
            expect(rows.length).to.eq(2);
        });
    });
})