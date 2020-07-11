// let animalArrey = ['dog','cat'];
// //  номера переменных: 0   1

// animalArrey.push('my-string1');
// animalArrey.push('my-string2');
// animalArrey.push('my-string3');

// for (let i = 0; i<3; i++) {
//     console.log(animalArrey[i]);
// }

// for (let i = 0; i<animalArrey.length; i++) {
//     console.log(animalArrey[i]);
// }

// console.log('////////////');

// for (const elementFromArrey of animalArrey) {
//     console.log(elementFromArrey);
// }






// выводить квадрат числа
// let firstArrey = [2, 4, 44, 645, 656];
// let secondArrey = [];

// for (let element of firstArrey) {
//     let x = element * element;
//     secondArrey.push(x);
// }

// console.log(secondArrey);






// подсчитать сумму и произведение всех элементов для массива [1, 2, 3, 4, 1234] через for и forEach

let firstArrey = [1, 2, 3, 4, 1234];

let summa = 0;
let multiplicashion = 1;

for (let i = 0; i < firstArrey.length; i++) {
    summa = summa + firstArrey[i];
    multiplicashion = multiplicashion * firstArrey[i];
}

console.log(summa);
console.log(multiplicashion);




//сохранить данные о пользователе
// if (localStorage.getItem('exist')) {

// } else {
//     alert ('hello');
//     localStorage.getItem('exist','1');

// }

// //удалить
// localStorage.setItems('exist','')






// в первый и третий раз на сайт выводить приветствие "hello"
debugger
const numberEntryKey = 'number-Entry-key';

let numberEntry = localStorage.getItem(numberEntryKey);

if (!numberEntry) {
localStorage.setItem(numberEntryKey, '1')
} 
numberEntry = +localStorage.getItem(numberEntryKey);

if (numberEntry === 1 || numberEntry === 3) {
    alert('hello');
}

numberEntry++;
localStorage.setItem(numberEntryKey,numberEntry);