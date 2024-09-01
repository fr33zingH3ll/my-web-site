document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const highlight = document.querySelector('.highlight');

    function getElementPosition(target) {
        const { left, top, width, height } = target.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = highlight;
        const x = left + window.scrollX + (width / 2) - (offsetWidth / 2);
        const y = top + window.scrollY + (height / 2) - (offsetHeight / 2);
        return { x, y };
    }

    function updateHighlightPosition(target) {
        const { x, y } = getElementPosition(target);
        highlight.style.transform = `translate(${x}px, ${y}px)`;
    }

    function resetHighlightPosition() {
        const activeItem = document.querySelector('.menu-item.actif');
        if (activeItem) {
            updateHighlightPosition(activeItem);
        }
    }

    resetHighlightPosition();

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => updateHighlightPosition(item));
        item.addEventListener('mouseout', resetHighlightPosition);
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('actif'));
            item.classList.add('actif');
            updateHighlightPosition(item);
        });
    });
});
