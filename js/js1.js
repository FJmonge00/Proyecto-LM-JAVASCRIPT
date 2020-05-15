function Abrir_ficha(evt, nombre_ficha) {
    // Declare all variables
    var i, cont_botones, botones_menu;
    // Get all elements with class="cont_botones" and hide them
    cont_botones = document.getElementsByClassName("cont_botones");
    for (i = 0; i < cont_botones.length; i++) {
      cont_botones[i].style.display = "none";
    }
    // Get all elements with class="botones_menu" and remove the class "active"
    botones_menu = document.getElementsByClassName("botones_menu");
    for (i = 0; i < botones_menu.length; i++) {
      botones_menu[i].className = botones_menu[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(nombre_ficha).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();