// Propriétés communs à tous les héros
class Hero {
    constructor(nom, hp, atk) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = atk;
    }
    defendre() {
        this.attaque *= 0.5;
        this.hp *= 2.5;
        // +augmente les chances d'être attaqué par le boss
    };
    attaquer() {
        this.attaque *= 1.4;
        this.hp *= 0.75;
    }
}

// Guerrier
class Guerrier extends Hero {
    constructor(nom, hp, atk, rage) {
        super(nom, hp, atk);
        this.rage = 0;
    }
}

// Mage
class Mage extends Hero {
    constructor(nom, hp, atk, mana) {
        super(nom, hp, atk);
        this.mana = mana;
    }
}

// Archer
class Archer extends Hero {
    constructor(nom, hp, atk, fleches) {
        super(nom, hp, atk);
        this.fleches = fleches;
    }
    nbrefleches() {

    }
}

import {
    bossATuer
} from './boss.js'

console.log(`Mais de l'autre notre côté, nous avons 3 champions tous excités de battre la TERREUR de Molengeek (${bossATuer.nom})`)

// Déclarations héros du jour
let guerrier = new Guerrier
let mage = new Mage
let archer = new Archer

// L'utilisateur doit donner un nom à chaque héros
// guerrier.nom = prompt("Donnez un nom à votre guerrier.")
// mage.nom = prompt("Donnez un nom à votre mage.")
// archer.nom = prompt("Donnez un nom à votre archer.")

console.log(`Je vous présente notre fabuleuse équipe: le Guerrier ${guerrier.nom}, le mage ${mage.nom}, l'archer ${archer.nom}`)

// Distribution des HP et ATK entre chaque héros
console.log(`Avant de lancer les hostilités, le public doit distribuer ses faveurs à chacun des Héros. Vous avez 500HP et 500ATK à répartir entre chaque Héros. VOTEZ.`)

// Distribution HP
guerrier.hp = +prompt(`HP pour votre guerrier. Entre un chiffre en 100 et 300.`);
while (guerrier.hp < 100 || guerrier.hp > 300) {
    guerrier.hp = +prompt("Attention, vous devez lui donner des HP entre 100 et 300 afin que les autres puissent taffer aussi !")
} 

let r = 500 - guerrier.hp
mage.hp = +prompt(`HP pour votre mage. Il vous reste ${r}points à distribuer. (Le reste sera donné automatiquement à l'archer.)`)
while(mage.hp == r || mage.hp < 100) {
    mage.hp = +prompt(`Attention, l'archer doit au moins avoir 100HP. (Il vous reste ${r}points)`)
}
archer.hp = r - mage.hp


// Distribution ATK
