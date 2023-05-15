const numberOneTriangle = (n) => {
  let triangle = document.querySelector(".triangle");
  if (n < 1 || n > 10) {
    triangle.innerHTML = "Vui lòng nhập số trong khoảng 1 - 10"
    return;
  }
  let outDesktop = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    outDesktop += row + "<br>";
    console.log(outDesktop);
  }
  triangle.innerHTML = outDesktop;
};

numberOneTriangle(10);
