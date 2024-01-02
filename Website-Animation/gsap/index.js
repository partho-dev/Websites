
let tl = gsap.timeline()

tl.from(".nav h3", {
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2 /* 1 = 1 sec*/
})

tl.from(".main h1", {
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("img",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.5
})