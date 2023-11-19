window.addEventListener("load", function(){
	document.getElementById("forma").addEventListener("submit", function(event){
		
			var validno = true;

				if( document.getElementById("naziv").value.length < 3 ){
				    				    document.getElementById("naziv").classList.add("error");
				    document.getElementById("naziv").classList.remove("success");
				    event.preventDefault();
				}
				else {
				    document.getElementById("naziv").classList.add("success");
				    document.getElementById("naziv").classList.remove("error")
				    		}
				    		

				    var spanovi = document.querySelectorAll("#opcije > span.badge");

				    var niz = [];

				    for(let i=0; i<spanovi.length; i++){
   						niz.push(spanovi[i].dataset.id);
					}

					var ulaz = document.getElementById("opcije-input");
					ulaz.value = niz;



				return validno;
		
});

	document.getElementById("naziv").addEventListener("keypress", function () {
    this.classList.remove("success");
    this.classList.remove("error");
    });

	
	document.getElementById("dodaj-opciju").addEventListener("click", function(){
        var id = document.getElementById("spisak-opcija").value;
        if(!id){
            alert("Izaberi opciju");
            return;
        }
        dodajOpciju( id );
	});


});


function dodajOpciju(id){

			document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = true;
			document.getElementById("spisak-opcija").selectedIndex = 0;

			var naziv = document.querySelector(`#spisak-opcija > option[value='${id}']`).innerHTML;

			 var span = document.createElement("span");
				    span.classList.add("badge");
				    span.classList.add("bg-secondary");
				    span.dataset.id = id;
				    span.innerHTML = naziv;

			var button = document.createElement("button");
				    button.type="button";
				    button.classList.add("btn");
				    button.classList.add("btn-default");
				    button.classList.add("btn-sm");
				    button.innerHTML = "X";

			span.appendChild(button);
			

			document.getElementById("opcije").appendChild(span);
			document.getElementById("opcije").appendChild(document.createTextNode(" "));

			button.addEventListener("click", function(){   

					var id = this.parentNode.dataset.id;

					  this.parentNode.parentNode.removeChild( this.parentNode );
					   document.querySelector(`#spisak-opcija > option[value='${id}']`).disabled = false;


			 });


	}





