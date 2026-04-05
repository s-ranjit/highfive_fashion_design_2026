gsap.registerPlugin(ScrollTrigger); 

// header animation
gsap.from("#logo", {
    y: -60,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#logo",
        toggleActions: "play none none none",
        start: "top 90%",
        bottom: "bottom top"
    }
});
gsap.from("#ham-burger", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#ham-burger",
        toggleActions: "play none none none",
        start: "top 90%",
        bottom: "bottom top"
    }
});
gsap.from("#main-nav ul li", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#main-nav ul li",
        toggleActions: "play none none none",
        start: "top 90%",
        bottom: "bottom top"
    }
});
if (document.querySelector(".hero")) {
gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-title",
        toggleActions: "play none none none",
        start: "top 90%",

    }
});

gsap.from(".hero-subtitle", {
    y: 40,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-title",
        toggleActions: "play none none none",
        start: "top 90%",
        bottom: "bottom top"
    }
});

gsap.from(".hero-image", {
    y: 40,
    opacity: 0,
    scale: 1.1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-title",
        toggleActions: "play none none none",
        start: "top 90%",
        bottom: "bottom top"
    }
});
}

if (document.querySelector(".about-program")) {
gsap.from(".about-program-title ", {
     x: -100,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".about-program-title",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});
gsap.from(".about-program-text", {
    x: -100,
    opacity: 0,
    duration: 2,
    delay: 0.4,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".about-program-text",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});
gsap.from(".about-program-image", {
    scrollTrigger: {
        trigger: ".about-program-gallery",
        start: "top 75%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});
gsap.from(".about-program-btn", {
    y: 40,
    opacity: 0,
    scale: 1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-program-btn",
        start: "top 85%",
        toggleActions: "play none none none"
    }
});
}

// Event Page GSAP start
if (document.querySelector("#event-details")) {
gsap.from("#event-details .details", {
  opacity: 0,
  scale: 0.9,   
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,   
  scrollTrigger: {
    trigger: "#event-details",
    start: "top 85%",
    toggleActions: "play none none none",
  },
});
}
if (document.querySelector("#theme")) {
gsap.from(".theme", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".theme",
    start: "top 85%",
  },
});
gsap.from(".theme-description", {
  y: 50,         
  opacity: 0,     
  duration: 1,   
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".theme-description",
    start: "top 96%", 
    toggleActions: "play none none none",
  },
});
}
if(document.querySelector(".slider-card")) {
gsap.from(".slider-card", {
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".slider-card",
    toggleActions: "play none none none",
    start: "top 90%",
    end: "bottom top"
  }
});
}
if (document.querySelector(".event-highlights")) {
gsap.from(".event-highlights", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".event-highlights",
    start: "top 85%",
  }
});
}
if (document.querySelector(".event-description")) {
gsap.from(".event-description", {
  y: 50,         
  opacity: 0,     
  duration: 1,   
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".event-description",
    start: "top 96%", 
    toggleActions: "play none none none",
  },
});
}

// Portfolio page Gsap

if (document.querySelector("#portfolio")) {

gsap.from(".hero-title-portfolio", {
     y: -40,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".hero-title-portfolio",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});
gsap.from(".sub-title", {
    y: 30,
    opacity: 0,
    duration: 2,
    delay: 0.2,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".sub-title",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.from(".divider", { 
  width: 0,                
  duration: 1,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".divider",
    start: "top 90%",    
    toggleActions: "play none none none", 
  }
});

gsap.utils.toArray(".portfolio-card").forEach((card) => {
  gsap.from(card, {
    y: 50,           
    opacity: 0,  
    duration: 0.8, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,      
      start: "top 90%",  
      toggleActions: "play none none none" 
    }
  });
});
}
// Contact page animation start
if (document.querySelector("#contact")) {
gsap.from(".contact-section", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
}
// Footer Animation
gsap.from(".footer-logo", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".main-footer",
        start: "top 85%",
        toggleActions: "play none none none"
    }
});
gsap.from(".footer-contact", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
     scrollTrigger: {
        trigger: ".footer-contact",
        toggleActions: "play none none none",
        start: "top 90%"
    }
});
gsap.from(".footer-follow h3", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
     scrollTrigger: {
        trigger: ".footer-follow",
        toggleActions: "play none none none",
        start: "top 85%"
    },
});


gsap.from(".footer-follow .copyright", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".footer-follow",
        toggleActions: "play none none none",
        start: "top 85%"
    },
});
gsap.from(".footer-big-logo", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".footer-big-logo",
        start: "top 90%"
    },
});