import { TweenMax, TimelineMax } from "gsap"

const divs = Array.from({ length: 100 }, () =>
  document.createElement("div")
);

divs.forEach(div => {
  TweenMax.set(div, {
    position: "absolute",
    x: `${Math.random() * window.innerWidth}px`,
    y: `${Math.random() * window.innerHeight}px`,
    width: 20,
    height: 20,
    backgroundColor: "green",
    border: "3px solid black"
  });

  document.body.appendChild(div)
});

TweenMax.to(divs, 10, { x: 100, y: 100 });

document.addEventListener("click", event => {
  TweenMax.killAll();
});
