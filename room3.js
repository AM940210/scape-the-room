const items = document.querySelectorAll('.item');
const targets = document.querySelectorAll('.target');
const message = document.getElementById('message');
let matches = 0;

items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
    });
});

targets.forEach(target => {
    target.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
    });

    target.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(draggedId);
        const matchName = draggedItem.id;
        const acceptName = target.dataset.accept;

        if (matchName === acceptName && !target.classList.contains('matched')) {
            target.classList.add('matched');
            target.textContent = draggedItem.textContent;
            draggedItem.style.display = 'none';
            matches++;

            if (matches === items.length) {
                message.textContent = "✅ Alla föremål matchades korrekt! Du klarade spelet!";
                setTimeout(() => {
                    window.location.href = "Victory.html";
                }, 2000);
            }
        } else {
            message.textContent = "❌ Fel matchning. Försök igen"; 
        }
    });

});