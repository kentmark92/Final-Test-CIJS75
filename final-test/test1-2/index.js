// bài 1
let array = [1, 2, 3, 2, -4, 5];
const Max = () => {
  let arr = [];

  for (var i = 0; i < array.length - 1; i++) {
    let num = array[i] * array[i + 1];
    arr.push(num);
  }
  let max_num = arr.reduce(function (accumulator, element) {
    return accumulator > element ? accumulator : element;
  });

  document.write("bai 1" + "<br />");
  document.write(`mảng tich ${arr}`);
  document.write("<br/>");

  document.write(`tích lớn nhất cặp số liền kề : ${max_num} ` + "<br />");
};
Max();

// bài 2

let arrWeight = [60, 40, 55, 75, 64];
const SumWeight = () => {
  let tempOne = [];
  let tempTwo = [];
  let both = [];
  for (let i = 0; i < arrWeight.length; i++) {
    if (i % 2 == 0) {
      tempOne.push(arrWeight[i]);
    } else {
      tempTwo.push(arrWeight[i]);
    }
  }
  document.write("bai 2"+"<br />");

document.write("team 1: "+tempOne, " , Team 2 :" + tempTwo + "<br />");

  let sumWeightOne = tempOne.reduce(function (accumulator, element) {
    return accumulator + element;
  });
  let sumWeightTwo = tempTwo.reduce(function (accumulator, element) {
    return accumulator + element;
  });

  both.push(sumWeightOne,sumWeightTwo);
  document.write("Tổng cân nặng của từng team: "+both)
};

SumWeight();
