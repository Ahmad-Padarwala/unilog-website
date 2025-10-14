document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const toastContainer = document.getElementById("toastContainer");

    // Initialize EmailJS
    emailjs.init("IY_g9yid_NrS6B3EZ");

    // === Helper: Show Toast ===
    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.classList.add("toast", type);
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 50);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // === Form Submit ===
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const country = document.getElementById("country").value.trim();
        const company = document.getElementById("company").value.trim();
        const message = document.getElementById("message").value.trim();
        const termsChecked = document.getElementById("terms").checked;
        const submitBtn = form.querySelector("button[type='submit']");

        // Basic Validation
        if (!fullName || !email || !contact || !country || !company || !message) {
            showToast("Please fill all the required fields.", "error");
            return;
        }

        if (!termsChecked) {
            showToast("Please agree to the Terms & Conditions.", "error");
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

        // Loading state
        submitBtn.classList.add("loading");

        try {
            await emailjs.send("service_s7bcy9g", "template_obru7jb", {
                fullName,
                email,
                contact,
                country,
                company,
                message
            });

            showToast("Form submitted successfully! Download will start shortly.", "success");

            form.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            showToast("Something went wrong. Please try again.", "error");
        } finally {
            submitBtn.classList.remove("loading");
        }
    });
});
