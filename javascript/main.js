
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
				contenedor[0].style.cssText="-webkit-transform: translate3d(0px,0,0);transform: translate3d(0px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
			}

			else if(target === '#contenedor-acerca'){
				contenedor[0].style.cssText="-webkit-transform: translate3d(-804px,0,0);transform: translate3d(-804px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
			}

			else if(target === '#contenedor-hablidades'){
				contenedor[0].style.cssText="-webkit-transform: translate3d(-1608px,0,0);transform: translate3d(-1608px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
			}

			else if(target === '#contenedor-experiencia'){
				contenedor[0].style.cssText="-webkit-transform: translate3d(-2412px,0,0);transform: translate3d(-2412px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
			}

			else if(target === '#contendedor-educacion'){
				contenedor[0].style.cssText="-webkit-transform: translate3d(-3216px,0,0);transform: translate3d(-3216px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
			}

			else if(target === '#contendedor-contacto'){
				contenedor[0].style.cssText="-webkit-transform: translate3d(-4020px,0,0);transform: translate3d(-4020px,0,0);-webkit-transition: -webkit-transform 800ms ease-out;transition: transform 800ms ease-out;width: 5628px;";
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