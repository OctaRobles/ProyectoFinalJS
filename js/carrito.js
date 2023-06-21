
const mangas = [
    {
        id:"1",
        nombre:"Naruto",
        precio:"4000",
        descripcion:"La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas, y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
        stock:"8",
    },
    {
        id:"2",
        nombre:"One Piece",
        precio:"4000",
        descripcion:"Esta es la gran Era Pirata. Gold Roger, el legendario “Rey de los piratas” ha dejado el “One Piece” - su legendario Tesoro - escondido en una zona del mundo llamada “GRAND LINE” y los piratas más fuertes compiten por hallarlo. Un niño llamado Luffy idolatraba a los piratas, en especial a Shanks, el líder de una tripulación que visitó su villa. Un día, por accidente, Luffy comió una “fruta del diablo” del botín de Shanks. Gracias a esa fruta, su cuerpo se ha vuelto de goma pero nunca podrá nadar. El día que los piratas abandonaron la villa, Shanks le obsequió a Luffy su mas preciada posesión: su sombrero de paja. Diez años han pasado desde ese día y Luffy ha salido al mar buscando convertirse en el nuevo “Rey de los piratas”. ¡Aquí inicia la gran aventura de Luffy!",
        stock:"10",
    },
    {
        id:"3",
        nombre:"Death Note",
        precio:"4000",
        descripcion:"Death Note cuenta la historia de Light Yagami, un estudiante excepcional de secundaria que encuentra un misterioso cuaderno de notas el cual pertenece a un dios de la muerte también llamado shinigami que responde al nombre de Ryuk. El poder de este sobrenatural bloc de notas permite terminar con la vida de los demás.Es entonces cuando la trama se complica, Light se sentirá con el poder de acabar con delincuentes irredentos con el fin de crear un nuevo mundo, más puro, en el que el crimen no tenga lugar, pero paulatinamente se le irá de las manos. La policía se verá en la tesitura de tener que ir tras sus pasos puesto que se erige como un Dios con el poder de terminar con la vida de los demás. La tarea de desenmascararlo recaerá en L, un misterioso investigador cuya capacidad intelectual le permite anticiparse a sus pasos.",
        stock:"6",
    },
    {
        id:"4",
        nombre:"Dragon Ball",
        precio:"4000",
        descripcion:"Goku es un extraño y alegre niño que pasa sus días cazando y comiendo hasta que un día conoce a Bulma, una chica muy linda, inteligente y que solo piensa en chicos. Bulma está buscando las Dragon Balls, unas esferas mágicas que se dice que si se reúnen las siete, se te concederá cualquier deseo, ¡y Goku tiene una que le dejó su abuelo como recuerdo! Esto será el inicio de una gran aventura.",
        stock:"15",
    },
    {
        id:"5",
        nombre:"Demon Slayer",
        precio:"4000",
        descripcion:"Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio. Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia.",
        stock:"19",
    },
    {
        id:"6",
        nombre:"Jujutsu Kaisen",
        precio:"4000",
        descripcion:"Yuji Itadori es un genio en el atletismo. Pero no tiene ningún interés de correr en círculos,la vida de Yuji da un giro repentino cuando conoce a Megumi Fushiguro, un chamán que intenta recuperar un objeto maldito.",
        stock:"10",
    },
    {
        id:"7",
        nombre:"Evangelion",
        precio:"4000",
        descripcion:"la humanidad ha sido abatida por un escenario apocalíptico donde monstruos gigantescos llamados “ángeles” parecen buscar la destrucción de la vida en la tierra. Es así que Nerv, una organización científico-militar, crea los EVA, robots que requieren de pilotos “afines” para ser tripulados. Shinji, es hijo del creador de estas armas y, aunque se ha criado solo y no quiere pelear, cree que al hacerlo podrá ganarse la atención y el respeto de su padre. Es así como se embarca en una odisea que tiene consecuencias físicas, psicológicas y hasta espirituales para él y toda la humanidad. El principal problema es que, como muchos adolescentes, no está emocionalmente preparado para enfrentar tal responsabilidad y muchas veces actúa desde el egoísmo, la falta de autoestima o la falta de madurez.",
        stock:"20",
    },
    {
        id:"8",
        nombre:"Attack on Titan",
        precio:"4000",
        descripcion:"Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo. Ahora esa paz está a punto de verse interrumpida por una cadena de acontecimientos que llevará a desvelar qué son los Titanes y cómo aparecieron.",
        stock:"10",
    },
    {
        id:"9",
        nombre:"Tokyo Ghoul",
        precio:"4000",
        descripcion:"Los habitantes de Tokio viven aterrados: en las sombras de la metrópolis se ocultan horribles monstruos que se camuflan entre la multitud, cazando y devorando seres humanos. Un joven se topa con uno de estos ghouls, pero aunque consigue sobrevivir, su existencia ya no será igual…",
        stock:"10",
    },
    {
        id:"10",
        nombre:"Fire Force",
        precio:"4000",
        descripcion:"Tokio se encuentra bajo un extraño fenómeno: ¡la gente entra, sin remedio, en combustión espontánea! Aunque, afortunadamente, hay un equipo a cargo de mantener a raya este particular infierno… ¡La Brigada Antiincendios, que, además ahora cuenta con un nuevo miembro: Shinra, un adolescente de sonrisa perturbadora, poder curioso y cuyo objetivo es convertirse en un héroe!",
        stock:"10",
    },

]
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
    
const verProducto = ({id,nombre,precio,descripcion,stock}) =>{
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
}
const agregarCarrito = (id) =>{
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("subit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        carrito.push({
            id,
            cantidad,
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))
    })
}

const verProductos = () =>{
    producto.forEach(producto =>{
        if(producto.stock !=0){
            verProducto(producto)
            agregarCarrito(producto.id)
        }
        
    });
}
verProducto()

/*
mangas.forEach((mangas,index)=>{
    const comprar = document.querySelector(`#${mangas.id}`)
    comprar.addEventListener("submit",(e)=>{
        e.preventDefault()  
        const canitadadMangas = e.target.children["cantidadMangas"].value
        carrito.push()
        console.log(carrito)
    })
}) */