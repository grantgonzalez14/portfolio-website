const scrollUp = document.querySelector("#scroll-up");
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");

const about = document.getElementById("about");
const about_rect = about.getBoundingClientRect();

const education = document.getElementById("education");
const education_rect = education.getBoundingClientRect();

const skills = document.getElementById("skills");
const skills_rect = skills.getBoundingClientRect();

const projects = document.getElementById("projects");
const projects_rect = projects.getBoundingClientRect();

const contact = document.getElementById("contact");
const contact_rect = contact.getBoundingClientRect();

scrollUp.addEventListener("click", () => {
   window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth",
   });
});

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
       ul.classList.remove("show");
       const section = link.getAttribute("href");
       let y;

       switch (section.slice(1, section.length)) {
           case "about":
               y = about_rect.y;
               break;

           case "eduction":
               y = education_rect.y;
               break;

           case "skills":
               y = skills_rect.y;
               break;

           case "projects":
               y = projects_rect.y;
               break;

           case "contact":
               y = contact_rect.y;
               break;
       }

       setTimeout(() => {
           window.scrollTo(0, y);
       });
    });
});