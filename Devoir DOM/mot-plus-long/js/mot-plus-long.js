const citation = document.getElementById("citation").textContent;
const phrasevide = citation.replace(".","");
const mots = citation.split(" ");

let motLePlusLong = "";

for (var i=0; i<mots.length; i++){
    if (mots[i].length > motLePlusLong.length){
        motLePlusLong = mots[i];
    }
}

document.getElementById("motPlusLong").textContent = motLePlusLong;