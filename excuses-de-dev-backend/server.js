const express = require('express');
const app = express();
app.use(express.json());

let excuses = [
  "Merci de patienté",
  "Nous sommes désolés pour l'attente",
  "Le serveur est en maintenance, merci de patienter",
  "Cela pourrait prendre quelques minutes, merci de patienter",
  "Suite à une apocalypse zombie le serveur est momentanément indisponible, merci de réessayer plus tard",
  "Nous sommes désolés pour l'attente cela va prendre plusieurs minutes",
  "Nous rencontrons actuellement un volume de demandes plus élevé que d'habitude",
  "Votre demande est en cours de traitement, merci de patienter quelques instants",
  "Nous mettons à jour notre système pour améliorer nos services",
  "Il semble y avoir un problème temporaire, merci de réessayer dans quelques minutes",
  "Nous recherchons actuellement les informations nécessaires pour répondre à votre demande",
  "Nous procédons à des vérifications de sécurité supplémentaires pour protéger vos informations",
  "Notre système subit une maintenance planifiée",
  "Nous faisons de notre mieux pour réduire le temps d'attente",
  "Veuillez patienter pendant que nous finalisons les détails de votre demande",
  "Nous rencontrons une interruption de service temporaire",
  "Nous faisons tout notre possible pour résoudre ce problème rapidement",
  "Nous nous excusons pour ce contretemps et apprécions votre patience",
  "Merci de rester en ligne pendant que nous traitons votre demande",
  "Nous nous excusons pour l'attente et vous remercions de votre compréhension"
];
app.get('/excuses', (req, res) => {
  res.json(excuses);
});

app.post('/excuses', (req, res) => {
  const newExcuse = req.body.excuse;
  if (newExcuse) {
    excuses.push(newExcuse);
    res.status(201).json({ message: 'Excuse added' });
  } else {
    res.status(400).json({ message: 'Invalid excuse' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
