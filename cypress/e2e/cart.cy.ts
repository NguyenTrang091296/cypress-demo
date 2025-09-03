import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import loginData from '../fixtures/loginData.json';


describe('Add to Cart Test', () => {
  it('Should add product to cart successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.addToCart();
  });
  it('Should remove product to cart successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.addToCart();
    InventoryPage.removeToCart();
  });
  it('Back to products from product detail', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.backToProduct();
    InventoryPage.verifyOnInventoryPage();
  });
});
