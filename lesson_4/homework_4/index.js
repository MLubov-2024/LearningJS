//1
// function test (num) {
//     return num * num;
// }
// console.log(test(5));

// const test = function (num) {
//        return num * num;
//  }
//      console.log(test(6));

// const test = (num) => {
//     return num * num;
// }
//   console.log(test(9));

//2
// function test (a,b) {
//     return (a + b);
// }
// console.log(test(1,8));

// const test = function (a,b) {
//     return (a + b);
// }
// console.log(test(1,8));

// const test = (a,b) => {
//     return (a+b);
// }
// console.log(test(1,8));

//3
// function test (a,b,c) {
//     return (a - b)/c;
// }
// console.log(test(5,1,2));

// const test = function (a,b,c) {
//     return (a - b)/c;
// }
// console.log(test(5,1,2));

// const test = (a,b,c) => {
//     return (a - b)/c;
// }
// console.log(test(5,1,2));

//4
// function test (day) {
//     switch (day) {
//         case 1: return 'Пн';
//         break;
//         case 2: return 'Вт';
//         break;
//         case 3: return 'Ср';
//         break;
//         case 4: return 'ЧТ';
//         break;
//         case 5: return 'Пт';
//         break;
//         case 6: return 'Сб';
//         break;
//         case 7: return 'Вс';
//         break;
//         default: console.log("Ошибка ввода")
//         break;
//     }   
// }
// console.log(test(3));

// const test = function (day) {
//     switch (day) {
//         case 1: return 'Пн';
//         break;
//         case 2: return 'Вт';
//         break;
//         case 3: return 'Ср';
//         break;
//         case 4: return 'ЧТ';
//         break;
//         case 5: return 'Пт';
//         break;
//         case 6: return 'Сб';
//         break;
//         case 7: return 'Вс';
//         break;
//         default: console.log("Ошибка ввода")
//         break;
//     }   
// }
// console.log(test(3));

// const test = (day) => {
//     switch (day) {
//         case 1: return 'Пн';
//         break;
//         case 2: return 'Вт';
//         break;
//         case 3: return 'Ср';
//         break;
//         case 4: return 'ЧТ';
//         break;
//         case 5: return 'Пт';
//         break;
//         case 6: return 'Сб';
//         break;
//         case 7: return 'Вс';
//         break;
//         default: console.log("Ошибка ввода")
//         break;
//     }   
// }
// console.log(test(5));

//5
// function test (a,b) {
//     if (a==b) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(4,1));

// const test = function (a,b) {
//     if (a == b) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(4,3));

// const test = (a,b) => {
//     if (a == b) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(4,3));

//6
// function test (a,b) {
//     if (a+b>10) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(6,5));

// const test = function (a,b) {
//     if (a+b>10) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(6,5));

// const test = (a,b) => {
//     if (a+b>10) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(6,0));

//7
// function test (a) {
//     if (a<0) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(-6));

// const test = function (a) {
//     if (a<0) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(-6));

// const test = (a) => {
//     if (a<0) {
//         return true;
//     }
//     else return false;
// }
// console.log(test(6));

//8
// function isNumberInRange (a) {
//     if (a>0 && a<10) {
//         return true;
//     }
//     else return false;
// }
// console.log(isNumberInRange(5));

// const isNumberInRange = function (a) {
//     if (a>0 && a<10) {
//         return true;
//     }
//     else return false;
// }
// console.log(isNumberInRange(5));

// const isNumberInRange = (a) => {
//     if (a>0 && a<10) {
//         return true;
//     }
//     else return false;
// }
// console.log(isNumberInRange(5));

//9
// function isEven (a) {
//     if (a % 2 == 0) {
//         return true;
//     }
//     else return false;
// }
// console.log(isEven(7));

// const isEven = function (a) {
//     if (a % 2 == 0) {
//         return true;
//     }
//     else return false;
// }
// console.log(isEven(7));

const isEven = (a) => {
    if (a % 2 == 0) {
        return true;
    }
    else return false;
}
console.log(isEven(7));


