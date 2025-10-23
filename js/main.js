/** GSAP plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Animation section1 bri */
gsap.to("#comete",{
    x: 200,
    rotate: 180,
    duration: 2,
})

/** GSAP Animation Section 2- Scroll Trigger */

gsap.from('#window2', {
    scrollTrigger:{
        trigger:"#section2",
        //markers: true,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none reverse reset',
        scrub: 1,
    },
    rotate: -90,
    x: '-100vw',
    duration: 2,
})



/** GSAP Animation - Section 3 Time line */



const sections = gsap.utils.toArray("#section3 > div");

gsap.to(sections, {
  xPercent: -300,
  ease: "none",
  scrollTrigger: {
    trigger: "#section3",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: "+=2000"
  }
});



let tl = gsap.timeline({
    //repeat: -1,
    //yoyo: true
    scrollTrigger:{
        trigger:"#section3",
        //markers: true,
        start:"top 100%",
        end:"top 80%",
        id:"zone-section2",
        toggleActions:"play none reverse reset",
        scrub: 1,

    }
})

tl.from('.animeSec2A', {x:'-100vw',})
.from('.animeSec2B', {x:'100vw',})
.from('.animeSec2C', {x:'-100vw',})


/** GSAP Draggable section5*/

Draggable.create(".characters", {
    type: "x,y",
    bounds: "#section5",
    cursor: 'grab',
})






/*Draggable.create("#section5__image", {
    type: "x,y",
    bounds: "#section4",
    cursor: "grab",

    onDrag: function(){
        gsap.to("#section5__image", {
            width: '250px',
        })
        
    onDragEnd: function(){
        gsap.to("#section5__image",
             width: '150px',
        )
    }
    },
})*/