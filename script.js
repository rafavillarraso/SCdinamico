//definir el precio de cada producto:
let productoBayas = document.getElementById('bayas')
let precioBayas = parseInt(productoBayas.getAttribute('data-precio'))

let productoBerenjenas = document.getElementById('berenjenas')
let precioBerenjenas = parseInt(productoBerenjenas.getAttribute('data-precio'))

let productoBrocoli = document.getElementById('brocoli')
let precioBrocoli = parseInt(productoBrocoli.getAttribute('data-precio'))

let productoCayena = document.getElementById('cayena')
let precioCayena = parseInt(productoCayena.getAttribute('data-precio'))

let productoCebolla = document.getElementById('cebolla')
let precioCebolla = parseInt(productoCebolla.getAttribute('data-precio'))

let productoCerezas = document.getElementById('cerezas')
let precioCerezas = parseInt(productoCerezas.getAttribute('data-precio'))

let productoChampis = document.getElementById('champis')
let precioChampis = parseInt(productoChampis.getAttribute('data-precio'))

let productoFresa = document.getElementById('fresa')
let precioFresa = parseInt(productoFresa.getAttribute('data-precio'))

let productoLimon = document.getElementById('limon')
let precioLimon = parseInt(productoLimon.getAttribute('data-precio'))

let productoManzana = document.getElementById('manzana')
let precioManzana = parseInt(productoManzana.getAttribute('data-precio'))

let productoPepino = document.getElementById('pepino')
let precioPepino = parseInt(productoPepino.getAttribute('data-precio'))

let productoPimamarillo = document.getElementById('pim_amarillo')
let precioPimamarillo = parseInt(productoPimamarillo.getAttribute('data-precio'))


const item = document.querySelector('.producto');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    console.log('drag starts...')
}

const cestas = document.querySelectorAll('.cesta-soltar');

cestas.forEach(cesta => {
    cesta.addEventListener('dragenter', dragEnter)
    cesta.addEventListener('dragover', dragOver);
    cesta.addEventListener('dragleave', dragLeave);
    cesta.addEventListener('drop', drop);
});


// function mostrarProducto() {
//     console.log (precioBayas)
// }

// mostrarProducto()

// const sumaBayas = precioBayas + 5

// console.log(sumaBayas)


// document.getElementById("total").innerHTML = x;

// let producto = document.getElementById('bayas');

// let nombre = producto.getAttribute('id');

// let precioProducto = parseInt(producto.getAttribute('data-precio'))


// function verId () {
//     console.log ('El producto ' + nombre + ' cuesta ' + precioProducto + ' euros.') ;
//     document.getElementById('total').innerHTML = precioProducto;
// }

// verId ()

