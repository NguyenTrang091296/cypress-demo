import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import loginData from '../../fixtures/ui/loginData.json';
import productData from '../../fixtures/ui/productData.json';

describe('Verify function on Inventory Page', () => {
  it('Should view information product successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
  });
  it('Should add product to cart successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.addToCart(productData.productName);
  });
  it('Should remove product to cart successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.addToCart(productData.productName);
     InventoryPage.removeToCart(productData.productName);
  });
});

describe('Verify function on Inventory item Page', () => {
  it('Should add product to cart from Inventory item successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
    InventoryPage.addToCart(productData.productName);
  });
  it('Should remove product to cart from Inventory item successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
    InventoryPage.addToCart(productData.productName);
    InventoryPage.removeToCart(productData.productName);
  });
  it('Back to products from Inventory item successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
    InventoryPage.clickFirstProduct();
    InventoryPage.checkInformationProduct(productData.productName, productData.decs, productData.price);
    InventoryPage.backToProduct();
    InventoryPage.verifyOnInventoryPage();
  });
});

describe('Sort Products Test', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    InventoryPage.verifyOnInventoryPage();
  });

  it('Sort by name A → Z', () => {
    InventoryPage.sortProducts('Name (A to Z)');
    InventoryPage.verifySortByName('asc');
  });

  it('Sort by name Z → A', () => {
    InventoryPage.sortProducts('Name (Z to A)');
    InventoryPage.verifySortByName('desc');
  });

  it('Sort by price Low → High', () => {
    InventoryPage.sortProducts('Price (low to high)');
    InventoryPage.verifySortByPrice('asc');
  });

  it('Sort by price High → Low', () => {
    InventoryPage.sortProducts('Price (high to low)');
    InventoryPage.verifySortByPrice('desc');
  });
});