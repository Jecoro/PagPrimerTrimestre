// Añadir al carrito
function addToCart(obj,idImagen,idPrecio) {
	var result = confirm('¿Añadir este producto al carrito de la compra? ');
	if (result == false) {
		return;
	}
	// Formulario de carrito de compras
	var cartBox = document.getElementById("mytable");
	// Objeto
	
	var shop = {
		shopImg: document.getElementById(idImagen).src,
		shopPrice: document.getElementById(idPrecio).innerHTML	
	}
	console.log("imagen: "+shop.shopImg+" precio:"+shop.shopPrice);
	//Ver si el producto existe
	var img = document.getElementsByClassName("imgbackground");
	var result = "-1";
	for (var i = 0; i < img.length; i++) {
		if (shop.shopImg == img[i].children[0].src) {
			result = i;
		}
	}
	if (result != "-1") {
		var count = img[result].parentElement.children[4].children[1];
		count.value = eval(count.value + "+1");
				
	} else {
		// Crea un objeto de carrito de compras
		var tr1 = document.createElement("tr");
		var td1 = document.createElement("td");
		td1.innerHTML = '<img src="' + shop.shopImg + '" height="65" width="65"/>';
		var td3 = document.createElement("td");
		td3.innerHTML =(shop.shopPrice+"€");
		//console.log(td3.innerHTML);
		tr1.appendChild(td1);
		tr1.appendChild(td3);
		var tr2 = document.createElement("tr");
		// Añadir al carrito
		cartBox.appendChild(tr1);
		cartBox.appendChild(tr2);
		console.log(precioTotal.innerHTML)
		var total=+precioTotal.innerHTML+ +shop.shopPrice
		document.getElementById('precioTotal').innerHTML=total;

	}
	;


}

