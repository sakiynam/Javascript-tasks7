// // Task - 1
// let arr = [656, 59, "Hello", 26, "ball", "tea", "world"];

// function indexOfNumber(arg) {
// let index = arr.indexOf("tea")

//     if(index !== -1){
//         return(index = index * index);
//     }
//     else{
//         return"Mavjud emas";
//     }
// }

// console.log(indexOfNumber(arr));



// // Task - 2
// let arr1 = ["3", "massivs"];
// let arr2 = ["There", "are"];
// let arr3 = ["in", "this", "function"];
// let arr4 = arr2.concat(arr1, arr3);

// console.log(arr4);



// // Task - 3
// let arr = [3, 7, 15, 68, 48];

// let a = arr.find((value, index, arr) => {
//     return value ** 2;
// })

// console.log(a);



// // // Task - 4
// let arr = [46, 58, 15, 17, 3, 20];

// function ToqlarSoni(arg) {
//     let counter = 0;
//     arr.forEach((value, index, arr) => {
//             if (value % 2 !== 0){
//                 counter++
//             }
//     })
//     return counter
// }
// console.log(ToqlarSoni(arr));



// Task - 5
let arr = ["love", "world", "bear", "number"];          

function LastLetters(arg) {
    let NewMassiv = []
    let lastletter = arr[arr.length - 1]
    arr.forEach((value, index, arr) => {
        NewMassiv.push(lastletter)
    })
    return NewMassiv
}
console.log(LastLetters(arr));

// Task - 6
// let arr = [20, 56, 77, 7, 23, 223,]



