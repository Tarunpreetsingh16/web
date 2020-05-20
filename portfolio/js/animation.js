var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({    
    offset: -200,
    triggerElement:'#sectionTitle',
})
.setClassToggle('#sectionTitle','showTitle')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -150,  
    triggerElement:".portfolioPages ul li"
})
.setClassToggle('.portfolioPages ul li','fadeInUp')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset: -150,  
    triggerElement:".glimpseImage img"
})
.setClassToggle('.glimpseImage img','fadeIn')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    triggerElement:".glimpse1 .content",
    offset:50
})
.setClassToggle('.glimpse1 .content','fadeInLeft')
.addTo(controller);

var scene = new ScrollMagic.Scene({  
    offset:50,
    triggerElement:".glimpse2 .content"
})
.setClassToggle('.glimpse2 .content','fadeInRight')
.addTo(controller);


