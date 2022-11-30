import {validarFormulario} from'./validacionFormularioMedico.js'

//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroprofesional,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistroprofesional.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value
    let fotoMedico=etiquetaFoto.value

// Debemos almacenar todos los valores del formulario
//En una sola variable
//Objeto=sirve para almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroMedico,
        correo:correoMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        descripcion:descripcionMedico,
        foto:fotoMedico
    }
    console.log(datosFormularioMedico)


}