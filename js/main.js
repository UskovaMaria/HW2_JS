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

let action1 = '1';
let action2 = '2';
let action3 = '3';
let balance = +'1000';

let userAction = prompt('Вибрати дію: 1. Баланс; 2. Покласти; 3. Зняти;');
  
let userSum;


console.log('Баланс: ', action1);
console.log('Покласти: ', action2);
console.log('Зняти: ', action3);

if (userAction === action1) {
  console.log('Баланс:', balance);
}

if (userAction === action2) {
  userSum = +prompt('Сума:');
  balance = balance + userSum;
  console.log('Сума: ', balance);
}

if (userAction === action3) {
  userAction = prompt('Вибрати дію: 1. Баланс; 2. Покласти; 3. Зняти;');
  console.log('Баланс:', balance);
  userSum = +prompt('Сума:');
  balance = balance - userSum;
  console.log('Сума: ', balance);
}
