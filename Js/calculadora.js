document.addEventListener('DOMContentLoaded', function () {
    var boton=document.getElementById("Calcular");
    boton.addEventListener('click', calcula);

    const calculo=document.getElementById("Calcular");
    calculo.addEventListener('onclick', calcula); 

   function calcula(){
    const impresora=document.getElementById("impresora").value;
    const material=document.getElementById("material").value;
    const relleno=document.getElementById("relleno").value;
    const tiempo=document.getElementById("horas").value;
    var precioFinal=0;
    switch (impresora) {
        case 'EnderSeries':
          console.log('EnderSeries');
          precioFinal=precioFinal+20;
          console.log(precioFinal);
          
          break;
        case 'Anycubic5':
          console.log('Anycubic5');
          precioFinal+=25;
          console.log(precioFinal);
          break;
        case 'Pursa':
          console.log('Pursa');
          precioFinal+=10;
          console.log(precioFinal);
          break;
        default:
            precioFinal=0;
      }
       switch (material) {
           case 'pla':
               console.log('pla');
               precioFinal = precioFinal + 5;
               console.log(precioFinal);

               break;
           case 'abs':
               console.log('abs');
               precioFinal = precioFinal + 10;
               console.log(precioFinal);

               break;
           case 'resina':
               console.log('resina');
               precioFinal += 20;
               console.log(precioFinal);
               break;
           default:
               precioFinal = 0;
       }
       switch (relleno) {
           case '20':
               console.log('20');
               precioFinal = precioFinal + 10;
               console.log(precioFinal);

               break;
           case '40':
               console.log('40');
               precioFinal += 15;
               console.log(precioFinal);
               break;
           case '60':
               console.log('60');
               precioFinal += 20;
               console.log(precioFinal);
               break;
           case '80':
               console.log('80');
               precioFinal += 25;
               console.log(precioFinal);
               break;
           case '100':
               console.log('100');
               precioFinal += 30;
               console.log(precioFinal);
               break;
           default:
               precioFinal = 0;
       }
       precioFinal=precioFinal+(1.75*tiempo);
      document.getElementById("valorFinal").innerHTML="Precio Final Estimado: "+precioFinal+" €";
        
    }
    console.log("fin");
});