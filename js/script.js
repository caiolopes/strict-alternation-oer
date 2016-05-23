$(document).ready(function() {
	goToURL();

	$(window).on('hashchange', function() {
		goToURL();
	});

	function goToURL() {
		render(decodeURI(window.location.hash));
	}

	function render(url) {
		// Pega a hash da pagina
		var temp = url.split('/')[0];

		var map = {
			// Pagina inicial do app
			'': function() {
		        $.get("index.html", function(data){
		            $(".container-fluid").html(data);
		        });
			},

			// Pagina incial da explicacao
			'#start': function() {
		        $.get("code.html", function(data){
		            $(".container-fluid").html(data);
		            prettyPrint();
		        });
			}
		};

		/* 	Executa a funcao localizada no mapa dependendo da hash na variavel temp
			ou executa a pagina de erro caso nao tenha sido encontrada na lista acima */
		map[temp] ? map[temp]() : renderErrorPage();
	}
});