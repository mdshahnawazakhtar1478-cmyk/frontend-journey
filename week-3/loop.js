function orderMedicine(orderlist){
    let inventory = ["paracetemol", "pan_d", "pan_40", "ascoril", "rosuvas" ]
    let price = [40, 200, 180, 150, 120]

    for (let i = 0; i < orderlist.length; i = i+1){
        let x = orderlist[i]
        console.log(x)
    }
}

let orderlist = ["pan_d", "ascoril", "paracetemol"]
orderMedicine(orderlist)