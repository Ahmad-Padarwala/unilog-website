window.addEventListener("load", () => {
    // write me code to make opacity 0 to 1 on the image container
    const imageContainer = document.querySelector(".image-container");
    imageContainer.style.opacity = "1";

    gsap.registerPlugin(ScrollTrigger);

    const containerStates = [
        {
            bottom: "-70%",
            right: "-30%",
            position: "fixed",
            xPercent: 0,
            yPercent: 0,
        },
        {
            bottom: "-42%",
            right: "0%",
            position: "fixed",
            xPercent: 0,
            yPercent: 0,
        },
        // {
        //   bottom: "8%",
        //   right: "0%",
        //   position: "fixed",
        //   xPercent: 0,
        //   yPercent: 0,
        // },
        {
            bottom: "56%",
            right: "50%",
            position: "fixed",
            xPercent: 50,
            yPercent: 50,
        },
    ];
    const imgStates = [
        { width: 700 },
        { width: 400 },
        { width: 250 },
        // { width: 300 },
    ];

    const sections = document.querySelectorAll(".product-container");

    sections.forEach((sec, i) => {
        if (i === 0) return;

        gsap.fromTo(".image-container", containerStates[i - 1], {
            ...containerStates[i],
            scrollTrigger: {
                trigger: sec,
                start: "top bottom",
                end: "top top",
                scrub: true,
                pin: false,
                snap: {
                    snapTo: 1,
                    duration: 1,
                    ease: "power1.inOut",
                },
            },
        });

        gsap.fromTo(
            ".image-container img",
            { width: imgStates[i - 1].width + "px" },
            {
                width: imgStates[i].width + "px",
                scrollTrigger: {
                    trigger: sec,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            }
        );
    });

    ScrollTrigger.create({
        trigger: ".showcase-section",
        start: "bottom bottom",
        onEnter: () => activeStyle(true),
        onLeaveBack: () => activeStyle(false),
    });

    function activeStyle(active) {
        const el = document.querySelector(".image-container");
        if (active) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    }

    gsap.fromTo(
        ".container-1 .title,.container-1 .sub-title, .container-1 .desc",
        {
            opacity: 0,
            x: -2000,
        },
        {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".container-1",
                start: "top 56%",
                toggleActions: "play none none none",
                once: true,
            },
        }
    );

    // animate title + desc
    gsap.fromTo(
        ".container-2 .title, .container-2 .desc",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".container-2",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        }
    );

    // animate stats one by one
    gsap.fromTo(
        ".container-2 .stat",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".container-2 .stats",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // 5th section images
    const animOne = gsap.fromTo(
        ".container-5 .one",
        { opacity: 0, x: -300 },
        {
            opacity: 1,
            x: 0,
            duration: 3,
            ease: "power2.out",
            paused: true, // important: prevent auto run
        }
    );

    const animTwo = gsap.fromTo(
        ".container-5 .two",
        { opacity: 0, x: 300 },
        {
            opacity: 1,
            x: 0,
            duration: 3,
            ease: "power2.out",
            paused: true,
        }
    );

    // ScrollTrigger
    ScrollTrigger.create({
        trigger: ".container-5",
        start: "top 15%",
        onEnter: () => {
            animOne.restart();
            animTwo.restart();
        },
        onEnterBack: () => {
            animOne.restart();
            animTwo.restart();
        },
        onLeave: () => {
            animOne.pause(0); // reset to start
            animTwo.pause(0);
        },
        onLeaveBack: () => {
            animOne.pause(0);
            animTwo.pause(0);
        },
    });

    gsap.registerPlugin();

    window.scrollBy(0, 1);
    ScrollTrigger.refresh();
});

window.addEventListener("resize", ScrollTrigger.refresh);

// Ripple Effect

document.addEventListener("DOMContentLoaded", function () {
    const rippleContainer = document.querySelector(".ripple-container");

    function createRipple() {
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        rippleContainer.appendChild(ripple);

        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });
    }

    // Create a ripple every 1 second
    setInterval(createRipple, 1000);
});
