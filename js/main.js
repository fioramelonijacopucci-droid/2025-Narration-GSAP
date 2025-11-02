/** GSAP plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Animation section1 cait */
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


/** Ce media match ne marche pas */

let mm = gsap.matchMedia();

mm.add ({
    isMobile: "(max-width: 666px)",
    isDesktop: "(min-width: 667px)",
}, (context) => {
    let { isMobile, isDesktop } = context.conditions;

    gsap.to("#window2", {
        scrollTrigger:{
        start: 'top 80%',
        end: 'top 20%',
        rotate: isMobile ? -90 : 90,
        x: '-100vw',
        duration: 2,
        toggleActions: 'play none reverse reset',
        }
    })
})

/** GSAP Animation - Section 3 Time line */

/** inspiré du code de Julien */

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


    /** Je me suis aidé de CHAT gpt pour faire en sorte que le carré passe de rouge à vert */
    onDragEnd: function(){
    console.log('Je dépose');
    const drop = document.getElementById("depositeZone");

    const isOver = this.hitTest(drop,"50%");

    if (isOver && this.target.id === "correct") {
        gsap.to(drop, { backgroundColor: "green", duration: 0.25 });
        
    } 
    else {
        gsap.to(drop, { backgroundColor: "red", duration: 0.25})
    }
},
})

/*onDragEnd: function() {
    console.log("Je dépose");
    if (this.hitTest("#depositeZone", 20px)){
      document.getElementById("depositeZone").style.background = "green";
    } else {
      document.getElementById("depositeZone").style.background = "red";
    }
  }
});*/




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

gsap.from('#window3', {
    scrollTrigger:{
        trigger:"#section5",
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