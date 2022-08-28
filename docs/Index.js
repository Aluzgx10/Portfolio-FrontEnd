//funciones para mi proyecto:

//abre las casillas a llenar para el nuevo proyectos
function agregandoProyecto(){

	document.getElementById("in_nombre").style.display="block";
	// document.getElementById("in_descrip").style.display="block";
	// document.getElementById("in_foto").style.display="block";
	document.getElementById("save").style.display="block";
	document.getElementById("newP").style.display="none";
	
	// const existDiv = document.getElementById("list"); // crear un nuevo elemento div 
	
	// const newDiv = document.createElement("article"); // agregar el nuevo elemento div existente 
	// const subtitulo = document.createElement("h4");
	// const des = document.createElement("p");
	// const img = document.createElement("img");
	
	// newDiv.attribute = "class";
	// newDiv.setAttribute('class',"proyect");
	// subtitulo.attribute = "id";
	// subtitulo.setAttribute('id',"1");
	// des.attribute = "id";
	// des.setAttribute('id',"2");
	// img.attribute = "id";
	// img.setAttribute('id',"3");
	
	// newDiv.appendChild(subtitulo);
	// newDiv.appendChild(des);
	// newDiv.appendChild(img);
	// existDiv.appendChild(newDiv); 

}

// function ima(valor){
	// document.getElementById("3").attribute = "src";
	// document.getElementById("3").setAttribute('src',valor);
// }

// function sen(valor){
	// document.getElementById("2").innerText = valor;
// }

function setFun(valor){
	document.getElementById("1").innerText = valor;
}
//agrega nuevos proyectos al listado
function secFun(){
	
	document.getElementById("in_nombre").style.display="none";
	// document.getElementById("in_descrip").style.display="none";
	// document.getElementById("in_foto").style.display="none";
	document.getElementById("save").style.display="none";
	document.getElementById("newP").style.display="block";

}

//----------
	// function addElement () { // obtener el elemento div con id = "div_example" 
	// const existDiv = document.getElementById("list"); // crear un nuevo elemento div 
	
	// const newDiv = document.createElement("article"); // agregar el nuevo elemento div existente 
	// const subtitulo = document.createElement("h4");
	
	// newDiv.attribute = "class";
	// newDiv.setAttribute('class',"proyect");
	// subtitulo.attribute = "id";
	// subtitulo.setAttribute('id',"1");
	
	// newDiv.appendChild(subtitulo);
	// existDiv.appendChild(newDiv); 
	// }
	

var val = "Sigue hacia adelante, nunca mires lo que otro hizo mejor, mira lo que tu hiciste y dí que mañana seras superior a lo que esa persona fue.";

//muestra un mensaje motivador
function muestraMe() {
  document.getElementById("myText").innerHTML = val;
  document.getElementById("tik").style.display = "none";
}

/*coment multiline
Array.find();
Array.filter();
Array.includes(val);
Array.indexOf(pos);

element.attribute = new value		crea nuevo atributo
element.style.property = new style		crea un estilo
element.setAttribute(attribute, value)		cambia estilo

document.removeChild(element)		elimina
document.appendChild(element)		AGREGA ELEMTO
document.replaceChild(new, old)		REEMPLAZA UN ELEMTO
*/