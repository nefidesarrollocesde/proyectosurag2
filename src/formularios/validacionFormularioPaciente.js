export function validarFormulario(datos){
    

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombrePaciente=document.getElementById("nombrePaciente")
    let etiquetaDocumentoPaciente=document.getElementById("documentoPaciente")
    

    //validemos 2 campos del formulario
    //nombres-documento
    let nombrePaciente=datos.nombre
    let documentoPaciente=datos.documento

   
    

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombrePaciente=="" && documentoPaciente==""){
        etiquetaNombrePaciente.classList.add("is-invalid")
        etiquetaDocumentoPaciente.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
            
          })
    }else if(nombrePaciente=="" && documentoPaciente!=""){
        etiquetaNombrePaciente.classList.add("is-invalid")
        etiquetaDocumentoPaciente.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre obligatorio',
            
          })
    }else if(nombrePaciente!=="" && documentoPaciente==""){
        etiquetaNombrePaciente.classList.remove("is-invalid")
        etiquetaDocumentoPaciente.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Documento obligatorio',
            
          })
    }else{
        etiquetaNombrePaciente.classList.remove("is-invalid")
        etiquetaDocumentoPaciente.classList.remove("is-invalid")
    }

    console.log(datos)

}