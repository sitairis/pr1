/*Массивы с числовыми индексами
* 1
* Как получить последний элемент из произвольного массива?*/
{
    // let goods  = ['a1', 'a2', 'a3'];
    // alert( 'task 1  '+ goods[goods.length - 1] );
}


/*2
* Как добавить элемент в конец произвольного массива?*/
{
    // let goods  = ['a1', 'a2', 'a3'];
    // goods[goods.length] = 'a4';
    // alert(goods);
}

/*3
* Задача из 5 шагов-строк:

1 Создайте массив styles с элементами «Джаз», «Блюз».
2 Добавьте в конец значение «Рок-н-Ролл»
3 Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
4 Удалите первое значение массива и выведите его alert.
5 Добавьте в начало значения «Рэп» и «Регги».*/
{
    // let styles = ['Джаз', 'Блюз'];
    // alert(styles);
    // styles[styles.length] = 'Рок-н-Ролл';
    // alert(styles);
    // styles[styles.length - 2] = 'Классика';
    // alert(styles);
    // styles.shift();
    // alert(styles);
    // styles.unshift('Рэп', 'Регги');
    // alert(styles);
}

/*4
* Напишите код для вывода alert случайного значения из массива:*/
{
    let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    let rand = Math.floor( Math.random() * arr.length );
    // alert( arr[rand] );
}

/*5
* Напишите код, который:
1 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
2 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
3 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
4 Выводит сумму всех значений массива*/

{
    // let array = [];
    // let sum = 0;
    // while(1){
    //     let val = prompt('Введите число', '');
    //     if ( val === '' || val === null || isNaN(val) )
    //         break;
    //     array.push( +val );
    //     sum += +val;
    //     }
    // alert(sum);
}
 /*6
 * Чему равен элемент массива?*/

{
     let arr = [1, 2, 3];
     let arr2 = arr;
     arr2[0] = 5;
     // alert( arr[0] );//5
     // alert( arr2[0] );//5
 }


 /*7
 * Создайте функцию find(arr, value), которая ищет в массиве arr значение value
  * и возвращает его номер, если найдено, или -1, если не найдено.*/
{
function find1( array, value ) {
    if (array.indexOf) { // если метод существует
        return array.indexOf(value);
    }
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i] === value ) return i;
    }
    return -1;
}

// создаем пустой массив и проверяем поддерживается ли indexOf

let arr7 = ["a", -1, 2, "b"];
if ([].indexOf) {
    let find = function (array, value) {
        return array.indexOf(value);
    }
} else {
    let find = function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }
        return -1;
    }
}
// alert( find1(arr7, 2) );
}

/*8
* Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
* который содержит только числа из arr из диапазона от a до b.
* То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.*/
{
    let arr8 = [5, 4, 3, 8, 0];

    function filterRange(arr8, min, max) {
        let range = [];
        for (let i = 0; i < arr8.length; i++) {
            if (arr8[i] <= max && arr8[i] >= min) {
                range.push(arr8[i]);
            }
        }
        return range;
    }

    let filtered = filterRange(arr8, 3, 5);
//alert(filtered);
}
/*9
* Древний алгоритм «Решето Эратосфена» для поиска всех простых
* чисел до n выглядит так:

1 Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
2 Пусть p=2, это первое простое число.
3 Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
4 Поменять значение p на первое не зачеркнутое число после p.
5 Повторить шаги 3-4 пока p2 < n.
6 Все оставшиеся не зачеркнутыми числа – простые.*/
{
    let arr9 = [];
    for (let i = 2; i < 101; i++ ){
    arr9.push(i);
    }//забила массив числами c 2 до 100

    // alert(arr9);

    let indexP = 0;

    function erotosfen( arr9, p ) {
        for ( let i = ++indexP ; i < arr9.length; i++ ){
            if ( arr9[i] % p == 0 ){ // это условие выглядит СТРАННО
                arr9[i] = 0; // но ничего лучше я не придумала =(
            }
        }
        p = arr9[indexP];
        if ( (p*p) < 100 ){
            erotosfen( arr9, p );
        }
    }

    erotosfen( arr9, 2 );

    let newArr9 = [];
    let sumErotosfenArray = 0;

    for (let i = 0; i < arr9.length; i++ ){
        if ( arr9[i] ){//избавляюсь от 0
            newArr9.push(arr9[i]);
            sumErotosfenArray += arr9[i];
        }

    }
    //alert( newArr9 );
   // alert( sumErotosfenArray );
}
//решение из учебника
{
    // шаг 1
    let arr = [];

    for (let i = 2; i < 100; i++) {
        arr[i] = true
    }

// шаг 2
    let p = 2;
    let i = 0
    do {
        // шаг 3
        for ( i = 2 * p; i < 100; i += p) {
            arr[i] = false;
        }

        // шаг 4
        for ( i = p + 1; i < 100; i++) {
            if (arr[i]) break;
        }

        p = i;
    } while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
    let sum = 0;
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += i;
        }
    }
    // alert( sum );
}

/*10
* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
Ваша функция должна возвращать только эту сумму.
getMaxSubSum([-1, /2, 3/, -9]) = 5 (сумма выделенных)
getMaxSubSum([/2/, 1,/2, 3/, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, /11/]) = 11
getMaxSubSum([-2, -1,/1, 2/]) = 3
getMaxSubSum([/100/, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю
*/
{
    function getMaxSubSum( arr10 ) {
        let maxSum = 0, partialSum = 0;
        for ( let i = 0; i < arr10.length; i++ ) {
            partialSum += arr10[i];
            maxSum = Math.max( maxSum, partialSum );
            if ( partialSum < 0 )
                partialSum = 0;
        }
        return maxSum;
    }

// alert( getMaxSubSum( [-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum( [-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum( [-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum( [100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum( [1, 2, 3]) ); // 6
// alert( getMaxSubSum( [-1, -2, -3]) ); // 0
}


