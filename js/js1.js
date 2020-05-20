// Creo el objeto Alumno el cual tiene una serie de propiedades que se indicaran con los parametros: nombre, apellido, ciclo,etc
// Cada una de las versiones o mas bien LAS INSTANCIAS del objeto Alumno serán los ditintos alumnos de mi Aplicacion Web
class Alumno{
    constructor(nombre, apellido, ciclo, grado, profesor, tutor, empresa, centro){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciclo = ciclo;
        this.grado = grado;
        this.profesor = profesor;
        this.tutor = tutor;
        this.empresa = empresa;
        this.centro = centro;
    }
}
// Aqui pongo unos datos por defecto de ejemplos de alumnos, las declaro como "const" en vez de "var" ya que tienen un valor fijo y que no varia
// (Con esto estamos creando nuevas instancias del objeto Alumno)
// Para añadir una nueva instancias por defecto para que aparezca algun ejemplo
const alumno1 = new Alumno("Francisco Javier", "Rodríguez", "SMR", "Medio", "Antonio", "Antonio", "AWS", "La Cartuja");
const alumno2 = new Alumno("Antonio", "Palomo", "DAW", "Superior", "Manuel", "Sofia", "Oracle", "IES Camas");
const alumno3 = new Alumno("Ana", "Bohuele", "Comercio y Marketing", "Medio", "Myrian", "Myrian", "CDMON", "La Cartuja");

// Aquí se añaden todos los alumnos guardados desde el formulario (mis imputs)
var alumnos = [alumno1, alumno2, alumno3];
function Abrir_ficha(evt, nombre_ficha) {

    if(nombre_ficha === "Asignaciones") anadir_alumnos_a_lista();
    // Declaracion de variables
    var i, cont_botones, botones_menu;
    // Oculutar todos los elemtos con la clase indicada y oculatarlo añadiendo el style display: none;
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
  <button class="bot_guardar" id="btn_guardar" onclick="guardar_profe()"><a href="#tabla1">Guardar</a></button></button><br><br>
  `;
}
// Actividades
function nuevo_actividad() {
    // Todo el el codigo html que haya entre las comillas invertidas se aÑadira a div form_profes
    formu_actividades.innerHTML = `
  <p>Día: </p> <input id="act_dia" type="text"><br><br>
  <p>Actividades: </p><textarea name="campo3"  rows="4" cols="50" id="act_activi" placeholder="¿Cuales han sido rus actividades?"></textarea><br><br>
  <p>Numero de horas: </p><input id="act_nhor" type="text"><br><br>
  <button class="bot_guardar" id="btn_guardar" onclick="guardar_actividad()"><a href="#tabla1">Guardar</a></button></button><br><br>
  `;
}
// Empresas:
function nueva_empresa() {
    // Todo el el codigo html que haya entre las comillas invertidas se aÑadira a div form_empresas
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
    <button class="bot_guardar" id="btn_guardar" onclick="guardar_empresa()"><a href="#tabla2">Guardar</a></button><br><br>
  `;
}

// INSERTAR DATOS
function guardar_profe() {
    // Indico de donde vienen los nuevos valores (los input)
    var nombre = document.getElementById("nomb").value;
    var apeliidos = document.getElementById("apel").value;
    // guardo en una variable los nuevos valores
    var fila_nueva = "<tr><td>" + nombre + "</td><td>" + apeliidos + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_profes").appendChild(fila);
}
// INSERTAR DATOS
function guardar_actividad() {
    // Indico de donde vienen los nuevos valores (los input)
    var dia = document.getElementById("act_dia").value;
    var actividad = document.getElementById("act_activi").value;
    var horas = document.getElementById("act_nhor").value;
    // guardo en una variable los nuevos valores
    var fila_nueva = "<tr><td>" + dia + "</td><td>" + actividad + "</td><td>" + horas + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_actividades").appendChild(fila);
}
// INSERTAR DATOS
function guardar_empresa() {
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
    var fila_nueva = "<tr><td>" + nombre + "</td><td>" + direc + "</td><td>" + web + "</td><td>" + per_contac + "</td><td>" + telf_contac + "</td><td>" + mail_contac + "</td><td>" + tutor + "</td><td>" + telf_tutor + "</td><td>" + mail_tutor + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_empresas").appendChild(fila);
}

