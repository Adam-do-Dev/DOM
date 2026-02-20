function palindrome(){

    const mot = document.getElementById("id-mot-saisi").value;
    const motMiniscule = mot.toLowerCase();
    const motPalindrome = motMiniscule.split('').reverse().join('');
    
    if (motMiniscule === motPalindrome){
        document.getElementById("resultat").textContent = "C'est un palindrome";
    } else {
        document.getElementById("resultat").textContent = "C'est pas palindrome";
    }
}