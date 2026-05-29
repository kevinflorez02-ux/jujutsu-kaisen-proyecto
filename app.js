let personajes = [

{
    id: 1,
    descripcion: "Protagonista de la película",
    habilidades: ["Espada", "Energía maldita"],
    nombrePersonaje: "Yuta Okkotsu",
    url_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0G-MJzKb_wV_7NVwc7cmwpZi5KhuRp3eEw&s",
    edad: 17,
    altura: 175,
    esVillano: false
},

{
    id: 2,
    descripcion: "Principal antagonista",
    habilidades: ["Maldiciones", "Manipulación"],
    nombrePersonaje: "Suguru Geto",
    url_imagen: "https://pngdownload.io/wp-content/uploads/2024/01/Suguru-Geto-Jujutsu-Kaisen-anime-transparent-PNG-image-jpg.webp",
    edad: 27,
    altura: 185,
    esVillano: true
}

];

const contenedor = document.getElementById("contenedor");

function mostrarPersonajes(){

    contenedor.innerHTML = "";

    personajes.forEach((personaje, index) => {

        contenedor.innerHTML += `
        
        <div class="tarjeta">

            <img src="${personaje.url_imagen}">

            <h3>${personaje.nombrePersonaje}</h3>

            <p>${personaje.descripcion}</p>

            <p>Edad: ${personaje.edad}</p>

            <p>Altura: ${personaje.altura}</p>

            <p>Villano: ${personaje.esVillano}</p>

            <p>Habilidades: ${personaje.habilidades}</p>

            <button onclick="eliminar(${index})">
                Eliminar
            </button>
            <button onclick="actualizar(${index})">
    Actualizar
</button>

        </div>

        `;
    });

}

mostrarPersonajes();

document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nuevo = {

        id: personajes.length + 1,

        descripcion: document.getElementById("descripcion").value,

        habilidades: document.getElementById("habilidades")
        .value.split(","),

        nombrePersonaje: document.getElementById("nombre").value,

        url_imagen: document.getElementById("imagen").value,

        edad: parseInt(document.getElementById("edad").value),

        altura: parseFloat(document.getElementById("altura").value),

        esVillano: document.getElementById("villano").checked
    };

    personajes.push(nuevo);

    mostrarPersonajes();

});

function eliminar(index){

    personajes.splice(index, 1);

    mostrarPersonajes();

    
}
  function actualizar(index){

    let nuevoNombre = prompt("Ingrese el nuevo nombre");

    personajes[index].nombrePersonaje = nuevoNombre;

    mostrarPersonajes();
}


function ordenarNombre(){

    personajes.sort((a,b)=>
        a.nombrePersonaje.localeCompare(b.nombrePersonaje)
    );

    mostrarPersonajes();
}

function ordenarEdad(){

    personajes.sort((a,b)=> a.edad - b.edad);

    mostrarPersonajes();
}