function countEven(number){
 let even = 0

 for(let i = 0; i < number.length; i = i+1){
    if(number[i] % 2 === 0) {
        even = even + 1
    }
 }
 return even
}

let total_count = countEven([1, 2, 3, 4, 5])
console.log(total_count)