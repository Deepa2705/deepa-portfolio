// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-menu");
    });
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".skill-card, .timeline-item, .project-card, .achievement-card, .contact-box"
);

function revealOnScroll() {

    const triggerBottom =
        window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===============================
// TYPING EFFECT FOR HERO TITLE
// ===============================

const subtitle = document.querySelector(".hero-subtitle");

const text = "SOFTWARE ENGINEER";

let index = 0;

function typeEffect() {

    if (!subtitle) return;

    subtitle.textContent =
        text.slice(0, index);

    index++;

    if (index <= text.length) {

        setTimeout(typeEffect, 100);

    }

}

window.addEventListener("load", () => {

    subtitle.textContent = "";
    typeEffect();

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topButton.classList.add("scroll-top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// HERO CARD FLOAT ANIMATION
// ===============================

const heroCard = document.querySelector(".hero-card");

window.addEventListener("mousemove", (e) => {

    if (!heroCard) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    if (!heroCard) return;

    heroCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});