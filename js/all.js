let orderItems = [];

function saveToLocalStorage() {
  localStorage.setItem("orderItems", JSON.stringify(orderItems));
  displayOrderItems();
}

function loadFromLocalStorage() {
  const storedData = localStorage.getItem("orderItems");
  if (storedData) {
    orderItems = JSON.parse(storedData);
    displayOrderItems();
  }
}

function displayOrderItems() {
  const container = document.querySelector(".box-right-1-main");
  container.innerHTML = "";

  const titleRow = document.createElement("div");

  container.appendChild(titleRow);

  orderItems.forEach((item) => {
    const itemRow = document.createElement("div");
    itemRow.classList.add("box-right-1-main-item");
    itemRow.innerHTML = `<span><b>1.00</b></span><span><b>${item.name} ${item.size}</b></span><span><b>${item.price}</b></span>`;
    container.appendChild(itemRow);
  });
}
function clearOrder() {
  orderItems = [];
  saveToLocalStorage();
  displayOrderItems();
}
