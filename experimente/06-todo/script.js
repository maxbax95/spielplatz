// ============================================================
// TO-DO-LISTE – Lerne: Arrays, Objekte, CRUD, localStorage
// ============================================================
//
// DAS KONZEPT:
// Wir haben ein Array von Aufgaben (todos). Jede Aufgabe ist
// ein Objekt mit drei Eigenschaften:
//   { id: 1, text: "Einkaufen", done: false }
//
// Egal was der Nutzer macht – wir verändern NUR das Array.
// Dann bauen wir die komplette Liste neu aus dem Array.
// Datenquelle (Array) → Anzeige (HTML) ist immer synchron.
//
// Das ist der Kern von fast jeder Web-App!

// ============================================================
// 1. UNSERE DATEN
// ============================================================

// Hilfsfunktion: erzeugt eine eindeutige ID
// (einfach hochzählen, gut genug für eine To-Do-Liste)
let naechsteId = 1;

function neueId() {
  return naechsteId++; // gibt aktuelle ID zurück, dann +1
}

// Unser Haupt-Array: alle Aufgaben leben hier.
// Jede Aufgabe = { id: Zahl, text: String, done: true/false }
let todos = [];

// Aktuell ausgewählter Filter: 'all', 'active' oder 'done'
let aktuellerFilter = 'all';

// ============================================================
// 2. START: GESCHEITERTE DATEN ODER LEER
// ============================================================

// localStorage ist wie ein kleiner Schrank im Browser.
// Du kannst dort Daten als TEXT ablegen – auch wenn die Seite
// neu geladen wird, sind sie noch da!
//
// Wichtig: localStorage speichert NUR Text.
// Für Arrays/Objekte brauchen wir:
//   JSON.stringify(wert)  → verwandelt Array in Text
//   JSON.parse(text)      → verwandelt Text zurück in Array

const gespeicherte = localStorage.getItem('todos');
//   └─ gibt den gespeicherten Text zurück (oder null, wenn nichts da ist)

if (gespeicherte) {
  // Text → Array zurückverwandeln
  todos = JSON.parse(gespeicherte);

  // naechsteId muss WEITERZÄHLEN, nicht wieder bei 1 anfangen
  const maxId = todos.reduce((max, t) => Math.max(max, t.id), 0);
  naechsteId = maxId + 1;
} else {
  // Keine Daten da? Dann Beispiel-Aufgaben einfügen
  todos = [
    { id: neueId(), text: '05-DOM Lektion durcharbeiten', done: true },
    { id: neueId(), text: 'To-Do-Liste verstehen', done: false },
    { id: neueId(), text: 'Nächstes Projekt planen', done: false },
  ];
}

// ============================================================
// 3. HTML-REFERENZEN
// ============================================================

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const countSpan = document.getElementById('count');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearDoneBtn = document.getElementById('clear-done');

// ============================================================
// 4. RENDER-FUNKTION – DAS HERZ DER APP
// ============================================================

// "Rendern" bedeutet: aus Daten HTML machen und anzeigen.
// Diese Funktion wird nach JEDER Änderung aufgerufen.

function rendere() {

  // --- a) Filtern ---
  // Je nach Filter nehmen wir nur bestimmte Aufgaben
  let anzuzeigen = todos;
  if (aktuellerFilter === 'active') {
    anzuzeigen = todos.filter(t => !t.done);
    //   └─ filter() gibt ein NEUES Array nur mit den Elementen,
    //      bei denen die Bedingung true ergibt
  } else if (aktuellerFilter === 'done') {
    anzuzeigen = todos.filter(t => t.done);
  }

  // --- b) HTML bauen ---
  // Aus dem (gefilterten) Array → Listenelemente (String)
  // map() ruft die Funktion für jedes Element auf und sammelt
  // die Rückgaben in einem neuen Array
  const html = anzuzeigen.map(t => {
    // JS-Template-Literals (backticks) erlauben ${…} direkt im String
    const klasse = t.done ? 'todo-item done' : 'todo-item';
    return `
      <li class="${klasse}" data-id="${t.id}">
        <div class="checkbox"></div>
        <span class="text">${t.text}</span>
        <button class="delete-btn">🗑️</button>
      </li>
    `;
  }).join('');
  //   └─ join('') macht aus ["<li>…</li>", "<li>…</li>"] einen String

  // --- c) Ins DOM schreiben ---
  list.innerHTML = html;
  //   └─ innerHTML ersetzt den gesamten Inhalt des <ul>
  //      VORSICHT: nur sicher, wenn wir den Text selbst erzeugen!

  // --- d) Leer-Status ---
  if (anzuzeigen.length === 0) {
    list.classList.add('leer');
  } else {
    list.classList.remove('leer');
  }

  // --- e) Zähler aktualisieren ---
  const offene = todos.filter(t => !t.done).length;
  const gesamt = todos.length;
  countSpan.textContent = `${gesamt} Aufgaben (${offene} offen)`;

  // --- f) Daten speichern ---
  speichern();
}

