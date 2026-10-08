console.log('Hello World!');

console.log('A-01', 'B-15');


/*-------------------------変数--------------------------*/      
let text = 'JavaScriptの練習';           //  let 変数名 = 値;で定義　（letは変数を定義する）
console.log(text);

text = 'JavaScriptをマスターした';        //   変数の再代入
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);
// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
//  値を変更する際に、処理②は３つとも変えないといけないが、処理①は値を変えれば3つとも変更できるため、変数はこのようなメリットがある。
//  処理①と処理②は同じ内容だが、処理①は変数を使ったまとめている。

//例１
console.log(23);
//例２
let age = 25;
console.log(age);
//  変数は名前をつけるというメリットもある。例1は何の数値か分からないが、例２は年齢であると分かる。


let testText;
console.log(testText); // => undefined　　←値が何もないとこのように表記される。 definedは定義。


let again = '定義しました';
again = '再代入はできます';
console.log(again);
//let again = '再定義します'; // Uncaught SyntaxError: Identifier 'again' has already been declared
//  letで変数を定義すると、中の値を書き換えることはできますが、再度同じ変数名を定義しようとするとエラーが出ます。→再代入できるが再定義はできない。


//  let以外の定義方法
const constant = 'これは定数です';
console.log(constant);
// constant = '再代入できません。'; // Uncaught TypeError: Assignment to constant variable.というエラーが出る
// constはletと違い再代入ができない。



/*--------------------------データ型-----------------------------*/
let string = 'JavaScriptの練習';
console.log(string);
//  実はこの変数stringに入っている「JavaScript の練習」というデータは文字列型というデータ型になっています。


/*----------文字列型(string 型)------------*/
let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます。";
console.log(double);
//  文字列型だということを表現するためには、''（シングルクォート）か""（ダブルクォート）で囲ってあげる必要があります。どちらかに統一する。
//  囲み忘れると、変数として認識されてしまう。下記の②ではそのような変数は定義してないためエラーとなる。
// ①
console.log('elephant'); // => elephant が出力される
//  ②  console.log(elephant); // => Uncaught ReferenceError: elephant is not defined というエラーが出力される

/*---文字列の連結---*/
let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);
//  私はジョニー！ となる

/*---テンプレートリテラル---*/
//  文字列と似たようなデータ型。テンプレートリテラルを使う場合は、シングル or ダブルクォートではなく、バッククォートを使用します。
let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。
${template + 'はプラスで加えられます'}。`; // これはテンプレートリテラル
console.log(templateText);
//  まず特徴としてテンプレートリテラルは文章の中で改行することができます。文字列の中で改行するとエラーになるので注意しましょう。
//  そして、もう一つの特徴として変数を埋め込むことができます。
//  文章の中に ${変数名} を書くことで、その位置で変数の中身を展開することができるのです。文字列で同じ表示を作ろうとしようとすると、 + を使って連結していかないといけません。


/*----------数値型(number 型)------------*/
let num = 10;
let strTen = '10'; 
console.log(num, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

/*足し算*/
let num1 = 25;
let num2 = 2;
console.log(num1 + num2);

/*引き算*/
console.log(num1 - num2);

/*掛け算*/
console.log(num1 * num2);

/*割り算*/
console.log(num1 / num2);

let number = 5;
number = number + 3;
console.log(number);
number +=3;
console.log(number);
number -= 1;
console.log(number);
number *=2;
console.log(number);
number /=3;
console.log(number);

/*インクリメント(1足す)*/
let increment = 0;
console.log(increment);
increment++;
console.log(increment);

/*ディクリメント(1引く)*/
let decrement = 10;
console.log(decrement);
decrement--;
console.log(decrement);

/*剰余（割った余り）*/
let bigNum = 25;
let smallNum = 2;
console.log(bigNum % smallNum);
/*累乗*/
console.log(bigNum ** smallNum);

/*文字列の連結になってしまうパターン*/
let stringNum ='25';
let stringNum2 = '2';
console.log(stringNum + smallNum);
console.log(stringNum + stringNum2);

/*--------------------配列型--------------------*/
let name1 = 'John';
let name2 = 'Bob';
let name3 = 'Michael';
let name4 = 'Emma';  /*この指定は面倒*/

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

console.log('names[0] => ',names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log(names[3]);
console.log('names.length => ', names.length);

let empties = []; 
console.log(empties);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

/*--------------------オブジェクト型(object 型)--------------------*/
let John = ['Jhon', '26', 'A', 'card'];
console.log(John[2]);   /*これだと本人しかわからない*/

let Bob = {
  name: 'Bob',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(Bob.favorite);


let Andy = {};

Andy.name = 'Andy',
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

console.log(Andy.age);


/*--------------------配列とオブジェクトの使い分け--------------------*/
let fruits = ['apple', 'banana', 'grape'];

let apple = {
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
};

/*配列の中にオブジェクト*/
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];

/*オブジェクトの中に配列*/
let banana = {
  color: ['red', 'blue', 'yellow'],
  shape: 'round',
  taste: 'wonderful',
};


let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2



/*---------------------------------------------------------
------------------------関数------------------------------------------------*/
let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');   /*半径*半径*3.14*/

/*関数版*/
function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
/*↑ではコンソールに表示されない。理由は、処理を書いているだけだから。処理の内容を書くことを「関数を定義する」と言う。*/
getArea()


/*引数*/
function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea(5)
getArea(6)
getArea(10)


/*--------------返り値----------------*/
function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です！');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

getArea(5);



/*-------------------コールバック関数---------------------------*/
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});
/*function() { console.log('コールバック関数が呼び出されました'); }が引数*/



/*-------------------オブジェクトに関数を持たせる---------------------------*/
/*元
let Mike = {
  name: 'Mike',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card'
};
*/

let Mike = {
  name: 'Mike',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};
Mike.sing();     /*関数の呼び出し方*/
console.log(Mike.age);    /*データの呼び出し方*/


/*スコープ*/

let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される


/*---------------------------------------------------------------------------
--------------------------------------制御構文----------------------------------------------------*/
if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

/*比較演算子*/
let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');


let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
}

let myAge2 = 12; // 数字を12に変更
if (myAge2 >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge2 >= 20) {
  console.log('お酒が飲めます');
} else if (myAge2 >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

/*論理演算子*//*または*/
let loto = 8;
if (loto === 7 || loto === 8) {
  console.log('大当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

/*かつ*/
let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '不在') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}


/*三項演算子*//*ifの場合*/
let errMsg = '';

if (errMsg === '') {
  console.log('ない！');
} else {
  console.log('ある！');
}

/*三項演算子の場合*/
errMsg === '' ? console.log('ない！') : console.log('ある！');

let number3 = 4;

let text3 = number3 % 2 === 0 ? '偶数です' : '奇数です';
console.log(text3);


/*Truthy (真値) と Falsy (偽値)*/
if (1) {
    console.log('hoge');
}

if (0) {
    console.log('piyo');
}


/*----for文------*/
for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);