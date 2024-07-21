function loading() {
    var tl = gsap.timeline()

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.8,
        duration: 1,
        ease: "expo.out"
    })

    tl.from("#yellow2", {
        top: "100%",
        delay: 2,
        duration: 1,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        delay: 2,
        duration: 0.7,
        color: "black"
    }, "anim")

    tl.to("#loader", {
        opacity: 0,
    })
    tl.to("#loader", {
        display:"none",
    })
}

loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    document.querySelector("#footer h2").addEventListener("click",function(){
        scroll.scrollTo(0);
    })
    
    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter", function(){
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage =`url(${bgimg})`
            // main1.computedStyleMap.backgroundColor = "red"
            //console.log("mouse-clicked")
            
        })
    })
}

loco();


// ------------------cards--------------

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const video = card.querySelector('video');
        if (video) {
            video.play();
        }
    });

    card.addEventListener('mouseleave', () => {
        const video = card.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});





