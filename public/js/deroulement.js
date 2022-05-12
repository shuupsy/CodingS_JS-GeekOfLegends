import {
    bossATuer,
    lowLife,
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
        let cible = heros[Math.floor(Math.random()* heros.length)];
        cible.hp -= bossATuer.atk;
        alert(`Le boss a décidé de taper ${cible.nom}. Celui-ci a maintenant ${cible.hp} HP.`)
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