document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.header-button');
    const sections = document.querySelectorAll('.tab-pane');
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('message');

    // Toggle sections based on header button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionToShow = button.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === sectionToShow) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Clear message input when send button is clicked
    sendButton.addEventListener('click', () => {
        messageInput.value = '';
    });
});