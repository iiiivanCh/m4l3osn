"use strict";

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log("Пошел дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
};





const scoresMathematics = +prompt("Введите количество баллов по математике");
const scoresRussian = +prompt("Введите количество баллов по русскому языку");
const scoresInformatics = +prompt("Введите количество баллов по информатике");

if (
  Number.isInteger(scoresMathematics) &&
  Number.isInteger(scoresRussian) &&
  Number.isInteger(scoresInformatics)
) {
  if ((scoresMathematics + scoresRussian + scoresInformatics) >= 265) {
    console.log("Поздравляю, Вы поступили на бюджет");
  } else {
    console.log("Для поступления на бюджет не хватает баллов");
  }
} else {
  console.log("Вы ввели неправильные данные, повторите");
};




const cashBank = 500;
const howMuchMoney = +prompt("Какую сумму Вы хотите снять?");


if ((cashBank >= howMuchMoney) && Number.isInteger(howMuchMoney / 100)) {
    console.log("Yes");
} else {
    console.log ("No");
}
