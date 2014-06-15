var JavaScript = 'JavaScript\t';


function scale() {
    //var s = document.body.style;
    document.body.style.fontSize = parseInt(document.body.style.fontSize)*arguments[0] + '%';
//    document.body.style.backgroundColor == "red" ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";
//        document.body.style.outline *= multi;

}
/*
function pushButton(){
    console.log(JavaScript);

}
document.write(JavaScript);
//"use strict";
var start = new Date;

function f() {
    var a = 5;
    return new Function('b', 'return a + b');
}
*/
//alert( f()(1) );

/*
var user = {
    name: "Вася",
    age: 25,
    elem: document.body
};

var str = JSON.stringify(user, function(key, value) {
    if (key == 'elem') return undefined;
    return value;
} );

alert(str);
*/
/*
var event = {
    title: "Конференция",
    date: "сегодня"
};

var str = JSON.stringify(event);
alert( str );
event = JSON.parse(str);
*/
/*
function globalEval(code) { // объединим два способа в одну функцию
    window.execScript ? execScript(code) : window.eval(code);
}

var a = 1;
(function() {
    var a = 2;
    globalEval(' alert(a) '); // 1, во всех браузерах
})();
*/
/*
function Article() {
    this.created = new Date();
    Article.count ? Article.count++ : Article.count = 1;

    Article.showCount = function() {
        alert(Article.count);
    }
}


new Article();
new Article();
Article.showCount();
new Article();
Article.showCount();
*/
/*
function User(name) {
    this.toString = function() {
        return name;
    };

    this.send = function(to, message) {
        alert( this + ': ' + to + ', ' + message );
    };
}

var visitor = new User("Вася");
var admin = new User("Админ");

// создать функцию для пересылки сообщений от admin к visitor
var sendFromAdminToVisitor = admin.send.bind(admin, visitor);

sendFromAdminToVisitor('привет!');// Админ: Вася, привет!
*/
/*
function mul(a, b) {
    return a * b;
};
// double умножает только на два
var double = mul.bind(null, 2); // первым аргументом всегда идёт контекст
alert( double(3) );  // 3*2 = 6
alert( double(4) );  // 4*2 = 8
*/

/*
function f() {
    console.log(this.name);
}
var user = { name: "Вася" };
var f2 = f.bind(user);
f2(); // выполнит f с this = user
*/

/*
function sssr(){
    console.log('hello');
}
function User() {
    this.id = 1;
    var self = this;
//    console.log('id\t' + this.id + '\t' + self.id);
    this.sayHi = function() {
        console.log(self.id);
    };//.bind(this);
}
var user = new User;
setTimeout(user.sayHi, 1000);
*/
/*
// почему не работает ????????????????????????????????????????????????
window.count = 0;
var stressIsRun;

function stress(){
    stressIsRun = true;
    var i;
    var f = [];
    for(i=0; i<1e8; i++){
        f[i%10] = i;
    }
    var foa = new Date;
    console.log('time of loop\t' + (foa - start) + '\t' + stressIsRun );
    stressIsRun = false;
}
setTimeout(function(){clearInterval(dd);}, 3000);
var dd = setInterval(function(){
    console.log('stressIsRun\t' + stressIsRun)
}, 4);
stress();
*/


/*
var mainCount = 0;
function countUp(){
    mainCount++;
//    console.log(mainCount);
    if (mainCount > 100 ) {clearInterval(mine1); clearInterval(mine2)};
}

var mine1 = setInterval(countUp, 1);
var mine2 = setInterval(function(){ console.log('value of mainCount\t' + mainCount)}, 200);

*/
/*
var countOfLaunch = 0;
var countOfLaunch2 = 0;
var countOfLaunchOne = 0;

function gott(){
    var timeOfLaunch = new Date;
    if ( countOfLaunch > 5 ) clearInterval(timer);
    console.log('gott\t' + ++countOfLaunch + '\t' + (timeOfLaunch - start));
}


function gott2(){
    var timeOfLaunch = new Date;
    if ( countOfLaunch2 > 5 ) clearInterval(timer2);
    console.log( 'gott2\t' + ++countOfLaunch2 + '\t' + (timeOfLaunch - start));
}


function one(){
    console.log( 'from one\t' + ++countOfLaunchOne);
    setTimeout(gott, arguments[0]);
}
var timer2 = setTimeout(gott2, 4000);
var timer = setInterval(gott, 1000);
*/

