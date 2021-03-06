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
    }
    //Reporte vía consola en caso de error(es)
    catch (err) {
        console.log(`Se ha producido el siguiente error: ${err}.`)
    }
}
//Uso de setTimeout para retornar mensaje tras tiempo especificado (3 segundos)
const finishedProcess = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Información enviada.`)
        }, 3000)
    })
}
//Función asíncrona para recibir el mensaje directamente con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
const finalMsg = async () => {
    getData()
    finishedProcess()
    const msg = await finishedProcess();
    console.log(msg);
}
finalMsg()