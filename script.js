const button = document.querySelectorAll('.buttonArrow');
const items = document.querySelectorAll('.item');
const maxItems = items.length;
let currentItem = 0;

button.forEach(buttonArrow => {
    buttonArrow.addEventListener('click', () => {
        const btnNext = buttonArrow.classList.contains('next')

        if (btnNext) {
            currentItem += 1;
        } else {
            currentItem -= 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].classList.add("current-item");
    });
});