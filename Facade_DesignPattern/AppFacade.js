const UserModule = require('./UserModule');
const LoginModule = require('./LoginModule');
const EmailModule = require('./EmailModule');

class AppFacade {
  constructor() {
    this.userModule = new UserModule();
    this.loginModule = new LoginModule();
    this.emailModule = new EmailModule();
  }

  createUserAndSendEmail(user, email) {
    this.userModule.createUser(user);
    this.emailModule.sendEmail(email, 'Welcome!', 'Welcome to our website!');
  }

  loginAndSendEmail(username, password, email) {
    this.loginModule.login(username, password);
    this.emailModule.sendEmail(email, 'Login Alert', 'You have logged in successfully!');
  }
}

module.exports = AppFacade;