// ============================================================
// 5. DATEN SPEICHERN
// ============================================================

function speichern() {
  // Array → Text → localStorage
  localStorage.setItem('todos', JSON.stringify(todos));
}
// Jetzt überleben die Daten einen Seiten-Neulad!
// localStorage ist an den Browser gebunden – andere Rechner
// sehen nichts. Und Daten bleiben, bis du sie löschst
// (oder der Cache geleert wird).

// ============================================================
// 6. EVENT: NEUE AUFGABE (CREATE)
// ============================================================

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Ohne preventDefault lädt die Seite neu – wir wollen das nicht!

  const text = input.value.trim();
  if (text === '') return;

  // Neues To-Do-Objekt ans Array ANHÄNGEN
  todos.push({
    id: neueId(),
    text: text,
    done: false,
  });

  input.value = '';   // Eingabefeld leeren
  input.focus();      // Fokus zurück ins Feld
  rendere();          // Liste neu zeichnen
});

// ============================================================
// 7. EVENT: KLICK AUF DIE LISTE (UPDATE + DELETE)
// ============================================================

// Wir nutzen Event-Delegation: EIN Listener auf dem <ul>
// hört alle Klicks ab – auch auf Elementen, die noch gar nicht
// existieren, als der Listener registriert wurde!

list.addEventListener('click', (event) => {
  const target = event.target;

  // --- a) Checkbox geklickt? → done umschalten (UPDATE) ---
  if (target.classList.contains('checkbox')) {
    // Vom geklickten <div> nach oben zum <li> gehen
    const li = target.closest('.todo-item');
    //   └─ closest() sucht das nächstgelegene Elternteil,
    //      das zum CSS-Selektor passt

    const id = Number(li.dataset.id);
    //   └─ dataset.id liest das data-id Attribut aus
    //      Achtung: dataset enthält Strings! → Number() umwandeln

    // Das passende To-Do im Array finden
    const todo = todos.find(t => t.id === id);
    //   └─ find() gibt das erste Element zurück, bei dem die
    //      Bedingung true ergibt (oder undefined, wenn nichts passt)

    if (todo) {
      todo.done = !todo.done; // umschalten: true ↔ false
      rendere();
    }
  }

  // --- b) Löschen-Button geklickt? (DELETE) ---
  if (target.classList.contains('delete-btn')) {
    const li = target.closest('.todo-item');
    const id = Number(li.dataset.id);

    // Aus dem Array ENTFERNEN
    todos = todos.filter(t => t.id !== id);
    //   └─ filter() erzeugt ein NEUES Array ohne das gelöschte Element
    //      Wichtig: todos = … sonst ändert sich das Original nicht!

    rendere();
  }
});

// ============================================================
// 8. FILTER
// ============================================================

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // "Aktiv"-Klasse von allen Buttons entfernen
    filterBtns.forEach(b => b.classList.remove('aktiv'));

    // Nur den geklickten Button aktivieren
    btn.classList.add('aktiv');

    // Filter setzen
    aktuellerFilter = btn.dataset.filter;

    rendere();
  });
});

// ============================================================
// 9. ERLEDIGTE LÖSCHEN
// ============================================================

clearDoneBtn.addEventListener('click', () => {
  // Nur die behalten, die NICHT done sind
  todos = todos.filter(t => !t.done);
  rendere();
});

// ============================================================
// 10. START
// ============================================================

rendere();

// ============================================================
// ZUSAMMENFASSUNG – neue Konzepte in diesem Projekt
// ============================================================
//
// Array von Objekten:
//   [{ id: 1, text: '…', done: false }, { id: 2, … }]
//
// Array-Methoden:
//   todos.push(neuesElement)     – hinten anhängen
//   todos.filter(bedingung)      – neue Liste mit Treffern
//   todos.find(bedingung)        – erstes Treffer-Element
//   array.map(funktion)          – jedes Element umwandeln
//   array.join('')               – Array → String
//
// localStorage:
//   localStorage.getItem('key')      – lesen (→ String oder null)
//   localStorage.setItem('key', val) – schreiben (nur String!)
//
// JSON:
//   JSON.stringify(wert)   – Array/Objekt → Text
//   JSON.parse(text)       – Text → Array/Objekt
//
// Event-Delegation:
//   EIN Listener auf Eltern-Element. event.target sagt dir,
//   welches Kind wirklich geklickt wurde. Perfekt für Listen!
//
// closest():
//   element.closest('.css-klasse') – vom Kind nach oben zum Eltern
//   suchen, das zur Klasse passt.
