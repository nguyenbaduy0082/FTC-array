// // bài 2
// // Tạo một function nhận vào một mảng. sau đó trả về một phần tử ngẫu nhiên trong mảng đó
// // Đầu vào: [32, “abc", true, 65]
// // Trả về: true
// // --------------------
// // Đầu vào: [32, “abc", true, 65]
// // Trả về: 65

// function arrayRandom(arr){
//     return arr[Math.floor(Math.random() * 4)]
// }

// var myArray = arrayRandom([32, "abc", true, 65])

// console.log(myArray)



// // bai 4
// // Tạo một function nhận vào một mảng các số. Trả về số lớn nhất, nhỏ nhất và tổng các phần tử trong mảng đó
// // Đầu vào: [1, 3, 2, 8, 4, 5]
// // Trả về: { max: 8, min: 1, sum: 23 }

// function arrayMax(max){
//     return Math.max.apply(Math, max)
// }

// function arrayMin(min){
//     return Math.min.apply(Math, min)
// }

// function arrTotal(total){
//     var sum = 0
//     total.map(function(value){
//         sum += value
//     })
//     return sum;
// }

// var myArrayTotal = arrTotal([1, 3, 2, 8, 4, 5])

// var myArrayMax = arrayMax([1, 3, 2, 8, 4, 5])

// var myArrayMin = arrayMin([1, 3, 2, 8, 4, 5])

// console.log(`max: ${myArrayMax}`, `min: ${myArrayMin}`, `sum: ${myArrayTotal}`)

