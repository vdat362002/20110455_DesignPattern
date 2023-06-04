const PromotionStrategy = require('./PromotionStrategy');

class BlackFridayPromotion extends PromotionStrategy {
    getFinalPrice(price) {
        console.log(price * 0.5);
    }
}

module.exports = BlackFridayPromotion;