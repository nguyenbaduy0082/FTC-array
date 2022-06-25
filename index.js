// Đảo ngược mảng [1, 2, 3, 4, 5] mà không dùng phương thức array.reverse()

// Đầu vào: [1, 2, 3, 4, 5]

/* var duy = [1, 2, 3, 4, 5] */

// Đầu ra: [5, 4, 3, 2, 1]

/* var duy1 = [duy[4], duy[3], duy[2], duy[1], duy[0]]

console.log(duy1) */




// Làm phẳng mảng 2 chiều [[“a", “b"], [“c", “d"], [“e", “f”]] thành mảng một chiều
// Đầu vào: [[“a", “b"], [“c", “d"], [“e", “f”]]

/* var duy = [["a", "b"], ["c", "d"], ["e", "f"]] */

// Đầu ra: [“a", “b", “c", “d", “e", “f”]

/* console.log(duy.flat()) */



// Lọc các phần tử lớn hơn 5 trong mảng và các phần tử tìm được vào mảng mới, sau đó sắp xếp mảng đó theo thứ tự từ lớn tới nhỏ:


// Đầu vào: [1, 4, 90, 5, 6, 33, 2, 3, 51]

/* var duy = [1, 4, 90, 5, 6, 33, 2, 3, 51] */

// dùng fifter lọc phần tử lớn hơn 5 trong mảng và phần tử tìm được vào bảng mới

/* var duy1 = duy.filter(function(number) {
    return number > 5    
} ) */

// dùng sort để sắp xếp mảng thoe thứ tự nhỏ dần


/* duy1.sort(function(a, b){
    return b-a
})
 */
// Đầu ra: [90, 51, 33, 6]

/* console.log(duy1) */




// Tính tổng các phần tử trong mảng:
// Đầu vào: [1, 4, 90, 5, 6, 33, 2, 3, 51]

/* var duy = [1, 4, 90, 5, 6, 33, 2, 3, 51]


var duy1 = duy.reduce(function(previousValue, currentValue){
    return previousValue + currentValue   // previousValue: giá trị trước đó + currentValue: giá trị hiện tại ==> kết quả
}, 0) // initialValue: giá trị đầu tiên đc chỉ định (0) */


// Đầu ra: 195
/* console.log(duy1) */




// Tạo ra một mảng mới trong đó các phần tử của mảng mới bằng phần tử của mảng ban đầu cộng thêm 5:
// Đầu vào: [5, 8, 3, 12, 66, 2]
/* 
var duy = [5, 8, 3, 12, 66, 2]

var duy1 = duy.map(x => x + 5)   */


// Đầu ra: [10, 13, 8, 17, 71, 7]
/* 
console.log(duy1) */





// Lọc các phần tử chia hết cho 2 trong mảng, sau đó cộng tổng tất cả các phần tử đó lại:
// Đầu vào: [5, 8, 3, 12, 66, 2]

/* var duy = [5, 8, 3, 12, 66, 2] */

// Lọc các phần tử chia hết cho 2 trong mảng


/* var duy1 = duy.filter(function(num){
    return num % 2 == 0
}) */

// tổng tất cả các phần tử lại

/* var duy2 = duy1.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
}, 0) */

// Đầu ra: 88

/* console.log(duy2)
 */




// Biến đổi tất cả các phần tử của mảng sau thành kiểu chữ in hoa:
// Đầu vào: ["avengers", "captain america", "ironman", "black panther"]


/* const duy2 = ["avengers", "captain america", "ironman", "black panther"] */

// Đầu ra: [“AVENGERS”, “CAPTAIN AMERICA”, “IRONMAN”, “BLACK PANTHER”]

/* console.log(duy2.toString().toUpperCase()); */




// // Cho một mảng bao gồm các tên riêng, kiểm tra từng phần tử trong mảng và tạo ra mảng mới tương ứng với điều kiện,
//  nếu phần tử nào ở mảng ban đầu có chiều dài ít hơn 3 ký tự thì thay thế bằng số -1 trong mảng mới,
//   nếu phần tử nào có chiều dài bằng 3 ký tự thì thay thế bằng số 0 trong mảng mới, còn nếu phần từ nào có chiều dài lớn hơn 3 ký tự thì thay thế bằng số 1:



// Đầu vào: [“Hùng", “Duy”, “Tuấn", “An”, “Hoàng", Đức"]

/* var duy = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"] */


// Đầu ra: [1, 0, 1, -1, 1, 0]

/* console.log(duy)
 */
