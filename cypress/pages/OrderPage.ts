class OrderPage
{
    url = '/checkout-complete.html';
    namePage = 'Checkout: Complete!';
    orderSuccessTitel = 'Thank you for your order!';
    orderSuccessDecs = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
    completeHeader = '[data-test="complete-header"]';
    completeText = '[data-test="complete-text"]';
    backHomeButton = '#back-to-products';
    
    verifyOnOrderPage() {
        cy.url().should('include', this.url);
        cy.contains(this.namePage).should('be.visible');
        cy.get(this.completeHeader)
          .should('exist')
          .and('be.visible')
          .and('contain.text',this.orderSuccessTitel);
        
        cy.get(this.completeText)
          .should('exist')
          .and('be.visible')
          .and('contain.text',this.orderSuccessDecs);
    }

    
} export default new OrderPage();