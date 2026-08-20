function orderMedicine(orderlist){
    let inventory = ["paracetemol", "pan_d", "pan_40", "ascoril", "rosuvas" ]
    let price = [40, 200, 180, 150, 120]
    let bucket_items = [];
    let bucket_prices = [];


    for (let i = 0; i < orderlist.length; i = i+1) {
        let x = orderlist[i] 
        // console.log(x)

        for (let j = 0; j < inventory.length; j = j+1 ) {
            let y = inventory[j]
            let y_price = price[j]
            // console.log(y)
            if (x == y) {
                bucket_items.push(x)
                bucket_prices.push(y_price)
            }
        }
    }
    return [bucket_items, bucket_prices];
}

let orderlist = ["pan_d", "ascoril", "paracetemol"]
let package = orderMedicine(orderlist)
console.log(package)
