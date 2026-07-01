const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const revealElements = document.querySelectorAll(
  ".section, .card, .project-card, .research-card, .publication, .workshop-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("current");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("current");
    }
  });
});
// Dropdown navbar
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const dropdown = toggle.closest(".nav-dropdown");

    document.querySelectorAll(".nav-dropdown.open").forEach((item) => {
      if (item !== dropdown) {
        item.classList.remove("open");
      }
    });

    dropdown.classList.toggle("open");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".nav-dropdown.open").forEach((item) => {
    item.classList.remove("open");
  });
});

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-dropdown.open").forEach((item) => {
      item.classList.remove("open");
    });

    navLinks.classList.remove("active");
  });
});

// Highlight dropdown parent when child section is active
const updateDropdownParentHighlight = () => {
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.classList.remove("parent-current");
  });

  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const activeChild = dropdown.querySelector("a.current");

    if (activeChild) {
      dropdown.querySelector(".dropdown-toggle").classList.add("parent-current");
    }
  });
};

window.addEventListener("scroll", updateDropdownParentHighlight);
window.addEventListener("load", updateDropdownParentHighlight);