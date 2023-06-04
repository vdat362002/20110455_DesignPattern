class UserModule {
    createUser(user) {
      console.log(`Creating user: ${user}`);
    }
  
    getUser(userId) {
      console.log(`Getting user with ID: ${userId}`);
    }
  }
  
  module.exports = UserModule;

  