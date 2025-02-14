const A = document.querySelector('.BP');
const B = document.querySelector('.BM');

A.addEventListener('click', () => facture('A'));
B.addEventListener('click', () => facture('B'));

function facture(caller) {
    const X1 = 2000; // Déclare X1 comme constante locale
    let result;

    if (caller === 'A') {
        result = X1 + X1;
    } else if (caller === 'B') {
        result = X1 - X1;
    }

    console.log(`Résultat : ${result}`);

    const C = document.querySelector('.caisseT');

    // Vérifie si le résultat existe déjà pour éviter la répétition
    C.textContent = `Résultat : ${result}`;
}
