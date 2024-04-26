var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true
	counter++;
	if (counter > 5){
		counter = 1;
	}
},5000);

window.addEventListener("load", function() {
	document.getElementById(`cuadro`).addEventListener("click",function(){
		alert("CUIDA A LOS ANIMALES PORQUE TODOS SOMOS SERES VIVOS");
	})

})