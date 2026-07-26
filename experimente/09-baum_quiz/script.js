const trees = [
  tree('stiel-eiche', 'Stiel-Eiche', 'Quercus robur', 'laubbaum', 'heimisch', ['gelappte Blaetter mit sehr kurzen Blattstielen', 'Eicheln sitzen an langen Stielen', 'maechtige Krone, oft auf feuchten Boeden'], 'Auen, Parks, alte Waelder und Weiden', 'tiefe, laengsrissige Borke bei alten Baeumen', 'Eicheln an langen Fruchtstielen', 'Mehr Lichtbaum als Rotbuche; viele Insektenarten leben an ihr.', 'Trauben-Eiche: Eicheln fast ohne Stiel, Blaetter laenger gestielt.', 'Stiel-Eiche: Die Eichel hat den Stiel.', '#52783d', 'round'),
  tree('trauben-eiche', 'Trauben-Eiche', 'Quercus petraea', 'laubbaum', 'heimisch', ['gelappte Blaetter mit keilfoermigem Blattgrund', 'Eicheln stehen traubig fast ohne Stiel', 'mag trockene, warme Hanglagen'], 'Trockene Waelder, Haenge, Mittelgebirge', 'graubraune, laengsrissige Borke', 'Eicheln in sitzenden Gruppen', 'Wichtige Waldbaumart auf naehrstoffarmen, trockeneren Standorten.', 'Stiel-Eiche: Fruechte deutlich lang gestielt.', 'Trauben-Eiche: Trauben ohne Fruchtstiel.', '#678b42', 'round'),
  tree('rotbuche', 'Rotbuche', 'Fagus sylvatica', 'laubbaum', 'heimisch', ['glatte silbergraue Rinde', 'eifoermige, leicht gewellte Blaetter', 'Bucheckern in stacheligen Fruchtbechern'], 'Schattige Laubwaelder, frische Boeden', 'auffaellig glatt und grau', 'dreikantige Bucheckern', 'Praegt von Natur aus viele deutsche Waelder.', 'Hainbuche: geriffelte Rinde und doppelt gesaegte Blaetter.', 'Buche = glatte graue Elefantenhaut.', '#7f984c', 'oval'),
  tree('hainbuche', 'Hainbuche', 'Carpinus betulus', 'laubbaum', 'heimisch', ['doppelt gesaegte Blaetter mit starken Adern', 'Rinde wirkt muskulös geriffelt', 'kleine Nuesse mit dreilappigen Flugblaettern'], 'Hecken, Waldrand, Eichen-Hainbuchenwaelder', 'glatt, aber spannrueckig und geriffelt', 'Nuss mit papierartigem Flugblatt', 'Botanisch keine echte Buche, sondern Birkengewaechs.', 'Rotbuche: glatter Stamm, ungesaegter Blattrand.', 'Hainbuche hat Hain-typische Heckenhaerte.', '#8aa354', 'oval'),
  tree('gemeine-esche', 'Gemeine Esche', 'Fraxinus excelsior', 'laubbaum', 'heimisch', ['gefiederte Blaetter mit vielen Teilblaettchen', 'schwarze, samtige Knospen', 'haengende Fluegelfruechte'], 'Auen, Schluchten, frische naehrstoffreiche Boeden', 'grau, spaeter netzartig rissig', 'schmale, einseitige Fluegelnuesse', 'Leidet stark am Eschentriebsterben.', 'Vogelbeere: rote Beeren statt Fluegelfruechte.', 'Esche erkennt man an den schwarzen Knospen.', '#75945d', 'compound'),
  tree('bergahorn', 'Bergahorn', 'Acer pseudoplatanus', 'laubbaum', 'heimisch', ['fuenflappige Ahornblaetter mit groben Zaehnen', 'gruenliche Blueten in haengenden Trauben', 'Fluegelfruechte im spitzen Winkel'], 'Kuehle Bergwaelder, Schluchten, Parks', 'schuppig abplatzend bei alten Baeumen', 'paarige Nasenfruechte', 'Toleriert kuehle, feuchte Lagen besser als Spitzahorn.', 'Spitzahorn: Milchsaft im Blattstiel und breiter Fruchtwinkel.', 'Bergahorn mag Berge und Schluchten.', '#6f9f53', 'maple'),
  tree('spitzahorn', 'Spitzahorn', 'Acer platanoides', 'laubbaum', 'heimisch', ['spitze Blattlappen', 'Milchsaft im abgerissenen Blattstiel', 'gelbgruene Blueten vor dem Laubaustrieb'], 'Waelder, Alleen, Parks, Stadtbereiche', 'dunkelgrau, fein laengsrissig', 'Fluegelnuesse fast waagerecht gespreizt', 'Sehr guter Stadtbaum und frueher Nektarlieferant.', 'Bergahorn: kein Milchsaft, stumpfere Lappen.', 'Spitzahorn hat spitze Spitzen.', '#82a647', 'maple'),
  tree('feldahorn', 'Feldahorn', 'Acer campestre', 'laubbaum', 'heimisch', ['kleinere, rundliche Ahornblaetter', 'oft korkige Leisten an Zweigen', 'waagerechte Fluegelfruechte'], 'Hecken, Feldraender, trockene Waelder', 'braungrau, netzrissig', 'paarige Fluegelnuesse', 'Kleinster heimischer Ahorn und sehr schnittvertraeglich.', 'Spitzahorn: groessere, scharf zugespitzte Blaetter.', 'Feldahorn bleibt gern am Feldrand.', '#8faa45', 'maple'),
  tree('winterlinde', 'Winterlinde', 'Tilia cordata', 'laubbaum', 'heimisch', ['kleine herzfoermige Blaetter', 'rostbraune Haarbueschel in den Blattaderwinkeln', 'duftende Blueten mit Hochblatt'], 'Waelder, Alleen, Dorfplaetze', 'graubraun, laengsrissig', 'kleine Nuesse am Flug-Hochblatt', 'Blueten sind wertvoll fuer Bienen und Tee.', 'Sommerlinde: groessere Blaetter, weisse Haare unten.', 'Winterlinde: kleine Herzen, rostige Achselhaare.', '#7e994b', 'heart'),
  tree('sommerlinde', 'Sommerlinde', 'Tilia platyphyllos', 'laubbaum', 'heimisch', ['grosse herzfoermige Blaetter', 'weissliche Haarbueschel unterseits', 'kraeftig duftende Blueten'], 'Schluchtwaelder, Parks, Dorfplaetze', 'grau, spaeter rissig', 'rippige, haertere Nuesse', 'Kann sehr alt werden und war oft Gerichts- oder Tanzlinde.', 'Winterlinde: kleinere Blaetter, rostbraune Haare.', 'Sommerlinde macht grosse Sommer-Herzen.', '#8ca24e', 'heart'),
  tree('sandbirke', 'Sandbirke', 'Betula pendula', 'laubbaum', 'heimisch', ['weisse Rinde mit schwarzen Rissen', 'haengende Zweige', 'dreieckige, doppelt gesaegte Blaetter'], 'Trockene, saure, sandige Standorte; Pionierflaechen', 'weiss, papierartig abrollend', 'kleine gefluegelte Nuesse in Kaetzchen', 'Eine der ersten Baumarten auf offenen Flaechen.', 'Moorbirke: weniger haengende Zweige, feuchtere Standorte.', 'Sandbirke haengt locker auf Sand.', '#93a857', 'triangle'),
  tree('moorbirke', 'Moorbirke', 'Betula pubescens', 'laubbaum', 'heimisch', ['weisse Rinde, junge Triebe behaart', 'eher rundliche Blaetter', 'steht gern nass und kuehl'], 'Moore, Bruchwaelder, feuchte Heiden', 'weiss bis grauweiss, weniger stark rissig', 'Nuesse in zerfallenden Fruchtkaetzchen', 'Wichtige Baumart nasser, kuehler Standorte.', 'Sandbirke: haengende Zweige und trockenere Standorte.', 'Moorbirke: Moor, Feuchte, Flaum.', '#86a765', 'triangle'),
  tree('schwarzerle', 'Schwarz-Erle', 'Alnus glutinosa', 'laubbaum', 'heimisch', ['rundliche Blaetter mit eingekerbter Spitze', 'kleine verholzende Zapfen', 'wächst direkt am Wasser'], 'Bachufer, Bruchwaelder, nasse Senken', 'dunkel, rissig', 'kleine Erlenzaepfchen', 'Bindet mit Wurzelbakterien Stickstoff.', 'Grauerle: spitzere Blaetter, hellere Rinde.', 'Erle am Wasser, kleine Zapfen am Ast.', '#496f44', 'oval'),
  tree('grauerle', 'Grau-Erle', 'Alnus incana', 'laubbaum', 'heimisch', ['spitze, doppelt gesaegte Blaetter', 'graue glatte Rinde', 'Erlenzaepfchen wie kleine Zapfen'], 'Alpenvorland, Flussauen, Rohboeden', 'hellgrau und glatt', 'verholzende Zapfenstaende', 'Besiedelt schnell Kies- und Rohboeden.', 'Schwarz-Erle: rundere Blaetter mit eingekerbter Spitze.', 'Grauerle traegt graue Rinde.', '#6e8d61', 'oval'),
  tree('silberweide', 'Silber-Weide', 'Salix alba', 'laubbaum', 'heimisch', ['schmale lanzettliche Blaetter', 'silbrig behaarte Blattunterseiten', 'biegsame Zweige am Wasser'], 'Flussufer, Auen, feuchte Wiesen', 'graubraun, tief gefurcht', 'Samen mit weissem Flaum', 'Kopfweiden liefern Lebensraum fuer viele Tiere.', 'Sal-Weide: breitere Blaetter, fruehe Kätzchen.', 'Silberweide glaenzt silbrig am Wasser.', '#9aae70', 'lance'),
  tree('salweide', 'Sal-Weide', 'Salix caprea', 'laubbaum', 'heimisch', ['breite ovale Blaetter', 'fruehe flauschige Weidenkaetzchen', 'wichtige erste Bienenweide'], 'Waldrand, Pionierflaechen, Hecken', 'grau, spaeter rissig', 'Kapseln mit Samenwolle', 'Eine der wichtigsten Fruehjahrsquellen fuer Wildbienen.', 'Silber-Weide: schmale silbrige Blaetter und Uferstandorte.', 'Salweide schenkt im Fruehjahr Kaetzchen.', '#99a95f', 'oval'),
  tree('zitterpappel', 'Zitterpappel', 'Populus tremula', 'laubbaum', 'heimisch', ['runde Blaetter an seitlich abgeflachten Stielen', 'Blaetter zittern schon bei wenig Wind', 'glatte graugruene Rinde bei jungen Baeumen'], 'Waldrand, Lichtungen, Pionierstandorte', 'grau, spaeter dunkler rissig', 'Samenwolle in Kapseln', 'Vermehrt sich oft ueber Wurzelauslaeufer.', 'Schwarzpappel: dreieckigere Blaetter, Auenstandort.', 'Zitterpappel zittert sichtbar.', '#8ea85e', 'round'),
  tree('schwarzpappel', 'Schwarz-Pappel', 'Populus nigra', 'laubbaum', 'heimisch', ['dreieckige bis rautenfoermige Blaetter', 'knorrige alte Staemme', 'selten gewordene Auenbaumart'], 'Naturnahe Flussauen und Kiesbaenke', 'dunkel, grob gefurcht', 'Kapseln mit wolligen Samen', 'Echte heimische Schwarz-Pappeln sind stark gefaehrdet.', 'Hybridpappeln: oft gleichfoermiger und in Reihen gepflanzt.', 'Schwarzpappel = dunkle, knorrige Auenpappel.', '#5f7f48', 'triangle'),
  tree('waldkiefer', 'Wald-Kiefer', 'Pinus sylvestris', 'nadelbaum', 'heimisch', ['Nadeln immer zu zweit', 'orangebraune Spiegelrinde oben am Stamm', 'eifoermige Zapfen'], 'Trockene Sande, Moore, lichte Waelder', 'unten dunkel rissig, oben orange', 'kurze Kiefernzapfen', 'Sehr anpassungsfaehig und haeufig auf armen Boeden.', 'Schwarzkiefer: laengere, dunklere Nadeln, nicht heimisch.', 'Kiefer: zwei Nadeln wie eine Pinzette.', '#4e7d48', 'needles2'),
  tree('fichte', 'Gemeine Fichte', 'Picea abies', 'nadelbaum', 'heimisch in Berglagen', ['einzelne spitze Nadeln rund um den Zweig', 'haengende lange Zapfen', 'flache Wurzeln, oft windwurfgefaehrdet'], 'Natuerlich Bergwaelder; forstlich weit verbreitet', 'rotbraun und schuppig', 'lange haengende Zapfen', 'Ausserhalb kuehler Lagen leidet sie stark unter Trockenheit und Borkenkaefern.', 'Tanne: Zapfen stehen aufrecht und Nadeln sind weicher.', 'Fichte sticht, Tanne nicht.', '#3f6f46', 'spruce'),
  tree('weisstanne', 'Weisstanne', 'Abies alba', 'nadelbaum', 'heimisch', ['weiche flache Nadeln mit zwei hellen Streifen unten', 'Zapfen stehen aufrecht und zerfallen am Baum', 'glatte hellgraue Rinde bei jungen Baeumen'], 'Kuehle, feuchte Berg- und Mischwaelder', 'hellgrau, spaeter schuppig', 'aufrechte Zapfen', 'Schattentolerante heimische Tanne der Mittelgebirge und Alpen.', 'Fichte: stechende Nadeln und haengende Zapfen.', 'Tanne traegt Kerzenzapfen nach oben.', '#46765a', 'fir'),
  tree('europaeische-laerche', 'Europaeische Laerche', 'Larix decidua', 'nadelbaum', 'heimisch in den Alpen', ['weiche Nadeln in Buescheln', 'wirft Nadeln im Herbst ab', 'kleine eifoermige Zapfen'], 'Alpen, kuhle Berglagen; oft gepflanzt', 'graubraun, tief rissig', 'kleine stehende Zapfen', 'Einziger heimischer Nadelbaum, der im Winter kahl wird.', 'Fichte: immergruen und Nadeln einzeln.', 'Laerche leert im Winter ihre Nadeln.', '#8b9b49', 'tuft'),
  tree('eibe', 'Europaeische Eibe', 'Taxus baccata', 'nadelbaum', 'heimisch', ['dunkelgruene weiche Nadeln', 'rote fleischige Samenmaentel', 'sehr schattenvertraeglich'], 'Schattige Waelder, Parks, Friedhoefe', 'rotbraun, schuppig', 'roter Arillus um giftigen Samen', 'Fast alle Pflanzenteile sind giftig; sehr langlebig.', 'Tanne: helle Nadelstreifen, keine roten Scheinbeeren.', 'Eibe hat rote Becher, aber giftige Kerne.', '#2f5d3a', 'fir'),
  tree('wacholder', 'Gemeiner Wacholder', 'Juniperus communis', 'nadelbaum', 'heimisch', ['stechende Nadeln in Dreierquirlen', 'blauschwarze Beerenzapfen', 'oft saeulen- oder strauchfoermig'], 'Heiden, Magerrasen, lichte Kiefernwaelder', 'graubraun, faserig abloesend', 'aromatische Beerenzapfen', 'Praegt traditionelle Heidelandschaften und braucht Licht.', 'Eibe: flache weiche Nadeln und rote Fruechte.', 'Wacholder wacht stachelig in der Heide.', '#4f7348', 'needles3'),
  tree('vogelbeere', 'Vogelbeere / Eberesche', 'Sorbus aucuparia', 'fruchtbaum', 'heimisch', ['gefiederte Blaetter', 'weisse Bluetendolden', 'orange-rote Beeren in Dolden'], 'Waldrand, Bergwaelder, Parks', 'glatt grau, spaeter rissig', 'rote Apfelfruechte', 'Wichtige Nahrung fuer Voegel; gekocht nutzbar.', 'Esche: schwarze Knospen und Fluegelfruechte.', 'Vogelbeere fuettert Voegel mit roten Beeren.', '#a3563c', 'compound'),
  tree('elsbeere', 'Elsbeere', 'Sorbus torminalis', 'fruchtbaum', 'heimisch', ['ahornaehnlich gelappte Blaetter', 'braune kleine Fruechte', 'warme, lichte Waelder'], 'Warme Eichenwaelder, Waldrand, Kalkstandorte', 'grau, im Alter schuppig', 'braune Apfelfruechte', 'Seltene, waermeliebende Baumart mit wertvollem Holz.', 'Feldahorn: gegenstaendige Blaetter und Ahornfruechte.', 'Elsbeere: Sorbus mit Ahorn-Look.', '#98663f', 'maple'),
  tree('speierling', 'Speierling', 'Sorbus domestica', 'fruchtbaum', 'heimisch/selten', ['gefiederte Blaetter wie Vogelbeere', 'birnen- oder apfelfoermige kleine Fruechte', 'sehr selten und waermeliebend'], 'Warme Streuobstwiesen, Weinbauklima, lichte Waelder', 'graubraun, rissig', 'gelbrote Apfel- oder Birnenfruechte', 'Eine der seltensten heimischen Baumarten Deutschlands.', 'Vogelbeere: kleinere rote Beeren in Dolden.', 'Speierling hat kleine Speise-Birnchen.', '#b1763d', 'compound'),
  tree('mehlbeere', 'Echte Mehlbeere', 'Sorbus aria', 'fruchtbaum', 'heimisch', ['ovale Blaetter, unterseits weissfilzig', 'rote Fruechte', 'liebt trockene Kalkhaenge'], 'Warme Haenge, Felsen, lichte Waelder', 'grau und glatt bis rissig', 'rote Apfelfruechte', 'Der helle Blattfilz wirkt wie mit Mehl bestaeubt.', 'Vogelbeere: gefiederte Blaetter.', 'Mehlbeere hat mehlweisse Blattunterseiten.', '#9b8f5b', 'oval'),
  tree('wildapfel', 'Wildapfel', 'Malus sylvestris', 'fruchtbaum', 'heimisch', ['kleine harte Aepfel', 'oft dornige Kurztriebe', 'rundliche Blaetter, unten kaum behaart'], 'Auen, Waldrand, lichte Gebuesche', 'graubraun, schuppig', 'kleine gelbgruene Aepfel', 'Seltene Wildform, wichtig fuer genetische Vielfalt.', 'Kulturapfel: groessere Fruechte und oft behaartere Blaetter.', 'Wildapfel bleibt klein, sauer und dornig.', '#8f9d58', 'round'),
  tree('wildbirne', 'Wildbirne', 'Pyrus pyraster', 'fruchtbaum', 'heimisch', ['kleine herbe Birnen', 'dornige Zweige', 'glänzende rundliche Blaetter'], 'Warme Waldrander, Hecken, Trockenhaenge', 'dunkel, wuerfelig rissig', 'kleine Birnen', 'Selten geworden; alte Exemplare sind wertvolle Biotopbaeume.', 'Wildapfel: Apfelfruechte, weniger glaenzende Blaetter.', 'Wildbirne traegt kleine Birnen und Dornen.', '#8c7f42', 'round'),
  tree('vogelkirsche', 'Vogel-Kirsche', 'Prunus avium', 'fruchtbaum', 'heimisch', ['glänzende Rinde mit waagerechten Lentizellen', 'weisse Blueten vor oder mit dem Laub', 'kleine rote bis schwarze Kirschen'], 'Waldrand, lichte Laubwaelder, Parks', 'rotbraun glaenzend, ringelborkig', 'Steinfruechte', 'Stammform vieler Suesskirschen.', 'Traubenkirsche: Blueten in langen Trauben.', 'Vogelkirsche: Ringelrinde und Kirschen fuer Voegel.', '#9f5f45', 'oval'),
  tree('traubenkirsche', 'Gewoehnliche Traubenkirsche', 'Prunus padus', 'fruchtbaum', 'heimisch', ['weisse Blueten in haengenden Trauben', 'schwarze kleine Steinfruechte', 'elliptische fein gesaegte Blaetter'], 'Auen, feuchte Waelder, Gebuesche', 'dunkelgrau, glatt bis rissig', 'schwarze Kirschen in Trauben', 'Typisch fuer feuchte Standorte und Fruehjahrsbluete.', 'Vogelkirsche: Einzelblueten/ Dolden, keine langen Trauben.', 'Traubenkirsche blueht in Trauben.', '#76553f', 'oval'),
  tree('feldulme', 'Feld-Ulme', 'Ulmus minor', 'laubbaum', 'heimisch', ['asymmetrischer Blattgrund', 'kleine raue Blaetter', 'rundliche Fluegelfruechte'], 'Auen, Feldgehoelze, warme Tieflagen', 'dunkel, laengsrissig', 'flache Samara mit Samen nahe der Mitte', 'Durch Ulmensterben stark dezimiert.', 'Berg-Ulme: groessere sehr raue Blaetter.', 'Ulmenblaetter sitzen schief am Stiel.', '#6f8348', 'oval'),
  tree('flatterulme', 'Flatter-Ulme', 'Ulmus laevis', 'laubbaum', 'heimisch', ['asymmetrische Blaetter', 'Fruechte haengen an langen Stielen und flattern', 'typisch fuer Auenwaelder'], 'Feuchte Auen, Flussnahe Waelder', 'graubraun, schuppig', 'lang gestielte Fluegelfruechte', 'Weniger anfaellig fuer Ulmensterben als andere Ulmen.', 'Feld-Ulme: Fruechte nicht so lang gestielt.', 'Flatter-Ulme: Fruechte flattern am Stiel.', '#789153', 'oval'),
  tree('bergulme', 'Berg-Ulme', 'Ulmus glabra', 'laubbaum', 'heimisch', ['sehr grosse raue Blaetter', 'oft dreispitzige Blattspitze', 'schiefer Blattgrund'], 'Kuehle Schlucht- und Bergwaelder', 'dunkelgrau, rissig', 'rundliche Fluegelfruechte', 'Charakterbaum feuchter Schluchtwaelder.', 'Feld-Ulme: kleinere Blaetter, waermere Tieflagen.', 'Berg-Ulme hat grosse raue Bergblaetter.', '#667f4c', 'oval'),
  tree('esskastanie', 'Esskastanie', 'Castanea sativa', 'laubbaum', 'eingebuergerter Kulturbaum', ['lange grob gesaegte Blaetter', 'stachelige Fruchtbecher', 'essbare Maronen'], 'Warme Regionen, Weinbauklima, Parks', 'graubraun, im Alter spiralig rissig', 'Maronen in stacheligen Hüllen', 'Seit langer Zeit in Deutschland kultiviert und lokal eingebuergerter Waldbaum.', 'Rosskastanie: handfoermige Blaetter, nicht nah verwandt.', 'Esskastanie: Essbare Maronen, lange Sägeblatt-Blaetter.', '#8b7d3e', 'lance')
];

