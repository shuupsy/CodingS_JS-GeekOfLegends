import {
    bossATuer,
    lowLife,
    nico,
    kevin,
    kadri
} from './boss.js'

import {
    guerrier,
    mage,
    archer,
    heros
} from './heros.js'

// Fonctionnement des tours
function tour() {
    while (bossATuer.hp >= lowLife) {
        // Attaque du boss
        let cible = heros[Math.floor(Math.random() * heros.length)];
        cible.hp -= bossATuer.atk;
        alert(`Le boss a décidé de taper ${cible.nom}. Celui-ci a donc maintenant ${cible.hp}HP.`);
        // Choix des héros entre ATK/DEF/normal
        let t = 0
        for (t; t < heros.length; t++) {
            let choix = prompt(`Tu es ${heros[t].nom}. Choisis entre A (Attaquer) / D (Défendre) / Rien`).toUpperCase();
            switch (choix) {
                case 'A':
                    heros[t].attaquer();
                    break;
                case 'D':
                    heros[t].defendre();
                    break;
                default:
                    heros[t].normal();
                    break;
            }
        }
    }
}
tour()

// Enigmes lorsque le boss a moins de 20% HP.
function enigmes() {
    let enigme1 = confirm("1 + 1 = 2");
    if (enigme1 == true) {
        enigme1 = 1;
    } else {
        enigme1 = 0;
    }
    let enigme2 = confirm("5² = 25");
    if (enigme2 == true) {
        enigme2 = 1;
    } else {
        enigme2 = 0;
    }
    let enigme3 = confirm("cos = adjacent / hypothenuse")
    if (enigme3 == true) {
        enigme3 = 1;
    } else {
        enigme3 = 0;
    }
    let resultat = enigme1 + enigme2 + enigme3;
    switch (resultat) {
        case 3:
            bossATuer.hp = 0;
            alert(`GG. Nos champions ont réussi à tuer ${bossATuer.nom}!!!`);
            break;
        default:
            bossATuer.hp = 300;
            tour()
    }
}
enigmes()