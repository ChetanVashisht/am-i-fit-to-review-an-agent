/*
 * This is a memory leak
 * Add's a listener every second to the dom */
function attach() {
  const el = document.createElement("button");

  el.addEventListener("click", () => {
    console.log("clicked");
  });

  return el;
}

setInterval(() => {
  const btn = attach();
  document.body.appendChild(btn);
}, 1000);