const storageKey = 'baummeister-progress-v1';
let progress = loadProgress();
let mode = 'cards';
let filter = 'all';
let currentCard = null;
let currentQuiz = null;
let quizLocked = false;

const elements = {
  known: document.querySelector('#known-count'),
  due: document.querySelector('#due-count'),
  studied: document.querySelector('#studied-count'),
  streak: document.querySelector('#streak-count'),
  filter: document.querySelector('#tree-filter'),
  flashcard: document.querySelector('#flashcard'),
  cardArt: document.querySelector('#card-art'),
  cardType: document.querySelector('#card-type'),
  backType: document.querySelector('#back-type'),
  frontClues: document.querySelector('#front-clues'),
  treeName: document.querySelector('#tree-name'),
  latinName: document.querySelector('#latin-name'),
  treeInfo: document.querySelector('#tree-info'),
  memoryHook: document.querySelector('#memory-hook'),
  quizArt: document.querySelector('#quiz-art'),
  quizType: document.querySelector('#quiz-type'),
  quizClues: document.querySelector('#quiz-clues'),
  answerGrid: document.querySelector('#answer-grid'),
  feedback: document.querySelector('#quiz-feedback'),
  atlasGrid: document.querySelector('#atlas-grid'),
  atlasSearch: document.querySelector('#atlas-search')
};

