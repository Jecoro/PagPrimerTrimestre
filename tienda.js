			// Añadir al carrito
			function addToCart(obj){
				var result = confirm('¿Añadir este producto al carrito de la compra? ');
				if (result == false){
					return;
				}
				// Formulario de carrito de compras
				var cartBox = document.getElementById("mytable");
				// Objeto de mercancía
				var shop = {
					shopImg:obj.children[0].src,
					shopPrice:obj.children[2].innerHTML
				}
				// Determine si el producto existe
				var img = document.getElementsByClassName("imgbackground");
				var result = "-1";
				for (var i = 0;i < img.length;i++){
					if (shop.shopImg == img[i].children[0].src){
						result = i;
					}
				}
				if (result != "-1"){
					var count = img[result].parentElement.children[4].children[1];
					count.value = eval(count.value + "+1");
					// Recalcular el subtotal
					singleAllSubTotal();
				}else{
					// Crea un objeto de carrito de compras
					var tr1 = document.createElement("tr");
					var td1 = document.createElement("td");
					td1.innerHTML = '<img src="'+ shop.shopImg +'" height="100" width="100"/>';
                    var td3 = document.createElement("td");
					td3.innerHTML =(precioUnidad.innerHTML);
                    //console.log(td3.innerHTML);
					tr1.appendChild(td1);
                    tr1.appendChild(td3);
                    var tr2 = document.createElement("tr");
					// Añadir al carrito
					cartBox.appendChild(tr1);
                    cartBox.appendChild(tr2);
                    console.log(precioTotal.innerHTML)
                    var total=+precioTotal.innerHTML+ +precioUnidad.innerHTML;
                    document.getElementById('precioTotal').innerHTML=total;

				}
				;
                
               
			}

			