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

function matrixOperation( type ) {//change name of function

    let matr = { ...matrix };
    let mtxF = { ...matrix };
    let mtxS = { ...matrix };

    alert("Введите первую матрицу");
    mtxF.enterMatrix();
    alert("Введите вторую матрицу");
    mtxS.enterMatrix();

    if ( ( mtxF[N] == mtxS[N] ) && ( mtxF[M] == mtxS[M] ) ){
        matr[N] = mtxF[N];//копировать часть свойств?
        matr[M] = mtxF[M];

        switch ( type ){
            case 1 : {
                for ( let i = 0; i < mtxS.N; i++ ){
                    matr['str' + i] = [];
                    for ( let j = 0; j < mtxS.M; j++ ){
                        matr['str' + i][j] = mtxF['str' + i][j] + mtxS['str' + i][j];
                    }
                }
            }
            break;
            case 2 : {
                for ( let i = 0; i < mtxS.N; i++ ){
                    matr['str' + i] = [];
                    for ( let j = 0; j < mtxS.M; j++ ){
                        matr['str' + i][j] = mtxF['str' + i][j] - mtxS['str' + i][j];
                    }
                }
            }
            break;
            case 3 : {
                for ( let i = 0; i < mtxS.N; i++ ){
                    matr['str' + i] = [];
                    for ( let j = 0; j < mtxS.M; j++ ){
                        matr['str' + i][j] = mtxF['str' + i][j] * mtxS['str' + i][j];
                    }
                }
            }
            break;
            case 4 : {
                for ( let i = 0; i < mtxS.N; i++ ){
                    matr['str' + i] = [];
                    for ( let j = 0; j < mtxS.M; j++ ){
                        matr['str' + i][j] = mtxF['str' + i][j] / mtxS['str' + i][j];
                    }
                }
            }
            break;
        }
        return matr;
    }

}

function matrixOperationChoose(question) {
    let flag = 1;

    while ( flag ){
        choose = +prompt( question );
        switch ( choose ){
            case 1:{
                let mtr = { ...matrix };
                mtr =  { ...matrixOperation( choose ) };
                alert("матрица суммы");
                mtr.showMatrix();
            }
                break;
            case 2:{
                let mtr = { ...matrixOperation( choose ) };
                alert("матрица разности");
                mtr.showMatrix();
            }
                break;
            case 3:{
                let mtr = { ...matrixOperation( choose ) };
                alert("результат перемножения матриц");
                mtr.showMatrix();
            }
                break;
            case 4:{
                let mtr = { ...matrixOperation( choose ) };
                alert("результат деления матриц");
                mtr.showMatrix();
            }
                break;
            case 5:{
                // matrixF.showMatrix();
            }
                break;
            case 6 :{
                // matrixS.showMatrix();
            }
                break;
            case 0 :{
                flag = 0;
            }
                break;
        }
    }

}



function simpleOperationChoose(question) {
    choose = +prompt(question);
     switch (choose){
        case 1:{
            alert( plass( +prompt('Enter a', ''), +prompt('Enter b', '') ) );
        }
        break;
        case 2:{
            alert( minus( +prompt('Enter a', ''), +prompt('Enter b', '') ) );
            }
            break;
        case 3:{
            alert( mult( +prompt('Enter a', ''), +prompt('Enter b', '') ) );
        }
        break;
            case 4:{
                alert( div( +prompt('Enter a', ''), +prompt('Enter b', '') ) );
            }
                break;
            case 5:{
                alert( mod( +prompt('Enter a', ''), +prompt('Enter b', '') ) );
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



function chooseTypeCalc() {
    switch ( +prompt("Choose type of calc:\n" +
        "1. Matrix\n2. Simple") ){
        case 1:{
            matrixOperationChoose("Calc: \nWhat are you want?\n" +
                "1. +\n" +
                "2. -\n" +
                "3. *\n" +
                "4. /\n" +
                "5. show matrixF\n" +
                "6. show matrixS\n" +
                "0. Close");
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

//chooseTypeCalc();