document.querySelectorAll('.mode-button').forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

elements.filter.addEventListener('change', (event) => {
  filter = event.target.value;
  nextCard();
  nextQuiz();
  renderAtlas();
  renderStats();
});

elements.flashcard.addEventListener('click', flipCard);
elements.flashcard.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    flipCard();
  }
});

document.querySelectorAll('.rating').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    rateCard(button.dataset.rating);
  });
});

document.querySelector('#reset-progress').addEventListener('click', () => {
  if (!confirm('Soll der lokale Lernfortschritt wirklich geloescht werden?')) return;
  progress = createEmptyProgress();
  saveProgress();
  nextCard();
  nextQuiz();
  renderStats();
});

elements.atlasSearch.addEventListener('input', renderAtlas);

nextCard();
nextQuiz();
renderAtlas();
renderStats();

function tree(id, name, latin, group, status, clues, habitat, bark, fruit, fact, similar, memory, color, shape) {
  return { id, name, latin, group, status, clues, habitat, bark, fruit, fact, similar, memory, color, shape };
}

function createEmptyProgress() {
  return {
    studied: 0,
    quizCorrect: 0,
    cards: Object.fromEntries(trees.map((item) => [item.id, { interval: 0, ease: 2.5, due: 0, reviews: 0 }]))
  };
}

