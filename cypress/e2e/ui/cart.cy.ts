import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import loginData from '../../fixtures/loginData.json';
import productData from '../../fixtures/productData.json';

describe('Verify function on Cart Page', () => {
  it('Go to Cart page', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
  });

  it('Continue shopping from Cart', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.continueShopping();
  });
  it('Check product information on Cart', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
  });
  it('Remove product information on Cart', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.removeFromCart(productData.productName);
  });

   it('Go to Checkout', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
  });
});

