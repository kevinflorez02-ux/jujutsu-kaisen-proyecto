let personajes = [

{
    id: 1,
    descripcion: "Protagonista de la película",
    habilidades: ["Espada", "Energía maldita"],
    nombrePersonaje: "Yuta Okkotsu",
    url_imagen: "img/yuta.jpg",
    edad: 17,
    altura: 175,
    esVillano: false
},

{
    id: 2,
    descripcion: "Principal antagonista",
    habilidades: ["Maldiciones", "Manipulación"],
    nombrePersonaje: "Suguru Geto",
    url_imagen: "img/Suguru-Geto.jpg",
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

            <p><strong>Edad:</strong> ${personaje.edad}</p>

            <p><strong>Altura:</strong> ${personaje.altura} cm</p>

            <p><strong>Villano:</strong> ${personaje.esVillano ? "Sí" : "No"}</p>

            <p><strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>

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

    document.getElementById("formulario").reset();

});

function eliminar(index){

    personajes.splice(index, 1);

    mostrarPersonajes();

}

function actualizar(index){

    let nuevoNombre = prompt(
        "Ingrese el nuevo nombre del personaje"
    );

    if(nuevoNombre){

        personajes[index].nombrePersonaje = nuevoNombre;

        mostrarPersonajes();

    }

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