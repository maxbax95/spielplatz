const bundeslandNamen = {
  'DE-BW': 'Baden-Württemberg',
  'DE-BY': 'Bayern',
  'DE-BE': 'Berlin',
  'DE-BB': 'Brandenburg',
  'DE-HB': 'Bremen',
  'DE-HH': 'Hamburg',
  'DE-HE': 'Hessen',
  'DE-MV': 'Mecklenburg-Vorpommern',
  'DE-NI': 'Niedersachsen',
  'DE-NW': 'Nordrhein-Westfalen',
  'DE-RP': 'Rheinland-Pfalz',
  'DE-SL': 'Saarland',
  'DE-SN': 'Sachsen',
  'DE-ST': 'Sachsen-Anhalt',
  'DE-SH': 'Schleswig-Holstein',
  'DE-TH': 'Thüringen'
};

// Alle IDs in ein Array
const alleIDs = Object.keys(bundeslandNamen);
// Kopie für noch nicht bearbeitete Länder
let verbleibendeIDs = [...alleIDs];

const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const feedback = document.getElementById('feedback');
const attemptsSpan = document.getElementById('attempts-left');
const remainingSpan = document.getElementById('remaining');
const resetBtn = document.getElementById('reset-btn');

let aktuellesLandID = null;
let versuche = 3;

function naechstesLand() {
  // Alte Hervorhebung entfernen
  if (aktuellesLandID) {
    const altesLand = document.getElementById(aktuellesLandID);
    altesLand.classList.remove('active-land');
  }

  // Wenn alle bearbeitet -> Spielende
  if (verbleibendeIDs.length === 0) {
    feedback.textContent = 'Alle Bundesländer bearbeitet!';
    guessInput.disabled = true;
    guessForm.querySelector('button').disabled = true;
    resetBtn.style.display = 'inline-block';
    return;
  }

  // Zufälliges Land aus den verbleibenden
  const zufallsIndex = Math.floor(Math.random() * verbleibendeIDs.length);
  aktuellesLandID = verbleibendeIDs[zufallsIndex];

  // Hervorheben
  const landElement = document.getElementById(aktuellesLandID);
  landElement.classList.add('active-land');

  // Versuche zurücksetzen
  versuche = 3;
  attemptsSpan.textContent = versuche;
  feedback.textContent = '';
  guessInput.value = '';
  guessInput.focus();

  // Verbleibende Anzahl aktualisieren
  remainingSpan.textContent = verbleibendeIDs.length;
}

function pruefeEingabe(event) {
  event.preventDefault(); // Verhindert Neuladen der Seite

  const eingabe = guessInput.value.trim();
  const richtigerName = bundeslandNamen[aktuellesLandID];

  if (eingabe.toLowerCase() === richtigerName.toLowerCase()) {
    // Richtig!
    const land = document.getElementById(aktuellesLandID);
    land.classList.add('correct');
    land.classList.remove('active-land');

    // Aus verbleibenden löschen
    verbleibendeIDs = verbleibendeIDs.filter(id => id !== aktuellesLandID);

    feedback.textContent = `Richtig! Das war ${richtigerName}.`;
    // Nach kurzer Pause nächstes Land
    setTimeout(naechstesLand, 100);
  } else {
    versuche--;
    attemptsSpan.textContent = versuche;

    if (versuche > 0) {
      feedback.textContent = `Falsch! Noch ${versuche} Versuche.`;
      guessInput.value = '';
    } else {
      // 3 Versuche aufgebraucht -> rot markieren
      const land = document.getElementById(aktuellesLandID);
      land.classList.add('wrong');
      land.classList.remove('active-land');

      feedback.textContent = `Leider falsch! Es war ${richtigerName}.`;
      verbleibendeIDs = verbleibendeIDs.filter(id => id !== aktuellesLandID);
      setTimeout(naechstesLand, 1500);
    }
  }
}

function resetQuiz() {
  verbleibendeIDs = [...alleIDs];
  aktuellesLandID = null;

  document.querySelectorAll('#map-container path').forEach(path => {
    path.classList.remove('correct', 'wrong', 'active-land');
  });

  guessInput.disabled = false;
  guessForm.querySelector('button').disabled = false;
  guessInput.value = '';
  feedback.textContent = '';
  resetBtn.style.display = 'none';
  remainingSpan.textContent = alleIDs.length;
  attemptsSpan.textContent = 3;

  naechstesLand();
}

resetBtn.addEventListener('click', resetQuiz);
guessForm.addEventListener('submit', pruefeEingabe);
naechstesLand();