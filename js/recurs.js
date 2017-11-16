/*1
* Вычислить сумму чисел до данного*/
{
    function sumTo( n ) {
        let sum = 0;
        for ( let i = 0; i <= n; i++ ){
            sum += i;
        }
        return sum;
    }

    function sumTo1( n ) {
        return n ? n + sumTo1( n - 1 ) : n;
    }

    function sumTo2( n ) {
        return ( (1 + n)*n/2 );

    }
    // alert( sumTo(100) ); // 5050
    // alert( sumTo1(100) ); // 5050
    // alert( sumTo2(100) ); // 5050
}
/*2
* Вычислить факториал*/
{
    function factorial( n ) {
        return n ? n * factorial(n - 1) : 1;
    }
    // alert( factorial(5) ); // 120
}

/*3
* Числа Фибоначчи*/
function fib( n ) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fib1( n ) {
    let a = 1, b = 1;
    for ( let i = 3; i <= n; i++ ) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib1(77) ); // 5527939700884757

