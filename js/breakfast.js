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
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "EggOnToast":
      price = "12.0";
      check = 1;
      console.log("Oke");
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "FruitToast":
      price = "10.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "JustToast":
      price = "9.0";
      check = 1;
      break;
    case (backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "CornFritters") ||
      (backgroundColor === "rgb(70, 125, 58)" && itemName === "SalmonBagel"):
      price = "22.0";
      check = 1;
      break;
    case (backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "BiggieFor1") ||
      (backgroundColor === "rgb(70, 125, 58)" && itemName === "Greenie"):
      price = "30.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "FrenchToast":
      price = "17.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "Huevos":
      price = "21.0";
      check = 1;
      break;
    case (backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "EggBenedict") ||
      (backgroundColor === "rgb(70, 125, 58)" && itemName === "Granola"):
      price = "19.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" && itemName === "SmashedAvo":
      price = "20.0";
      check = 1;
      break;
    case backgroundColor === "rgb(70, 125, 58)" &&
      itemName === "Breakfastwaffies":
      price = "17.0";
      check = 1;
      break;
    case itemName === "AddPoached" ||
      itemName === "Fried" ||
      (itemName === "Scrambled" && backgroundColor === "rgb(255, 165, 0)"):
      price = "3.0";
      check = 1;
      break;
    case itemName === "Bacon" ||
      (itemName === "Avocado" && backgroundColor === "rgb(255, 165, 0)"):
      price = "6.0";
      check = 1;
      break;
    default:
      price = "5.0";
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
