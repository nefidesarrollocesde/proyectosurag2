export async function consultarMedicos(){
    //consumiendo API
    //1. CONOCER LA DIRECCIÓN DEL API O SERVICIO
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas" //crear varialble llamada url y aalí colocar el link de la API.

    //2. configurar a que voy al API. (configurando la request o petición)
    let peticion={
        method:"GET",
        
    }

    //3. consumir, traer los datos del API
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)

}