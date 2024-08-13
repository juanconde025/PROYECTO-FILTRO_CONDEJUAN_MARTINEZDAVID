const añadirIndividual = document.getElementById("addIndividual");
const añadirRamo = document.getElementById("addRamo");
const añadirCustom = document.getElementById("addCustom");
const carrito = document.getElementById("carrito")

añadirIndividual.addEventListener("click", function() {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList.add("producto-carrito");
    nuevoProducto.innerHTML = `
        <img src="Individual Azul y Blanca.png" alt="individual" width="150">
        <div>
            <span>Flor Eterna Individual Amarilla y Azul</span>
            <span>$8.000 cop</span>
            <span>Unidades: 1</span>
        </div>
    `;
    carrito.appendChild(nuevoProducto);
});