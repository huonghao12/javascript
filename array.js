// // reduce()

// const arrList =[
//     {
//       "course_id": "CS101",
//       "course_name": "Introduction to Computer Science",
//       "price": "$49.99",
//       "amount": 200
//     },
//     {
//       "course_id": "FIN201",
//       "course_name": "Finance Fundamentals",
//       "price": "$69.99",
//       "amount": 150
//     },
//     {
//       "course_id": "PYTH101",
//       "course_name": "Python Programming",
//       "price": "$59.99",
//       "amount": 180
//     },
//     {
//       "course_id": "MKTG301",
//       "course_name": "Digital Marketing Strategies",
//       "price": "$79.99",
//       "amount": 120
//     }
// ]

// var isTrue = arrList.some(function(element ,index){
//     return element.amount < 130
// } )
// console.log({isTrue});

// const array1 = [1, 2, 3, 4];
// var total = array1.reduce(function(accumulator , currentValue){
//     return accumulator + currentValue
// })
// console.log(total);

// //Example

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

// //

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log('sum =',sum);

// Tìm chữ dài nhất đầu tiên trong mảng dùng reduce
// Input:   ['vue', 'react', 'angular', 'vuetify2', 'frontend']
// Output:  vuetify2

const wordList = ["vue", "react", "angular", "vuetify2", "frontend"];
console.log(wordList[4].length);
function findLongestWord(wordList) {
  // Write code here...
  return wordList.reduce((accumulator, currentValue) => {
    //So sánh độ dài của từ hiện tại với độ dài của newMaxLength
    var newMaxLength = Math.max(accumulator.length, currentValue.length);

    return newMaxLength > accumulator.length ? currentValue : accumulator;
  }, "");
}
console.log(findLongestWord(wordList)); // vuetify2

//
// Viết hàm để chuyển đối mảng thành object như bên dưới sử dụng reduce()
const itemList = [
  { id: "key1", value: "Tan" },
  { id: "key2", value: "Duy" },
  { id: "key3", value: "Anh" },
];

// Output:  {
//   key1: 'Tan',
//   key2: 'Duy',
//   key3: 'Anh'
// };
//

function arrayToObject(itemList) {
  // Write code here...
  return itemList.reduce((obj, item) => {
    obj[item.id] = item.value;
    return obj;
  }, {});
}

console.log(arrayToObject(itemList));

// Bonus
var array = [15, 16, 12, 18, 19];

// 1. Viết hàm findMin(numberList) sử dụng reduce()
function findMin(array) {
  return array.reduce(function (accumulator, currentValue) {
    var minArray = Math.min(accumulator, currentValue);
    return minArray < accumulator ? currentValue : accumulator;
  });
}
console.log(findMin(array));
// 2. Viết hàm findMax(numberList) sử dụng reduce()
function findMax(array) {
  return array.reduce(function (accumulator, currentValue) {
    var minArray = Math.max(accumulator, currentValue);
    return minArray > accumulator ? currentValue : accumulator;
  });
}
console.log(findMax(array));

// 3. Viết hàm chuyển

// [
//   { id: "key1", value: "Tan" },
//   { id: "key2", value: "Duy" },
//   { id: "key3", value: "Anh" },
// ]
var object = arrayToObject(itemList);
console.log(object);
function objecttoArray(object) {
  const objectArray = Object.entries(object);
  return objectArray.reduce(function (accumulator, currentValue) {
    accumulator.push({ id: currentValue[0], value: currentValue[1] });
    return accumulator;
  }, []);
}
console.log(objecttoArray(object));

//Đếm số lượng các phần tử xuất hiện trong mảng:
// output { a: 3, b: 2, c: 2 }
const items = ["a", "b", "a", "c", "b", "a", "c"];

var count = items.reduce(function (acc, cur) {
  const items = ["a", "b", "a", "c", "b", "a", "c"];
  if (acc[cur]) {
    acc[cur] = acc[cur] + 1;
  } else {
    acc[cur] = 1;
  }

  return acc;
}, {});

console.log(count);
//Nối tất cả các chuỗi trong mảng
// output 'This is a sentence'
const strings = ["This", "is", "a", "sentence"];
var a = strings.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, []);
console.log(typeof a);

//Tính trung bình cộng của một mảng số:
// input [1, 2, 3, 4, 5]
// output 3
var num = [1, 2, 3, 4, 5];
var avg =
  num.reduce((accumulator, currentValue) => accumulator + currentValue) /
  num.length;
console.log(avg);
// Loại bỏ các phần tử trùng lặp trong mảng:
// input
// output [1, 2, 3, 4, 5]
var myArray = [1, 2, 3, 2, 1, 3, 3, 4, 5, 4, 5];
var b = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.includes(currentValue) === false) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(b);
