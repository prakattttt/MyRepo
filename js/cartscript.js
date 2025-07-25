const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const contentBox = document.querySelector(".content-box");
const defaultMessage = document.querySelector(".default");

if (cartItems.length > 0) {
  defaultMessage.style.display = "none";

  const itemCounts = {};
  cartItems.forEach(item => {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  });

  for (const item in itemCounts) {
    const li = document.createElement("li");
    li.className = "items";
    li.textContent = `${item} x${itemCounts[item]}`;
    contentBox.appendChild(li);
  }
} else {
  defaultMessage.textContent = "No Items added to the cart!";
}

const clearBtn = document.getElementById("clearCartBtn");
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");

  const contentBox = document.querySelector(".content-box");
  contentBox.innerHTML = '<li class="default">No Items added to the cart!</li>';
});
