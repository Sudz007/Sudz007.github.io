document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.7; // Trigger when section is 80% visible
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerPoint) {
        section.classList.add("expanded");
      } else {
        section.classList.remove("expanded");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});
