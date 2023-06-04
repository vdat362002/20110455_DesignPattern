const PromotionStrategy = require('./PromotionStrategy');

class NewYearPromotion extends PromotionStrategy {
    getFinalPrice(price) {
        console.log(price * 0.8);
    }
}

module.exports = NewYearPromotion;