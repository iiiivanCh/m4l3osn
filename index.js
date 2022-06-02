"use strict";

const productName = prompt("Назовите наименование товара");
const productAll = +prompt("Назовите количество товара");
const productCategory = prompt("Назовите категорию товара");
const productPrice = +prompt("Назовите цену товара");
if (Number.isInteger(productAll) && Number.isFinite(productPrice)) {
  const productTotal = productAll * productPrice;
  console.log(
    `на складе ${productAll} единицы товара \"${productName}\" на сумму ${productTotal} условных единиц`
  );
} else {
  console.log("Вы ввели некорректные данные");
}
