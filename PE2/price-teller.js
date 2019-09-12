let _prices = [];

// [{ gasolinType: '95E', price: 1.489 }, 
//  { gasolinType: 'Diesel', price: 1.299 },...]

const setPrices = prices => {
    _prices = prices;
}

const simpleTest = () => {
    return "Surprise!";
}

const getPrice = gasolinType => {
    for (let i = 0; i < _prices.length; i++) {
        if (gasolinType === _prices[i].gasolinType) {
            return _prices[i].price;
        }
    }
    return "No price for this gasolin type!";
}

module.exports.setPrices = setPrices;
module.exports.getPrice = getPrice;