function nuevo_alumno() {
    formu_alumnos.innerHTML = `
    <p>Nombre: </p> <input id="alumn_nombre" type="text"><br><br>
    <p>Apellidos: </p><input id="alumn_apellidos" type="text"><br><br>
    <p>Ciclo: </p><input id="alumn_ciclo" type="text"><br><br>
    <p>Grado: </p><input id="alumn_grado" type="text"><br><br>
    <p>Profesor: </p><input id="alumn_profesor" type="text"><br><br>
    <p>Tutor: </p><input id="alumn_tutor" type="text"><br><br>
    <p>Empresa: </p><input id="alumn_empresa" type="text"><br><br>
    <p>Centro: </p><input id="alumn_centro" type="text"><br><br>
    <button class="bot_guardar" id="btn_guardar" onclick="anadir_alumno()"><a href="#tabla3">Guardar</a></button></button><br><br>
  `;
};
// Utilizo esta funcion para añadir a lista desplegable de la pestaña asignaciones los distintos alumnos
// lista_html se le indicara el id de la lista a la que quiero añadir valores y opcion es el contenido que añado a lista
function anadir_a_lista(lista_html, opcion){
    // Variable list almacena la lista actual perteneciente al id lista_html
    var list = document.getElementById(lista_html);
    // Para añadir una nueva entrada en la etiqueta select del html
    var nueva_opcion = new Option(opcion);
    // DESCOMENTAR LINEA DE ABAJO PARA VER PRO CONSOLA LAS opciones o los option que se añaden a la etiqueta option de asignaciones
    console.log(nueva_opcion)
    // Array (vacio en esta funcion pero mas adelante se añadiran datos)donde añado los diferentes entradas de los alumnos en la lista se puede comprobar descomentado la linea anterior
    var opciones_lista = [];
    console.log(opciones_lista)
    // Con este bucle puedo recorrer la lista completa de nombres e ir añadiendole los nombres indicados en el paramentro nueva_opcion
    for(var i = 0, tamano_lista = list.options.length; i < tamano_lista; i++){
        // guardo todos los elemetos de la lista en un arrays (En la primera ejecuación esta vacia, pero al llamar de nuevo a la funcion se añadirian de nuevo, por lo que lo guardo los valores que ya tiene en un arrays para posteriormente comprobar si ya existen)
        opciones_lista.push(list.item(i).value);
    }
    // Con este condición evito que se añada de nuevo los valores que ya existen en la tabla (el que se añada varias veces un mismo alumno a la lista EL SELECT de la pestaña asignaciones)
    if(!opciones_lista.includes(nueva_opcion.value)) list.add(nueva_opcion);
    // Si NO esta en la lista añademe la nueva opción
}
// Con esta funcion añado los alumnos con los datos indicados en los distintos input de la pestaña Alumnos
// Esta funcion se llama cada vez que hacemos clic en guardar en la pestaña alumno
function anadir_alumno(){
    var nombre = document.getElementById("alumn_nombre").value;
    var apellido = document.getElementById("alumn_apellidos").value;
    var ciclo = document.getElementById("alumn_ciclo").value;
    var grado = document.getElementById("alumn_grado").value;
    var profesor = document.getElementById("alumn_profesor").value;
    var tutor = document.getElementById("alumn_tutor").value;
    var empresa = document.getElementById("alumn_empresa").value;
    var centro = document.getElementById("alumn_centro").value;
    // Aqui añado un nuevo alumno que es una nueva instacia al objeto Alumno
    var alumno = new Alumno(nombre, apellido, ciclo, grado, profesor, tutor, empresa, centro);

    alumnos.push(alumno);

    var fila_nueva = "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + ciclo + "</td><td>" + grado + "</td><td>" + profesor + "</td><td>" + tutor + "</td><td>" + empresa + "</td><td>" + centro + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    var fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_alumnos").appendChild(fila);
}

