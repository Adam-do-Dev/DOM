let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", 
    "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];



function tirage(){

    const aleatoire = Math.floor(Math.random() * mangas.length);
    const mangatirer = mangas[aleatoire];

    document.getElementById("affichage").textContent = mangatirer;
}

 