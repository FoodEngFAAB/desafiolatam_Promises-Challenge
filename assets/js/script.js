//Variable que maneja la función reservada ASYNC pra hacer la llamada a la función asíncrona
const getData = async () => {
    //Variable que contendrá la url de interés
    const url = 'https://jsonplaceholder.typicode.com/photos'
    //Estructura try/catch
    try {
        const response = await fetch(url)
        const valueRequired = await response.json()
        //Iteración sobre la base de los 20 primeros títulos
        valueRequired.forEach(element => {
            if (element.id <= 20) {
                console.log(`${element.id}: ${element.title}`)
            }
        })
        //Reporte vía consola de resultados
        console.log(valueRequired.message)
    }
    //Reporte vía consola en caso de error(es)
    catch (err) {
        console.log(`Se ha producido el siguiente error: ${err}.`)
    }
}
getData()

