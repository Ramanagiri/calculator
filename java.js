const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;
    switch (value) {
      case "AC":
        display.value = "";
        break;
      case "Del":
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        display.value = eval(display.value);
        break;
      default:
        display.value += value;
    }
  });
});
