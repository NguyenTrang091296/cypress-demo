class CheckOutPage
{
    urlStep1 = '/checkout-step-one.html';
    namePageStep1 = 'Checkout: Your Information';
    firstNameField = '#first-name';
    lastNameField = '#last-name';
    zipCodeField  = '#postal-code';
    cancelButton = '#cancel';
    continueButton = '#continue';
    urlStep2 = '/checkout-step-two.html';
    namePageStep2 = 'Checkout: Overview';
    subtotalLabel = '.summary_subtotal_label';
    taxLabel = '.summary_tax_label';
    totalLabel = '.summary_total_label';
    finishButton = '#finish';
    errorMessage = '[data-test="error"]';


    oneStepCheckout(firstName: string, lastName: string, zipCode: string) {
        if (firstName) {
        cy.get(this.firstNameField).should('be.visible');
        cy.get(this.firstNameField).type(firstName);
        }
        if (lastName) {
        cy.get(this.lastNameField).should('be.visible');
        cy.get(this.lastNameField).type(lastName);
        }
        if (zipCode) {
        cy.get(this.zipCodeField).should('be.visible');
        cy.get(this.zipCodeField).type(zipCode);
        }
        cy.get(this.continueButton).click();
    }

    calculateTax(subtotal) {
        if (typeof subtotal !== "number" || isNaN(subtotal)) {
            throw new Error("Subtotal must be a valid number");
        }
        return parseFloat((subtotal * 0.08).toFixed(2));
    }

    calculateTotal(subtotal) {
        const tax = this.calculateTax(subtotal);
        return parseFloat((subtotal + tax).toFixed(2));
    }
   
    twoStepCheckout() {
        cy.get(this.subtotalLabel)
          .invoke('text')
          .then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace('Item total: $', ''));

        // Verify Tax
        cy.get(this.taxLabel)
          .invoke('text')
          .then((taxText) => {
            const uiTax = parseFloat(taxText.replace('Tax: $', ''));
            const expectedTax = this.calculateTax(subtotal);
            expect(uiTax).to.eq(expectedTax);
          });

        // Verify Total
        cy.get(this.totalLabel)
          .invoke('text')
          .then((totalText) => {
            const uiTotal = parseFloat(totalText.replace('Total: $', ''));
            const expectedTotal = this.calculateTotal(subtotal);
            expect(uiTotal).to.eq(expectedTotal);
          });
      });
  }
   
    cancelCheckout()
    {
      cy.get(this.cancelButton).should('be.visible').click();
    }

    finishCheckout()
    {
      cy.get(this.finishButton).should('be.visible').click();
    }
    verifyErrorMessage (message: string)
    {
      cy.get(this.errorMessage)
        .should('exist')
        .and('be.visible')
        .and('contain.text', message);
    }
 
} export default new CheckOutPage();