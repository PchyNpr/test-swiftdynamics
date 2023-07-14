it('visit codenboxautomationlab', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('[value="radio2"]').click()
    cy.get('#autocomplete').type('Thai')
    cy.get('[class="ui-menu-item-wrapper"]').click()
    cy.get('#dropdown-class-example').select('API')
    cy.get('#checkBoxOption1').click()
    cy.get('#checkBoxOption3').click()
    cy.get('#openwindow').trigger('mouseover')
});
