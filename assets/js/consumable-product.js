let selectedBrochureUrl = "";
let selectedProductName = "";

// ================= ELEMENTS =================
const modal = document.getElementById("brochureModal");
const closeModalBtn = document.getElementById("closeBrochureModal");
const form = document.getElementById("brochureForm");
const toastContainer = document.getElementById("toastContainer");
const brochureButtons = document.querySelectorAll(".openBrochureModal");

// ================= INIT EMAILJS =================
emailjs.init("ijruxOYa6Oiosb_DQ"); // PUBLIC KEY

// ================= TOAST FUNCTION =================
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;

    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ================= OPEN MODAL (ALL PRODUCTS) =================
brochureButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedBrochureUrl = btn.dataset.brochure;
        selectedProductName = btn.dataset.product;
        modal.style.display = "flex";
    });
});

// ================= CLOSE MODAL =================
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// ================= FORM SUBMIT =================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const submitBtn = form.querySelector("button");

    if (!fullName || !email || !contact) {
        showToast("All fields are required", "error");
        return;
    }

    if (submitBtn.disabled) return;
    submitBtn.disabled = true;

    try {
        // SEND EMAIL
        await emailjs.send(
            "service_l8ecvrm",
            "template_zl75w48",
            {
                fullName,
                email,
                contact,
                product: selectedProductName,
                brochure: selectedBrochureUrl
            }
        );

        showToast("Submitted successfully! Download starting...", "success");

        // CLOSE MODAL FIRST
        modal.style.display = "none";
        form.reset();

        // FORCE DOWNLOAD EVERY TIME (CACHE BUSTER)
        const downloadUrl =
            selectedBrochureUrl + "?t=" + new Date().getTime();

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = selectedBrochureUrl.split("/").pop();
        document.body.appendChild(link);

        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
        }, 150);

    } catch (error) {
        console.error("EmailJS Error:", error);
        showToast("Something went wrong. Try again.", "error");
    } finally {
        submitBtn.disabled = false;
    }
});
