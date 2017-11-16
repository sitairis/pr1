/*Методы массивов*/

/*1
*Добавить класс в строку*/
{
    let obj = {
        className: 'open menu'
    }

    function addClass(obj, cls) {
        let arrayClass= obj.className.split(' ');
        if ( arrayClass.indexOf( cls ) ){
            arrayClass.push( cls );
        }
        obj.className = arrayClass.join(' ');
    }

    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'

    // alert( obj.className );
}
/*2
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
Например:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.*/
{
    function camelize( str ) {
        let arrayStr = str.split('-');
        for ( let i = 1; i < arrayStr.length; i++ ){
            arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1);
        }
        return arrayStr.join('');
    }
}
// alert ( camelize("background-color") );
// alert ( camelize("list-style-image") );
// alert ( camelize("-webkit-transition") );

/*3
* У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
var obj = {
  className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.*/
{
    let obj = {
        className: 'me open menu menu'
    };

    function removeClass( obj, cls ) {
        let arrayClass = obj.className.split(' ');// какой вариант лучше?
        // for (let i = 0; i < arrayClass.length; i++) {
        //     if (arrayClass[i] == cls) {
        //         arrayClass.splice(i--, 1); // удалить класс
        //     }
        // }
        while ( arrayClass.indexOf( cls ) != -1 ){
            delete arrayClass[arrayClass.indexOf( cls )];
        }
        obj.className = arrayClass.join(' ');
    }

    removeClass(obj, 'open'); // obj.className='menu'
    removeClass(obj, 'menu'); // без изменений (нет такого класса)

    // alert( obj.className );
}

/*4
*Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.
* То есть, проверка имеет вид a ≤ arr[i] ≤ b.
* Функция должна менять сам массив и ничего не возвращать. */
{
    let arr = [5, 3, 8, 1];

    function filterRangeInPlace( arr, begin, end ) {
        for ( let i = 0; i < arr.length; i++ ){
            if ( arr[i] > end || arr[i] < begin ){
                delete arr[i];
            }
        }
        // for ( let i = 0; i < arr.length; i++) {
        //     let val = arr[i];
        //     if ( val < a || val > b ) {
        //         arr.splice(i--, 1);
        //     }
        // }
    }

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    // alert( arr ); // массив изменился: остались [3, 1]
}
/*5
* Как отсортировать массив чисел в обратном порядке?*/
let arr = [5, 2, 1, -10, 8];

arr.sort(
    function ( a, b ) {
        return b - a;
    });

alert( arr ); // 8, 5, 2, 1, -10