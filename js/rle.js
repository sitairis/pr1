let str = 'AAASDDDFFFFA';

function rleCompression( str ) {
    let array = str.split('');
    let resultArray = [];
    let count = 1;

    resultArray = array.map( ( item ) => {
        if ( item ){
            return count++;
        }
        return count
    });

    // for (let i = 0, j = 1; i < array.length; i++, j++ ){
    //     // if ( array[i] == array[j] ){
    //     //     count++;
    //     // } else {
    //     //     if ( count == 1){
    //     //         resultArray.push( array[i] );
    //     //     } else {
    //     //         resultArray.push( array[i], count );
    //     //         count = 1;
    //     //     }
    //     //
    //     //     alert( resultArray );
    //     // }
    //
    // }

    let resultStr = resultArray.join('');

    return resultStr;
}

alert( rleCompression( str ) );//A3SD3F4A
