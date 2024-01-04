gsap.from(".page1 .circle",{
    scale:0.5,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from(".page2 .circle",{
    scale:0.5,
    // delay:1,
    duration:2,
    rotate:360,
    x:-300,
    /* Implimenting the Scroll trigger on page 2 */
    scrollTrigger:{
        trigger:".page2 .circle",
        scroller:"body", /*Most of the time we run on body */
        markers:true, /* This is for the development to see the trigger point*/
        start:"top 60%", /* The animation starts, When the marker is 60% from top*/
        end:"top 30%", /* The animation ends, When the marker is 30% from top*/
        scrub:5, /*true or false, or value between 1 & 5, 5 being the smoothest*/
    }
})

gsap.from(".page3 .circle",{
    scale:0.5,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 .circle",
    }
})


