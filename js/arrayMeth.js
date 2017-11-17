/*Методы массивов*/

/*1
*Добавить класс в строку*/
{
    let obj = {
        className: 'open menu'
    };

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
    // alert ( camelize("background-color") );
// alert ( camelize("list-style-image") );
// alert ( camelize("-webkit-transition") );
}


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
        while ( arrayClass.indexOf( cls ) != (-1) ){
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
{
    let arr = [5, 2, 1, -10, 8];
    arr.sort(
        function ( a, b ) {
            return b - a;
        });

    // alert( arr ); // 8, 5, 2, 1, -10
}

/*6
* Есть массив строк arr.
* Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.*/
{
    let arr = ["HTML", "JavaScript", "CSS"];
    let arrSorted = [];
    // let arrSorted = arr.slice().sort();
    for ( let i = 0; i < arr.length; i++ ){
        arrSorted[i] = arr[i];
    }
    arrSorted.sort();

    // alert( arrSorted ); // CSS, HTML, JavaScript
    // alert( arr ); // HTML, JavaScript, CSS (без изменений)
}
/*7
* Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.*/
{
    let arr = [1, 2, 3, 4, 5];

    arr.sort( ( a, b ) => { return Math.random() - 0.5;} );

    // function compareRandom( a, b ) {
    //     return Math.random() - 0.5;
    // }
    //
    // arr.sort( compareRandom );

    // alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
}
/*8
Напишите код, который отсортирует массив объектов people по полю age.*/
{
    let vasya = { name: "Вася", age: 23 };
    let masha = { name: "Маша", age: 18 };
    let vovochka = { name: "Вовочка", age: 6 };

    let people = [ vasya , masha , vovochka ];

    people.sort( ( a, b ) => {
        return a.age - b.age;
    });

// теперь people: [vovochka, masha, vasya]
    alert( people[0].age ); // 6

    // for (let i = 0; i < people.length; i++ ){
    //     alert( people[i].name );
    // }

    // for (let obj in people ){
    //     alert( obj.name );
    // }

}
/*9

 */
{
    let list = { value: 1 };


    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };

    function printList( list ) {
        let tmpList = list;
        while ( tmpList ){
            if ( tmpList.value ) {
                alert(tmpList.value);
                tmpList = tmpList.next;
            }
        }
    }
    // printList( list );

    function printListRecurs( list ) {
        let tmpList = list;
        alert(tmpList.value);

        if ( tmpList ){
            printListRecurs( tmpList.next );
        }
    }

    // printListRecurs( list );

    function printListRecursReverse(list) {
        let tmpList = list;// не понимаю как работает!
        if ( tmpList.next ){
            printListRecursReverse( tmpList.next );
        }
        alert( tmpList.value );
    }

    // printListRecursReverse( list );

    function printListReverse( list ) {
        let tmpList = list;
        let array = [];
        while ( tmpList ){
            array.push( tmpList.value );
            tmpList = tmpList.next;
        }
        for (let i = array.length - 1; i >= 0; i-- ) {
            alert( array[i] );
        }
    }

    // printListReverse( list );
}
/*10
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/
{
    function aclean(arr) {
        let obj = {};
        for ( let i = 0; i < arr.length; i++ ) {
            // разбить строку на буквы, отсортировать и слить обратно
            let sorted = arr[i].toLowerCase().split('').sort().join('');

            obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
        }
        let result = [];

        // теперь в obj находится для каждого ключа ровно одно значение
        for (let key in obj) {
            result.push(obj[key]);
        }
        return result;
    }

    let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

    // alert( aclean(arr) );
}
/*11
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */
{
    function unique(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            obj[str] = true; // запомнить строку в виде свойства объекта
        }
        return Object.keys(obj);
    }

    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", "8-()"
    ];

    alert( unique(strings) ); // кришна, харе, 8-()
}