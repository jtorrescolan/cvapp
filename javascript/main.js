
var app = (function(){

	function tamanioPrincipal(){
		var width = 0;
		var elementos = document.querySelectorAll('.contenedor-principal>article');
		var l = elementos.length;
		for(var j=0;j<l;j++){
			if(window.getComputedStyle){
				width = width + parseInt(window.getComputedStyle(elementos[j]).getPropertyValue('width').replace('px',''));
			}
			else if(elementos[j].currentStyle){
				width = width + parseInt(elementos[j].currentStyle('width').replace('px',''));
			}
		}
		document.querySelectorAll('.contenedor-principal')[0].style.width = width+'px';
	}

	function tamanio(){
		var height = window.innerHeight;
		var elementos = document.querySelectorAll('article');
		for(var i=0;i<elementos.length;i++)
			elementos[i].style.height = height+'px';
	}

	function eventos(){
		window.onresize = function(){
			var height = window.innerHeight;
			var elementos = document.querySelectorAll('article');
			for(var i=0;i<elementos.length;i++)
				elementos[i].style.height = height+'px';
		}
	}

	function cambiarPagina(){
		var elementos = document.querySelectorAll('.menu-principal>li>a');
		var l = elementos.length;

		var evento = function(){

			var target = this.getAttribute('href'),
				contenedor = document.querySelectorAll('.contenedor-principal'); 

			if(target === '#contenedor-inicio'){
				contenedor[0].style.left = '187px';
				contenedor[0].style.right = 'initial';
			}

			else if(target === '#contenedor-acerca'){
				contenedor[0].style.left = 'initial';
				contenedor[0].style.right = '617px';
			}

			else if(target === '#contenedor-hablidades'){
				contenedor[0].style.left = 'initial';
				contenedor[0].style.right = '1421px';
			}

			else if(target === '#contenedor-experiencia'){
				contenedor[0].style.left = 'initial';
				contenedor[0].style.right = '2225px';
			}

			else if(target === '#contendedor-educacion'){
				contenedor[0].style.left = 'initial';
				contenedor[0].style.right = '3029px';
			}

			else if(target === '#contendedor-contacto'){
				contenedor[0].style.left = 'initial';
				contenedor[0].style.right = '3833px';
			}


		}

		for(var k=0; k<l; k++){
			elementos[k].onclick = evento;
		}
	}

	return {
		tamanio: tamanio,
		eventos: eventos,
		tamanioPrincipal: tamanioPrincipal,
		cambiarPagina: cambiarPagina
	}
})();

window.onload = function(){
	app.tamanioPrincipal();
	app.tamanio();
	app.eventos();
	app.cambiarPagina();
}