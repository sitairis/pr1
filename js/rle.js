let str = 'AAASDDDFFFFA';

function rleCompression( str ) {
    let array = str.split('');
    let resultArray = [];
    let count = 1;
    for (let i = 0, j = 1; i < array.length; i++, j++ ){
        if ( array[i] != array[j] && count > 1 ){
            resultArray.push( array[i], count );
            count = 1;
        } else {
            if ( array[i] != array[j] && count == 1 ){
                resultArray.push( array[i] );
            }
            count++;
        }
    }
    return resultArray.join('');
}
// нашла на github пример решения...немного переделала
//https://gist.github.com/simoneb/ce45daa8f5b42b5c88cb
function rleCompressionWithReduce( str ) {
   let array = str.split('');
   let resultStr = array.reduce( ( obj, cur, i, array ) => {
        if ( i && array[++i] != cur ){//можно и !==???
            if ( obj.count != 1){//чтобы не выводило 1
                obj.result += cur + obj.count;
            } else {
                obj.result += cur;
            }
            obj.count = 1;
        } else {
            obj.count++;
        }
        return obj;
   }, { count:1, result:'' } );
   return resultStr;
}

alert( rleCompression( str ) );//A3SD3F4A
alert( rleCompressionWithReduce( str ).result + ' With Reduce' );//A3SD3F4A
