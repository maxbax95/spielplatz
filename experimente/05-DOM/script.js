// ============================================================
// 1. ELEMENTE FINDEN (Selektionen)
// ============================================================

// getElementById sucht nach dem Attribut id="..."
const demo1Text = document.getElementById('demo1-text');

// querySelector sucht nach einem CSS-Selektor und gibt das ERSTE passende Element zurück
// querySelectorAll gibt ALLE passenden Elemente als Liste zurück
const demo1Btns = document.querySelectorAll('#demo1 .demo-btn');
//   └─ holt ALLE Buttons innerhalb des Elements mit id="demo1"
//      Das Ergebnis ist eine NodeList (ähnlich einem Array)

// Wir legen eine Liste mit möglichen Texten an
const texte = [
  'Hallo Welt!',
  'Ich heiße JavaScript.',
  'Heute lernen wir Events.',
  'DOM-Manipulation ist cool!',
  'Nochmal von vorne …'
];
let textIndex = 0;

// addEventListener(Event, Funktion) – der wichtigste Befehl dieser Lektion!
// Er sagt: "Wenn das Event eintritt, führe die Funktion aus."
demo1Btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // textContent ändert den sichtbaren Text eines Elements
    demo1Text.textContent = texte[textIndex % texte.length];
    textIndex++;
  });
});

// ============================================================
// 2. WAS IST EIN EVENT?
// ============================================================

const zaehlBtn = document.getElementById('zaehl-btn');
const zaehler = document.getElementById('klick-zaehler');
let zaehlStand = 0;

zaehlBtn.addEventListener('click', () => {
  zaehlStand++;
  zaehler.textContent = zaehlStand;
});
// Jedes Mal, wenn der Button geklickt wird (click-Event), passiert:
//   1. zaehlStand wird um 1 erhöht
//   2. Der Text im zaehler-Element wird aktualisiert

// ============================================================
// 3. addEventListener – VERSCHIEDENE EVENTS
// ============================================================

const demo3Btn = document.getElementById('demo3-btn');
const demo3Input = document.getElementById('demo3-input');
const demo3Output = document.getElementById('demo3-output');

// click: der Nutzer klickt auf den Button
demo3Btn.addEventListener('click', () => {
  demo3Output.textContent = 'Du hast den Button geklickt!';
});

// input: der Nutzer tippt oder löscht etwas im Eingabefeld
// Dieses Event feuert bei JEDER Änderung (auch Buchstabe für Buchstabe)
demo3Input.addEventListener('input', () => {
  const text = demo3Input.value;
  if (text === '') {
    demo3Output.textContent = '👆 Tipp etwas …';
  } else {
    demo3Output.textContent = `Du tippst: ${text}`;
  }
});

// ============================================================
// 4. DAS EVENT-OBJEKT
// ============================================================

const eventFeld = document.getElementById('event-feld');
const eventOutput = document.getElementById('event-output');

// Ein einziger Event-Listener auf dem ELTERN-Element
// Dank Event-Delegation registrieren wir nur EINEN Listener
// statt einen pro Kasten!
eventFeld.addEventListener('click', (event) => {
  // event.target ist das Element, das WIRKLICH geklickt wurde
  // (z. B. der <span> mit "A" oder "B")
  const target = event.target;

  // Prüfen, ob das geklickte Element die Klasse .kasten hat
  if (target.classList.contains('kasten')) {

    // Alle Kästen erstmal zurücksetzen (Klasse entfernen)
    document.querySelectorAll('.kasten').forEach(k => k.classList.remove('aktiv'));

    // Nur den angeklickten hervorheben
    target.classList.add('aktiv');

    // textContent auslesen und anzeigen
    eventOutput.textContent = `Du hast "${target.textContent}" geklickt!`;
  }
});

// ============================================================
// 5. DOM MANIPULIEREN – textContent, style, classList
// ============================================================

const box = document.getElementById('box');
const boxBtn = document.getElementById('box-btn');
const textBtn = document.getElementById('text-btn');
const grossBtn = document.getElementById('gross-btn');

// classList.toggle: Wenn die Klasse vorhanden ist, wird sie entfernt.
//                   Wenn nicht, wird sie hinzugefügt.
// Wie ein Lichtschalter: an ⇄ aus
boxBtn.addEventListener('click', () => {
  box.classList.toggle('rot');
  // Toggelt die Klasse "rot" auf #box
  // Im CSS steht: .box.rot { background: #ffcdd2; border-color: ... }
});

