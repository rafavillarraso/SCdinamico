window.onload = function () {
    
    const articulos = document.querySelectorAll('.producto');
    const cesta = document.querySelector('.cesta-soltar');
    const totalMostrado = document.getElementById('total');
    const botonVaciar = document.getElementById('vaciar');
    const articulosCesta = document.getElementById('lista');
    
    let total = parseInt(totalMostrado.innerHTML);
    if (isNaN(total)) {
        total = 0;
    }
    
    // Funciones drag and drop
    const dragOver = function (e) {
        // Ref: https://developer.cdn.mozilla.net/en-US/docs/Web/API/Document/dragover_event
        e.preventDefault();
    };
    
    const dragEnter = function (e) {
        e.preventDefault();
        this.className += " hovered";
    };

    const dragLeave = function () {
        this.classList.remove("hovered");
    };
    
    const dragDrop = function (e) {
        console.log('soltando elemento...');
        this.classList.remove("hovered");
        // Cambiar precio cesta
        let precio = parseFloat(e.dataTransfer.getData("precio"));
        total = total + precio;
        totalMostrado.innerHTML = total.toFixed(2);
        // Actualizar lista
        let li = document.createElement('li');
        li.textContent = e.dataTransfer.getData("nombre");
        articulosCesta.appendChild(li);
        // Quitar aviso de cesta vacía
        let aviso = document.getElementById('aviso-cesta-vacia');
        aviso.className += " aviso-cesta-vacia-no";

    };
    
    const dragStart = function (e) {
        console.log('cogiendo elemento...');
        let precioArticulo = parseFloat(this.getAttribute('data-precio'));
        e.dataTransfer.setData("precio", precioArticulo);
        let nombreArticulo = this.getAttribute('data-nombre');
        e.dataTransfer.setData("nombre", nombreArticulo);
    }

    // Vaciar cesta
    const vaciarCesta = function () {
        total = 0;
        totalMostrado.innerHTML = total.toFixed(2);
        articulosCesta.innerHTML = '';
        console.log('cesta vaciada');
        let aviso = document.getElementById('aviso-cesta-vacia');
        aviso.classList.remove("aviso-cesta-vacia-no");
    }

    // Asignación de eventos
    if (cesta) {
        cesta.addEventListener("dragover", dragOver);
        cesta.addEventListener("dragenter", dragEnter);
        cesta.addEventListener("dragleave", dragLeave);
        cesta.addEventListener("drop", dragDrop);
    }

    articulos.forEach(articulo => {
        articulo.addEventListener('dragstart', dragStart);
    });

    botonVaciar.addEventListener('click', vaciarCesta);
}