//one(5000);

/*
function debounce(fo, ms) {
    var state = null;
    var COOLDOWN = 1;
    return function() {
        if (state) return;
        fo.apply(this, arguments);
        state = COOLDOWN;
        console.log('log from debounce\t' + log);
        setTimeout(function() { state = null }, ms);
    }
}

var log = '';
function f(a) {
    log += a;
    console.log('log from f\t' + log);
}

s = debounce(f, 1000);
s(1);
s(2);
setTimeout(function() { s(3) }, 100); // игнор (рановато)
setTimeout(function() { s(4) }, 1100); // выполнится (таймаут прошёл)
setTimeout(function() { s(5) }, 1500); // игнор

setTimeout(function() { alert(log) }, 2000); // 14
*/

/*
window.timeOfLastLaunch = 0;
window.varTime;
window.mainTimeOut;
window.log = 0;
function f(a) {
    window.log += a;
}

function deb( func, ms ){
    window.mainTimeOut = ms;
    return function(n){

    window.varTime = new Date;
    if( (window.varTime - window.timeOfLastLaunch ) > window.mainTimeOut ){

        console.log( 'ok\t' + arguments[0] + '\t' + ( window.varTime - window.timeOfLastLaunch ) );
        func(n);
    }else{
        console.log( 'else\t' + arguments[0] + '\t' + ( window.varTime - window.timeOfLastLaunch ) );

    }
    window.timeOfLastLaunch = new Date;
    }
}
var d = deb(f, 1000);
d(1);
d(2);
setTimeout(function(){d(3);}, 100 );
setTimeout(function(){d(4);}, 1500 );
setTimeout(function(){d(5);}, 1500 );
*/
/*
function f(x) {
    var fTime = new Date;
    console.log( x + '  ' + ( fTime-start ) );
}
function delay( f, ms ){
    return function() {
        var delayReturnTime = new Date;
        var savedThis = this;
        var savedArgs = arguments;
        console.log( 'in delay return  ' + ( delayReturnTime - start ) );
        setTimeout(function() {
            f.apply(savedThis, savedArgs); // f.apply(this, savedArgs);  what different ?????????????????????????????????????????????????????
        }, ms);
    };
}
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/
/*
var timer = setInterval(function() {
    var sI = new Date;
    console.log( 'setInterval()' + ( sI - start ) + ' ms' );
    i++;
}, 10);

setTimeout(function() {
    var sT = new Date;
    console.log('setTimeout()' + ( sT - start ) + ' ms' );
    clearInterval(timer);
    console.log(i);
}, 50);

var i;

function f() {
    var fF1 = new Date;
    console.log('f()' + ( fF1 - start ) + ' ms' );
    // точное время выполнения не играет роли
    // здесь оно заведомо больше 50мс
    for(i=0; i<1e8; i++) f[i%10] = i;
    var fF2 = new Date;
    console.log('f()' + ( fF2 - start ) + ' ms' );
}

f();

*/
/*
setTimeout(function() {
    alert(i);
}, 1);

var i;

function f() {
    // точное время выполнения не играет роли
    // здесь оно заведомо больше задержки setTimeout
    for(i=0; i<1e8; i++) f[i%10] = i;
}

f();
alert('hi');

*/
/*
var timeMark = new Date;
setTimeout(function go() {
    var diff = new Date - timeMark;
    // вывести очередную задержку в консоль вместо страницы
    console.log(diff);
    // запомним время в самом конце,
    // чтобы измерить задержку именно между вызовами
    timeMark = new Date;
    setTimeout(go, 100);
}, 100);
*/