// con esta funcion añado a los alumnos a lista de la pestaña asignacion utiñizando la funcion añadir_a_lista
// Esto se ejecuta al hacer clic en la pestaña de Asignaciones
function anadir_alumnos_a_lista(){
    for(var i = 0, tamano_lista = alumnos.length; i < tamano_lista; i++){
        anadir_a_lista("asignaciones_lista", alumnos[i].nombre + " " + alumnos[i].apellido)
    }
}
// Al cargar la pagina completa se añadiran cada uno de los alumnos que tenemos en el objeto Alumnos
window.onload = function(){
        for(var i = 0, tamano_lista = alumnos.length; i< tamano_lista; i++){
        var fila_nueva = "<tr><td>" + alumnos[i].nombre + "</td><td>" + alumnos[i].apellido + "</td><td>" + alumnos[i].ciclo + "</td><td>" + alumnos[i].grado + "</td><td>" + alumnos[i].profesor + "</td><td>" + alumnos[i].tutor + "</td><td>" + alumnos[i].empresa + "</td><td>" + alumnos[i].centro + "</td></tr>";
        // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
        var fila = document.createElement("TR");
        // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
        fila.innerHTML = fila_nueva;
        // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
        document.getElementById("tbl_alumnos").appendChild(fila);
    }
};
//.onchange significa que se ejecutará cuando se realize algun cambio en la lista por ejemplo selecionar un opcion que sería un alumno
document.getElementById("asignaciones_lista").onchange = function() {
    var lista = document.getElementById("asignaciones_lista");
    // accede al array de las opciones de la lista del select mediante el indice con el método lista.selectedIndex
    var opcion = lista.options[lista.selectedIndex].text;
    // 
    var alumno;

    for(var i = 0; i < alumnos.length; i++){
        // "opcion" es el nombre y apellidos del alumno selecionado en la lista
        // Compruebo que haya un alumno con el nombre y apellido que indico en la lista si este existe define la varible "alumno" con los datos de la instancia del objeto Alumnos (añade los datos de un alumno)
        if(alumnos[i].nombre + " " + alumnos[i].apellido === opcion) alumno = alumnos[i];
    }
    // Se muestran en los input de la pestaña asignaciones la informacion del alumno selecionado
    document.getElementById("asignacionesCiclo").value = alumno.ciclo;
    document.getElementById("asignacionesGrado").value = alumno.grado;
    document.getElementById("asignacionesProfesor").value = alumno.profesor;
    document.getElementById("asignacionesTutor").value = alumno.tutor;
    document.getElementById("asignacionesEmpresa").value = alumno.empresa;
    document.getElementById("asignacionesCentro").value = alumno.centro;
};
// De nuevo cuando se realizara cuando haya un cambio por la opcion .onchange
document.getElementById("fechaAsignaciones").onchange = function() {
    var fecha = new Date(document.getElementById("fechaAsignaciones").value);

    document.getElementById("asignacion1fecha").innerHTML = fecha.toString();
    document.getElementById("asignacion2fecha").innerHTML = new Date(fecha.setDate(fecha.getDate() + 1)).toString();
    document.getElementById("asignacion3fecha").innerHTML = new Date(fecha.setDate(fecha.getDate() + 1)).toString();
    document.getElementById("asignacion4fecha").innerHTML = new Date(fecha.setDate(fecha.getDate() + 1)).toString();
    document.getElementById("asignacion5fecha").innerHTML = new Date(fecha.setDate(fecha.getDate() + 1)).toString();


};
// Actulizar el valor de las horas sumando los valores de las distintas variables indicandas en la web ene l inputt tipo number
// (Para poder realizar operaciones aritmeticas (la suma) es necesario indicar con parserInt que el valor indicado es del tipo numero)
function actualizarHoras() {
  // Esta variable seria como var numero = 6 solo que la variable proviene de valor de elemento con el id especificado
    var hora1 = parseInt(document.getElementById("hora1").value);
    var hora2 = parseInt(document.getElementById("hora2").value);
    var hora3 = parseInt(document.getElementById("hora3").value);
    var hora4 = parseInt(document.getElementById("hora4").value);
    var hora5 = parseInt(document.getElementById("hora5").value);

    var total = hora1 + hora2 + hora3 + hora4 + hora5;

    document.getElementById("totalHoras").innerHTML = "Total de horas realizadas: " + total.toString();
}
// Para que se realize la actualización cada vez que modifico la hora en los distintos input de nuevo utilizo la opcion onchange llamando a la funcion actualizarHoras
document.getElementById("hora1").onchange = actualizarHoras;
document.getElementById("hora2").onchange = actualizarHoras;
document.getElementById("hora3").onchange = actualizarHoras;
document.getElementById("hora4").onchange = actualizarHoras;
document.getElementById("hora5").onchange = actualizarHoras;
// Para comprobar los alumnos que tengo el el array alumnos lo pongo al final para tener en cuenta tambien los que añado manualmente
console.log(alumnos)