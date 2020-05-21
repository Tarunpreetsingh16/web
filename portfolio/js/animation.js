var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({    
    offset: -250,
    triggerElement:'#glimpseSection h2',
})
.setClassToggle('#glimpseSection h2','showTitle')
.addTo(controller);

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({    
    offset: -250,
    triggerElement:'#gallerySection h2',
})
.setClassToggle('#gallerySection h2','showTitle')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -150,  
    triggerElement:".portfolioPages ul li"
})
.setClassToggle('.portfolioPages ul li','fadeInUp')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -200,  
    triggerElement:".glimpse1 img"
})
.setClassToggle('.glimpse1 img','fadeIn')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -200,  
    triggerElement:".glimpse2 img"
})
.setClassToggle('.glimpse2 img','fadeIn')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -200,  
    triggerElement:".glimpse3 img"
})
.setClassToggle('.glimpse3 img','fadeIn')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    triggerElement:".glimpse1 .content",
    offset:-200,
})
.setClassToggle('.glimpse1 .content','fadeInLeft')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset:-200,
    triggerElement:".glimpse2 .content"
})
.setClassToggle('.glimpse2 .content','fadeInRight')
.addTo(controller);


var scene = new ScrollMagic.Scene({  
    offset:-200,
    triggerElement:".glimpse3 .content"
})
.setClassToggle('.glimpse3 .content','fadeInLeft')
.addTo(controller);