/*
var i = 1;

var timer = setTimeout(function run() {
    alert(i++);
    timer = setTimeout(run, 2000);
}, 2000);

console.log('hello');
console.trace(alert);
*/
/*
function printNumbersInterval20_100(){
    var i = 1;
    var timer = setInterval(function() {
        console.log(i)
        if (i == 20) clearTimeout(timer);
        i++;

    }, 100);
}
printNumbersInterval20_100();
*/
/*
function sayHi(who) {
    alert("Привет, я " + who);
}

function User(id) {
    this.id = id;
    this.sayHi = function() {
        alert(this.id);
    };
}
var user = new User(12345);
user.sayHi();
setTimeout(user.sayHi(), 1000);
var timerId = setTimeout(function() {user.sayHi();}, 1000);
clearTimeout(timerId); // cancel
var i = 1;
var timer = setInterval(function() { alert(i++) }, 2000);
clearInterval(timer);
setTimeout(sayHi, 1000, "Вася");
setTimeout(function() { sayHi('Вася') }, 1000);


var tor = function() { alert('прошло 3 секунды') };
alert('старт. след окно через 3 сек.');
setTimeout( tor, 3000 );

setTimeout("alert('Привет')", 1000);

*/

/*
// my code
function outputDate(date) {
    function formatDate(val) {
        var dd = val.getDate()
        if ( dd < 10 ) dd = '0' + dd;
        var mm = val.getMonth()+1
        if ( mm < 10 ) mm = '0' + mm;
        var yy = val.getFullYear() % 100;
        if ( yy < 10 ) yy = '0' + yy;
        return dd+'.'+mm+'.'+yy;
    }

    if (!arguments.length || arguments[0] == '') {
        alert('нет аргумента');
        return;
    };
    if (typeof date == 'string'){
        var arr = date.split('-');
        var res = new Date(arr);
        alert(formatDate(res));
    };
    if (typeof date == 'number'){
        var vv = new Date(date*1000);
        alert(formatDate(vv));
    };
    if (date.splice){
        var vav = new Date(+date[0], +date[1], +date[2]);
        alert(formatDate(vav));

    };
    if (date.getTime){
        alert(formatDate(date));
    }
}
*/
/*
function outputDate(date) {
    if (typeof date == 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date*1000);
    } else if(typeof date == 'string') {
        // разобрать строку и преобразовать к Date
        date = date.split('-');
        date = new Date(date[0], date[1]-1, date[2]);
    } else if ( {}.toString.call(date) == '[object Array]' ) {
        date = new Date(date[0], date[1], date[2]);
    }
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    var month = date.getMonth()+1;
    if (month < 10) month = '0' + month;
    // взять 2 последние цифры года
    var year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;
    var formattedDate = day + '.' + month + '.' + year;
    alert(formattedDate);
}

outputDate( '2011-10-02' );  // 02.10.11
outputDate( 1234567890 );  // 14.02.09
outputDate( [2000,0,1] ); // 01.01.00
outputDate( new Date(2000,0,1) ); // 01.01.00
*/

