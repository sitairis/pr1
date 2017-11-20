/*1
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
    Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
    Вот пример работы:*/
{
    function makeBuffer() {
        let text = '';

        return function (a) {
            if (arguments.length == 0) {
                return text;
            }
            text += a;
        };
    }

    let buffer = makeBuffer();// пустой

    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');
    alert(buffer()); // 'Замыкания Использовать Нужно!'

    let buffer2 = makeBuffer();
    buffer2(0);
    buffer2(1);
    buffer2(0);

    alert(buffer2()); // '010'
//Решение не должно использовать глобальные переменные.
}
/*2
* Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(),
 * который будет очищать текущее содержимое буфера:*/
{
    function makeBuffer() {
        let text = '';

        function buffer(a) {
            if (arguments.length == 0) { // вызов без аргументов
                return text;
            }
            text += a;
        };

        buffer.clear = function() {
            text = "";
        }

        return buffer;
    };

    let buffer = makeBuffer();

    buffer("Тест");
    buffer(" тебя не съест ");
    alert( buffer() ); // Тест тебя не съест

    buffer.clear();

    alert( buffer() ); // ""
}
