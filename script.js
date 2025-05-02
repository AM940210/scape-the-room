const message = document.getElementById('message');
const codeArea = document.getElementById('codeArea');
const codeInput = document.getElementById('codeInput');
const unlockButton = document.getElementById('door');
const background = document.getElementById('background');
const room1 = document.getElementById("room1");
const room2 = document.getElementById("room2");

const foundHints = new Set();

// Visa ledtrådar när man klickar på bilden
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', (e) => {
        e.preventDefault();
        const hint = area.dataset.hint;
        message.textContent = hint;
        foundHints.add(hint);

        if (foundHints.size >= 3) {
            codeArea.hidden = false;
        }
    });
});

// Hantera kodinmatning
unlockButton.addEventListener('click', () => {
    const code = codeInput.value.trim();
    if (code === "317") {
        localStorage.setItem("room2Timer", 60); 
        window.location.href = "room2.html";
    } else {
        message.textContent = "Fel kod. Försök igen.";
    }
});

