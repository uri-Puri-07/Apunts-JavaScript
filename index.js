// ===================================
// 1. JS BÀSIC
// ===================================
document.getElementById("btn-basic").addEventListener("click", function () {
  let nom = "Uri";
  let edat = 20;
  let ciutat = "Barcelona";

  console.log("Hola", nom);
  console.log("Edat:", edat);
  console.log("Ciutat:", ciutat);

  document.getElementById("sortida-basic").textContent =
    `Hola ${nom} · edat ${edat} · ciutat ${ciutat}`;
});

// ===================================
// 2. ARRAYS
// ===================================
document.getElementById("btn-array").addEventListener("click", function () {
  let inventari = ["espasa", "escut"];
  inventari.push("poció");

  let tePocio = inventari.includes("poció");

  console.log(inventari);
  console.log(tePocio);

  document.getElementById("sortida-array").textContent =
    `Inventari: ${inventari.join(", ")} · includes("poció"): ${tePocio}`;
});

// ===================================
// 3. MÀXIM / MÍNIM
// ===================================
function maxim(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function minim(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

document.getElementById("btn-max").addEventListener("click", function () {
  let nums = [10, 50, 30];

  let maximArray = Math.max(...nums);
  let minimArray = Math.min(...nums);
  let maximDues = maxim(8, 15);
  let minimDues = minim(8, 15);

  console.log("Màxim array:", maximArray);
  console.log("Mínim array:", minimArray);

  document.getElementById("sortida-max").textContent =
    `Math.max(...nums) = ${maximArray} · Math.min(...nums) = ${minimArray} · maxim(8,15) = ${maximDues} · minim(8,15) = ${minimDues}`;
});

// ===================================
// 6. TEXTCONTENT
// ===================================
document.getElementById("btn-text").addEventListener("click", function () {
  document.getElementById("missatge").textContent = "Has desbloquejat un nou nivell!";
});

// ===================================
// 7. CLASSLIST
// ===================================
document.getElementById("afegir").addEventListener("click", function () {
  document.getElementById("text2").classList.add("destacat");
});

document.getElementById("treure").addEventListener("click", function () {
  document.getElementById("text2").classList.remove("destacat");
});

// ===================================
// 8. CREATE + APPEND
// ===================================
document.getElementById("crear").addEventListener("click", function () {
  let p = document.createElement("p");
  p.textContent = "Nou enemic";
  document.getElementById("pantalla").append(p);
});

// ===================================
// 9. EVENTS
// ===================================
let quad = document.getElementById("quadrat");

quad.addEventListener("mouseover", function () {
  quad.style.background = "#facc15";
});

quad.addEventListener("mouseout", function () {
  quad.style.background = "#2563eb";
});

document.addEventListener("keydown", function (event) {
  document.getElementById("tecla").textContent = `Tecla premuda: ${event.key}`;
});

// ===================================
// 10. SELECTOR DE PERSONATGE
// ===================================
const nomGuerrer = "GUERRER";
let atacGuerrer = 85;
let defensaGuerrer = 90;
let velocitatGuerrer = 45;
let magiaGuerrer = 30;
let totalGuerrer = atacGuerrer + defensaGuerrer + velocitatGuerrer + magiaGuerrer;

const nomMag = "MAG";
let atacMag = 50;
let defensaMag = 35;
let velocitatMag = 60;
let magiaMag = 95;
let totalMag = atacMag + defensaMag + velocitatMag + magiaMag;

const nomArquer = "ARQUER";
let atacArquer = 75;
let defensaArquer = 55;
let velocitatArquer = 85;
let magiaArquer = 40;
let totalArquer = atacArquer + defensaArquer + velocitatArquer + magiaArquer;

const nomAssassi = "ASSASSÍ";
let atacAssassi = 80;
let defensaAssassi = 30;
let velocitatAssassi = 95;
let magiaAssassi = 25;
let totalAssassi = atacAssassi + defensaAssassi + velocitatAssassi + magiaAssassi;

// Mostrar stats al DOM
document.getElementById("atac-guerrer").textContent = atacGuerrer;
document.getElementById("defensa-guerrer").textContent = defensaGuerrer;
document.getElementById("velocitat-guerrer").textContent = velocitatGuerrer;
document.getElementById("magia-guerrer").textContent = magiaGuerrer;
document.getElementById("total-guerrer").textContent = totalGuerrer;

document.getElementById("atac-mag").textContent = atacMag;
document.getElementById("defensa-mag").textContent = defensaMag;
document.getElementById("velocitat-mag").textContent = velocitatMag;
document.getElementById("magia-mag").textContent = magiaMag;
document.getElementById("total-mag").textContent = totalMag;

document.getElementById("atac-arquer").textContent = atacArquer;
document.getElementById("defensa-arquer").textContent = defensaArquer;
document.getElementById("velocitat-arquer").textContent = velocitatArquer;
document.getElementById("magia-arquer").textContent = magiaArquer;
document.getElementById("total-arquer").textContent = totalArquer;

document.getElementById("atac-assassi").textContent = atacAssassi;
document.getElementById("defensa-assassi").textContent = defensaAssassi;
document.getElementById("velocitat-assassi").textContent = velocitatAssassi;
document.getElementById("magia-assassi").textContent = magiaAssassi;
document.getElementById("total-assassi").textContent = totalAssassi;

// Millor atac
let millorAtacNom;
let millorAtacValor;

if (atacGuerrer >= atacMag && atacGuerrer >= atacArquer && atacGuerrer >= atacAssassi) {
  millorAtacNom = nomGuerrer;
  millorAtacValor = atacGuerrer;
} else if (atacMag >= atacGuerrer && atacMag >= atacArquer && atacMag >= atacAssassi) {
  millorAtacNom = nomMag;
  millorAtacValor = atacMag;
} else if (atacArquer >= atacGuerrer && atacArquer >= atacMag && atacArquer >= atacAssassi) {
  millorAtacNom = nomArquer;
  millorAtacValor = atacArquer;
} else {
  millorAtacNom = nomAssassi;
  millorAtacValor = atacAssassi;
}

document.getElementById("millor-atac").textContent = millorAtacNom;
document.getElementById("valor-atac").textContent = millorAtacValor;

// Millor defensa
let millorDefensaNom;
let millorDefensaValor;

if (defensaGuerrer >= defensaMag && defensaGuerrer >= defensaArquer && defensaGuerrer >= defensaAssassi) {
  millorDefensaNom = nomGuerrer;
  millorDefensaValor = defensaGuerrer;
} else if (defensaMag >= defensaGuerrer && defensaMag >= defensaArquer && defensaMag >= defensaAssassi) {
  millorDefensaNom = nomMag;
  millorDefensaValor = defensaMag;
} else if (defensaArquer >= defensaGuerrer && defensaArquer >= defensaMag && defensaArquer >= defensaAssassi) {
  millorDefensaNom = nomArquer;
  millorDefensaValor = defensaArquer;
} else {
  millorDefensaNom = nomAssassi;
  millorDefensaValor = defensaAssassi;
}

document.getElementById("millor-defensa").textContent = millorDefensaNom;
document.getElementById("valor-defensa").textContent = millorDefensaValor;

// Millor velocitat
let millorVelocitatNom;
let millorVelocitatValor;

if (velocitatGuerrer >= velocitatMag && velocitatGuerrer >= velocitatArquer && velocitatGuerrer >= velocitatAssassi) {
  millorVelocitatNom = nomGuerrer;
  millorVelocitatValor = velocitatGuerrer;
} else if (velocitatMag >= velocitatGuerrer && velocitatMag >= velocitatArquer && velocitatMag >= velocitatAssassi) {
  millorVelocitatNom = nomMag;
  millorVelocitatValor = velocitatMag;
} else if (velocitatArquer >= velocitatGuerrer && velocitatArquer >= velocitatMag && velocitatArquer >= velocitatAssassi) {
  millorVelocitatNom = nomArquer;
  millorVelocitatValor = velocitatArquer;
} else {
  millorVelocitatNom = nomAssassi;
  millorVelocitatValor = velocitatAssassi;
}

document.getElementById("millor-velocitat").textContent = millorVelocitatNom;
document.getElementById("valor-velocitat").textContent = millorVelocitatValor;

// Millor màgia
let millorMagiaNom;
let millorMagiaValor;

if (magiaGuerrer >= magiaMag && magiaGuerrer >= magiaArquer && magiaGuerrer >= magiaAssassi) {
  millorMagiaNom = nomGuerrer;
  millorMagiaValor = magiaGuerrer;
} else if (magiaMag >= magiaGuerrer && magiaMag >= magiaArquer && magiaMag >= magiaAssassi) {
  millorMagiaNom = nomMag;
  millorMagiaValor = magiaMag;
} else if (magiaArquer >= magiaGuerrer && magiaArquer >= magiaMag && magiaArquer >= magiaAssassi) {
  millorMagiaNom = nomArquer;
  millorMagiaValor = magiaArquer;
} else {
  millorMagiaNom = nomAssassi;
  millorMagiaValor = magiaAssassi;
}

document.getElementById("millor-magia").textContent = millorMagiaNom;
document.getElementById("valor-magia").textContent = millorMagiaValor;

// ===================================
// 11. FRUITES
// ===================================
const zonaJoc = document.getElementById("zona-joc");
const btnIniciar = document.getElementById("btn-iniciar");
const divPunts = document.getElementById("punts");

let punts = 0;
let fruites = [];

const EMOJIS_FRUITA = ["🍉", "🍊", "🍋", "🍇", "🍓", "🍑", "🍍", "🥭"];

// Funció random com al teu exemple bo
function generarAleatori(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarFruita() {
  let f = document.createElement("div");
  f.classList.add("fruita");

  let numeroEmoji = generarAleatori(0, EMOJIS_FRUITA.length - 1);
  f.textContent = EMOJIS_FRUITA[numeroEmoji];

  let ample = zonaJoc.clientWidth;
  let alt = zonaJoc.clientHeight;

  let posX = generarAleatori(0, Math.max(0, ample - 60));
  let posY = generarAleatori(0, Math.max(0, alt - 60));

  f.style.left = posX + "px";
  f.style.top = posY + "px";

  let velocitat = generarAleatori(1, 4);

  f.addEventListener("click", function (event) {
    event.target.remove();
    punts += 10;
    divPunts.textContent = punts;
    fruites = fruites.filter(fruita => fruita.div !== f);
  });

  fruites.push({
    div: f,
    posX: posX,
    posY: posY,
    velocitat: velocitat
  });

  zonaJoc.append(f);
}

function generarLesFruites() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      generarFruita();
    }, i * 250);
  }
}

