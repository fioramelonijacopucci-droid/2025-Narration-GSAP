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


/*gsap.from('#window2', {
    scrollTrigger:{
        trigger:"#section2",
        markers: true,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none reverse reset',
        scrub: 1,
    },
    opacity: 0,
    opacity: 100,
})*/

/** GSAP Animation - Section 3 Time line */

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


/** GSAP Draggable */

Draggable.create("#section5__image", {
    type: "x,y",
    bounds: "#section4",
    cursor: "grab",

    onDrag: function(){
        gsap.to("#section5__image", {
            width: '250px',
        })
        
    /*onDragEnd: function(){
        gsap.to("#section5__image",
             width: '150px',
        )
    }*/
    },
})