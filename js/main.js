/* 1. Вибрати дію
1 - Баланс

2 - Покласти
  = вивести Баланс

3 - Зняти
  - вивести баланс

  !!! перевірка що вистає коштів
*/

// let a = 5;
// a = a + 3;

let action1 = 'Баланс';
let action2 = 'Покласти';
let action3 = 'Зняти';
let balance = +'1000';

let userAction = prompt('Вибрати дію');
  
let userSum = +prompt('Сума:');
let res = balance + userSum;
let res2 = balance - userSum;

console.log('Action 1: ', action1);
console.log('Action 2: ', action2);
console.log('Action 3: ', action3);

if (userAction === action1) {
  console.log('Баланс:', balance);
}

if (userAction === action2) {
  userSum = +prompt('Сума:');
  console.log('Сума: ', res);
}

if (userAction === action3) {
  userAction = prompt('Вибрати дію');
  console.log('Баланс:', balance);
  userSum = +prompt('Сума:');
  console.log('Сума: ', res2);
}
