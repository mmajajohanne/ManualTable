let titlerInnEl = document.getElementById("idTitlerInn");
        let titlerUtEl = document.getElementById("idTitlerUt");

        let verdierInnEl = document.getElementById("idVerdierInn");
        let verdierUtEl = document.getElementById("idVerdierUt");

        let verdier = [];
        titlerInnEl.addEventListener("keydown", titlerfunk);
        verdierInnEl.addEventListener("keydown", verdierfunk);

        function titlerfunk(event){
            if (event.keyCode === 13) {
                let liste = titlerInnEl.value.split(",");
                let tekst = "<tr>";
                    for (let i = 0; i < liste.length; i++){
                        tekst += "<th>" + liste[i] + "</th>";
                    }
                tekst += "</tr>";
                titlerUtEl.innerHTML = tekst;
                titlerInnEl.value = "";
            }
        }
        function verdierfunk(event){
            if (event.keyCode === 13){
                verdier.push(verdierInnEl.value.split(","));
                verdier.sort()
                let tekst = "";
                verdierUtEl.innerHTML = "";
                for (let i = 0; i < verdier.length; i++){
                    let tekst = "<tr>";
                    for (let j = 0; j < verdier[i].length; j++){
                        tekst += "<td>" + verdier[i][j] + "</td>";
                        
                    }
                    tekst += "</tr>"
                    verdierUtEl.innerHTML = verdierUtEl.innerHTML + tekst
                }
                verdierInnEl.value = "";
            }
        }
        