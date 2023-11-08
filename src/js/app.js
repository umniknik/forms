// TODO: write code here

console.log("app.js included");

import Tooltip from "./tooltip";

const tooltip = new Tooltip();

const button = document.querySelector(".popover");

button.addEventListener("click", () => {
  const formError = document.querySelector(".form-error");
  if (!formError) {
    tooltip.showTooltip("Заголовок", "Привет", button);
  } else {
    tooltip.removeTooltip(formError);
  }
});
