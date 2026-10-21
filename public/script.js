export function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");

  if (heading) {
    heading.textContent = greet("Shaheer");
  }
}

/* Task 9: Update active navigation link */
if (typeof document !== "undefined") {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function updateCurrentLocation() {
    const currentHash =
      typeof globalThis.location !== "undefined"
        ? globalThis.location.hash || "#schedule"
        : "#schedule";

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentHash) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "location");
    });
  });

  globalThis.addEventListener("hashchange", updateCurrentLocation);
  updateCurrentLocation();
}
