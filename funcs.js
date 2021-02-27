
function req1() {
	document.getElementById("loading_gif").style.visibility = "visible";
	document.getElementById("btn_listar").disabled = true;
	var para = document.createElement("div");
	var node = document.createTextNode("Posts encontrados (com id de usuário = 1): ");
	para.appendChild(node);
	
	var ret_div1 = document.getElementById("div1");
	ret_div1.appendChild(para);
	
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then(json => {
			for (i in json){
				if (json[i].userId == 1){
					var titulo = json[i].title;
					var corpo = json[i].body;
					$("<div class='card'><div class='card-header' id='heading"+i+"'><h5 class='mb-0'><button class='btn btn-link collapsed' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapse"+i+"'>"+"Título: "+titulo+"</button></h5></div><div id='collapse"+i+"' class='collapse' aria-labelledby='heading"+i+"' data-parent='#accordion'><div class='card-body'>"+"Corpo da Mensagem: "+corpo+"</div></div></div>").appendTo(document.getElementById("div1"));
				}	
			}
			document.getElementById("loading_gif").style.visibility = "hidden";
		});
		
		
	
}

