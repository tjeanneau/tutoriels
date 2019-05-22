let { amountsCents, sides, previsional } = inputData;

// Formatage des données
amountsCents = amountsCents.split(',');
sides = sides.split(',');
previsional = parseInt(previsional, 10);

// Création des variables "credits" et "debits"
let debits = 0;
let credits = 0;

// Calcul des variables "credits" et "debits" en centimes
for(let i = 0; i < amountsCents.length; i += 1) {
  if(sides[i] === 'debit') {
    debits += parseInt(amountsCents[i], 10);
  } else {
    credits += parseInt(amountsCents[i], 10);
  }
}

// Formatage des variables "credits" et "debits" en euros
debits /= 100;
credits /= 100;

// Calcul de la différence
const difference = credits - previsional;

// Création du message personnalisé
const message = difference < 0 ?
"L'objectif du prévisionnel n'est pas encore atteint, keep working 👊" : "L'objectif du prévisionnel est atteind ! 🎉";

return { debits, credits, difference, message };
