
gsap.from(".page1 h1", {
    y:-100,
    duration:2
})

gsap.to(".page1 .box1",{
    x:"400%",
    y:"120%",
    rotate: 720,
    scrollTrigger:{
        trigger:".page1",
        scrollers:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.to(".page2 img", {
    width:"100%",
    opacity:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})

gsap.to(".page3 h1", {
    transform: "translateX(-100%)", /* This is needed to enable horizontal scrolling*/
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})