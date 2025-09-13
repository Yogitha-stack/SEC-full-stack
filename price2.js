function calculatePrice(distance) {
    let price = 0;
    if (distance <= 4) {
        price = 30;
    } else {
        price = 30;

        if (distance <= 9) {
    
            price += (distance - 4) * 10;
        } else {
            price += 5 * 10;

            if (distance <= 19) {
                price += (distance - 9) * 15;
            } else {
                      price += 10 * 15;
                price += (distance - 19) * 20;
            }
        }
    }
    return price;
}
const distanceTravelled = 19.5;
const totalPrice = calculatePrice(distanceTravelled);
console.log("total price is:"+totalPrice);