function construirePyramide() {
    const symbole = "#";
    const nombreLigne = document.getElementById("ligne-pyramide").value;

    for (let i = 1; i <= nombreLigne; i++) {
        let pyramide = ""
        pyramide += symbole + "<br>"
    }

    document.getElementById("pyramide").textContent = pyramide
}