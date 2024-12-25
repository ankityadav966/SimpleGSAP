var tl =gsap.timeline()

tl.from("#nav img,#nav h3,#nav-part3 h4,#nav-part3 button",{
    y:-100,
    delay:1,
    duration:1,
    opacity:0,
    stagger:0.5,
    
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.5
})
tl.from("#main img",{
    y:100,
    opacity:0,
    stagger:0.5
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:20,
    repeat:-1,
    duration:0.3,
    yoyo:true
})