function loadProgress() {
  const empty = createEmptyProgress();
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    if (!parsed || !parsed.cards) return empty;
    return {
      studied: parsed.studied || 0,
      quizCorrect: parsed.quizCorrect || 0,
      cards: { ...empty.cards, ...parsed.cards }
    };
  } catch {
    return empty;
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function visibleTrees() {
  if (filter === 'all') return trees;
  return trees.filter((item) => item.group === filter);
}

function dueTrees() {
  const now = Date.now();
  return visibleTrees()
    .filter((item) => progress.cards[item.id].due <= now)
    .sort((a, b) => progress.cards[a.id].due - progress.cards[b.id].due);
}

function nextCard() {
  const candidates = dueTrees();
  currentCard = candidates[0] || visibleTrees().sort((a, b) => progress.cards[a.id].reviews - progress.cards[b.id].reviews)[0];
  elements.flashcard.classList.remove('flipped');
  renderCard(currentCard);
}

function renderCard(card) {
  if (!card) return;
  renderTreeArt(elements.cardArt, card);
  elements.cardType.textContent = labelFor(card);
  elements.backType.textContent = `${labelFor(card)} · ${card.status}`;
  elements.frontClues.innerHTML = card.clues.map((clue) => `<li>${clue}</li>`).join('');
  elements.treeName.textContent = card.name;
  elements.latinName.textContent = card.latin;
  elements.treeInfo.innerHTML = [
    ['Standort', card.habitat],
    ['Rinde', card.bark],
    ['Frucht / Samen', card.fruit],
    ['Wichtig', card.fact],
    ['Nicht verwechseln', card.similar]
  ].map(([title, text]) => `<div class="info-card"><strong>${title}</strong>${text}</div>`).join('');
  elements.memoryHook.textContent = card.memory;
}

function flipCard() {
  elements.flashcard.classList.toggle('flipped');
}

function rateCard(rating) {
  if (!currentCard) return;
  const cardProgress = progress.cards[currentCard.id];
  const day = 24 * 60 * 60 * 1000;
  const ratings = {
    again: { interval: 0.02, ease: -0.25 },
    hard: { interval: Math.max(0.5, cardProgress.interval * 1.2 || 0.5), ease: -0.1 },
    good: { interval: Math.max(1, cardProgress.interval * cardProgress.ease || 1), ease: 0 },
    easy: { interval: Math.max(3, cardProgress.interval * (cardProgress.ease + 0.4) || 3), ease: 0.15 }
  };
  const result = ratings[rating];
  cardProgress.interval = result.interval;
  cardProgress.ease = Math.min(3.2, Math.max(1.3, cardProgress.ease + result.ease));
  cardProgress.due = Date.now() + result.interval * day;
  cardProgress.reviews += 1;
  progress.studied += 1;
  saveProgress();
  nextCard();
  renderStats();
}

function setMode(nextMode) {
  mode = nextMode;
  document.querySelectorAll('.mode-button').forEach((button) => button.classList.toggle('active', button.dataset.mode === mode));
  document.querySelectorAll('.panel').forEach((panel) => panel.classList.remove('active'));
  document.querySelector(`#${mode}-panel`).classList.add('active');
}

function nextQuiz() {
  const pool = visibleTrees();
  currentQuiz = pool[Math.floor(Math.random() * pool.length)];
  quizLocked = false;
  renderTreeArt(elements.quizArt, currentQuiz);
  elements.quizType.textContent = labelFor(currentQuiz);
  elements.quizClues.innerHTML = currentQuiz.clues.map((clue) => `<li>${clue}</li>`).join('');
  elements.feedback.textContent = '';
  const options = shuffle([currentQuiz, ...shuffle(trees.filter((item) => item.id !== currentQuiz.id)).slice(0, 3)]);
  elements.answerGrid.innerHTML = options.map((option) => `<button class="answer-button" type="button" data-id="${option.id}">${option.name}</button>`).join('');
  elements.answerGrid.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => answerQuiz(button)));
}

