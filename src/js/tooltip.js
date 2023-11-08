export default class Tooltip {
  constructor() {
    this._tooltip = [];
  }

  showTooltip(messageTitle, message, element) {
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("form-error");

    const tooltipElementHeader = document.createElement("h3");
    tooltipElementHeader.classList.add("form-error-header");
    tooltipElementHeader.textContent = messageTitle;

    const tooltipText = document.createElement("div");
    tooltipText.classList.add("form-error-body");
    tooltipText.textContent = message;

    tooltipElement.appendChild(tooltipElementHeader);
    tooltipElement.appendChild(tooltipText);
    // const id = performance.now();

    // this._tooltip.push({
    //   id,
    //   element: tooltipElement
    // });

    const { right, top } = element.getBoundingClientRect();
    console.log(right, top);

    document.body.appendChild(tooltipElement);
    console.log(tooltipElement.offsetHeight);
    tooltipElement.style.left =
      right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 15 + "px";
  }

  removeTooltip(element) {
    element.remove();
  }
  // removeTooltip(id) {
  //    const tooltip = this._tooltip.find( t => t.id === id);

  //    tooltip.element.remove();

  //    this._tooltip = this._tooltip.filter( t => t.id !== id);
  // }
}