/*
if ([].splice) {
    alert('Массив!');
}else{
    alert('не массив!');
}
if (new Date().getTime) {
    alert('Дата!');
}
function Animal(name) {
    this.name = name;
}
var animal = new Animal("Винни-пух");
alert( animal instanceof Animal );

var d = new Date();
alert(d instanceof Date); // true
function f() { }
alert(f instanceof Function);

function sayHi(who) {
    if (!arguments.length) {
        alert('Привет');
        return;
    }
    if ( {}.toString.call(who) == '[object Array]' ) {
        for(var i=0; i<who.length; i++) sayHi(who[i]);
        return;
    }
    alert('Привет, ' + who);
}
sayHi(); // Привет
sayHi("Вася"); // Привет, Вася
sayHi( ["Саша", "Петя", ["Маша", "Юля"] ] );
*/
/*
function Animal(name) {
    this.name = name;
}
var toClass = {}.toString;
var arr = [1,2];
alert( toClass.call(arr).slice( 8, -1 ) );
alert({}.toString.call([]).slice( 8, -1) );

Animal('12345');
alert(window.name);
alert(typeof '');
*/
/*
function sum(a) {
    sum.valBuff = a;
    function f(b) {
        sum.valBuff += b;
        return f;
    };
    f.toString = function() {return sum.valBuff;};
    return f;
}
alert( sum(3)(5)(8)(4)(7) );
*/
/*
var room = {
    number: 777,
    valueOf: function() { return this.number; },
    toString: function() { return this.number; }
};
alert( room );  // 777, вызвался valueOf
delete room.valueOf;
alert( room );  // 777, вызвался toString

alert( new Date() ); // toString: Дата в виде читаемой строки
alert( +new Date() ); // valueOf: кол-во миллисекунд, прошедших с 01.01.1970
*/

/*
function f(arg) {
    if(!isNaN(parseFloat(arg)) && isFinite(arg)){
        return Math.random()*arg; // может быть любой функцией
    }
    return 0;
}

function makeCaching(f) {
    var cache = {};
    var count = 0;
    var arr = [];
    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        for(var key in cache){
            arr[count] = cache[key]
            count++;
        }
        alert(arr);
        return cache[x];
    };
}


f = makeCaching(f);

var a, b;
a = f(1);
b = f(1);
//alert( a == b ); // true (значение закешировано)

b = f(2);
//alert( a == b ); // false, другой аргумент => другое значение
*/

/*
var log = [];

function work(a) {
//    log[log.length] = a;
}

function makeLogging(f, log) {
    return function(a){
        log.push(a)
        return f.call(this, a);
    }
}


work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for(var i=0; i<log.length; i++) {
    alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
*/
/*
function sum( a, b ){
    return a + b;
}

function newSum(f){
    return function(){
        return 2* f.apply( this, arguments );
    }
}
//sum = ;

alert(newSum(sum)(1,2));
*/
/*
var obj = {
    go: function() { alert(this); }
};
function func(){alert(this)}

obj.go();  obj['go']();
func();
new func();
*/
//(obj.go)();          // (2) object
//(f = obj.go)();      // (3) undefined
//(obj.x || obj.go)(); // (4) undefined

/*
//???????????????????????????????????????????????????????????????????????????????????????
function f(){

    alert(arguments[0]);
    var args  = [].slice.call( arguments ); // var args  = [].slice.call( arguments, 1 );  // что значит 1 ??
    args.shift();

    g.apply( this, args  );
}
function g(a, b, c) {
    alert( a + b + (c || 0) );
}
f("тест2", 1, 2, 3);
*/
/*
//?????????????????????????????????????????????????????????????????????????????
function g( a, b ){
    alert('in g() ' + (+a + +b) );
}
function f(a, b) {
    g.apply(this, arguments);
    g( a, b ); // а почему бы так не сделать?
}
f(2, 5);
*/
/*
var dd = [5,4,3,2,1];
alert( dd.join('|') );

function sayHi(){
    arguments.myJoin = [].join;
    var ss = arguments.myJoin('|');
    alert(ss);
}
sayHi(1,2,3,4);
*/
/*
var user = {
    firstName: "Василий",
    surname: "Петров"
};
function getName(a, b) {
    alert( this[a] + ' ' + this[b] );
}
getName.call(user, 'firstName', 'surname')  // "Василий Петров"
*/
/*
var dod = 1000;
function func(){
    alert(this.dod);
}
func();
*/
/*
var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };

function func() {
    alert( this.firstName );
}

user.a = func;  // присвоим одну функцию в свойства
admin.b = func; // двух разных объектов user и admin

user.a(); // Вася
admin['b'](); // Админ (не важно, доступ через точку или квадратные скобки)
*/
/*
var user = {
    firstName: "Вася"
};
function func() {
    alert( this.firstName );
}
func.call(user)
user.sayHi = func;
user.sayHi();
*/

