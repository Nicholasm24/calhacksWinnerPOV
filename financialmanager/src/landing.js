document.addEventListener('DOMContentLoaded', function() {
    // Animate the ".title"
    gsap.from(".title", {
        duration: 1.5,
        x: '-100%',
        ease: "power3.out",
    });
});

document.addEventListener("scroll", scrollDown);

function scrollDown() {
    setTimeout(() => {
        document.getElementById("scroll-down").style.display = "none";
      }, 500);
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".name-container", {
  scrollTrigger: {
    trigger: ".name-container",
    start: "top bottom", // When the top of .name-container enters the bottom of the viewport
    end: "bottom top", // Adjust as needed
    toggleActions: "play none none reverse", // Play the animation forward and reverse it when scrolling back
  },
  opacity: 1,
  visibility: "visible", // Change visibility when the animation starts
  duration: 0.5, // Duration of the opacity transition
});


var name;
document.getElementById("name").onkeydown = function(e){
    if(e.keyCode == 13){
      name = document.getElementById("name").value;
    }
 };

 gsap.to(".financial-wrapper", {
    scrollTrigger: {
      trigger: ".name-container", // Use the name container as the trigger
      start: "bottom bottom", // Trigger when the bottom of the name container hits the bottom of the viewport
      end: "bottom top", // Consider additional scroll distance if needed
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
      onEnter: () => {
        gsap.to(".financial-wrapper", {opacity: 1, visibility: "visible", y: 0, duration: 1.5, ease: "power3.out"});
      },
      onLeave: () => {
        gsap.to(".financial-wrapper", {opacity: 0, visibility: "hidden", y: 100, duration: 1.5, ease: "power3.out"});
      },
      onEnterBack: () => {
        gsap.to(".financial-wrapper", {opacity: 1, visibility: "visible", y: 0, duration: 1.5, ease: "power3.out"});
      },
      onLeaveBack: () => {
        gsap.to(".financial-wrapper", {opacity: 0, visibility: "hidden", y: 100, duration: 1.5, ease: "power3.out"});
      },
    },
    opacity: 0,
    visibility: "hidden",
    y: 100, // Start slightly off-screen
    duration: 1.5,
    ease: "power3.out",
    immediateRender: false, // Prevent GSAP from rendering the initial state immediately before the scroll trigger
  });

  document.getElementById("enter").addEventListener("click", function() {
    location.href = "overview.html"
  })