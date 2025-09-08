import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import loginData from '../../fixtures/loginData.json';


describe('Login Test', () => {
  it('Should login successfully', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.validUser.password);
    InventoryPage.verifyOnInventoryPage();
  });
  it('Login with wrong password', () => {
    LoginPage.visit();
    LoginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');
  });
  it('Login with empty account', () => {
    LoginPage.visit();
    LoginPage.login(loginData.emptyUser.username, loginData.emptyUser.password);
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });
  it('Login with empty password', () => {
    LoginPage.visit();
    LoginPage.login(loginData.validUser.username, loginData.emptyUser.password);
    cy.get('[data-test="error"]').should('contain', 'Password is required');
  });
  it('Login with account locked', () => {
    LoginPage.visit();
    LoginPage.login(loginData.lockedUser.username, loginData.lockedUser.password);
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
  });
});
