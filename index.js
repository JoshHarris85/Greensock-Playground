import { TweenMax } from "gsap"

document.addEventListener("mousemove", event => {
  TweenMax.set(document.body, { perspective: event.x });
});

Array.from({ length: 30 })
  .map(() => document.createElement("div"))
  .forEach(box => {
    box.setAttribute("class", "box");
    document.body.appendChild(box);

    TweenMax.set(box, { rotationY: "30" });
  })
