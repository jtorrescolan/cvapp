var app = (function(){

	//Métodos Privados

	function slider(el){
		if(typeof el === 'string'){
			var height = window.innerHeight,
				elementos = document.querySelectorAll(el),
				items = document.querySelectorAll(el+'> div.item'),
				width = parseInt(getStyle('width',elementos[0]).replace('px',''));

			elementos[0].style.width = (width*items.length)+'px';

			for(var i=0; i<items.length; i++){
				items[i].style.height = height + 'px';
				items[i].style.width = width + 'px';
			}

			var nav_slider_elements = document.querySelectorAll('.nav-slider>div'),
				width_nav = 0;

			var evento_click = function(){
				var index = this.getAttribute('index'),
					width_items = parseInt(getStyle('width',items[index-1]).replace('px','')),
					left = parseInt(getStyle('left',elementos[0]).replace('px',''))*(-1);
					console.log(left);
				animacion(elementos[0], left, width_items*(index-1));
			}

			for(var j=0; j<nav_slider_elements.length;j++){
				width_nav = width_nav + parseInt(getStyle('width',nav_slider_elements[j]).replace('px',''));
				nav_slider_elements[j].onclick = evento_click;
			}

			nav_slider_elements[0].parentNode.style.width = width_nav+((4*nav_slider_elements.length)-4)+'px';

		}
		else{
			console.error('Selector no válido');
		}
	}

	function getStyle(style, el){
		if(window.getComputedStyle)
			return window.getComputedStyle(el).getPropertyValue(style);
		else if(el.currentStyle)
			return el.currentStyle(style);
	}

	function animacion(el, inicio, final){
		var left = getStyle('left', el);
		left = (left==='auto')? 0:parseInt(left.replace('px',''))*(-1);

		if(left !== final){
			if(final>left){
				var left_1 = inicio;
				var id = setInterval(function(){
					left_1 = left_1 + 67;
					el.style.left = '-'+left_1+'px';
					if(left_1 === final)
						clearInterval(id);
				},10);
			}
			else{
				var left_1 = left;
				var id = setInterval(function(){
					left_1 = left_1 - 67;
					el.style.left = '-'+left_1+'px';
					if(left_1 === final)
						clearInterval(id);
				},10);	
			}
		}
	}

	//Fin Métodos Privados

	
	//Métodos Públicos

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
		document.querySelectorAll('.acerca-descripciones')[0].style.height = height+'px';
	}

	function eventos(){
		window.onresize = function(){
			var height = window.innerHeight;
			var elementos = document.querySelectorAll('article');
			for(var i=0;i<elementos.length;i++)
				elementos[i].style.height = height+'px';
			document.querySelectorAll('.acerca-descripciones')[0].style.height = height+'px';
		}
	}

	function cambiarPagina(){
		var elementos = document.querySelectorAll('.menu-principal>li>a'),
			l = elementos.length;

		var evento = function(){

			var target = this.getAttribute('target'),
				contenedor = document.querySelectorAll('.contenedor-principal'); 

			if(target === '#contenedor-inicio'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 0);
			}

			else if(target === '#contenedor-acerca'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 804);
			}

			else if(target === '#contenedor-hablidades'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 804*2);
			}

			else if(target === '#contenedor-experiencia'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 804*3);
			}

			else if(target === '#contendedor-educacion'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 804*4);
			}

			else if(target === '#contendedor-contacto'){
				var inicio = getStyle('left', contenedor[0]);
				inicio = (inicio==='auto')? 0:parseInt(inicio.replace('px',''))*(-1);
				animacion(contenedor[0], inicio, 804*5);
			}
		}

		for(var k=0; k<l; k++){
			elementos[k].onclick = evento;
		}
	}

	function cargarSlider(){
		slider('#slider');
	}

	//Fin Métodos Públicos

	return {
		tamanio: tamanio,
		eventos: eventos,
		tamanioPrincipal: tamanioPrincipal,
		cambiarPagina: cambiarPagina,
		cargarSlider: cargarSlider
	}
})();

window.onload = function(){
	app.tamanioPrincipal();
	app.tamanio();
	app.eventos();
	app.cambiarPagina();
	app.cargarSlider();
}