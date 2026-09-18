// Hajusrakenduste sõnavara – eesti-vene sõnastik (hajusrakenduste terminid)
const vocabulary = [
    { et: "server", ru: "сервер" },
    { et: "klient", ru: "клиент" },
    { et: "protokoll", ru: "протокол" },
    { et: "päring", ru: "запрос" },
    { et: "vastus", ru: "ответ" },
    { et: "API", ru: "API" },
    { et: "andmebaas", ru: "база данных" },
    { et: "võrk", ru: "сеть" },
    { et: "marsruuter", ru: "маршрутизатор" },
    { et: "tulemüür", ru: "брандмауэр" },
    { et: "autentimine", ru: "аутентификация" },
    { et: "autoriseerimine", ru: "авторизация" },
    { et: "krüpteerimine", ru: "шифрование" },
    { et: "sertifikaat", ru: "сертификат" },
    { et: "domeen", ru: "домен" },
    { et: "hostimine", ru: "хостинг" },
    { et: "pilveteenus", ru: "облачный сервис" },
    { et: "mikroteenus", ru: "микросервис" },
    { et: "konteiner", ru: "контейнер" },
    { et: "laadimistasakaal", ru: "балансировщик нагрузки" }
];

// Tagastab juhusliku sõna massiivist
function getRandomWord() {
    return vocabulary[Math.floor(Math.random() * vocabulary.length)];
}

// Kuvab uue eestikeelse sõna (veerg 1: eesti → vene kontroll)
function loadEtWord() {
    const word = getRandomWord();
    document.getElementById("et-word").textContent = word.et;
    document.getElementById("et-input").value = "";
    document.getElementById("et-result").textContent = "";
    // Salvestame õige vastuse peidetud atribuudina
    document.getElementById("et-input").dataset.answer = word.ru;
}

// Kuvab uue venekeelse sõna (veerg 2: vene → eesti kontroll)
function loadRuWord() {
    const word = getRandomWord();
    document.getElementById("ru-word").textContent = word.ru;
    document.getElementById("ru-input").value = "";
    document.getElementById("ru-result").textContent = "";
    // Salvestame õige vastuse peidetud atribuudina
    document.getElementById("ru-input").dataset.answer = word.et;
}

// Kontrollib kasutaja sisestatud vastust (case-insensitive, ignoreerib tühikuid)
function checkAnswer(inputId, resultId) {
    const input = document.getElementById(inputId);
    const result = document.getElementById(resultId);
    const userAnswer = input.value.trim().toLowerCase();
    const correct = input.dataset.answer.toLowerCase();

    if (userAnswer === correct) {
        result.textContent = "✓ Õige!";
        result.className = "result correct";
    } else {
        result.textContent = `✗ Vale! Õige vastus: ${input.dataset.answer}`;
        result.className = "result wrong";
    }
}

// Laadib mõlemad veerud uute sõnadega (värskenda nupp)
function refreshAll() {
    loadEtWord();
    loadRuWord();
}

// Pilditeed taustale lendavate ikoonide jaoks
const floatingImages = [
    'images/mark.png',
    'images/upgrade_army.png',
    'images/upgrade_fan.png',
    'images/upgrade_friend.png',
    'images/upgrade_legend.png',
    'images/upgrade_meme.png',
    'images/upgrade_photo.png',
    'images/upgrade_story.png',
    'images/upgrade_universe.png'
];

// Loob ühe lendava pildi elemendi juhuslike parameetritega
function createFloatingIcon() {
    const img = document.createElement('img');
    img.src = floatingImages[Math.floor(Math.random() * floatingImages.length)];
    img.classList.add('floating-icon');

    // Juhuslik suurus vahemikus 28–56px
    const size = 28 + Math.random() * 28;
    img.style.width  = size + 'px';
    img.style.height = size + 'px';

    // Juhuslik horisontaalne alguspositsioon
    img.style.left = Math.random() * 100 + 'vw';

    // Juhuslik animatsiooni kestus ja viivitus
    const duration = 10 + Math.random() * 16;
    const delay    = Math.random() * 12;
    img.style.animationDuration = duration + 's';
    img.style.animationDelay   = '-' + delay + 's';

    // Juhuslik läbipaistvus – taustale jääb tagasihoidlik
    img.style.opacity = (0.06 + Math.random() * 0.10).toFixed(2);

    document.getElementById('bg-canvas').appendChild(img);
}

// Käivitab 18 lendavat ikooni taustal
function initFloatingIcons() {
    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
    for (let i = 0; i < 18; i++) createFloatingIcon();
}

// Lehe laadimisel kuvatakse kohe esimesed sõnad ja käivitatakse taustaanimatsioon
window.onload = function() {
    refreshAll();
    initFloatingIcons();
};
