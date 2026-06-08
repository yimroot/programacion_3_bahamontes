function mostrarAlerta() {
    alert('¡Hola desde el botón!');
}

function agregarProducto() {
    const lista = document.getElementById('lista-productos1');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto';
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto desde Evento Listener';
    lista2.appendChild(nuevoProducto);
});

function testoT() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Texto Modificado desde JS";
    console.log("Mensaje:", mensaje);
}


