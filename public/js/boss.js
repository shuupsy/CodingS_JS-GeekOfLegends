// Constructor Boss
class Boss {
    constructor(nom, hp, atk) {
        this.nom = nom;
        this.hp = hp;
        this.atk = atk;
    }
}

// Déclaration des boss du jour
let nico = new Boss("Nico", 1500, 50)
let kevin = new Boss("Kevin", 2000, 100)
let kadri = new Boss("Kadri", 3000, 150)
// Liste de tous les boss
let boss = [nico, kevin, kadri]

// Boss choisi aléatoirement
let bossATuer = boss[Math.floor(Math.random()* boss.length)];
let lowLife = 0.2 * bossATuer.hp;

// Message sur la mission
alert(`Le boss à tuer aujourd'hui est ${bossATuer.nom}. Ses caractéristiques sont : ${bossATuer.hp}HP et ${bossATuer.attaque}ATK. Bonne chance!`)

export {
    Boss,
    nico,
    kevin,
    kadri,
    boss,
    bossATuer,
    lowLife,
}