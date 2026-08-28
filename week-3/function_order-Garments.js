function orderGarments(order_list) {
    let godown = ["shirt", "pant", "jeans", "t-shirt", "sherwani", "suit"]
    let price = [250, 400, 700, 450, 2800, 3500]
    let garment_items = []
    let garments_prices = []

    for (let i = 0; i < order_list.length; i = i+1 ) {
        let x = order_list[i]
        // console.log(x)

        for (let j = 0; j < godown.length; j = j+1) {
           let y = godown[j]
           let y_amount = price[j]

           if (x == y) {
            garment_items.push(x)
            garments_prices.push(y_amount)
           }
        }
    }
    return[garment_items, garments_prices]
}

let orderlist = ["t-shirt", "sherwani", "shirt", "jeans"]
let package = orderGarments(orderlist)
console.log(package)

let garment_list = package[0]
console.log(garment_list)
let price_list = package[1]
console.log(price_list)

function sum (prices) {
    let total = 0
    for (let i = 0; i < prices.length; i = i+1) {
        let price = prices[0]
        total = total + price
    }
    return total
}
 let total_price = sum(price_list)
 console.log(total_price)