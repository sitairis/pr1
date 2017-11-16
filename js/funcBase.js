/*1
* Перепишите функцию, используя оператор '?' или '||'*/
{
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Родители разрешили?');
        }
    }

    function checkAge1(age) {
        return (age > 18) ? true : confirm('Родители разрешили?');
    }

    function checkAge2(age) {
        return (age > 18) || confirm('Родители разрешили?');
    }
}
/*2
* Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.*/

function min( a, b ) {
    return ( a > b ) ? b : a;
}
// alert( min(2, 5) == 2 );
// alert( min(2, 0) == 0 );
// alert( min(-2, 5) == -2 );

/*3
* Напишите функцию pow(x,n), которая возвращает x в степени n. */
{
    let x = 0;
    let y = 0;
    let flag = true;

    while(flag){
        x = prompt( 'x', '' );
        y = prompt( 'y', '' );
        if ( x === '' || x === null || isNaN(x) ){
            alert( 'x - простое число' );
        } else {
            if ( y === '' || y === null || isNaN(y) ){
                alert( 'y - простое число' );
            } else {
                flag = false;
            }
        }
    }

    function pow( x, y ) {
        if ( x > 0 && y > 0 ){
            let mult = x;
            for ( let i = 0; i < y; i++){
                mult *= x;
            }
            return mult;
        }
        return 0;
    }

    // alert( pow( x, y ) );
}
