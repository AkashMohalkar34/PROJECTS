const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


////////////

var timeout = 0;
function circleKoChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets) {

        clearTimeout(timeout);
        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientY - yprev;


        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
       
       
        xprev = dets.clientX;
        yprev = dets.clientY;


        circleMouseFollower(xscale,yscale);
        timeout = setTimeout(function() {
           document.querySelector("#minicircle").style.transform =  `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        },100);

        // console.log(gsap.utils.clamp(.8,1.2,xdiff), gsap.utils.clamp(.8,1.2,ydiff));
       
        
    })
}

circleKoChaptaKaro();
function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        opacity: 0,
        duration: 2,
        y: -10,
        ease: Expo.easeInout
    })

    
    t1.to(".boundingelem", {
       
        y:0,
        duration:1,
        delay:-1,
        ease: Expo.easeInout,
        stagger:0.2
    })


    t1.from("#herofooter", {
        opacity:0,
        y: -10,
        delay: -0.4,
        duration:1,
       ease: Expo.easeInout,
       
      
    })
}
function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
        let move = document.querySelector("#minicircle");
        move.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;;
    })
}

circleMouseFollower();
firstPageAnim();