function answerQuiz(button) {
  if (quizLocked) return;
  quizLocked = true;
  const isCorrect = button.dataset.id === currentQuiz.id;
  button.classList.add(isCorrect ? 'correct' : 'wrong');
  elements.answerGrid.querySelector(`[data-id="${currentQuiz.id}"]`).classList.add('correct');
  if (isCorrect) {
    progress.quizCorrect += 1;
    elements.feedback.textContent = `Richtig: ${currentQuiz.memory}`;
  } else {
    elements.feedback.textContent = `Nicht ganz. Es war ${currentQuiz.name}: ${currentQuiz.similar}`;
  }
  saveProgress();
  renderStats();
  setTimeout(nextQuiz, 1900);
}

function renderAtlas() {
  const query = elements.atlasSearch.value.trim().toLowerCase();
  const list = visibleTrees().filter((item) => {
    const haystack = `${item.name} ${item.latin} ${item.clues.join(' ')} ${item.fruit} ${item.habitat}`.toLowerCase();
    return haystack.includes(query);
  });
  elements.atlasGrid.innerHTML = list.map((item) => `
    <article class="atlas-card">
      <div class="tree-art" data-tree-art="${item.id}"></div>
      <p class="tag">${labelFor(item)}</p>
      <h3>${item.name}</h3>
      <p class="latin">${item.latin}</p>
      <p>${item.clues[0]} · ${item.fruit}</p>
    </article>
  `).join('');
  elements.atlasGrid.querySelectorAll('[data-tree-art]').forEach((node) => renderTreeArt(node, trees.find((item) => item.id === node.dataset.treeArt)));
}

