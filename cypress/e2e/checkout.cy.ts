import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckOutPage from '../pages/CheckOutPage';
import OrderPage from '../pages/OrderPage';
import loginData from '../fixtures/loginData.json';
import productData from '../fixtures/productData.json';
import userData from '../fixtures/userData.json';

describe('Verify function on Checkout Page', () => {
  
   it('Should checkout successfully', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.oneStepCheckout(userData.validUser.firstName, userData.validUser.lastName, userData.validUser.zipCode);
      CheckOutPage.twoStepCheckout();
      CheckOutPage.finishCheckout();
      OrderPage.verifyOnOrderPage();
  });

  it('Cancel checkout successfully on the one-step checkout page', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.cancelCheckout();
      CartPage.verifyOnCartPage();
  });
  it('Cancel checkout successfully on the two-step checkout page', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.oneStepCheckout(userData.validUser.firstName, userData.validUser.lastName, userData.validUser.zipCode);
      CheckOutPage.twoStepCheckout();
      CheckOutPage.cancelCheckout();
      InventoryPage.verifyOnInventoryPage();
  });

   it('Checkout with missing first name', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.oneStepCheckout(userData.emptyUser.firstName, userData.validUser.lastName, userData.validUser.zipCode);
      CheckOutPage.verifyErrorMessage("Error: First Name is required");
  });
   it('Checkout with missing last name', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.oneStepCheckout(userData.validUser.firstName, userData.emptyUser.lastName, userData.validUser.zipCode);
      CheckOutPage.verifyErrorMessage("Error: Last Name is required");
   });
   it('Checkout with missing postal code', () => {
      LoginPage.visit();
      LoginPage.login(loginData.validUser.username, loginData.validUser.password);
      InventoryPage.verifyOnInventoryPage();
      InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
      InventoryPage.addToCart(productData.productName);
      CartPage.goToCart();
      CartPage.goToCheckout();
      CheckOutPage.oneStepCheckout(userData.validUser.firstName, userData.validUser.lastName, userData.emptyUser.zipCode);
      CheckOutPage.verifyErrorMessage("Error: Postal Code is required");
  });
});

