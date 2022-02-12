// - створити функцію яка обчислює та повертає площу прямокутника

// let squareOfRectangle = (a,b)=>{
//     return a*b
// }
// console.log(squareOfRectangle(20,10))

// let squareOfRectangle = (a,b)=>a*b
// console.log(squareOfRectangle(20,10))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let sCircle = (r)=> {
//       return 3.14*r**2
// }
//  console.log(sCircle(10))

// let sCircle = (r)=> 3.14*r**2;
// console.log(sCircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let sCylinder = (r,h) =>2 * 3.14 * r * h;
//
//  console.log(sCylinder(10,10))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array=[1,2,4,'one', true];
// let arrayItem = (array)=>{
//     for (let i=0; i<array.length; i++){
//         console.log(array[i])
//     }
// }
// arrayItem(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// let text = ['these', 'is', 'an', 'initial', 'text'];
// let paragraph = (text) => {
//     let p = '';
//     for (i=text.length-1; i>=0; i--) {
//         p=text[i] + ' ' + p
//     }
//     return p
// }
// document.write(`<p>${paragraph(text)}</p>`);


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let newUl = (arg) => {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }
// newUl('item');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let newUl = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// newUl('item', 5);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array =[1000, 100, 'one', 'two',true];
// let arrayItemList = (array)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayItemList (array)

// - створити функцію яка приймає масив
// об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrayOfObject = [{id:1, name: 'Vasya', age:25}, {id:2, name: 'Kuzya', age:30}];
// let objectFromArray = (arrayOfObject)=>{
//     for(const object of arrayOfObject) {
//         document.write(`<div>${object.id}-${object.name} - ${object.age}</div>`);
//     }
// }
// objectFromArray (arrayOfObject);


