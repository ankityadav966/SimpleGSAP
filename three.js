var tl=gsap.timeline()

// tl.to("#box",{
//     x:900,
//     delay:1,
//     duration:2,
//     rotate:360,
//     backgroundColor:'red'
   

// })
tl.from("#page1 #box",{
    scale:0,
    // dealy:1,
    duration:2,
    rotate:360,
})
tl.from("#page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        Trigger:"#page2 #box",
        scroller:"body",
        markers:true
    }
})
tl.from("#page3 #box",{
    scale:0,
    // dealy:1,
    duration:2,
    rotate:360
})