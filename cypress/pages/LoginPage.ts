class LoginPage {
  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';

  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  login(username: string, password: string) {
     if (username) {
      cy.get(this.usernameInput).should('be.visible');
      cy.get(this.usernameInput).type(username);
     }
    if (password) {
    cy.get(this.passwordInput).should('be.visible');
    cy.get(this.passwordInput).type(password);
    }
    cy.get(this.loginButton).click();
  }
}

export default new LoginPage();
