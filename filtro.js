fetch('productos.json')
.then(response => response.json())
.then(data => {
    window.productos = data;
    function filtrarProductos(categoria) {
        const productosSection = document.getElementById('catálogo');
        productosSection.innerHTML = ''; 
  
        const productosFiltrados = productos[categoria]; 
  
        productosFiltrados.forEach(producto => {

          const productoElement = document.createElement('div');
          productoElement.classList.add('Producto');
  
          productoElement.innerHTML = `
            <a href="${categoria}.html">
                <div class="Producto__foto">
                    <img src="${producto.foto}" alt="${producto.nombre}">
                </div>
                <div class="Producto__precio">
                    ${producto.nombre} - $${producto.precio}
                </div>
            </a>
            `;
          productosSection.appendChild(productoElement);
        });
      }


    const botonIndividuales = document.getElementById('individuales');
    const botonRamos = document.getElementById('ramos');
    const botonPersonalizados = document.getElementById('personalizados');
    

    botonIndividuales.addEventListener('click', () => filtrarProductos('individuales'));
    botonRamos.addEventListener('click', () => filtrarProductos('ramos'));
    botonPersonalizados.addEventListener('click', () => filtrarProductos('personalizados'));
});