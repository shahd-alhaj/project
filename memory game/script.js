// =============================
// ELEMENTS
// =============================

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

const playerName = document.getElementById("playerName");
const wrongTries = document.getElementById("wrongTries");
const matchedPairs = document.getElementById("matchedPairs");

const blocksContainer =
    document.querySelector(".memory-game-blocks");

const blocks =
    Array.from(blocksContainer.children);

const winScreen =
    document.getElementById("winScreen");

const winnerName =
    document.getElementById("winnerName");

const finalTries =
    document.getElementById("finalTries");

const playAgain =
    document.getElementById("playAgain");


// =============================
// GAME VARIABLES
// =============================

let duration = 1000;

let hasFlippedBlock = false;

let firstBlock;
let secondBlock;

let lockBoard = false;

let wrongCount = 0;

let matchedCount = 0;

let gameStarted = false;


// =============================
// SOUND SYSTEM
// =============================

const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

let audioContext;


// Create simple sound
function playSound(type) {

    if (!audioContext) {
        audioContext = new AudioContext();
    }

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.connect(gain);

    gain.connect(audioContext.destination);


    if (type === "flip") {

        oscillator.frequency.value = 350;

        oscillator.type = "sine";

        gain.gain.value = 0.08;

    }

    else if (type === "correct") {

        oscillator.frequency.value = 650;

        oscillator.type = "sine";

        gain.gain.value = 0.12;

    }

    else if (type === "wrong") {

        oscillator.frequency.value = 180;

        oscillator.type = "sawtooth";

        gain.gain.value = 0.08;

    }

    else if (type === "win") {

        oscillator.frequency.value = 800;

        oscillator.type = "sine";

        gain.gain.value = 0.15;
    }


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.15
    );
}


// =============================
// START GAME
// =============================

startButton.addEventListener("click", function () {

    let yourName =
        prompt("Please enter your name:");

    if (
        yourName === null ||
        yourName.trim() === ""
    ) {

        playerName.textContent =
            "Unknown";

    } else {

        playerName.textContent =
            yourName.trim();
    }


    gameStarted = true;

    startScreen.style.display = "none";

    shuffleBlocks();

    resetGame();

    playSound("flip");
});


// =============================
// SHUFFLE
// =============================

function shuffleBlocks() {

    let orderRange =
        [...Array(blocks.length).keys()];

    shuffleArray(orderRange);


    blocks.forEach(function (block, index) {

        block.style.order =
            orderRange[index];

    });
}


// Fisher-Yates shuffle
function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        let random =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[random]
        ] =
        [
            array[random],
            array[i]
        ];
    }

    return array;
}


// =============================
// CLICK ON CARDS
// =============================

blocks.forEach(function (block) {

    block.addEventListener("click", function () {

        if (!gameStarted) {
            return;
        }

        if (lockBoard) {
            return;
        }

        if (block === firstBlock) {
            return;
        }

        if (block.classList.contains("is-matched")) {
            return;
        }


        // Flip card
        block.classList.add("is-flipped");

        playSound("flip");


        // First card
        if (!hasFlippedBlock) {

            hasFlippedBlock = true;

            firstBlock = block;

            return;
        }


        // Second card
        secondBlock = block;

        checkMatching();

    });

});


// =============================
// CHECK MATCHING
// =============================

function checkMatching() {

    let isMatch =
        firstBlock.dataset.tech ===
        secondBlock.dataset.tech;


    if (isMatch) {

        disableBlocks();

    } else {

        unflipBlocks();

    }
}


// =============================
// MATCH
// =============================

function disableBlocks() {

    firstBlock.classList.add("is-matched");

    secondBlock.classList.add("is-matched");


    matchedCount++;

    matchedPairs.textContent =
        `${matchedCount} / 10`;


    playSound("correct");


    resetBoard();


    // Check win
    if (matchedCount === 10) {

        setTimeout(function () {

            showWinScreen();

        }, 700);
    }
}


// =============================
// NOT MATCH
// =============================

function unflipBlocks() {

    lockBoard = true;

    wrongCount++;

    wrongTries.textContent =
        wrongCount;


    firstBlock.classList.add("is-wrong");

    secondBlock.classList.add("is-wrong");


    playSound("wrong");


    setTimeout(function () {

        firstBlock.classList.remove(
            "is-flipped",
            "is-wrong"
        );

        secondBlock.classList.remove(
            "is-flipped",
            "is-wrong"
        );


        resetBoard();

    }, duration);
}


// =============================
// RESET BOARD
// =============================

function resetBoard() {

    [
        hasFlippedBlock,
        lockBoard
    ] =
    [
        false,
        false
    ];

    firstBlock = null;

    secondBlock = null;
}


// =============================
// RESET GAME
// =============================

function resetGame() {

    wrongCount = 0;

    matchedCount = 0;

    wrongTries.textContent = "0";

    matchedPairs.textContent = "0 / 10";


    blocks.forEach(function (block) {

        block.classList.remove(
            "is-flipped",
            "is-matched",
            "is-wrong"
        );

    });


    resetBoard();

    shuffleBlocks();
}


// =============================
// WIN SCREEN
// =============================

function showWinScreen() {

    winnerName.textContent =
        playerName.textContent;

    finalTries.textContent =
        wrongCount;


    winScreen.classList.add("show");

    playSound("win");

    // Extra victory sounds
    setTimeout(function () {
        playSound("correct");
    }, 200);

    setTimeout(function () {
        playSound("correct");
    }, 400);
}


// =============================
// PLAY AGAIN
// =============================

playAgain.addEventListener("click", function () {

    winScreen.classList.remove("show");

    resetGame();

    gameStarted = true;

    playSound("flip");
});