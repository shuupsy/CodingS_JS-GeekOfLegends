import {
    bossATuer
} from './boss.js'

// Propriétés communs à tous les héros
class Hero {
    constructor(nom, hp, atk) {
        this.nom = nom;
        this.hp = hp;
        this.atk = atk;
    }
    defendre() {
        this.atk *= 0.5;
        this.hp *= 2.5;
        // +augmente les chances d'être attaqué par le boss
    };
    attaquer() {
    }
    normal() {
        console.log(`${this.nom} passe son tour.`)
    }
}

// Guerrier
class Guerrier extends Hero {
    constructor(nom, hp, atk, rage) {
        super(nom, hp, atk);
        this.rage = 0;
    }
    attaquer() {
        if (this.rage > 3) {
            this.atk *= 1.25;
            console.log(`${this.nom} est rentré en rage et possède des bonus d'attaque ce tour!`);
            this.atk *= 1.4;
            this.hp *= 0.75;
            bossATuer.hp -= this.atk;
            alert(`Le boss ${bossATuer.nom} a perdu ${this.atk}HP. Il lui reste ${bossATuer.hp}!`)
            this.rage = 0;
            this.atk /= 1.4;
            this.hp /= 0.75;
        } else {
            this.atk *= 1.4;
            this.hp *= 0.75;
            bossATuer.hp -= this.atk;
            alert(`Le boss ${bossATuer.nom} a perdu ${this.atk}HP. Il lui reste ${bossATuer.hp}!`)
            this.rage += 1;
            console.log(`${this.nom} a gagné ${this.rage}pt(s) de rage.`);
            this.atk /= 1.4;
            this.hp /= 0.75;
        }
    }
    defendre() {
        this.rage += 1;
        console.log(this.rage);
    }
    normal() {
        console.log(`${this.nom} passe son tour. Mais gagne 1pt de rage.`)
        this.rage += 1;
    }
}

// Mage
let nbMana = [7, 9, 11];
class Mage extends Hero {
    constructor(nom, hp, atk, mana) {
        super(nom, hp, atk);
        this.mana = nbMana[Math.floor(Math.random() * nbMana.length)];;
    }
    attaquer() {
        if (this.mana < 2) {
            this.normal();
            this.mana += 7;
            console.log(`${this.nom} n'a plus de mana, donc passe un tour et gagne ${this.mana} mana. Mana: ${this.mana}`);
        } else {
            this.mana -= 2;
            console.log(`${this.nom} a utilisé 2 de mana pour attaquer. Mana restante : ${this.mana}`)
            this.atk *= 1.4;
            this.hp *= 0.75;
            bossATuer.hp -= this.atk;
            alert(`Le boss ${bossATuer.nom} a perdu ${this.atk}HP. Il lui reste ${bossATuer.hp}!`);
            this.atk /= 1.4;
            this.hp /= 0.75;
        }
    }
}

// Archer
let nbFleches = [7, 8, 9, 10, 11];
class Archer extends Hero {
    constructor(nom, hp, atk, fleches) {
        super(nom, hp, atk);
        this.fleches = nbFleches[Math.floor(Math.random() * nbFleches.length)];
    }
    attaquer() {
        if (this.fleches < 2) {
            this.normal();
            this.fleches += 6;
            console.log(`${this.nom} n'a plus de fleches, donc passe un tour et gagne ${fleches} flèches. Flèches : ${this.fleches}`);
        } else {
            this.fleches -= 2;
            console.log(`${this.nom} a utilisé 2 flèches pour attaquer. Flèches restantes: ${this.fleches}`);
            this.fleches += 1;
            this.atk *= 1.4;
            this.hp *= 0.75;
            bossATuer.hp -= this.atk;
            alert(`Le boss ${bossATuer.nom} a perdu ${this.atk}HP. Il lui reste ${bossATuer.hp}!`);
            this.atk /= 1.4;
            this.hp /= 0.75;
        }
    }
    defendre() {
        this.fleches += 1;
    }
}

alert(`Mais de l'autre notre côté, nous avons 3 champions tous excités de battre la TERREUR de Molengeek (${bossATuer.nom})`)

// Déclarations héros du jour
let guerrier = new Guerrier;
let mage = new Mage;
let archer = new Archer;

let heros = [guerrier, mage, archer]

// L'utilisateur doit donner un nom à chaque héros
guerrier.nom = prompt("Donnez un nom à votre guerrier.")
mage.nom = prompt("Donnez un nom à votre mage.")
archer.nom = prompt("Donnez un nom à votre archer.")

alert(`Je vous présente notre fabuleuse équipe: ${guerrier.nom}, le Guerrier / ${mage.nom}, le Mage / ${archer.nom}, l'Archer.`),

    // Distribution des HP et ATK entre chaque héros
    alert(`Avant de lancer les hostilités, le public doit distribuer ses faveurs à chacun des Héros. Vous avez 500HP et 500ATK à répartir entre chaque Héros. VOTEZ.`)

// Distribution HP
// Pour le guerrier
guerrier.hp = +prompt(`HP pour votre guerrier. Entre un chiffre en 100 et 300.`);
while (guerrier.hp < 100 || guerrier.hp > 300) {
    guerrier.hp = +prompt("Attention, vous devez lui donner des HP entre 100 et 300 afin que les autres puissent taffer aussi !")
}

let r = 500 - guerrier.hp
// Pour le mage
mage.hp = +prompt(`HP pour votre mage. Il vous reste ${r}points à distribuer. (Le reste sera donné automatiquement à l'archer.)`)
while (mage.hp >= r || mage.hp < 100) {
    mage.hp = +prompt(`Donnez un chiffre entre 100 et ${r-100}, car l'archer doit au moins avoir 100HP.`)
}
// Pour l'archer
archer.hp = r - mage.hp


// Distribution ATK
// Pour le guerrier
guerrier.atk = +prompt(`MAINTENANT LES ATK ! Pour votre guerrier. Entre un chiffre en 100 et 300.`);
while (guerrier.atk < 100 || guerrier.atk > 300) {
    guerrier.atk = +prompt("Attention, vous devez lui donner des HP entre 100 et 300 afin que les autres puissent taffer aussi !")
}

let r2 = 500 - guerrier.atk
// Pour le mage
mage.atk = +prompt(`ATK pour votre mage. Il vous reste ${r2}points à distribuer. (Le reste sera donné automatiquement à l'archer.)`)
while (mage.atk >= r2 || mage.atk < 100) {
    mage.atk = +prompt(`Donnez un chiffre entre 100 et ${r2-100}, car l'archer doit au moins avoir 100ATK.`)
}
// Pour l'archer
archer.atk = r2 - mage.atk

alert("Quelle équipe! Voici le récap de nos héros : (Regardez votre console)")

let i = 0
for (i; i < heros.length; i++) {
    console.table(heros[i])
}

alert("======== !!! C'EST L'HEURE DU COMBAT !!! =========")


// Export pour déroulement
export {
    guerrier,
    mage,
    archer,
    heros
}