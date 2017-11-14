let choose  = 0;
let matrix = {
    N : 0,
    M : 0,
    enterMatrix(){
        let flag = 1;

        while(flag){

            this.N = +prompt("Введите колтчество строк");
            this.M = +prompt("Введите количество столбцов");

            if ( this.N && this.M ){
                flag = 0;
            } else {
                alert("матрица не может иметь 0 строк и/или 0 столбцов!");
            }
        }

        for ( let i = 0; i < this.N; i++ ){
            this['str' + i] = [];
            for ( let j = 0; j < this.M; j++ ){
                this['str' + i][j] = +prompt("Введите число")
            }
        }
    },
    showMatrix() {
        for( let key in this){
            alert(key);
            alert(this[key]);
        }
    }
};

function matrixSum( mtxF, mtxS ) {

    // if ( (mtxF[N] === mtxS[N]) && (mtxF[M] === mtxS[M]) ){
        alert("1");
        let matrixSum = Object.assign( {}, matrix);

        for ( let i = 0; i < mtxS.N; i++ ){
            matrixSum['str' + i] = [];
            for ( let j = 0; j < mtxS.M; j++ ){
                matrixSum['str' + i][j] = mtxF['str' + i][j] + mtxS['str' + i][j];
            }
        }
        return matrixSum;
    // }
    // return null;
}

function simpleOperationChoose(question) {
    choose = +prompt(question);
     switch (choose){
        case 1:{
            alert( plass( +prompt('Enter a', '')
                , +prompt('Enter b', '') ) );
        }
        break;
        case 2:{
            alert( minus( +prompt('Enter a', '')
                , +prompt('Enter b', '') ) );
            }
            break;
        case 3:{
            alert( mult( +prompt('Enter a', '')
                , +prompt('Enter b', '') ) );
        }
        break;
            case 4:{
                alert( div( +prompt('Enter a', '')
                    , +prompt('Enter b', '') ) );
            }
                break;
            case 5:{
                alert( mod( +prompt('Enter a', '')
                    , +prompt('Enter b', '') ) );
            }
            break;
     }
}

function plass(a, b) {
    return a + b;
}

function minus(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b ) {
    return a % b;
}

function chooseType() {

    switch ( +prompt("Choose type of calc:\n" +
        "1. Matrix\n2. Simple") ){
        case 1:{
            matrixOperationChoose("Calc: \nWhat are you want?\n" +
                "1. +\n" +
                "2. -\n" +
                "3. *\n" +
                "4. /\n" +
                "5. show matrixF\n" +
                "6. show matrixS");
        }
        break;
        case 2:{
            simpleOperationChoose("Calc: \nWhat are you want?\n" +
                "1. +\n" +
                "2. -\n" +
                "3. *\n" +
                "4. /\n" +
                "5. mod");
        }
        break;
    }
}

chooseType();

function matrixOperationChoose(question) {
    let flag = 1;
    let matrixF = Object.assign({}, matrix);
    let matrixS = Object.assign({}, matrix);
    while ( flag ){
        choose = +prompt( question );
        switch ( choose ){
            case 1:{
                matrixF.enterMatrix();
                matrixS.enterMatrix();
                let mtrSum = Object( {}, matrixSum(matrixF, matrixS) );
                if ( !mtrSum ){
                    alert("не удалось суммировать матрицы");
                }
                mtrSum.showMatrix();
            }
                break;
            case 2:{

            }
                break;
            case 3:{

            }
                break;
            case 4:{

            }
                break;
            case 5:{
                matrixF.showMatrix();
            }
                break;
            case 6 :{
                matrixS.showMatrix();
            }
                break;
            case 0 :{
                flag = 0;
            }
                break;
        }
    }

}



