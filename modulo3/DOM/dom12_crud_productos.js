const productos = [
    {
        "id": 1,
        "nombre": "Teclado",
        "precio": 10.99,
        "descripcion": "Teclado mecanico"

    },
    {
        "id": 2,
        "nombre": "Mouse",
        "precio": 5.99,
        "descripcion": "Mouse inalámbrico"
    },
    {
        "id": 3,
        "nombre": "Monitor",
        "precio": 199.99,
        "descripcion": "Monitor de 24 pulgadas"
    }
];

function renderProductos() {
    const cuerpoTabla = document.getElementById('CuerpoTabla');
    cuerpoTabla.innerHTML = '';
    productos.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.descripcion}</td>
            <td>
            <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });



function agregarProducto() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();
    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    const nuevoProducto = {
        id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
        nombre: nombreInput,
        precio: parseFloat(precioInput),
        descripcion: descripcionInput
    }
    productos.push(nuevoProducto);
    renderProductos();

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = ''; 
}
const botonAgregar = document.getElementById('btnAgregar');
botonAgregar.addEventListener('click', () => {agregarProducto();
});

let idEditar = null;

function eliminarProducto(id) {
    const producto= productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('precio').value = producto.precio;
        idEditar = id;
        agregarBtn.
    }
}
function actualizarProducto() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();
    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    const productoIndex = productos.findIndex(p => p.id === idEditar);
    if (productoIndex !== -1) {
        productos[productoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            precio: parseFloat(precioInput),
            descripcion: descripcionInput
        };
        renderProductos();
        limpiarFormulario();
        agregarBtn.textContent = 'Agregar producto';
        agregarBtn.removeEventListener('click', actualizarProducto);
        agregarBtn.addEventListener('click', agregarProducto);
        idEditar = null;
    }

}
function cancelarEdicion() {
    LimpiarFormulario();
    agregarBtn.textContent = 'Agregar producto';
    agregarBtn.removeEventListener('click', actualizarProducto);
    agregarBtn.addEventListener('click', agregarProducto);
    idEditar = null;

}
const cancelarBtn = document.getElementById('btnCancelar');
cancelarBtn.addEventListener('click', cancelarEdicion);
}
window.onload = function() {
    renderProductos();
};
 