btnIniciar.addEventListener("click", function () {
  generarLesFruites();
});

// Moviment simple com al model anterior
setInterval(() => {
  fruites.forEach(fruita => {
    fruita.posY += fruita.velocitat;
    fruita.div.style.top = fruita.posY + "px";

    if (fruita.posY > zonaJoc.clientHeight - 40) {
      fruita.posY = 0;
      fruita.posX = generarAleatori(0, Math.max(0, zonaJoc.clientWidth - 60));
      fruita.div.style.left = fruita.posX + "px";
    }
  });
}, 16);



// ===================================
// 12. DOM MANIPULATION
// ===================================
let title = document.getElementById("title");
console.log(title.innerText);

let mainDiv = document.querySelector(".main-div");

title.innerText = "Manipulando el DOM";
title.innerHTML = "<strong>Nuevo</strong> título";

let image = document.getElementById("img");
image.setAttribute("src", "1.png");
image.classList.add("img-responsive");

mainDiv.style.backgroundColor = "#ffcc00";

let newDiv = document.createElement("div");
newDiv.innerText = "Soy un div nuevo";
newDiv.classList.add("sortida");
mainDiv.appendChild(newDiv);

let oldDiv = document.querySelector(".old-div");
if (oldDiv) oldDiv.remove();

// EVENTS DOM
let button = document.getElementById("main-button");