function renderStats() {
  const due = dueTrees().length;
  const stable = trees.filter((item) => progress.cards[item.id].interval >= 7).length;
  elements.known.textContent = stable;
  elements.due.textContent = due;
  elements.studied.textContent = progress.studied;
  elements.streak.textContent = progress.quizCorrect;
}

function labelFor(card) {
  if (card.group === 'nadelbaum') return 'Nadelbaum';
  if (card.group === 'fruchtbaum') return 'Wildobst & Beeren';
  return 'Laubbaum';
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderTreeArt(node, card) {
  node.style.setProperty('--leaf-bg', mix(card.color, '#f7efd9'));
  node.style.setProperty('--leaf-light', mix(card.color, '#ffffff'));
  node.innerHTML = treeSvg(card);
}

function treeSvg(card) {
  const leaf = leafSvg(card.shape, card.color);
  const fruits = card.group === 'fruchtbaum' ? fruitDots('#c94d3a') : card.group === 'nadelbaum' ? cones() : fruitDots('#8b5e2e', 3);
  return `
    <svg viewBox="0 0 360 360" role="img" aria-label="Illustration ${card.name}">
      <path d="M178 152 C161 202 150 256 145 318 L211 318 C205 257 196 203 181 152 Z" fill="#7b5738"/>
      <path d="M156 211 C116 227 91 254 74 296" fill="none" stroke="#7b5738" stroke-width="13" stroke-linecap="round"/>
      <path d="M196 214 C238 229 264 255 285 296" fill="none" stroke="#7b5738" stroke-width="13" stroke-linecap="round"/>
      <g>${leaf}</g>
      ${fruits}
      <ellipse cx="180" cy="322" rx="118" ry="16" fill="rgba(27,38,29,.14)"/>
    </svg>`;
}

function leafSvg(shape, color) {
  const positions = [[180,82,1.28], [122,118,1], [235,123,1], [160,159,.9], [206,168,.88], [105,180,.82], [255,190,.84]];
  return positions.map(([x, y, scale], index) => `<g transform="translate(${x} ${y}) scale(${scale}) rotate(${index % 2 ? -18 : 14})">${leafShape(shape, color)}</g>`).join('');
}

function leafShape(shape, color) {
  const stroke = 'rgba(20,55,28,.34)';
  const shapes = {
    round: `<circle cx="0" cy="0" r="42" fill="${color}"/><path d="M0 36 V-34" stroke="${stroke}" stroke-width="4"/>`,
    oval: `<ellipse cx="0" cy="0" rx="34" ry="52" fill="${color}"/><path d="M0 42 V-42 M-20 10 H20 M-16 -12 H16" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>`,
    triangle: `<path d="M0 -52 L43 42 L-43 42 Z" fill="${color}"/><path d="M0 38 V-34" stroke="${stroke}" stroke-width="4"/>`,
    lance: `<path d="M0 -62 C28 -28 24 28 0 62 C-24 28 -28 -28 0 -62 Z" fill="${color}"/><path d="M0 48 V-48" stroke="${stroke}" stroke-width="4"/>`,
    heart: `<path d="M0 52 C-58 8 -42 -44 -6 -28 C11 -61 65 -29 38 14 C26 32 10 43 0 52 Z" fill="${color}"/><path d="M0 42 V-18" stroke="${stroke}" stroke-width="4"/>`,
    maple: `<path d="M0 -58 L13 -20 L45 -37 L31 -3 L61 8 L25 18 L39 54 L4 32 L-27 56 L-19 19 L-58 9 L-25 -5 L-43 -39 L-10 -20 Z" fill="${color}"/><path d="M0 44 V-35" stroke="${stroke}" stroke-width="4"/>`,
    compound: `<g fill="${color}"><ellipse cx="0" cy="-42" rx="15" ry="30"/><ellipse cx="-25" cy="-18" rx="13" ry="26"/><ellipse cx="25" cy="-18" rx="13" ry="26"/><ellipse cx="-28" cy="18" rx="13" ry="26"/><ellipse cx="28" cy="18" rx="13" ry="26"/></g><path d="M0 44 V-60" stroke="${stroke}" stroke-width="4"/>`,
    needles2: `<path d="M0 54 C-22 5 -22 -34 -3 -62 M0 54 C25 5 23 -35 3 -62" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round"/>`,
    needles3: `<path d="M0 54 L0 -62 M0 52 L35 -44 M0 52 L-35 -44" stroke="${color}" stroke-width="10" stroke-linecap="round"/>`,
    spruce: `<path d="M0 -70 L58 42 H-58 Z M0 -38 L45 72 H-45 Z" fill="${color}"/>`,
    fir: `<path d="M0 -70 L50 40 H-50 Z M0 -25 L62 76 H-62 Z" fill="${color}"/>`,
    tuft: `<g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"><path d="M0 30 L0 -54"/><path d="M0 30 L24 -45"/><path d="M0 30 L-24 -45"/><path d="M0 30 L42 -18"/><path d="M0 30 L-42 -18"/></g>`
  };
  return shapes[shape] || shapes.oval;
}

function fruitDots(color, amount = 7) {
  return Array.from({ length: amount }, (_, index) => {
    const angle = (index / amount) * Math.PI * 2;
    const x = 180 + Math.cos(angle) * (55 + (index % 2) * 34);
    const y = 150 + Math.sin(angle) * 50;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" fill="${color}"/>`;
  }).join('');
}

function cones() {
  return '<ellipse cx="139" cy="173" rx="10" ry="22" fill="#8b5e2e"/><ellipse cx="225" cy="178" rx="10" ry="22" fill="#8b5e2e"/>';
}

function mix(color, target) {
  const source = hexToRgb(color);
  const destination = hexToRgb(target);
  const ratio = 0.58;
  const mixed = source.map((value, index) => Math.round(value * ratio + destination[index] * (1 - ratio)));
  return `rgb(${mixed.join(',')})`;
}

function hexToRgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16));
}
