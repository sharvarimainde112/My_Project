document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('dropTrigger');
    const menu = document.getElementById('dropMenu');
    const resultBox = document.getElementById('resultDisplay');
    const checkboxes = menu.querySelectorAll('input[type="checkbox"]');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
        const isVisible = menu.style.display === 'block';
        menu.style.display = isVisible ? 'none' : 'block';
        e.stopPropagation();
    });

    // Close on outside click
    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    // Prevent closing when clicking inside
    menu.addEventListener('click', (e) => e.stopPropagation());

    // Update the comma-separated display box
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const selected = Array.from(checkboxes)
                .filter(i => i.checked)
                .map(i => i.value);
            
            resultBox.textContent = selected.length > 0 
                ? selected.join(', ') 
                : "No support areas selected.";
        });
    });
});
