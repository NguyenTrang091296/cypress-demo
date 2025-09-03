import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

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
