        //if-else
//№1
// const a=-3;
// if (a == 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№2
// const a=1;
// if (a > 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№3
// const a=-3;
// if (a < 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№4
// const a=-3;
// if (a >= 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№5
// const a=-3;
// if (a <= 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№6
// const a=-3;
// if (a != 0) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№7
// const a="Test";
// if (a == "test") {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№8
// const a="1";
// if (a === 1) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//Работа с логическими переменными
//№1
// let test=true; //обобщенно
// if (test == true) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

// let test = false; //обобщенно сокр
// if (test) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

// let test=true; //на ложь
// if (!test ) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

// let test=true; //на истину
// if ( test ) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//№2
// let test=false; //общ
// if (test!==true ) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }
// let test=true; // сокр
// if (!test) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

//Работа с && (и) и || (или)
//№1
// const a=2;
// if (a > 0 && a < 5) {
//     console.log("Верно");
// }
//     else {
//     console.log("Неверно");
// }

// //№2
// const a=2;
// if (a == 0 || a == 2) {
//     console.log(a+7);
// }
//     else {
//     console.log(a/10);
// }

// //№3
// const a=3;
// const b=5;
// if (a <= 1 && b >= 3) {
//     console.log(a+b);
// }
//     else {
//     console.log(a-b);
// }

//№4
// const a=5;
// const b=0;
// if (a > 2 && a < 11 || b >=6 && b < 14) {
//         console.log("Верно");
//     }
//         else {
//         console.log("Неверно");
//     }

    //На switch-case
//№1
// const num=5;
// switch (num) {
//     case 1:
//     console.log("Зима");
//     break;
//     case 2:
//     console.log("Весна");
//     break;
//     case 3:
//     console.log("Лето");
//     break;
//     case 4:
//     console.log("Осень");
//     break;
//     default:
//         console.log("Фигня");
//     break;
// }

//Циклы while и for
//№1
//выведем последовательно числа 
// for (let i=1; i<=100; i++ ) {
//     console.log(i);
// }

// let i=1;
// while (i<=100) {
//     console.log(i);
// i++;
// }

//№2
// for (let i=11; i<=33; i++ ) {
//     console.log(i);
// }

// // let i=11;
// // while (i<=33) {
// //     console.log(i);
// // i++;
// // }

//№3
//будем увеличивать счетчик не на 1, а на 2
// for (let i=2; i<=100; i+=2 ) {
//     console.log(i);
// }

// let i=2;
// while (i<=100) {
//     console.log(i);
// i+=2;
// }

//№4
//в цикле перебираются числа и их сумма последовательно записывается в какую-то переменную
// let sum = 0; 
// for (let i=1; i<=100; i++ ) {
//     sum = sum+i; 
// }
// console.log(sum);

let i=1;
let sum = 0;
while (i<=100) {
    sum+=i;
    i++;
}
console.log(sum); 















