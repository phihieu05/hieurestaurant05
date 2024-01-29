let selectedSize = null;
function selectSize(size) {
  selectedSize = size;
}

function addItem(itemName, button) {
  if (!selectedSize) {
    alert("Vui lòng chọn kích thước trước khi chọn sản phẩm.");
    return;
  }

  var backgroundColor = window.getComputedStyle(button).backgroundColor;
  console.log("Màu " + button.textContent + ":", backgroundColor);
  let check = 0;
  let price = null;

  if (selectedSize == "Small" && backgroundColor == "rgb(70, 125, 58)") {
    price = "5.0";
    check = 1;
  } else if (
    selectedSize == "Medium" &&
    backgroundColor == "rgb(70, 125, 58)"
  ) {
    price = "6.0";
    check = 1;
  } else if (selectedSize == "Large" && backgroundColor == "rgb(70, 125, 58)") {
    price = "7.0";
    check = 1;
  }
  if (selectedSize == "Small" && backgroundColor == "rgb(254, 222, 7)") {
    price = "4.5";
    check = 1;
  } else if (
    selectedSize == "Medium" &&
    backgroundColor == "rgb(254, 222, 7)"
  ) {
    price = "5.5";
    check = 1;
  } else if (selectedSize == "Large" && backgroundColor == "rgb(254, 222, 7)") {
    price = "6.5";
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
