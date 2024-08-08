// Q.1 Créer une classe définissant le type téléphone

class Telephone {
    constructor(marque, couleur, dimension, price, etat = "neuf", boite = true) {
        this.marque = marque;
        this.couleur = couleur;
        this.dimension = dimension;
        this.price = price;
        this.etat = etat;
        this.boite = boite;
    }

    fiche() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }


}
// Q.2  Création de la première instance de téléphone
const telephone1 = new Telephone("Apple(Iphoone 13 Christopher)", "Vert", "6.06 pouces", 999);
console.log("Fiche du téléphone 1:");
telephone1.fiche();

// Q.3 Création de la deuxième instance de téléphone
const telephone2 = new Telephone("Samsung", "Blanc", "6.5 pouces", 799, "occasion");
console.log("Fiche du téléphone 2:");
telephone2.fiche();
