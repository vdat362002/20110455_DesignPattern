const PromotionStrategy = require('./PromotionStrategy');

class NoPromotion extends PromotionStrategy {
    getFinalPrice(price) {
        console.log(price);
    }
}
module.exports = NoPromotion;