button.addEventListener("click", function () {
  alert("¡Botón presionado!");
});

function showMessage(message) {
  alert(message);
}

button.addEventListener("click", function () {
  showMessage("¡Mensaje personalizado!");
});

// ===================================
// 13. LLISTA DINÀMICA
// ===================================
let input = document.getElementById("item-input");
let addButton = document.getElementById("add-button");
let list = document.getElementById("dynamic-list");

addButton.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    let newItem = document.createElement("li");
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
});

// ===================================
// 14. FILTRE
// ===================================
const filterInput = document.getElementById("filter-input");
const itemsList = document.getElementById("items-list");

filterInput.addEventListener("keyup", function () {
  const term = filterInput.value.toLowerCase();
  const items = itemsList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    item.style.display =
      item.textContent.toLowerCase().includes(term)
        ? "block"
        : "none";
  });
});

// ===================================
// 15. DRAG & DROP
// ===================================
const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

draggable.addEventListener("dragstart", function () {
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
});

dropzone.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropzone.addEventListener("drop", function () {
  draggable.style.display = "block";
  this.append(draggable);
});

// ===================================
// 14. SISTEMA DE COMBAT INTERACTIU
// ===================================

let combatVidaJugador = 100;
const combatVidaMaximaJugador = 100;
const combatAtacJugador = 25;
let combatPocionsJugador = 3;