// textContent: ersetzt den gesamten Text im Element
textBtn.addEventListener('click', () => {
  const aktuell = box.textContent;
  box.textContent = aktuell === '🟦' ? '✅' : '🟦';
});

// style: setzt direkt eine CSS-Eigenschaft (inline, wie im HTML-Attribut style="…")
grossBtn.addEventListener('click', () => {
  box.classList.toggle('gross');
  // Das ändert width/height/font-size über die CSS-Klasse .gross
});

// ============================================================
// 6. STANDARD-VERHALTEN VERHINDERN (preventDefault)
// ============================================================

const demo6Form = document.getElementById('demo6-form');
const demo6Output = document.getElementById('demo6-output');

demo6Form.addEventListener('submit', (event) => {
  // Ohne preventDefault würde das Formular die Seite neu laden!
  event.preventDefault();

  // Eingabefeld innerhalb des Formulars finden
  const input = demo6Form.querySelector('input');
  const name = input.value.trim();

  if (name === '') {
    demo6Output.textContent = '⚠️ Bitte gib einen Namen ein.';
    demo6Output.style.color = '#c62828';
  } else {
    demo6Output.textContent = `✅ Hallo, ${name}!`;
    demo6Output.style.color = '#2e7d32';
    input.value = '';
  }
});

// ============================================================
// 7. HOVER-EVENTS: mouseenter / mouseleave
// ============================================================

const hoverFlaeche = document.getElementById('hover-flaeche');
const hoverStatus = document.getElementById('hover-status');

hoverFlaeche.addEventListener('mouseenter', () => {
  // mouseenter: die Maus kommt IN das Element
  hoverFlaeche.classList.add('aktiv');
  hoverStatus.textContent = '🐭 Maus ist drin!';
});

hoverFlaeche.addEventListener('mouseleave', () => {
  // mouseleave: die Maus VERLÄSST das Element
  hoverFlaeche.classList.remove('aktiv');
  hoverStatus.textContent = '👆 Maus ist draußen.';
});

// Genau so funktioniert der Hover-Effekt im Klick-Quiz!
// Die einzige Klasse .bundesland:hover im CSS macht das Gleiche
// – nur ohne JavaScript, rein mit CSS.

// ============================================================
// 8. ALLES ZUSAMMEN – MINI-QUIZ
// ============================================================

const kreisContainer = document.getElementById('kreis-container');
const punktestand = document.getElementById('punktestand');
const resetPunkte = document.getElementById('reset-punkte');
let punkte = 0;

// Event-Delegation: ein Listener auf dem Container
kreisContainer.addEventListener('click', (event) => {
  const kreis = event.target;

  // Nur auf .kreis-Elemente reagieren
  if (!kreis.classList.contains('kreis')) return;
  // Nicht auf bereits geklickte reagieren
  if (kreis.classList.contains('erledigt')) return;

  // data-punkte auslesen ("1" oder "-1")
  // dataset greift auf data-* Attribute zu
  const wert = parseInt(kreis.dataset.punkte);
  punkte += wert;

  // Punktestand aktualisieren
  punktestand.textContent = punkte;

  // Kreis als "erledigt" markieren
  kreis.classList.add('erledigt');
});

resetPunkte.addEventListener('click', () => {
  punkte = 0;
  punktestand.textContent = '0';

  // Alle Kreise wieder aktiv machen
  document.querySelectorAll('.kreis').forEach(k => k.classList.remove('erledigt'));
});

// ============================================================
// ZUSAMMENFASSUNG – die wichtigsten Befehle
// ============================================================
//
// Element finden:
//   document.getElementById('id')
//   document.querySelector('.klasse')
//   document.querySelectorAll('button')
//
// Event abhören:
//   element.addEventListener('klick', () => { … });
//
// Wichtige Events:
//   'click'        – Klick
//   'input'        – Tippen im Textfeld
//   'submit'       – Formular absenden
//   'mouseenter'   – Maus kommt rein
//   'mouseleave'   – Maus geht raus
//   'change'       – Auswahl geändert (z. B. Radio-Button)
//
// Element verändern:
//   element.textContent = '…'          – Text setzen
//   element.style.color = 'rot'        – CSS direkt setzen
//   element.classList.add('…')         – Klasse hinzufügen
//   element.classList.remove('…')      – Klasse entfernen
//   element.classList.toggle('…')      – Klasse an/aus
//
// Event-Objekt:
//   event.target                       – das geklickte Element
//   event.preventDefault()             – Standard-Verhalten verhindern
//   event.currentTarget                – das Element mit dem Listener
