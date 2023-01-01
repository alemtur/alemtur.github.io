/* VARIABLES */
var codifEncriptado = {e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat"}
var codifDesencriptado = {enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u"}
var textoEncriptado = ""
var textoDesencriptado = ""
/**********************************************************************/

/* VARIABLES DE ELEMENTOS DE TEXTO Y BOTONES */
var texto = document.getElementById("areatexto")
var resultado = document.getElementById("arearesultado")

var munieco = document.getElementById("munieco")
var leyendaResultado = document.getElementById("leyenda-resultado")
var botonCopiar = document.getElementById("boton-copiar")

var botonEncriptar = document.getElementById("boton-encriptar")
var botonDesencriptar = document.getElementById("boton-desencriptar")
/**********************************************************************/

/* FUNCIONES DE ENCRIPTADO/DESENCRIPTADO */
function Encriptar(textoClaro) {
  textoEncriptado = textoClaro.replace(/e|i|a|o|u/gi, function(matched){
    return codifEncriptado[matched];
  });
  resultado.value = textoEncriptado.valueOf()
  texto.value = ""

  if(resultado.value != "") {
    resultadoConDatos()    
  }  
}

function Desencriptar(textoEncriptado) {
  textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/gi, function(matched){
      return codifDesencriptado[matched];
  });
  resultado.value = textoDesencriptado.valueOf()
  texto.value = ""

  if(resultado.value != "") {
    resultadoConDatos()
  }
}
/**********************************************************************/

/* EVENTOS CLICK LLAMANDO A LAS FUNCIONES DE ENCRIPTADO/DESENCRIPTADO | ESCUCHA EN TEXTOS*/
botonEncriptar.onclick = function() {
  if(texto.value == "") {
    alert("Por favor, ingrese texto para encriptar.")
  } else {
    Encriptar(texto.value)
  }
  
}

botonDesencriptar.onclick = function() {
  if(texto.value == "") {
    alert("Por favor, ingrese texto para desencriptar.")
  } else {
    Desencriptar(texto.value)
  }
  
}

botonCopiar.onclick = function() {
  resultado.select()
  navigator.clipboard.writeText(resultado.value)
}

texto.addEventListener("input", evt => {
  
  if(contieneMayusculas(texto.value)){
    alert("Mayúsculas detectadas. Por favor ingrese texto sin mayúsculas.")
    texto.value = ""
  }
  
  if(contieneAcentos(texto.value)){
    alert("Acento detectado. Por favor ingrese texto sin acentos.")
    texto.value = ""
  }
})
/**********************************************************************/  

/* FUNCION PARA OCULTAR ELEMENTOS*/  
function resultadoConDatos() {
  munieco.style.visibility = "hidden"
  leyendaResultado.style.visibility = "hidden"
  botonCopiar.style.visibility = "visible"
  resultado.style.visibility = "visible"
}
/**********************************************************************/  

/* FUNCIONES DE DETECCION DE MAYUSCULAS Y ACENTOS */
function contieneMayusculas(str) {
  return /[A-Z]+/.test(str);
}

function contieneAcentos(str) {
  return /[´¨^]+/.test(str);
}
/**********************************************************************/


