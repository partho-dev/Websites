/* For a single h1 line */
// var h1 = document.querySelector(".h1content")
// // console.log(h1.textContent)
// var splitted = h1.textContent.split("")
// let clutter = ""
// splitted.forEach((elem)=>{
//     clutter += `<span> ${elem} </span>`
// })
// h1.innerHTML=clutter
// // console.log(h1.innerHTML=clutter)

// for all the h1 lines 
var allh1 = document.querySelectorAll("h1")
// console.log(allh1)

allh1.forEach((elem)=>{
    var clutter = " "
    // console.log(elem)
    // console.log(elem.textContent)
    var splitted = elem.textContent.split("")
    splitted.forEach((e)=>{
        clutter += `<span> ${e} </span>`
    })
    elem.innerHTML = clutter
})

gsap.to(".page2 h1 span",{
    color:"#F7F7EE",
    // color:"cyan",
    // delay:2,
    stagger : 0.2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller : "body",
        // markers : true,
        start : "top 20%",
        end: "top -10%",
        scrub:2
    }
})
