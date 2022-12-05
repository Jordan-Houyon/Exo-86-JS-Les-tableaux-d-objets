/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen,peugeot, ford] // Vos voitures dans cette propriété !
}


for (let i = 0; i < voitures.collection.length; i++) {
    voitures.collection[i].ouvrirPorte();
}

para = document.createElement("p");
document.body.append(para);

for (let i = 0; i < voitures.collection.length; i++) {
    let carColor = document.createElement("span");
    carColor.innerText = voitures.collection[i].color; //<span>blue</span>
    console.log(carColor);
    para.innerText += carColor;
    //FIXME Ajouter les span AVEC la balise.
}
