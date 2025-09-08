// cypress/pages/InventoryPage.ts
class InventoryPage {
  appLogo = '.app_logo';
  sortDropdown = '.product_sort_container';
  addToCartButton = '#add-to-cart';
  removeButton = '#remove';
  backToProductLink = '#back-to-products';
  productItem = '.inventory_item';
  productName = '[data-test="inventory-item-name"]';
  productDesc = '[data-test="inventory-item-desc"]';
  productPrice = '[data-test="inventory-item-price"]';
  inventoryBtn = '.btn_inventory';
  


  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.appLogo).should('contain', 'Swag Labs');
    cy.contains('Products').should('be.visible');
  }

  clickFirstProduct() {
    cy.get(this.productName).first().click();
  }
   checkInformationProduct(nameProduct: string, description: string, priceProduct: string) {
    cy.get(this.productName)
      .should('exist')
      .and('be.visible')
      .and('contain.text', nameProduct);

    cy.get(this.productName).first()
      .should('have.text', nameProduct);

    cy.get(this.productDesc)
      .should('exist')
      .and('be.visible')
      .and('contain.text', description);

    cy.get(this.productDesc).first()
      .should('have.text', description);

    cy.get(this.productPrice)
      .should('exist')
      .and('be.visible')
      .and('contain.text', priceProduct);

    cy.get(this.productPrice).first()
      .should('have.text', priceProduct);

    cy.log(`✅ Product: ${nameProduct} | ${description} | ${priceProduct}`);
  }


  addToCart(productName: string) {
    cy.log(`Adding product "${productName}" to cart`);
    
    cy.get("body").then(($body) => {
      if ($body.find(this.productItem).length > 0) {
        
        cy.get(this.productItem)
          .contains(productName)
          .parents(this.productItem)
          .find(this.inventoryBtn)
          .should('have.text', "Add to cart")
          .click();
      } else {
       
        cy.get(this.addToCartButton)
          .should("be.visible")
          .click();
      }
    });
  }
  
  removeToCart(productName: string) {
    cy.log(`Adding product "${productName}" to cart`);
    
    cy.get("body").then(($body) => {
      if ($body.find(this.productItem).length > 0) {
        cy.get(this.productItem)
          .contains(productName)
          .parents(this.productItem)
          .find(this.inventoryBtn)
          .should('have.text', "Remove")
          .click();
      } else {
        cy.get(this.removeButton)
          .should("be.visible")
          .click();
      }
    });
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
