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
  // Plantillas
  // Profesores
  function nuevo_profesor() {
  // Todo el el codigo html que haya entre las comillas invertidas se aÑadira a div form_profes
  formu_profe.innerHTML = `
  <p>Nombre: </p> <input id="nomb" type="text"><br><br>
  <p>Apellidos: </p><input id="apel" type="text"><br><br>
  <button class="bot_guardar" id="btn_guardar" onclick="guardar_profe()">Guardar</button><br><br>
  `;
  }
  // Empresas:
  function nueva_empresa() {
  // Todo el el codigo html que haya entre las comillas invertidas se aÑadira a div form_profes
  formu_empresas.innerHTML = `
    <p>Nombre: </p> <input id="nomb" type="text"><br><br>
    <p>Direccion: </p><input id="direc" type="text"><br><br>
    <p>Web: </p><input id="web" type="text"><br><br>
    <p>Persona de contacto</p><input id="per_contac" type="text"><br><br>
    <p>Telefono contacto</p><input id="telf_contac" type="text"><br><br>
    <p>Email contacto</p><input id="mail_contac" type="text"><br><br>
    <p>Tutor laboral</p><input id="tutor" type="text"><br><br>
    <p>Telefono tutor</p><input id="telf_tutor" type="text"><br><br>
    <p>Email tutor</p><input id="mail_tutor" type="text"><br><br>
    <button class="bot_guardar" id="btn_guardar" onclick="guardar_empresa()">Guardar</button><br><br>
  `;
  }
  // INSERTAR DATOS
  function guardar_profe(){
    // Infico de donde vienen los nuevos valores (los input)
    var nombre = document.getElementById("nomb").value;
    var apeliidos = document.getElementById("apel").value;
    // guardo en una variable los nuevos valores
    var fila_nueva="<tr><td>"+nombre+"</td><td>"+apeliidos+"</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
   // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML=fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_profes").appendChild(fila);
 }
  function guardar_empresa(){
    // Indico de donde vienen los nuevos valores (los input)
    var nombre = document.getElementById("nomb").value;
    var direc = document.getElementById("direc").value;
    var web = document.getElementById("web").value;
    var per_contac = document.getElementById("per_contac").value;
    var telf_contac = document.getElementById("telf_contac").value;
    var mail_contac = document.getElementById("mail_contac").value;
    var tutor = document.getElementById("tutor").value;
    var telf_tutor = document.getElementById("telf_tutor").value;
    var mail_tutor = document.getElementById("mail_tutor").value;
    // guardo en una variable los nuevos valores
    var fila_nueva="<tr><td>"+nombre+"</td><td>"+direc+"</td><td>"+web+"</td><td>"+per_contac+"</td><td>"+telf_contac+"</td><td>"+mail_contac+"</td><td>"+tutor+"</td><td>"+telf_tutor+"</td><td>"+mail_tutor+"</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
   // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML=fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_empresas").appendChild(fila);
 }
  