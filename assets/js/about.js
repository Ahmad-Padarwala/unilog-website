// Tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // add active
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});


// number section
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number-item h2");
  let started = false; // to run animation only once

  function animateCounter(el, target) {
    let current = 0;
    const increment = target / 200; // adjust speed
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(current) + (el.dataset.suffix || "");
    }, 20); // speed of counting
  }

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target);
          animateCounter(counter, target);
        });
      }
    },
    { threshold: 0.5 } // trigger when 50% visible
  );

  observer.observe(document.querySelector(".number-section"));
});
