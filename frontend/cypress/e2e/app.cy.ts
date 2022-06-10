describe('Patientor App', () => {
  it('Connect to the App', () => {
    cy.visit('http://localhost:3000');
  });

  it('Add patient', () => {
    cy.contains('Add New Patient').click();

    cy.get('input[name="name"]')
      .type('samo');

    cy.get('input[name="ssn"]')
      .type('123456');

    cy.get('input[name="dateOfBirth"]')
      .type('1998-04-17');

    cy.get('input[name="occupation"]')
      .type('Cairo, Egypt');

    cy.contains('Other')
      .click();

    cy.contains('Male')
      .click();

    cy.get('button[type="submit"]')
      .click();

    cy.contains('samo');
  });

  it('Vist a patient page', () => {
    cy.contains('samo')
      .click();

    cy.contains('occupation: Cairo, Egypt');
  });
});