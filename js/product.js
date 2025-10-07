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

    gsap.registerPlugin();

    window.scrollBy(0, 1);
    ScrollTrigger.refresh();
});


// Instantly set image max-height when section 3 is visible (no animation)
ScrollTrigger.create({
    trigger: ".container-3",
    start: "top center",
    onEnter: () => {
        document.querySelector(".image-container img").style.maxHeight = "600px";
    },
    onLeaveBack: () => {
        document.querySelector(".image-container img").style.maxHeight = "none";
    },
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


    //for send the broucher email
    const openModalBtn = document.getElementById("openBrochureModal");
    const modal = document.getElementById("brochureModal");
    const closeModalBtn = document.getElementById("closeBrochureModal");
    const form = document.getElementById("brochureForm");
    const toastContainer = document.getElementById("toastContainer");

    // Initialize EmailJS
    (function () {
        emailjs.init("IY_g9yid_NrS6B3EZ");
    })();

    // === Helper: Show Toast ===
    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.classList.add("toast", type);
        toast.textContent = message;

        toastContainer.appendChild(toast);
        setTimeout(() => toast.classList.add("show"), 50);

        // Auto remove after 3s
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // === Open Modal ===
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // === Close Modal ===
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    // === Form Submit ===
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const submitBtn = form.querySelector("button[type='submit']");

        // Basic Validation
        if (!fullName || !email || !contact) {
            showToast("Please fill all the required fields.", "error");
            return;
        }

        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!emailPattern.test(email)) {
            showToast("Please enter a valid email address.", "error");
            return;
        }

        if (!phonePattern.test(contact)) {
            showToast("Please enter a valid 10-digit contact number.", "error");
            return;
        }

        // Add Loading
        submitBtn.classList.add("loading");

        try {
            await emailjs.send("service_s7bcy9g", "template_obru7jb", {
                fullName,
                email,
                contact,
            });

            showToast("Form submitted successfully! Download will start shortly.", "success");

            // Close modal & reset form
            modal.style.display = "none";
            form.reset();

            // Trigger brochure download
            const link = document.createElement("a");
            link.href = "assets/brochure.pdf"; // 👈 Replace with your actual PDF path
            link.download = "Product_Brochure.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Error sending email:", error);
            showToast("Something went wrong while sending. Try again.", "error");
        } finally {
            submitBtn.classList.remove("loading");
        }
    });

    (function () {
        emailjs.init("IY_g9yid_NrS6B3EZ");
    })();
    
});
