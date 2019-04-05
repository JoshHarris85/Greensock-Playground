import { TweenMax, Elastic } from "gsap"

const eggo = document.querySelector("#eggo");

TweenMax.to(eggo, 0.75, {
  scale: 1.25,
  repeat: -1,
  yoyo: true,
  ease: Elastic.easeInOut
})