let combatVidaEnemic = 120;
let combatVidaMaximaEnemic = 120;
let combatAtacEnemic = 20;
let combatPocionsEnemic = 3;

let combatTornsTotals = 0;
let combatDanyCausat = 0;
let combatDanyRebut = 0;
let combatPocionsUtilitzades = 0;
let combatAcabat = false;

// Messmer i Godrick
const combatImgJugadorNormal = "3.png";
const combatImgJugadorAtac = "3.png";

const combatImgEnemicNormal = "2.png";
const combatImgEnemicAtac = "2.png";

// Elements DOM
const combatBtnAtacar = document.getElementById("combat-btn-atacar");
const combatBtnPocio = document.getElementById("combat-btn-pocio");
const combatBtnReiniciar = document.getElementById("combat-btn-reiniciar");

const combatVidaJugadorText = document.getElementById("combat-vida-jugador");
const combatVidaJugadorBarra = document.getElementById("combat-vida-jugador-barra");

const combatVidaEnemicText = document.getElementById("combat-vida-enemic");
const combatVidaEnemicBarra = document.getElementById("combat-vida-enemic-barra");
const combatVidaEnemicMaxText = document.getElementById("combat-vida-enemic-max");

const combatAtacJugadorText = document.getElementById("combat-atac-jugador");
const combatAtacEnemicText = document.getElementById("combat-atac-enemic");

const combatPocionsJugadorText = document.getElementById("combat-pocions-jugador");
const combatPocionsEnemicText = document.getElementById("combat-pocions-enemic");

const combatTornsText = document.getElementById("combat-torns-total");
const combatDanyCausatText = document.getElementById("combat-dany-causat");
const combatDanyRebutText = document.getElementById("combat-dany-rebut");
const combatPocionsUtilitzadesText = document.getElementById("combat-pocions-utilitzades");

const combatImgJugador = document.getElementById("combat-img-jugador");
const combatImgEnemic = document.getElementById("combat-img-enemic");
const combatMissatge = document.getElementById("combat-missatge");

