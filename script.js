let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const comprar = document.querySelectorAll('.flor-comprar');

comprar.forEach(btn => {
    btn.addEventListener('click', () => {
        const nombre = btn.getAttribute('datos-nombre');
        const precio = btn.getAttribute('datos-precio');
        const imagen = btn.getAttribute('src');
        const producto = {
            nombre: nombre,
            precio: parseInt(precio),
            imagen: imagen
        };
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
});