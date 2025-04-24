document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    if (footer) {
      const year = new Date().getFullYear();
      footer.innerHTML = `&copy; ${year} Het's Resume | Made with HTML, CSS & JS`;
    }
  });
  