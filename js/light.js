function updateLight() {
  const colorChanges = document.getElementsByClassName("color-change");

  for (let i = 0; i < colorChanges.length; i++) {
    const pos = colorChanges[i].getBoundingClientRect().top;
    if (pos > 0 || i + 1 == colorChanges.length) {
      const lastColor = i == 0 ? "rgb(100, 149, 237)" : colorChanges[i - 1].getAttribute("data-color");
      const nextColor = colorChanges[i].getAttribute("data-color");
      document.body.style.backgroundColor = lerpRgb(lastColor, nextColor, Math.max(Math.min(1 - pos / 1000, 1), 0));
      break;
    }
  }  
}

function lerpRgb(lastColor, nextColor, a) {
  const lastColorSplit = lastColor.substring(4).substring(0, lastColor.length - 5).split(", ");
  const nextColorSplit = nextColor.substring(4).substring(0, nextColor.length - 5).split(", ");

  const r1 = Number(lastColorSplit[0]);
  const g1 = Number(lastColorSplit[1]);
  const b1 = Number(lastColorSplit[2]);
 
  const r2 = Number(nextColorSplit[0]);
  const g2 = Number(nextColorSplit[1]);
  const b2 = Number(nextColorSplit[2]);
  
  return `rgb(${r1 * (1 - a) + r2 * a}, ${g1 * (1 - a) + g2 * a}, ${b1 * (1 - a) + b2 * a})`;
}