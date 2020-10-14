gsap.registerPlugin(ScrollTrigger)

gsap.from(".come-right", {
    scrollTrigger: {
        trigger: ".come-right",
        start: "top bottom"
    },
    duration: 1,
     opacity: 0, 
     x:200,
});

gsap.from(".fade-in", {
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top bottom"
    },
    duration: 2,
    opacity: 0,
     
     
});