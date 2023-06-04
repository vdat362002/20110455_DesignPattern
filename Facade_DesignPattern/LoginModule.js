class LoginModule {
    login(username, password) {
      console.log(`Logging in with username: ${username} and password: ${password}`);
    }
  
    logout() {
      console.log('Logging out');
    }
  }
  
  module.exports = LoginModule;

  