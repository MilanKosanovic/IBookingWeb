

window.addEventListener("load", function () {
    fetch('/ponuda')
        .then(response => response.json()) // Parse the response as JSON
        .then(response => {
            console.log(response);

            for (let i = 0; i < response.length; i++) {
                let tr = document.createElement("tr");

                let td1 = document.createElement("td");
                td1.innerHTML = response[i].naziv;
                tr.appendChild(td1);

                let td2 = document.createElement("td");
                td2.innerHTML = response[i].kategorija;
                tr.appendChild(td2);

                let td3 = document.createElement("td");
                td3.innerHTML = response[i].date;
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerHTML = response[i].brDana;
                tr.appendChild(td4);

                let td5 = document.createElement("td");
                td5.innerHTML = response[i].brOsoba;
                tr.appendChild(td5);

                let td6 = document.createElement("td");
                td6.innerHTML = response[i].cena;
                tr.appendChild(td6);

                let btn = document.createElement("button");
                btn.classList.add("novaPonuda");
                btn.textContent = "Izmeni";
                
                let btn2 = document.createElement("button");
                btn2.classList.add("novaPonuda");
                btn2.textContent = "Promena Cene";

                btn.addEventListener("click", function () {

                });

                btn2.addEventListener("click", function () {

                });

                
                let td7 = document.createElement("td");
                td7.appendChild(btn);
                td7.appendChild(btn2);
                tr.appendChild(td7);

                // Append the row to the table
                document.getElementById("spisak").appendChild(tr);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
