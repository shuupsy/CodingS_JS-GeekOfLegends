// Constructor Boss
class Boss {
    constructor(nom, hp, attaque) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
    }
    vie() {
        if (this.hp <= 0.2 * this.hp) {
            enigme()
        }
    }

}

// Déclaration des boss
let nico = new Boss("Nico", 1500, 50)
let kevin = new Boss("Kevin", 2300, 100)
let kadri = new Boss("Kadri", 3000, 150)
// Liste de tous les boss
console.log(nico)
let boss = [nico, kevin, kadri]

let bossATuer = boss[Math.floor(Math.random()* boss.length)]

console.log(`Le boss à tuer aujourd'hui est ${bossATuer.nom}. Ses caractéristiques sont : ${bossATuer.hp}HP et ${bossATuer.attaque}ATK. Bonne chance!`)

export {
    Boss,
    nico,
    kevin,
    kadri,
    boss,
    bossATuer
}