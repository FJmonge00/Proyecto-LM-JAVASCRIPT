// Creo el objeto Alumno el cual tiene una serie de propiedades que se indican con los parametros: nombre, apellido, ciclo,etc
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
// Aqui pongo unos datos por defecto de ejemplos de alumnos, las declaro como "const" en vez de "var" ya que tienen un valor fijo
// (Con esto estamos creando nuevas instancias del objeto Alumno)
// Para añadir una nueva instancia
const alumno1 = new Alumno("Francisco Javier", "Rodríguez", "SMR", "Medio", "Antonio", "Antonio", "Amazon", "La Cartuja");
const alumno2 = new Alumno("Antonio", "Palomo", "DAW", "Superior", "Manuel", "Sofia", "Oracle", "IES Camas");
const alumno3 = new Alumno("Ana", "Bohuele", "Comercio y Marketing", "Medio", "Myrian", "Myrian", "CDMON", "La Cartuja");

// Aquí se añaden todos los alumnos guardados desde el formulario (mis imputs)
const alumnos = [alumno1, alumno2, alumno3];

function Abrir_ficha(evt, nombre_ficha) {

    if(nombre_ficha === "Asignaciones") anadir_alumnos_a_lista();
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
function guardar_profe() {
    // Indico de donde vienen los nuevos valores (los input)
    const nombre = document.getElementById("nomb").value;
    const apeliidos = document.getElementById("apel").value;
    // guardo en una variable los nuevos valores
    const fila_nueva = "<tr><td>" + nombre + "</td><td>" + apeliidos + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    const fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_profes").appendChild(fila);
}

function guardar_empresa() {
    // Indico de donde vienen los nuevos valores (los input)
    const nombre = document.getElementById("nomb").value;
    const direc = document.getElementById("direc").value;
    const web = document.getElementById("web").value;
    const per_contac = document.getElementById("per_contac").value;
    const telf_contac = document.getElementById("telf_contac").value;
    const mail_contac = document.getElementById("mail_contac").value;
    const tutor = document.getElementById("tutor").value;
    const telf_tutor = document.getElementById("telf_tutor").value;
    const mail_tutor = document.getElementById("mail_tutor").value;
    // guardo en una variable los nuevos valores
    const fila_nueva = "<tr><td>" + nombre + "</td><td>" + direc + "</td><td>" + web + "</td><td>" + per_contac + "</td><td>" + telf_contac + "</td><td>" + mail_contac + "</td><td>" + tutor + "</td><td>" + telf_tutor + "</td><td>" + mail_tutor + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    const fila = document.createElement("TR");
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
    <button class="bot_guardar" id="btn_guardar" onclick="anadir_alumno()">Guardar</button><br><br>
  `;
};
// Utilizo esta funcion para añadir a lista desplegable de la pestaña asignaciones los distintos alumnos
// lista_html se le indicara el id de la lista a la que quiero añadir valores y opcion es el contenido que añado a lista
function anadir_a_lista(lista_html, opcion){
    // Variable list almacena la lista actual perteneciente al id lista_html
    const list = document.getElementById(lista_html);
    // Para añadir una nueva entrada en la etiqueta select del html
    const nueva_opcion = new Option(opcion);
    // Array donde añado los diferentes entradas de los alumnos
    const opciones_lista = [];
    // Con este bucle puedo recorrer la lista completa de nombres e ir añadiendole los nombres indicados en el paramentro nueva_opcion
    for(var i = 0, len = list.options.length; i < len; i++){
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
    const nombre = document.getElementById("alumn_nombre").value;
    const apellido = document.getElementById("alumn_apellidos").value;
    const ciclo = document.getElementById("alumn_ciclo").value;
    const grado = document.getElementById("alumn_grado").value;
    const profesor = document.getElementById("alumn_profesor").value;
    const tutor = document.getElementById("alumn_tutor").value;
    const empresa = document.getElementById("alumn_empresa").value;
    const centro = document.getElementById("alumn_centro").value;
    // Aqui añado un nuevo alumno que es una nueva instacia al objeto Alumno
    const alumno = new Alumno(nombre, apellido, ciclo, grado, profesor, tutor, empresa, centro);

    alumnos.push(alumno);

    const fila_nueva = "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + ciclo + "</td><td>" + grado + "</td><td>" + profesor + "</td><td>" + tutor + "</td><td>" + empresa + "</td><td>" + centro + "</td></tr>";
    // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
    const fila = document.createElement("TR");
    // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
    fila.innerHTML = fila_nueva;
    // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
    document.getElementById("tbl_alumnos").appendChild(fila);
}

// con esta funcion añado a los alumnos a lista de la pestaña asignacion utiñizando la funcion añadir_a_lista
// Esto se ejecuta al hacer clic en la pestaña de Asignaciones
function anadir_alumnos_a_lista(){
    for(var i = 0, len = alumnos.length; i < len; i++){
        anadir_a_lista("asignaciones_lista", alumnos[i].nombre + " " + alumnos[i].apellido)
    }
}
// Al cargar la pagina completa se añadiran cada uno de los alumnos que tenemos en el objeto Alumnos
window.onload = function(){
        for(var i = 0, len = alumnos.length; i< len; i++){
        const fila_nueva = "<tr><td>" + alumnos[i].nombre + "</td><td>" + alumnos[i].apellido + "</td><td>" + alumnos[i].ciclo + "</td><td>" + alumnos[i].grado + "</td><td>" + alumnos[i].profesor + "</td><td>" + alumnos[i].tutor + "</td><td>" + alumnos[i].empresa + "</td><td>" + alumnos[i].centro + "</td></tr>";
        // en esta variable guardo la sentencia DOM la cual me permite crear un objeto html en este caso un TR
        const fila = document.createElement("TR");
        // A este TR le añado el valor que habia almecnado anteriomente en la varibale fila_nueva
        fila.innerHTML = fila_nueva;
        // con la sentencia appenfchild añadimos un valor al elemento indicado en mi caso a la tabla profesores una fila con nuevos valores
        document.getElementById("tbl_alumnos").appendChild(fila);
    }
};
//.onchange significa que se ejecutará cuando se realize algun cambio en la lista por ejemplo selecionar un opcion que sería un alumno
document.getElementById("asignaciones_lista").onchange = function() {
    const lista = document.getElementById("asignaciones_lista");
    // accede al array de las opciones de la lista del select mediante el indice con el método lista.selectedIndex
    const opcion = lista.options[lista.selectedIndex].text;
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
// (Para poder realizar operaciones aritmeticas (la suma) es necesario indicar con parserInt que el valor indicado solo capte los numeros enteros )
function actualizarHoras() {
    const hora1 = parseInt(document.getElementById("hora1").value);
    const hora2 = parseInt(document.getElementById("hora2").value);
    const hora3 = parseInt(document.getElementById("hora3").value);
    const hora4 = parseInt(document.getElementById("hora4").value);
    const hora5 = parseInt(document.getElementById("hora5").value);

    const total = hora1 + hora2 + hora3 + hora4 + hora5;

    document.getElementById("totalHoras").innerHTML = "Total de horas realizadas: " + total.toString();
}
// Para que se realize la actualización cada vez que modifico la hora en los distintos input de nuevo utilizo la opcion onchange llamando a la funcion actualizarHoras
document.getElementById("hora1").onchange = actualizarHoras;
document.getElementById("hora2").onchange = actualizarHoras;
document.getElementById("hora3").onchange = actualizarHoras;
document.getElementById("hora4").onchange = actualizarHoras;
document.getElementById("hora5").onchange = actualizarHoras;