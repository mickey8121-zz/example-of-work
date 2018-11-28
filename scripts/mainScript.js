var idEl = "14"; /*ХРАНИТ ID ИНПУТА ДЛЯ ФУНКЦИИ moveCaret*/
btnMenu.onclick = menuToggler; /*ВЫЗОВ ФУНКЦИИ ПОКАЗ/СКРЫТИЕ МЕНЮ*/

/*ФУНКЦИЯ ПЕРЕМЕЩЕНИЯ КАРЕТКИ ПРИ ЗАПОЛНЕНИИ ИНПУТА НОМЕРА КАРТЫ В СЛЕДУЮЩИЙ ИНПУТ*/
function moveCaret(){
  document.getElementById(idEl).oninput = function() {
    var len = this.value; /*СОДЕРЖИМОЕ ИНПУТА*/

    if (len.length == 4) {

      var id = +this.id;
      var nextEl = id + 10; /*ВЫБОР ID СЛЕДУЮЩЕГО ИНПУТА*/
      var nextEl = "" + nextEl; /*ТИПИЗАЦИЯ В STR*/

      document.getElementById(nextEl).focus(); /*ФОКУС НА СЛЕДУЮЩИЙ ИНПУТ*/

      idEl = +idEl; /*ТИПИЗАЦИЯ В INT*/
      idEl += 10;

      if (idEl < 44) { /*ПОКА 4 ИНПУТ НЕ ЗАПОЛНЕН ФУНКЦИЯ ВЫЗЫВАЕТСЯ СНОВА*/
        idEl = "" + idEl; /*ОБРАТНАЯ ТИПИЗАЦИЯ В STR*/
        moveCaret();
      };
    };
  };
};

moveCaret();

function menuToggler(){
  if (this.className == "closeIcon") {
    this.className = "";
    menu.style.display = "none";
    sidebar.style.height = "82px";
  } else {
    this.className = "closeIcon";
    menu.style.display = "block";
    sidebar.style.height = "331px";
  };
};
