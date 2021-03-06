window.onload = function () {
	// Variables
	const baseDeDatos = [
		{
			id: 1,
			nombre: 'PLA 1kg',
			precio: 23,
			imagen: 'IMG/PLA1.jpg'
		},
		{
			id: 2,
			nombre: 'PLA 1kg',
			precio: 23.00,
			imagen: 'IMG/PLA2.jpg'
		},
		{
			id: 3,
			nombre: 'PLA 1kg',
			precio: 23.00,
			imagen: 'IMG/PLA3.jpg'
		},
		{
			id: 4,
			nombre: 'PLA 1kg',
			precio: 23.00,
			imagen: 'IMG/PLA4.jpg'
		},
		{
			id: 5,
			nombre: 'PLA 1kg',
			precio: 23.00,
			imagen: 'IMG/PLA5.jpg'
		},
		{
			id: 6,
			nombre: 'PLA 1kg',
			precio: 30.00,
			imagen: 'IMG/PLA6.jpg'
		},
		{
			id: 7,
			nombre: 'PLA 1kg',
			precio: 23.00,
			imagen: 'IMG/PLA7.jpg'
		},
		{
			id: 8,
			nombre: 'PLA 1kg',
			precio: 30.00,
			imagen: 'IMG/PLA8.jpg'
		},
		{
			id: 9,
			nombre: 'Ender 3',
			precio: 175.99,
			imagen: 'IMG/Impresora1.jpg'
		},
		{
			id: 10,
			nombre: 'WZTO  Mini',
			precio: 79.45,
			imagen: 'IMG/Impresora2.jpg'
		},
		{
			id: 11,
			nombre: 'Ender 5 plus',
			precio: 569.00,
			imagen: 'IMG/Impresora3.jpg'
		},
		{
			id: 12,
			nombre: 'Creality Cr10',
			precio: 229.99,
			imagen: 'IMG/Impresora4.jpg'
		},
		{
			id: 13,
			nombre: 'Elegoo Saturn',
			precio: 425.00,
			imagen: 'IMG/Impresora5.jpg'
		},
		{
			id: 14,
			nombre: 'Elegoo Mars 2',
			precio: 120.00,
			imagen: 'IMG/Impresora6.jpg'
		},
		{
			id: 15,
			nombre: 'Wash & Cure',
			precio: 150.00,
			imagen: 'IMG/Impresora7.jpg'
		},
		{
			id: 16,
			nombre: 'Infinite z belt',
			precio: 1099.99,
			imagen: 'IMG/Impresora8.jpg'
		},
		

	];

	let carrito = [];
	let total = 0;
	const DOMitems = document.querySelector('#items');
	const DOMcarrito = document.querySelector('#carrito');
	const DOMtotal = document.querySelector('#total');
	const DOMbotonVaciar = document.querySelector('#boton-vaciar');
	const miLocalStorage = window.localStorage;
	const comprarAhora= document.querySelector('#boton-comprar');
	// Funciones

	/**
	* Dibuja todos los productos a partir la variable bbdd que hemos creado para simular que usamos una bbdd real.
	*/
	function renderizarProductos() {
		baseDeDatos.forEach((info) => {
			// Estructura
			const miNodo = document.createElement('div');
			miNodo.classList.add('shop');
			// Body
			const miNodoCardBody = document.createElement('div');
			miNodoCardBody.classList.add('item');
			// Titulo
			const miNodoTitle = document.createElement('h5');
			miNodoTitle.classList.add('card-title');
			miNodoTitle.textContent = info.nombre;
			// Imagen
			const miNodoImagen = document.createElement('img');
			miNodoImagen.classList.add('img-fluid');
			miNodoImagen.setAttribute('src', info.imagen);
			// Precio
			const miNodoPrecio = document.createElement('p');
			miNodoPrecio.classList.add('card-text');
			miNodoPrecio.textContent = info.precio + '???';
			// Boton 
			const miNodoBoton = document.createElement('button');
			miNodoBoton.classList.add('btn', 'btn-primary');
			miNodoBoton.textContent = '+';
			miNodoBoton.setAttribute('marcador', info.id);
			miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
			// Insertamos
			miNodoCardBody.appendChild(miNodoImagen);
			miNodoCardBody.appendChild(miNodoTitle);
			miNodoCardBody.appendChild(miNodoPrecio);
			miNodoCardBody.appendChild(miNodoBoton);
			miNodo.appendChild(miNodoCardBody);
			DOMitems.appendChild(miNodo);
		});
	}

	/**
	* Evento para a??adir un producto al carrito de la compra
	*/
	function anyadirProductoAlCarrito(evento) {
		// Anyadimos el Nodo a nuestro carrito
		carrito.push(evento.target.getAttribute('marcador'))
		// Calculo el total
		calcularTotal();
		// Actualizamos el carrito 
		renderizarCarrito();
		// Actualizamos el LocalStorage
		guardarCarritoEnLocalStorage();
	}

	/**
	* Dibuja todos los productos guardados en el carrito
	*/
	function renderizarCarrito() {
		// Vaciamos todo el html
		DOMcarrito.textContent = '';
		// Quitamos los duplicados
		const carritoSinDuplicados = [...new Set(carrito)];
		// Generamos los Nodos a partir de carrito
		carritoSinDuplicados.forEach((item) => {
			// Obtenemos el item que necesitamos de la variable base de datos
			const miItem = baseDeDatos.filter((itemBaseDatos) => {
				// ??Coincide las id? Solo puede existir un caso
				return itemBaseDatos.id === parseInt(item);
			});
			// Cuenta el n??mero de veces que se repite el producto
			const numeroUnidadesItem = carrito.reduce((total, itemId) => {
				// ??Coincide las id? Incremento el contador, en caso contrario no mantengo
				return itemId === item ? total += 1 : total;
			}, 0);
			// Creamos el nodo del item del carrito
			const miNodo = document.createElement('li');
			miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
			
			miNodo.textContent = `${numeroUnidadesItem}  x ${miItem[0].nombre} - ${miItem[0].precio}???`;
			// Boton de borrar
			const miBoton = document.createElement('button');
			miBoton.classList.add('btn', 'btn-danger', 'mx-5');
			miBoton.textContent = 'X';
			miBoton.style.marginLeft = '1rem';
			miBoton.dataset.item = item;
			miBoton.addEventListener('click', borrarItemCarrito);
			// Mezclamos nodos
			miNodo.appendChild(miBoton);
			DOMcarrito.appendChild(miNodo);
		});
	}

	/**
	* Evento para borrar un elemento del carrito
	*/
	function borrarItemCarrito(evento) {
		// Obtenemos el producto ID que hay en el boton pulsado
		const id = evento.target.dataset.item;
		// Borramos todos los productos
		carrito = carrito.filter((carritoId) => {
			return carritoId !== id;
		});
		// volvemos a renderizar
		renderizarCarrito();
		// Calculamos de nuevo el precio
		calcularTotal();
		// Actualizamos el LocalStorage
		guardarCarritoEnLocalStorage();

	}

	/**
	* Calcula el precio total teniendo en cuenta los productos repetidos
	*/
	function calcularTotal() {
		// Limpiamos precio anterior
		total = 0;
		// Recorremos el array del carrito
		carrito.forEach((item) => {
			// De cada elemento obtenemos su precio
			const miItem = baseDeDatos.filter((itemBaseDatos) => {
				return itemBaseDatos.id === parseInt(item);
			});
			total = total + miItem[0].precio;
		});
		// Renderizamos el precio en el HTML
		DOMtotal.textContent = total.toFixed(2);
	}

	/**
	* Varia el carrito y vuelve a dibujarlo
	*/
	function vaciarCarrito() {
		// Limpiamos los productos guardados
		carrito = [];
		// mostramos los cambios
		renderizarCarrito();
		calcularTotal();
		// Borra 
		localStorage.clear();

	}

	function guardarCarritoEnLocalStorage () {
		miLocalStorage.setItem('carrito', JSON.stringify(carrito));
	}

	function cargarCarritoDeLocalStorage () {
		// Comprueba si existe un carrito en el localstorage 
		if (miLocalStorage.getItem('carrito') !== null) {
			// Carga la informaci??n
			carrito = JSON.parse(miLocalStorage.getItem('carrito'));
		}
	}

	function confimacionCompra(){
		var confirmacion = confirm('??Est?? seguro que desea realizar la compra?');
		if (confirmacion){
			alert('Compra realizada con exito');
			vaciarCarrito();
		}
	}


	// Eventos
	DOMbotonVaciar.addEventListener('click', vaciarCarrito);
	comprarAhora.addEventListener('click' ,confimacionCompra);

	// Inicio
	cargarCarritoDeLocalStorage();
	renderizarProductos();
	calcularTotal();
	renderizarCarrito();
}


