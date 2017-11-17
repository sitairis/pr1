/*1
* получает из массива строк новый массив, содержащий их длины:*/
{
    let arr = ["Есть", "жизнь", "на", "Марсе"];

    let arrLength = arr.map( ( item ) => {
        return item.length;
    } );


    // alert( arrLength ); // 4,5,2,5
}
/*2
На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.*/
{
    let arr = [ 1, 2, 3, 4, 5 ];

    function getSums( arr ){
        let result = [];

        if ( !arr.length ){
            return result;
        }

        arr.reduce( (sum, item) => {
            result.push( sum );
            return sum + item;
        } );

        return result;
    }
    alert( getSums( arr ) );
}