import { TweenMax, TimelineMax } from "gsap"

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "50px",
  height: "50px",
  x: "50px",
  y: "50px"
});

document.addEventListener("click", (event) => {
  const { x, y } = event;
  TweenMax.fromTo("#box", 1, { x, y }, { x: 150, y: 150});
});
