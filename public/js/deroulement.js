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
        let t = 0
        for (t; t < heros.length; t++) {
            let choix = confirm(`Tu es ${heros[t].nom}. Veux-tu attaquer ce tour-ci?`)
            if (choix == true) {
                heros[t].attaquer()
            } else {
                heros[t].defendre()
            }
        }
    }
}

tour()