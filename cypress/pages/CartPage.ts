class CartPage
{
    url = '/cart.html';
    namePage = 'Your Cart';
    cartIcon = '#shopping_cart_container';
    checkoutButton = '#checkout';
    continueShoppingButton = '#continue-shopping';

    verifyOnCartPage() {
        cy.url().should('include', this.url);
        cy.contains(this.namePage).should('be.visible');
  }

    goToCart()
    {
        cy.get(this.cartIcon)
            .should("be.visible")
            .click();
        this.verifyOnCartPage();
    }

    convertToRemoveDataTest(productName :string) {
        return `remove-${productName
            .toLowerCase()                // Chuyển toàn bộ thành chữ thường
            .replace(/[^a-z0-9]+/g, "-")  // Thay khoảng trắng và ký tự đặc biệt bằng "-"
            .replace(/^-+|-+$/g, "")      // Xóa dấu "-" ở đầu và cuối nếu có
        }`;
    }

    removeFromCart(productName :string) {
        const removeButton = `button[data-test="${this.convertToRemoveDataTest(productName)}"]`;
        cy.get(removeButton).click();
    }
    
    continueShopping()
    {
        cy.get(this.continueShoppingButton)
            .should("be.visible")
            .click();
    }

    goToCheckout()
    {
        cy.get(this.checkoutButton)
            .should("be.visible")
            .click();
    }

}export default new CartPage();