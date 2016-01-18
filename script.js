/*code Simplon*/
$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "VOTRE NOMBRE EST TROP PETIT! ESSAYEZ ENCORE !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "C'EST LE NOMBRE EXACT !";
		
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = " VOTRE NOMBRE EST TROP GRAND ! ESSAYEZ ENCORE !";
    }
}

$bouton.onclick = verifier;












 
          