function combatGenerarAleatori(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function combatActualitzarBarresVida() {
  const percentatgeJugador = (combatVidaJugador / combatVidaMaximaJugador) * 100;
  const percentatgeEnemic = (combatVidaEnemic / combatVidaMaximaEnemic) * 100;

  combatVidaJugadorText.textContent = combatVidaJugador;
  combatVidaJugadorBarra.style.width = `${percentatgeJugador}%`;

  combatVidaEnemicText.textContent = combatVidaEnemic;
  combatVidaEnemicBarra.style.width = `${percentatgeEnemic}%`;
}

function combatActualitzarStats() {
  combatAtacJugadorText.textContent = combatAtacJugador;
  combatAtacEnemicText.textContent = combatAtacEnemic;

  combatPocionsJugadorText.textContent = combatPocionsJugador;
  combatPocionsEnemicText.textContent = combatPocionsEnemic;

  combatTornsText.textContent = combatTornsTotals;
  combatDanyCausatText.textContent = combatDanyCausat;
  combatDanyRebutText.textContent = combatDanyRebut;
  combatPocionsUtilitzadesText.textContent = combatPocionsUtilitzades;
}

function combatMostrarMissatge(text) {
  combatMissatge.textContent = text;
}

function combatDesactivarBotons() {
  combatBtnAtacar.disabled = true;
  combatBtnPocio.disabled = true;
}

function combatActivarBotons() {
  combatBtnAtacar.disabled = false;
  combatBtnPocio.disabled = false;
}

function combatAnimacioAtacJugador() {
  combatImgJugador.src = combatImgJugadorAtac;
  combatImgJugador.classList.add("animar-atac-jugador");

  setTimeout(() => {
    combatImgJugador.src = combatImgJugadorNormal;
    combatImgJugador.classList.remove("animar-atac-jugador");
  }, 450);
}

function combatAnimacioAtacEnemic() {
  combatImgEnemic.src = combatImgEnemicAtac;
  combatImgEnemic.classList.add("animar-atac-enemic");

  setTimeout(() => {
    combatImgEnemic.src = combatImgEnemicNormal;
    combatImgEnemic.classList.remove("animar-atac-enemic");
  }, 450);
}

function combatComprovarFinal() {
  if (combatVidaEnemic <= 0) {
    combatVidaEnemic = 0;
    combatActualitzarBarresVida();
    combatMostrarMissatge("🏆 MESSMER ha derrotat GODRICK!");
    combatAcabat = true;
    combatDesactivarBotons();
    return true;
  }

  if (combatVidaJugador <= 0) {
    combatVidaJugador = 0;
    combatActualitzarBarresVida();
    combatMostrarMissatge("💀 GODRICK ha derrotat MESSMER!");
    combatAcabat = true;
    combatDesactivarBotons();
    return true;
  }

  return false;
}

function combatTornEnemic() {
  if (combatAcabat) return;

  if (combatVidaEnemic <= 30 && combatPocionsEnemic > 0) {
    combatVidaEnemic += 35;
    combatVidaEnemic = Math.min(combatVidaEnemic, combatVidaMaximaEnemic);
    combatPocionsEnemic--;

    combatActualitzarBarresVida();
    combatActualitzarStats();
    combatMostrarMissatge("🧪 GODRICK utilitza una poció i es cura 35 HP!");
    return;
  }

  const danyEnemic = combatGenerarAleatori(20, 25);

  combatAnimacioAtacEnemic();

  setTimeout(() => {
    combatVidaJugador -= danyEnemic;
    combatVidaJugador = Math.max(combatVidaJugador, 0);

    combatDanyRebut += danyEnemic;

    combatActualitzarBarresVida();
    combatActualitzarStats();
    combatMostrarMissatge(`🪓 GODRICK et fa ${danyEnemic} de dany!`);

    combatComprovarFinal();
  }, 250);
}

function combatTornJugadorAtac() {
  if (combatAcabat) return;

  const danyJugador = combatGenerarAleatori(25, 30);

  combatAnimacioAtacJugador();

  setTimeout(() => {
    combatVidaEnemic -= danyJugador;
    combatVidaEnemic = Math.max(combatVidaEnemic, 0);

    combatDanyCausat += danyJugador;
    combatTornsTotals++;

    combatActualitzarBarresVida();
    combatActualitzarStats();
    combatMostrarMissatge(`🔥 MESSMER fa ${danyJugador} de dany!`);

    if (combatComprovarFinal()) return;

    setTimeout(() => {
      combatTornEnemic();
    }, 700);
  }, 250);
}

function combatTornJugadorPocio() {
  if (combatAcabat) return;

  if (combatPocionsJugador <= 0) {
    combatMostrarMissatge("🚫 No et queden pocions!");
    return;
  }

  combatVidaJugador += 40;
  combatVidaJugador = Math.min(combatVidaJugador, combatVidaMaximaJugador);

  combatPocionsJugador--;
  combatPocionsUtilitzades++;
  combatTornsTotals++;

  combatActualitzarBarresVida();
  combatActualitzarStats();
  combatMostrarMissatge("🧪 MESSMER utilitza una poció i recupera 40 HP!");

  if (combatComprovarFinal()) return;

  setTimeout(() => {
    combatTornEnemic();
  }, 700);
}

function combatReiniciar() {
  combatVidaJugador = 100;
  combatVidaEnemic = 120;
  combatPocionsJugador = 3;
  combatPocionsEnemic = 3;

  combatTornsTotals = 0;
  combatDanyCausat = 0;
  combatDanyRebut = 0;
  combatPocionsUtilitzades = 0;
  combatAcabat = false;

  combatImgJugador.src = combatImgJugadorNormal;
  combatImgEnemic.src = combatImgEnemicNormal;

  combatActivarBotons();
  combatActualitzarBarresVida();
  combatActualitzarStats();
  combatMostrarMissatge("🔥 Combat reiniciat! MESSMER vs GODRICK");
}

combatBtnAtacar.addEventListener("click", combatTornJugadorAtac);
combatBtnPocio.addEventListener("click", combatTornJugadorPocio);
combatBtnReiniciar.addEventListener("click", combatReiniciar);

combatVidaEnemicMaxText.textContent = combatVidaMaximaEnemic;
combatActualitzarBarresVida();
combatActualitzarStats();
combatMostrarMissatge("🔥 Combat preparat! MESSMER vs GODRICK");