const Product = require('./Product');
const NoPromotion = require('./NoPromotion');
const NewYearPromotion = require('./NewYearPromotion');
const BlackFridayPromotion = require('./BlackFridayPromotion');

const product = new Product(100, new NoPromotion());
product.getPrice();

product.setPromotionStrategy(new NewYearPromotion());
product.getPrice();

product.setPromotionStrategy(new BlackFridayPromotion());
product.getPrice();