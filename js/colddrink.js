let selectedSize = null;
function addItem(itemName, button) {
  selectedSize = ".";
  var backgroundColor = window.getComputedStyle(button).backgroundColor;
  console.log("Màu " + button.textContent + ":", backgroundColor);
  let check = 0;
  let price = null;

  if (
    backgroundColor == "rgb(202, 168, 168)" ||
    backgroundColor == "rgb(200, 77, 77)"
  ) {
    price = "7.0";
    check = 1;
  } else if (backgroundColor == "rgb(30, 131, 174)") {
    price = "10.0";
    check = 1;
  } else if (backgroundColor == "rgb(70, 125, 58)") {
    price = "8.0";
    check = 1;
  }

  if (
    itemName == "IcedCoffee" ||
    (itemName == "IcedChocolate" &&
      backgroundColor == "rgba(10, 252, 204, 0.863)")
  ) {
    price = "9.0";
    check = 1;
  } else {
    price = "8.0";
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