//var sum = new Function('a,b', ' return a+b; ');
//alert( sum(1,2) ); // 3
/*
// code from book
function Calculator() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '),
            a = split[0],
            op = split[1],
            b = split[2]

        if(!methods[op] || !isNumeric(a) || !isNumeric(b)) {
            return NaN;
        }

        return methods[op](+a, +b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}
*/
/*
// my code
function Calculator(){
    var mathSign = [];
    var mathFunc = [];
    this.calculate = function(){
        var tmp = arguments[0].split(' ');
        if( mathSign[0] == undefined && mathFunc[0] == undefined ){
            mathSign[0] = tmp[1];
            mathFunc[0] = function( a, b ){ return a + b;};
        }
        for( var i = 0; i < mathSign.length; i++ ) {
            if( tmp[1] == mathSign[i] ){
                alert(mathFunc[i](+tmp[0], +tmp[2]) );
            }
        }
    };
    this.addMethod = function(){
        mathSign[mathSign.length] = arguments[0];
        mathFunc[mathFunc.length] = arguments[1];
    };
}
var powerClac = new Calculator();
powerClac.calculate('3 + 3');
powerClac.addMethod( "*", function(a, b) { return a * b; });
powerClac.addMethod("/", function(a, b) { return a / b; });
powerClac.addMethod("**", function(a, b) { return Math.pow(a, b); });
powerClac.calculate('3 ** 3');
*/

/*
//?????????????????????????????????????????????????????????????????????????
function User(name) {

    this.upperCaseName = function() {
        name = name.toUpperCase(); // <-- изменяет name из User
    };

    this.say = function(phrase) {
        alert(name + ' сказал: ' + phrase); // <-- получает name из User
    };

}
var user = new User('Вася');
user.upperCaseName();
user.say("Да здравствует ООП!")
*/

/*
function User(name) {

    this.say = function(phrase) {
        alert(name + ' сказал: ' + phrase);
    };
}
var user = new User('Вася');
*/


/*
function Adder( startingValue ){

    this.value = startingValue;

    this.addInput = function(){
        this.value += +prompt('add value:', '')
    };

    this.showValue = function(){
        alert(this.value);
    };
}

var adder = new Adder(1);

adder.addInput();
adder.showValue();
*/

/*
function summator(){

    this.sum = function( a, b ){
        return +a + +b;
    };

    this.run = function(){
        var a = prompt('Введите а: ', '' );
        var b = prompt('Введите b: ', '' );
        alert(this.sum(a,b));
    };
}
alert(new summator().sum(3, 5));
new summator().run();
*/

/*
function animal(){
    this.name = 'animal 1';
    this.isCreate = true;
    return this;
}

var an2 = animal();
alert(an2.name);
*/

/*
//??????????????????????????????????????????????????????????????????????????????????????????????
function animal(name){
    this.name = name;
    this.isCreate = true;
}

var an0 = animal('bull')
//var an1 = new animal('wulf');

alert( an0.name );
*/

/*
var ladder = {
    step: 0,
    up: function(){
        this.step++;
        return this;
    },
    down: function(){
        this.step--;
        return this;
    },
    show: function(){
        alert(this.step);
        return this;
    }
};
ladder.up().up().up().up().up().up().show().down().down().down().down().show();
*/


/*
var user = {
    name: 'Сергей',
    sayHi: function(){
        alert(this.name);
    }
};

user.sayHi();
*/

/*
var tor = function() { alert('прошло 3 секунды') };
alert('старт. след окно через 3 сек.');
setTimeout( tor, 3000 );
*/

/*
function sayHi() {
    for (var i=0; i<arguments.length; i++) {
        alert("Привет, " + arguments[i]);
    }
}

sayHi("Винни", "Пятачок", "Винни", "Пятачок");
*/



