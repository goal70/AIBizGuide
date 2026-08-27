/* =========================================================
   AI BIZ GUIDE
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     MOBILE MENU
  ------------------------------------------------------- */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Close menu after clicking a navigation link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* -------------------------------------------------------
     FAQ
  ------------------------------------------------------- */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

      if (!item.open) return;

      faqItems.forEach((otherItem) => {

        if (otherItem !== item) {
          otherItem.removeAttribute("open");
        }

      });

    });

  });


  /* -------------------------------------------------------
     CURRENT YEAR
  ------------------------------------------------------- */

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* -------------------------------------------------------
     AFFILIATE LINK
  -------------------------------------------------------
     
     IMPORTANT:
     Replace the "#" in index.html with your real
     Hotmart affiliate link once we have confirmed
     the exact product.
     
     Example:
     
     const affiliateUrl = "YOUR-HOTMART-AFFILIATE-LINK";
     
     The link is intentionally NOT added yet.
  ------------------------------------------------------- */


  /* -------------------------------------------------------
     EXTERNAL LINKS
  ------------------------------------------------------- */

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach((link) => {

    link.addEventListener("click", () => {

      /*
        This area can later be used for analytics
        or conversion tracking if needed.
      */

    });

  });


  /* -------------------------------------------------------
     SMOOTH INTERNAL LINKS
  ------------------------------------------------------- */

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId.length <= 1
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* -------------------------------------------------------
     BASIC IMAGE ERROR HANDLING
  ------------------------------------------------------- */

  const images = document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener("error", () => {

      image.style.display = "none";

    });

  });


  /* -------------------------------------------------------
     CONSOLE MESSAGE
  ------------------------------------------------------- */

  console.log(
    "AI Biz Guide loaded successfully."
  );

});
