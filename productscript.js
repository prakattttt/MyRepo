const allBoxes = document.querySelectorAll('.box');
const allButtons = document.querySelectorAll('btn');

allBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.classList.add('visible');
    });
     box.addEventListener("mouseout", () => {
        box.classList.remove('visible');
  });
});

