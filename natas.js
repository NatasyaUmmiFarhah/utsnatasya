// Dropdown functionality
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Toggle the clicked dropdown
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Display Current Time
function updateTime() {
    const clock = document.getElementById('current-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateTime, 1000);
updateTime();


