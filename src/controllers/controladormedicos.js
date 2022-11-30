//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioMedicos.js'

//Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistroprofesional=document.getElementById("registroprofesional")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFoto=document.getElementById("foto")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroprofesional,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto)

})