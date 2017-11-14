
// let user = {};
//
// user.name = 'John';
// alert(user.name);
// user.surname = 'Smith';
// alert(user.surname)
// user.name = 'Pete';
// alert(user.name);
// delete user.name;
// for(let key in user){
//     alert(key);
// }

// let schedule = {};
//
// function isEmpty(object) {
//     for(let key in object){
//         return false;
//     }
//     return true;
// }
// schedule["8:30"] = "get up";
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// function sum( object ) {
//     let sum = 0;
//     for (let key in object){
//         sum += object[key];
//     }
//     return sum;
// }
//
// // before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric( object ) {
//     for ( let key in object ){
//         if ( typeof object[key] == "number"){
//             object[key] *= 2;
//         }
//     }
// }
//
// multiplyNumeric(menu);
//
// let calculator = {
//     a : 0,
//     b : 0,
//     read(){
//         this.a = +prompt("Введите первое число");
//         this.b = +prompt("Введите второе число");
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// };
//
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // shows the current step
//         alert( this.step );
//         return this;
//     }
// };


let matrix = [];
let N = +prompt("Введите колтчество строк");
let M = +prompt("Введите количество столбцов");


for ( let i = 0; i < N; i++ ){
    matrix[i] = [];
    for ( let j = 0; j < M; j++ ){
        matrix[i][j] = +prompt("Введите число")
    }
}
for( let key in matrix){
    alert(matrix[key]);
}



