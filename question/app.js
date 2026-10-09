/*----------q1----------*/
let nickname = 'りょーぜん';
let age = 24;

console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age +'です。') 


/*----------q2----------*/
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateText);


/*----------q3----------*/
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


/*----------q4----------*/
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1])


/*----------q5----------*/
//console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);を修正⬇︎

let averageAge = 0;

for (let i = 0; i < playerList.length; i++) {
  averageAge += playerList[i].age;
}
console.log(averageAge / playerList.length);


/*----------q6----------*/
function sayHello() {
  console.log('Hello');
}

sayHello();


let sayWorld = function() {
  console.log('World');
}

sayWorld();

/*----------q7----------*/
user.birthday = '2000-09-27';

console.log(user.birthday);


user.sayHello = function() {
  console.log('Hello！');
}

console.log(user);
user.sayHello();


/*----------q8----------*/
let calc = {};

calc.add = function (x, y) {
  console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function (x, y) {
  console.log(x - y);
};
calc.subtract(20, 10);

calc.multiply = function (x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function (x, y) {
  console.log(x / y);
};
calc.divide(10, 2);


/*----------q9----------*/
function remainder(x, y) {
  return x % y;
};
console.log('5を3で割った余りは' + remainder(5, 3) +'です。');


/*----------q10----------*/
/*
function foo() {
  let x = 1;
}
console.log(x);
*/

//変数xはfooという関数内で定義されているため、fooの関数内でしか参照できません。
//このような変数の有効範囲をスコープといい、今回の変数xはローカル変数といいます。



/*------------------------------------------応用編----------------------------------------*/
/*----------q1----------*/
let random = Math.floor(Math.random() * 10);
console.log(random);

/*----------q2----------*/
function helloWorld() {
  console.log('Hello World!');
}

setTimeout(helloWorld, 3000);


/*----------q3----------*/
let num = '5';

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


/*----------q4----------*/
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);


/*----------q5----------*/
let mixed = [4, '2', 5, '8', '9', 0, 1];

/*
for (let value of mixed) {
  if (typeof value === 'number' && value % 2 === 0) {
    console.log('even');
  } else if (typeof value === 'number' && value % 2 !== 0) {
    console.log('odd');
  } else if (typeof value !== 'number') {
    console.log('not number');
  }
} 
修正元*/

for (let value of mixed) {
  if (typeof value !== 'number') {
    console.log('not number');
  } else if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}