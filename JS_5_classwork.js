
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let minNumber = (number1, number2, number3)=> {
//     if (number1<number2 && number1<number3){
//         console.log(number1)
//     }else if (number2<number1 && number2<number3){
//         console.log(number2)
//     }else {
//         console.log(number3)
//     }
// }
// minNumber(4000,100,200);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (number1, number2, number3)=> {
//     if (number1>number2 && number1>number3){
//         console.log(number1)
//     }else if (number2>number1 && number2>number3){
//         console.log(number2)
//     }else {
//         console.log(number3)
//     }
// }
// maxNumber(4000,100,200);

// - створити функцію яка повертає найбільше число з масиву

// let arrayOfNumbers = [15,43,58,400,100500,-17,0];
// let maxNumber = (array)=>{
//     let max=array[0];
//     for (const item of array){
//         if (item>max){
//             max=item;
//         }
//     }
//     return max
// }
// console.log(`${maxNumber(arrayOfNumbers)}`);
// document.write(`<h2>Найбільший елемент масиву: ${maxNumber(arrayOfNumbers)}</h2>`);

// - створити функцію яка повертає найменьше число з масиву

// let arrayOfNumbers = [15,43,58,400,100500,-17,0];
// let minNumber = (array)=>{
//     let min=array[0];
//     for (const item of array){
//         if (item<min){
//             min=item;
//         }
//     }
//     return min
// }
// console.log(`${minNumber(arrayOfNumbers)}`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayOfNumbers = [15,43,58,400,100500,-17,0];
// let sumOfArray = (array) =>{
//     let sum = 0;
//     for (const item of array){
//         sum=item+sum;
//     }
//     return sum
// }
//
// console.log(`${sumOfArray(arrayOfNumbers)}`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayOfNumbers = [15,43,58,400,100500,-17,0];
// let sumOfArray = (array) =>{
//     let sum = 0;
//     for (const item of array){
//         sum=item+sum;
//     }
//     return sum/array.length
// }
// console.log(`${sumOfArray(arrayOfNumbers)}`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// const minMax = (...numbers) =>{
//     let min = numbers[0];
//     let max = numbers[0];
//     for (const item of numbers) {
//         if (item>max){
//             max=item;
//         }
//         if (item<min){
//             min=item;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(`${minMax(100,8000,851,866,1298)}`)

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arrayOfRandomNumbers = (length)=>{
//     let randomArray=[];
//     for (let i = 0; i < length; i++) {
//         randomArray.push(Math.round(Math.random()*100))
//     }
// return randomArray;
// }
// console.log(`${arrayOfRandomNumbers(20)}`)


// let arrayOfRandomNumbers = (limit,length)=>{
//     let randomArray=[];
//     for (let i = 0; i < length; i++) {
//         randomArray.push(Math.round(Math.random()*limit))
//     }
// return randomArray;
// }
// console.log(`${arrayOfRandomNumbers(100,10)}`)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].



// let arrayInitial = [1, 2, 3, 4];
//
// let reversedArray = (array) => {
//     let newArray = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[ri] = array[i];
//     }
//     return newArray;
// }
//
// console.log(reversedArray(arrayInitial));

