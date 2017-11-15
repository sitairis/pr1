/*Массивы с числовыми индексами
* 1
* Как получить последний элемент из произвольного массива?*/
function task1() {
    let goods  = ['a1', 'a2', 'a3'];
    alert( 'task 1  '+ goods[goods.length - 1] );
}


/*2
* Как добавить элемент в конец произвольного массива?*/
function task2(){
    goods[goods.length] = 'a4';
    alert(goods);
}

/*3
* Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».*/
function task3() {
    let styles = ['Джаз', 'Блюз'];
    alert(styles);
    styles[styles.length] = 'Рок-н-Ролл';
    alert(styles);
    styles[styles.length - 2] = 'Классика';
    alert(styles);
    styles.shift();
    alert(styles);
    styles.unshift('Рэп', 'Регги');
    alert(styles);
}

/*4
* Напишите код для вывода alert случайного значения из массива:*/
function task4() {
    let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    let rand = Math.floor( Math.random() * arr.length );
    alert( arr[rand] );
}

/*5
* Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/

function task5() {
    let array = [];
    let sum = 0;
    while(1){
        let val = prompt('Введите число', '');
        if ( val === '' || val === null || isNaN(val) )
            break;
        array.push( +val );
        sum += +val;
        }
    alert(sum);
}
 /*6*/

 function task6() {
     let arr = [1, 2, 3];

     let arr2 = arr;
     arr2[0] = 5;

     alert( arr[0] );
     alert( arr2[0] );
 }
 /*7
 * */
function find( array, value ) {
    if (array.indexOf) { // если метод существует
        return array.indexOf(value);
    }
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i] === value ) return i;
    }
    return -1;
}

let arr7 = ["a", -1, 2, "b"];

alert( find(arr7, 2) );

/*8*/
let arr8 = [5, 4, 3, 8, 0];

function filterRange(arr8, min, max){
    let range = [];
    for (let i = 0; i < arr8.length; i++ ){
        if ( arr8[i] <= max && arr8[i] >= min ){
            range.push(arr8[i]);
        }
    }
    return range;
}
let filtered = filterRange(arr8, 3, 5);
alert(filtered);