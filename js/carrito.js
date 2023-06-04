const mangas = [
    {
        id:"manga01",
        nombre:"Naruto",
        stock:"8",
    },
    {
        id:"manga02",
        nombre:"One Piece",
        stock:"10",
    },
    {
        id:"manga03",
        nombre:"Death Note",
        stock:"6",
    },
    {
        id:"manga04",
        nombre:"Dragon Ball",
        stock:"15",
    },
    {
        id:"manga05",
        nombre:"Demon Slayer",
        stock:"19",
    },
    {
        id:"manga06",
        nombre:"Jujutsu Kaisen",
        stock:"10",
    },
    {
        id:"manga07",
        nombre:"Evangelion",
        stock:"20",
    },
    {
        id:"manga08",
        nombre:"Attack on Titan",
        stock:"10",
    },
    {
        id:"manga09",
        nombre:"Tokyo Ghoul",
        stock:"10",
    },
    {
        id:"manga10",
        nombre:"Fire Force",
        stock:"10",
    },

]
const carrito = []

mangas.forEach((mangas,index)=>{
    const comprar = document.querySelector(`#${mangas.id}`)
    comprar.addEventListener("submit",(e)=>{
        e.preventDefault()  
        const canitadadMangas = e.target.children["cantidadMangas"].value
        carrito.push()
        console.log(carrito)
    })
})