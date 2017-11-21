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

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib1(77) ); // 5527939700884757



/*Задача на рекурсию*/
/**
 * Сравнивает объекты по значению
 * @param {*} obj1
 * @param {*} obj2
 * @return {boolean}
 */
/* без рекурсии*/
//нашла пример
function deepEqualFilter( obj1, obj2 ) {
   let keys1 = Object.keys(obj1);
   let keys2 = Object.keys(obj2);

   if( keys1.length != keys2.length ){
       return false;
   }
   return !keys1.filter( function(key) {
       if( typeof obj1[key] == 'object' ){
           return !deepEqual1(obj1[key], obj2[key]);
       }else {
           return obj1[key] !== obj2[key];
       }
   }).length;
}


function deepEqualRec( obj1, obj2 ) {
    if( obj1 === obj2 ){
        return true;
    }
    if ( obj1 == null || obj2 == null || typeof obj1 != 'object' || typeof obj2 != 'object'){
        return false;
    }

    let countKeysObj1 = Object.keys( obj1 ).length;
    let countKeysObj2 = Object.keys( obj2 ).length;

    for ( let key in obj1 ){
        if ( !(key in obj2) || !deepEqualRec( obj1[key], obj2[key] )){
            return false;
        }
    }
    return countKeysObj1 == countKeysObj2;
}

/*Для deepEqual договоримся, что свойства obj1 и obj2 могут быть только примитивами либо объектами (т.е. для массивов, функций и т.д. не надо делать обработку).
 Пример объектов для сравнения deepEqual:*/

let customerOrder1 = {
        name: 'customer name',
        order: {
            item: "book1",
            amount: 1,
            price: 100
        }
    };

let customerOrder2 = {
    name: 'customer name',
    order: {
        item: "book1",
        amount: 1,
        price: 100
    }
};

let customerOrder3 = {
    name: 'customer name',
    order: {
        item: {
            name: 'book1',
            type: 'digital'
        },
        amount: 1,
        price: 100,
        delivery: {
            notes: "customer left some notes",
            contact: {
                email: 'customer@google.com',
                phone: {
                    code: '666',
                    number: '666-66-66'
                }
            }
        }
    }
};

let customerOrder4 = {
    name: 'customer name',
    order: {
        item: {
            name: 'book1',
            type: 'digital'
        },
        amount: 1,
        price: 100,
        delivery: {
            notes: "customer left some notes",
            contact: {
                email: 'customer@google.com',
                phone: {
                    code: '666',
                    number: '666-66-66'
                }
            }
        }
    }
};

// alert( deepEqualFilter( customerOrder4, customerOrder3 ) );
alert( deepEqualRec( customerOrder1, customerOrder2 ) );