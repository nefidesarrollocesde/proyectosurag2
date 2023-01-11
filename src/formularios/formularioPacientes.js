import {validarFormulario} from'./validacionFormularioPaciente.js'

//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombrePaciente,etiquetaApellidoPaciente,etiquetaDocumentoPaciente,etiquetaRegimen,etiquetaGrupoIngresos,etiquetaCuotaModeradora,etiquetaTelefonoPaciente,etiquetaCorreoPaciente){

    let nombrePaciente=etiquetaNombrePaciente.value
    let apellidoPaciente=etiquetaApellidoPaciente.value
    let documentoPaciente=etiquetaDocumentoPaciente.value
    let regimen=etiquetaRegimen.value
    let grupoIngresos=etiquetaGrupoIngresos.value
    let cuotaModeradora=etiquetaCuotaModeradora.value
    let telefonoPaciente=etiquetaTelefonoPaciente.value
    let correoPaciente=etiquetaCorreoPaciente.value

// Debemos almacenar todos los valores del formulario
//En una sola variable
//Objeto=sirve para almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioPaciente={
        nombre:nombrePaciente,
        apellido:apellidoPaciente,
        documento:documentoPaciente,
        regimen:regimen,
        grupoIngresos:grupoIngresos,
        cuotaModeradora:cuotaModeradora,
        telefono:telefonoPaciente,
        correo:correoPaciente,
    }
    
    validarFormulario(datosFormularioPaciente)


}