let choose;

function operationChoose(question) {
   /* do{
        alert("You didn't enter operation.");*/
        choose = +prompt(question);
       /* if ( choose == null || choose == '')
            i = 1;
    }while(i == 1);*/

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

        }
        break;
        case 2:{
            operationChoose("Calc: \nWhat are you want?\n" +
                "1. +\n" +
                "2. -\n" +
                "3. *\n" +
                "4. /\n" +
                "5. mod\n");
        }
        break;
    }
}

chooseType();

