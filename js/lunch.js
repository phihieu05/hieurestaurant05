let selectedSize = null;
function addItem(itemName, button) {
  selectedSize = ".";
  var backgroundColor = window.getComputedStyle(button).backgroundColor;
  console.log("Màu " + button.textContent + ":", backgroundColor);
  let check = 0;
  let price = null;
  switch (true) {
  }
  switch (true) {
    case backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "SchnitzelClubSandwich":
      price = "22.0";
      check = 1;
      console.log("Oke");
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "FalafelBowl":
      price = "20.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "BigBeefy":
      price = "24.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "ChickenAvo":
      price = "24.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "BowlOfChips":
      price = "8.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "GreekLambBurger":
      price = "8.0";
      check = 1;
      break;
    default:
      price = "2.0";
      check = 1;
  }
  if (check == 1) {
    orderItems.push({ name: itemName, size: selectedSize, price: price });
    saveToLocalStorage();
  }
  selectedSize = null;
  console.log(orderItems);
}
loadFromLocalStorage();
