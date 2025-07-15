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

function alertCart(button) {
    const productBox = button.closest('.box'); 
    const header = productBox.querySelector('h3').textContent; 
    alert(header + " successfully added to cart!");
}

