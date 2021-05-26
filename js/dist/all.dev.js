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
}); // Email JS

(function () {
  emailjs.init("user_dPvKSoLrQyL25taFI4O4u");
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // generate a five digit number for the contact_number variable

    this.contact_number.value = Math.random() * 100000 | 0; // Service ID and template ID

    emailjs.sendForm('service_ntmuk8d', 'template_pvart32', this).then(function () {
      console.log('SUCCESS!');
    }, function (error) {
      console.log('FAILED...', error);
    });
  });
};