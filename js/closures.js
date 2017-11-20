/*1
* Что выведет say в начале кода?
Что будет, если вызов say('Вася'); стоит в самом-самом начале, в первой строке кода?*/
{
    say('Вася');// Что выведет? Не будет ли ошибки?
//на момент вызова
    let phrase = 'Привет';//undefined

    function say(name) {
        // alert( name + ", " + phrase );//Вася, undefined
    }
}

/*2
Каков будет результат выполнения этого кода?*/
{
    let value = 0;

    function f() {
        if (1) {
            let value = true;
            // alert( value );//true
        }

    }

    f();
    // alert( value );//0
}
/*3
* результат выполнения кода*/
{
    function test() {


       alert(window);//error : window не инициализирована с let
//var - undefined
        //let относится к блочной области видимости
        //var - к функциональной
        let window = 5;

        alert(window);//5
    }

    // test();
}
/*4
* Каков будет результат выполнения кода? Почему?*/
{
    var a = 5;

    (function () {
        // alert(a)
    })();//5
}
/*5
Если во внутренней функции есть своя переменная с именем currentCount – можно ли в ней получить currentCount из внешней функции?
 */

function makeCounter() {
  let currentCount = 1;

  return function() {
    let currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  //нет, нельзя. LexicalEnvironment - внутренний объект, к нему нет доступа -> я могу получить только локальную переменную вложенной функции...
  //    если бы не было локальной переменной, то тогда я бы получила ее из внешней функции
  };
}
/*6
Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?*/
{
    let currentCount = 1;

    function makeCounter() {
       /*1*/ let currentCount = 0;
        return function() {
            return currentCount++;
        };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    // alert( counter() ); // 1/*1*/0
    // alert( counter() ); // 2/*1*/1
    //
    // alert( counter2() ); // 3/*1*/0
    // alert( counter2() ); // 4//т.к currentCount - глобальная переменная...
//    и нет локальной в функции makeCounter   /*1*/1
}
/**********************************/
/*1
Here we make two counters: counter and counter2 using the same makeCounter function.
Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?*/
{
    function makeCounter() {
        let count = 0;

        return function() {
            return count++;
        };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    // alert( counter() ); // 0
    // alert( counter() ); // 1
    //
    // alert( counter2() ); // ?0
    // alert( counter2() ); // ?1
}
/*2
Here a counter object is made with the help of the constructor function.
Will it work? What will it show? */
{
    function Counter() {
        let count = 0;

        this.up = function() {
            return ++count;
        };
        this.down = function() {
            return --count;
        };
    }

    let counter = new Counter();

    // alert( counter.up() ); // ?1
    // alert( counter.up() ); // ?2
    // alert( counter.down() ); // ?1
}
/*3
* Look at the code. What will be result of the call at the last line?*/
{
    let phrase = "Hello";

    if (true) {
        let user = "John";

        function sayHi() {
            alert(`${phrase}, ${user}`);//Hello, John
        }
    }

    // sayHi();
}
/*4
* Write function sum that works like this: sum(a)(b) = a+b.
Yes, exactly this way, via double brackets (not a mistype).
For instance:
sum(1)(2) = 3
sum(5)(-1) = 4*/
function sum(a) {

    return function(b) {
        return a + b; // takes "a" from the outer lexical environment
    };

}
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4

/*5
* We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f.
* If it returns true, then that element is returned in the resulting array.
Make a set of “ready to use” filters:
inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:
arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
For instance:
/* .. your code for inBetween and inArray */
{
    let arr = [1, 2, 3, 4, 5, 6, 7];

    function inBetween( a, b ) {
        return function(x) {
            return x >= a && x <= b;
        };
    }

    function inArray( arr ) {
        return function(x) {//??? filter пердает?
            return arr.includes(x);
        };
    }
    // alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    //
    // alert( arr.filter(inArray([1, 2, 10])) ); // 1,2*/
}
/*6
Sort by field
importance: 5
We’ve got an array of objects to sort:

The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Can we make it even less verbose, like this?

So, instead of writing a function, just put byField(fieldName).
Write the function byField that can be used for that.
 */
{
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    function byField( field ) {
        return ( a, b ) => a[field] > b[field] ? 1 : -1;//???a and b
    }

    // users.sort(byField('name'));
    // users.sort(byField('age'));
}
/*7*/
{

    function makeArmy() {
        let shooters = [];

        for(let i = 0; i < 10; i++) {
            let shooter = function() { // shooter function
                alert( i ); // should show its number
            };
            shooters.push(shooter);
        }

        return shooters;
    }

    let army = makeArmy();

    army[0](); // the shooter number 0 shows 10
    army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
}
