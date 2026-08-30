function order_grocery(orderlist) {
    let grocery_item = ["rice", "wheat", "sugar", "onion", "potato", "oil"]
    let grocery_price = [95, 120, 250, 150, 50, 180]
    let bucket_item = []
    let price = []

    for (let i = 0; i < orderlist.length; i = i+1) {
        let x = orderlist[i]
        console.log(x)

        for (let j = 0; j < grocery_item.length; j = j+1) {
            let y = grocery_item[j]
            let y_price = grocery_price[j]

            if (x == y) {
                bucket_item.push(x)
                price.push(y_price)
            }
        }
    }
    return [bucket_item, price];
}

let order_list = ["wheat", "oil", "onion", "rice" ]
let carry_bag = order_grocery(order_list)
console.log(carry_bag)

let grocery_list = carry_bag[0];
console.log(grocery_list)
let price_list = carry_bag[1];
console.log(price_list)

function sum(prices) {
    let total = 0;
    
    for (let i = 0; i < prices.length; i = i + 1) {
        let price = prices[i];
        total = total + price
    }
    return total
}

let total_prices = sum(price_list)
console.log(total_prices)