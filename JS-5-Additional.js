// - Дано натуральное число n. Выведите все числа от 1 до n.

// let nums=(n)=>{
//     for (let i=1; i<n; i++) {
//         console.log(i)
//     }
// };
// nums(+prompt('enter n'));

// - Даны два целых числа A и В .
//     Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке
//     убывания в противном случае.

// let numbers=(A,B)=>{
//     if(A<B){
//         for(let i=A; i<=B; i++){
//          console.log(i)
//         }
//     } else if (A>B){
//         for(let i=A; i>=B; i--){
//             console.log(i)
//         }
//     }else {
//         console.log('numbers are equal')
//     }
// }
// numbers(10,20);
// numbers(10,5);
// numbers(100,100);

// let foo=(arr,i)=>{
//     for (const item of arr){
//         if (arr.indexOf(item)===i){
//            arr.splice(i, 2, arr[i+1], arr[i]);
//            console.log(arr);
//         }
//     }
// }
// foo([9,8,0,4], 0);
// foo([9,8,0,4], 1);
// foo([9,8,0,4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//      => [1,2,3,4,0]
//        => [1,0,0,0]
// let x = (arr)=> {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0){
//             arr.splice(i,1);
//             arr.push(0);
//             console.log(arr)
//         }
//     }
//    }
// x([1,0,6,0,3]);
// x([0,1,2,3,4]);
// x([0,0,1,0]);