const AppFacade = require('./AppFacade');

const facade = new AppFacade();
facade.createUserAndSendEmail('Tran Quoc Tuan', 'tranquoctuan@gmail.com');
facade.loginAndSendEmail('tranquoctuan', 'tuan@@123', 'tranquoctuan@gmail.com');



