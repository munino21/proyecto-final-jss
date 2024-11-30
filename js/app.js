document.addEventListener("DOMContentLoaded", () => {
    fetch("js/productos.json")
        .then(response => response.json())
        .then(data => renderizarProductos(data))
        .catch(error => console.error("Error al cargar los productos:", error));
});

function renderizarProductos(productos) {
    const contenedor = document.getElementById("productos");
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text fw-bold">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

