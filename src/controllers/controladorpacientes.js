//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioPacientes.js'

//Etiquetas que controlo:
let etiquetaNombrePaciente=document.getElementById("nombrePaciente")
let etiquetaApellidoPaciente=document.getElementById("apellidoPaciente")
let etiquetaBotonPaciente=document.getElementById("botonenvioPaciente")
let etiquetaDocumentoPaciente=document.getElementById("documentoPaciente")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaGrupoIngresos=document.getElementById("grupoIngresos")
let etiquetaCuotaModeradora=document.getElementById("cuotaModeradora")
let etiquetaTelefonoPaciente=document.getElementById("telefonoPaciente")
let etiquetaCorreoPaciente=document.getElementById("correoPaciente")

//detectar el evento de clic
etiquetaBotonPaciente.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombrePaciente,etiquetaApellidoPaciente,etiquetaBotonPaciente,etiquetaDocumentoPaciente,etiquetaRegimen,etiquetaGrupoIngresos,etiquetaCuotaModeradora,etiquetaTelefonoPaciente,etiquetaCorreoPaciente)

})