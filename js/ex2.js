/*Методы массивов*/

/*1
*Добавить класс в строку*/
{
    let obj = {
        className: 'open menu'
    }

    function addClass(obj, cls) {
        let arrayClass= obj.className.split(' ');
        if ( arrayClass.indexOf( cls ) ){
            arrayClass.push( cls );
        }
        obj.className = arrayClass.join(' ');
    }

    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'

    alert( obj.className );
}
