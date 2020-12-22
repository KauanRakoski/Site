"use strict";

gsap.registerPlugin(ScrollTrigger); // Fade-in images

gsap.utils.toArray(".fade-in").forEach(function (fader) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: fader,
      start: "top 95%"
    }
  });
  tl.from(fader, {
    duration: 2,
    opacity: 0
  });
}); // Trigger for the text that comes from left

gsap.utils.toArray(".come-left").forEach(function (lefty) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: lefty,
      start: "top 95%"
    }
  });
  tl.from(lefty, {
    duration: 1,
    opacity: 0,
    x: -200
  });
}); // Trigger for the text that comes from right

gsap.utils.toArray(".come-right").forEach(function (righty) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: righty,
      start: "top 95%"
    }
  });
  tl.from(righty, {
    duration: 1,
    opacity: 0,
    x: 200
  });
});