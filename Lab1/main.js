let form = document.querySelector("#form");
function isCheck(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = document.querySelector("span");
  let input = document.querySelectorAll("input");
  let inputOne = Number(form.numerOne.value);
  let oneEl = document.querySelectorAll(".validateOne");
  if (inputOne == "") {
    oneEl[0].innerHTML = "Vui lòng không để trống";
    input[0].classList.add("valide");
  } else if (isNaN(inputOne) == true) {
    oneEl[0].innerHTML = "Vui lòng nhập số";
    input[0].classList.add("valide");
  }else {
    oneEl[0].innerHTML = "";
    input[0].classList.remove("valide");
  }
  let inputTwo = Number(form.numberTwo.value);
  if (inputOne == "") {
    oneEl[1].innerHTML = "Vui lòng nhập số";
    input[1].classList.add("valide");
  } else if (isNaN(inputTwo) == true) {
    oneEl[1].innerHTML = "Vui lòng nhập số";
    input[1].classList.add("valide");
  }else{
    oneEl[1].innerHTML = "";
    input[1].classList.remove("valide");
  }
  if (inputOne > inputTwo) {
    input[0].classList.add("valide");
    input[1].classList.add("valide");
    result.innerHTML = "số A phải nhỏ hơn số B";
    return
  }
  let sum = 0;
  for (let i = inputOne; i <= inputTwo; i++) {
    if (isCheck(i)) {
      sum += i;
    }
  }
  result.innerHTML = sum;
});
