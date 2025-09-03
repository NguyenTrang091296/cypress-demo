// cypress/pages/InventoryPage.ts
class InventoryPage {
  appLogo = '.app_logo';
  productName = '.inventory_item_name';
  productPrice = '.inventory_item_price';
  sortDropdown = '.product_sort_container';
  addToCartButton = '#add-to-cart';
  removeButton = '#remove';
  backToProductLink = '#back-to-products';

  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.appLogo).should('contain', 'Swag Labs');
    cy.contains('Products').should('be.visible');
  }

  clickFirstProduct() {
    cy.get(this.productName).first().click();
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
    cy.contains('Remove').should('be.visible');
  }

  removeToCart() {
    cy.get(this.removeButton).click();
    cy.contains('Add to cart').should('be.visible');
  }
  
  backToProduct() {
    cy.get(this.backToProductLink).click();
  }
  sortProducts(option: string) {
    cy.get(this.sortDropdown).select(option);
  }

  verifySortByName(order: 'asc' | 'desc') {
    cy.get(this.productName).then(($els) => {
      const names = [...$els].map(el => el.textContent!.trim());
      const sorted = [...names].sort((a, b) =>
        order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
      );
      expect(names).to.deep.equal(sorted);
    });
  }

  verifySortByPrice(order: 'asc' | 'desc') {
    cy.get(this.productPrice).then(($els) => {
      const prices = [...$els].map(el => parseFloat(el.textContent!.replace('$', '')));
      const sorted = [...prices].sort((a, b) =>
        order === 'asc' ? a - b : b - a
      );
      expect(prices).to.deep.equal(sorted);
    });
  }
}

export default new InventoryPage();
