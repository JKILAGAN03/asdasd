

// ===========================
// logic.js - The Security System
// ===========================

// 1. Function to Save Progress (Call this when she wins a level)
function saveProgress(levelName) {
    localStorage.setItem(levelName, "unlocked");
}

// 2. Function to Check Access (Call this at the start of restricted pages)
function verifyAccess(requiredLevel, redirectUrl) {
    const status = localStorage.getItem(requiredLevel);
    if (status !== "unlocked") {
        alert("⛔ ACCESS DENIED: You must complete the previous level first!");
        window.location.href = redirectUrl;
    }
}

// ... Keep your existing GAME_DATA and other code below this ...

// ===========================
// logic.js - The Portable Backend
// ===========================

const GAME_DATA = {
    correctDate: "2025-11-19", 
    bouquetCode: "iwishkarylletobehappy,whateveritmeantforyou",
    redirects: {
        afterDate: "message.html",    // Date -> Message 1
        afterMsg1: "puzzle.html",     // Message 1 -> Puzzle
        afterPuzzle: "message2.html", // Puzzle -> Message 2
        afterMsg2: "vault.html"       // Message 2 -> Vault
    }
};

// ... inside checkLevel1() ...
    if (dateInput === GAME_DATA.correctDate) {
        // Use the new transition helper
        transitionTo(GAME_DATA.redirects.afterDate);
    }
// ...

// ... inside checkLevel3() ...
    if (cleanCode === GAME_DATA.bouquetCode) {
        alert("Unlocked!");
        // You can create a 'final_message.html' if you want!
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('reward-container').style.display = 'block';
    }

function checkLevel1() {
    const dateInput = document.getElementById('dateInput').value;
    const errorMsg = document.getElementById('error-msg');

    if (dateInput === GAME_DATA.correctDate) {
        saveProgress("level1_cleared"); // <--- ADD THIS LINE
        transitionTo("Message1.html");
    } else {
        // Wrong!
        alert("That's not the day everything changed... Try again.");
        if(errorMsg) errorMsg.style.display = 'block';
    }
}

// ===========================
// LEVEL 3: VAULT CHECK
// ===========================
function checkLevel3() {
    const codeInput = document.getElementById('codeInput').value;
    const cleanCode = codeInput.toLowerCase().trim().replace(/\s/g, '');

    
    if (cleanCode === GAME_DATA.bouquetCode) { // or your code
        saveProgress("vault_unlocked"); // <--- ADD THIS LINE
        transitionTo("FinalMessage.html");
    } else {
        alert("Access Denied. Check the flowers again.");
    }
    
}