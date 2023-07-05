let productos = [
    {
      numero: 1,
      nombre: "Inflable Minion",
      tipo: "Inflable",
      precio: 1200,
      img: "./img/inflable_minion.jpg",
      hora: 0,
    },
    {
      numero: 2,
      nombre: "Inflable River",
      tipo: "Inflable",
      precio: 2000,
      img: "./img/inflable_river.jpg",
      hora: 0,
    },
    {
      numero: 3,
      nombre: "Inflable Boca",
      tipo: "Inflable",
      precio: 2200,
      img: "./img/inflable_boca.jpg",
      hora: 0,
    },
    {
      numero: 4,
      nombre: "Metegol",
      tipo: "juego",
      precio: 700,
      img: "./img/metegol.jpg",
      hora: 0,
    },
    {
      numero: 5,
      nombre: "Ping Pong",
      tipo: "juego",
      precio: 800,
      img: "./img/ping_pong.jpg",
      hora: 0,
    },
    {
      numero: 6,
      nombre: "Billar de mesa",
      tipo: "juego",
      precio: 1500,
      img: "./img/pool.jpg",
      hora: 0,
    },
    {
      numero: 7,
      nombre: "Carrito para pancho",
      tipo: "varios",
      precio: 1000,
      img: "./img/panchitos.jpg",
      hora: 0,
    },
    {
      numero: 8,
      nombre: "Arcos para futbol",
      tipo: "varios",
      precio: 7000,
      img: "./img/arco.jpg",
      hora: 0,
    },
    {
      numero: 9,
      nombre: "Casita tobogan",
      tipo: "varios",
      precio: 1500,
      img: "./img/tobogan.jpg",
      hora: 0,
    },
  ];
  
  let carrito = [];

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}

const box = document.getElementById("container");
  productos.forEach((producto, indice) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-lg-3", "customCard");
  card.innerHTML = `<img id="imgdiv" src="${producto.img}" alt="${producto.nombre}">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <a href="index.html#carritoHref" class="btn btn-outline-primary botonAddCart" onClick="addCarrito(${indice})">Agregar al carrito</a>
    </div>`;
  box.appendChild(card);
});
  
function addCarrito(indice) {
  const productoAgregado = productos[indice];
  carrito.push(productoAgregado);
  const productoIndex = (carrito.indexOf(productoAgregado))
  if (productoIndex + 1 != carrito.length) {
    carrito.pop(productoAgregado)
  }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrar_carrito();
  actualizarTotal();
}

function eliminarProducto(numero) {
  const index = carrito.findIndex((producto) => producto.numero === numero);
  if (index !== -1) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrar_carrito();
    actualizarTotal();
  }
}

function mostrar_carrito() {
  let tabla = document.getElementById("boxCart");
  tabla.innerHTML = "";
  for (let producto of carrito) {
    let fila = document.createElement("div");
    fila.className = "producto_row";
    fila.innerHTML = `<img src=".${producto.img}" alt="">
        <h5>${producto.nombre}</h5>
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary btnHoras" onClick="restarHoras(${carrito.indexOf(producto)})">-</button>
          <h5 class="horasMostrar">${producto.hora}</h5>
          <button type="button" class="btn btn-primary btnHoras" onClick="sumarHoras(${carrito.indexOf(producto)})">+</button>
        </div>
        <h5>${producto.tipo}</h5>
        <h5>${producto.precio}</h5>
        <button type="button" class="btn btn-danger btnCustom" onClick="eliminarProducto(${producto.numero})">Eliminar del carrito</button>`;
    tabla.append(fila);
  }
}

const botonTodo = document.getElementById("botonTodo");
const botonVarios = document.getElementById("botonVarios");
const botonJuegos = document.getElementById("botonJuegos");
const botonInflables = document.getElementById("botonInflables");
botonTodo.addEventListener("click", mostrarTodo);
botonVarios.addEventListener("click", mostrarPorTipoVarios);
botonJuegos.addEventListener("click", mostrarPorTipoJuegos);
botonInflables.addEventListener("click", mostrarPorTipoInflables);

