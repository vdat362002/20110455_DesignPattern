class Product {
    constructor(price, promotionStrategy) {
        this.price = price;
        this.promotionStrategy = promotionStrategy;
    }

    setPromotionStrategy(promotionStrategy) {
        this.promotionStrategy = promotionStrategy;
    }

    getPrice() {
        this.promotionStrategy.getFinalPrice(this.price);
    }
}

module.exports = Product;