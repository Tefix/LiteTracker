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

// Kontrollib kasutaja sisestatud vastust (case-insensitive)
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

// Lehe laadimisel kuvatakse kohe esimesed sõnad
window.onload = refreshAll;
