class PromotionStrategy {
    getFinalPrice(price) {
        throw new Error('getFinalPrice method must be implemented');
    }
}

module.exports = PromotionStrategy;