function mostrarTodo() {
  box.innerHTML = "";
  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "customCard");
    card.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
      <a href="#" class="btn btn-outline-primary botonAddCart" onClick="addCarrito(${indice})">Agregar al carrito</a>
      </div>`;
    box.appendChild(card);
  });
}

function mostrarPorTipoVarios() {
  const productosFiltrados = productos.filter((producto) => producto.tipo === "varios");
  box.innerHTML = "";
  productosFiltrados.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "customCard");
    card.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
      <a href="#" class="btn btn-outline-primary botonAddCart" onClick="addCarrito(${indice})">Agregar al carrito</a>
      </div>`;
    box.appendChild(card);
  });
}

function mostrarPorTipoJuegos() {
  const productosFiltrados = productos.filter((producto) => producto.tipo === "juego");
  box.innerHTML = "";
  productosFiltrados.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "customCard");
    card.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
      <a href="#" class="btn btn-outline-primary botonAddCart" onClick="addCarrito(${indice})">Agregar al carrito</a>
      </div>`;
    box.appendChild(card);
  });
}

function mostrarPorTipoInflables() {
  const productosFiltrados = productos.filter((producto) => producto.tipo === "Inflable");
  box.innerHTML = "";
  productosFiltrados.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "customCard");
    card.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-outline-primary botonAddCart" onClick="addCarrito(${indice})">Agregar al carrito</a>
            </div>`;
    box.appendChild(card);
  });
}

mostrar_carrito();

const botonVaciar = document.getElementById("boton_vaciar");
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carrito = []; 
  localStorage.removeItem("carrito"); 
  mostrar_carrito(); 
  actualizarTotal();
}

function actualizarTotal() {
  const totalElement = document.getElementById("totalAct");
  const total = carrito.reduce((accumulator, producto) => accumulator + producto.precio * producto.hora, 0);
  totalElement.textContent = `Total: $${total}`;
}

const botonComprar = document.getElementById("botonFinalizar");
botonComprar.addEventListener("click", finalizarCompra);

function finalizarCompra() {
  console.log(carrito.length);
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No hay productos en tu carrito',
      footer: '¡Proba agregar algo a tu carrito!'
    });
  } else if (carrito.length > 0) {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: 'Gracias por alquilar en Belesse Eventos!'
    });
    vaciarCarrito();
  }
}

function sumarHoras(indice) {
  carrito[indice].hora++;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrar_carrito();
  actualizarTotal();
}

function restarHoras(indice) {
  if (carrito[indice].hora > 0) {
    carrito[indice].hora--;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrar_carrito();
    actualizarTotal();
  }
}

let intervalSpan;

function navbarSpanToggleFontWeight() {
  let spanNavbar = document.getElementById("spanNavbar");

  if (spanNavbar.style.fontWeight === "400") {
    spanNavbar.style.fontWeight = "500";
  } else {
    spanNavbar.style.fontWeight = "400";
  }
}

function startNavbarSpanInterval() {
  intervalSpan = setInterval(navbarSpanToggleFontWeight, 1000);
}

function clearNavbarSpanInterval() {
  clearInterval(intervalSpan);
}

startNavbarSpanInterval();

setTimeout(clearNavbarSpanInterval, 20000);

function geoPosicion(posicion){
  let lat = posicion.coords.latitude;
  let long = posicion.coords.longitude;
  let key = "658143c3deddba5b761482b22c13f7fa";

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude={part}&appid=${key}&units=metric&lang=es`)
  .then( response => response.json())
  .then( data => {
    const climaContainer = document.getElementById("climaContainer");
    climaContainer.innerHTML = `<div class="climaTempContainer"><img src="./img/clima_ubicacion.png" alt="clima" class="climaImg"></img><h5 class="climaStyle climaName">${data.name}</h5></div>
    <div class="climaTempContainer"><img src="./img/clima_icon.png" alt="clima" class="climaImg"></img><h5 class="climaStyle climaTemp">${data.main.temp}</h5></div>
    <h5 class="climaStyle climaDes">${data.weather[0].description}</h5>
    `
  })
}

navigator.geolocation.getCurrentPosition( geoPosicion );