/*
function makeArmy() {
    var shooters = [];
    for(var i=0; i<10; i++) {
        var shooter = (function(me) {
            return function() {
                alert(me);
            }
        }(i);
        shooter.i = i;
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();
army[0]();
army[5]();
*/
/*
function sum(a) {
    return function(b) {
        return a + b;  // возьмет a из внешнего LexicalEnvironment
    };
}
alert( sum(1)(2) );
*/


/*
(function() {
    window.count = 0;

    window.hell = function helper() { alert('helper');}
})();
alert(count);
hell();
*/

/*
var sum = new Function('a,b', ' return a+b; ');

alert( sum(1,2) ); // 3
*/

/*
function retFu(){
    function ggg(){
        alert('inside retFu()');
    }
    return function(){
        alert('hello');
    }
}

var hue = retFu();
retFu = null;
hue();
*/

/*
var fact = function factorial(n) { // Named Function Expression
    return n ? n*factorial(n-1) : 1;
};
alert(fact(5));
*/

/*
var fu = function() {
    alert( 'Function Expression' );
}();
*/
//var copy = fact;
//fact = null;

//alert( copy(5) );

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n-1);
}
function unique(arr) {
    var obj = {};
    for(var i=0; i<arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE<9
}
function compareNumeric(a, b) {
    //if (a > b) return 1;
    //if (a < b) return -1;
    return a - b;
}
function copyArr( obj ){
    var tmp = [];
    for ( var i = 0; i < obj.length; i++ ){
        tmp[i] = obj[i];
    }
    return tmp;
}
var dayNames = ['вс','пн','вт','ср','чт','пт','сб'];
var now = new Date();
//alert( dayNames[now.getDay()] );
//alert( now.toLocaleString());
//function func(){alert('in func()');}
//var val1 = func;

//val1();
//func();
//func = null;
//val1();
//alert( val1 );
/*
var arr = [
    function() { alert('arr[0]') },
    function() { alert('arr[1]') },
    function() { alert('arr[2]') },
    function() { alert('arr[3]') },
    function() { alert('arr[4]') },
];

for ( var i = 0; i < arr.length; i++ )
    arr[i]();
*/

//alert("Цикл занял " + (end-start) + " ms");
//alert( now.getFullYear()  );
//alert( now.getMonth() );
//alert( now.getDate() );
//alert( now.getHours() );
//alert( now.getMinutes() );
//alert( now.getSeconds() );
//alert( now.getMilliseconds() );
//alert( now.getDay() );
var end = new Date;













//var val1 = +prompt('x:', '');
//var arr = [ "Я", "сейчас", "изучаю", "JavaScript" ];
//var arr = [ 33, 2, 15, 4, 5, 3 ];
//var out = copyArr(arr).sort(compareNumeric);
//var obj = { name: 'serg' };
//alert( obj.value );
//alert( 'поиск элемента в массиве: ' + arr.indexOf(0) );


//alert( arr );
//alert(out);
//alert( 'arr: ' + arr + '\nrem: ' + rem );
//var rem = copyArr( arr );
//arr.splice( 0, 1, 'hello' );
//alert( 'arr: ' + arr + '\nrem: ' + rem );

//alert( sumTo(val1) );
//obj = {};
//obj.one = 1;
//obj.two = 2;
//alert( Object.keys( obj ) );
//alert( new Array(10).join("ля") );


/*
var val1 = prompt('x:', '');
var val2 = prompt('y:', '');

function pow( v1, v2 )
{
	var count;
	var tmp = 1;
	for( count = 1; count <= v2; count++ )
	{
		tmp *= v1;
	}
	return tmp;
}
alert(pow(val1, val2));
*/
/*    
var val1 = prompt('enter number:', 10);
 
var tmp;

for (var i = 1; i <= val1; i++ )
{
	tmp = 0;
	for ( var j = 1; j <= i; j++)
	{
		if( (i % j) == 0 ) tmp++;
	}
	if(tmp < 3) 
		alert(i);
}
*/