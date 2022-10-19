<template>
  <nav-bar></nav-bar>
  <social-media></social-media>
  <section class="projects" id="projects">
    <h1 class="projects-title" data-aos="flip-down" data-aos-duration="1000">My Projects</h1>
    <div class="projects-container">
      <div class="project-container project-card" data-aos="fade-right" data-aos-duration="1000">
        <div class="project-left">
          <img src="../assets/images/coming_soon.jpeg" alt="Truck Driver Incentive Program (Coming Soon!)" loading="lazy" class="project-pic"/>
        </div>
        <div class="project-right">
          <h3 class="project-title">Truck Driver Incentive Program</h3>
          <p>Made with:
            <img src="../assets/icons/icons8-vue-js-48.png" alt="Vue JS" loading="lazy">
            <img src="../assets/icons/icons8-bootstrap-48.png" alt="Bootstrap" loading="lazy">
            <img src="../assets/icons/icons8-javascript.svg" alt="Javascript" loading="lazy">
            <img src="../assets/icons/icons8-python.svg" alt="Python" loading="lazy">
            <img src="../assets/icons/icons8-flask-100.png" alt="Flask" loading="lazy">
            <img src="../assets/icons/icons8-amazon-web-services-48.png" alt="AWS" loading="lazy">
          </p>
          <p>Description ...</p>
        </div>
      </div>
      <div class="project-container project-card" data-aos="fade-left" data-aos-duration="1000">
        <div class="project-left">
          <img src="../assets/images/portfolio-website.png" alt="Portfolio Website" loading="lazy" class="project-pic"/>
        </div>
        <div class="project-right">
          <h3 class="project-title">Portfolio Website</h3>
          <p>Made with:
            <img src="../assets/icons/icons8-vue-js-48.png" alt="Vue JS" loading="lazy">
            <img src="../assets/icons/icons8-javascript.svg" alt="Javascript" loading="lazy">
            <img src="../assets/icons/icons8-css3.svg" alt="CSS3" loading="lazy">
            <img src="../assets/icons/icons8-html-5.svg" alt="HTML5" loading="lazy">
          </p>
          <p>Description: You're lookin' at it!</p>
          <a href="/home">Check it out!</a>
          <a href="https://github.com/grantgonzalez14/portfolio-website" target="_blank">Source Code</a>
        </div>
      </div>
      <div class="project-container project-card" data-aos="fade-right" data-aos-duration="1000">
        <div class="project-left">
          <img src="../assets/images/coming_soon.jpeg" alt="Game Engine Project (Coming Soon!)" loading="lazy" class="project-pic"/>
        </div>
        <div class="project-right">
          <h3 class="project-title">Game Engine</h3>
          <p>Made with:
            <img src="../assets/icons/icons8-python.svg" alt="Python" loading="lazy">
            (Pygame)
          </p>
          <p>Description ...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import NavBar from "@/components/Navbar";
  import SocialMedia from "@/components/Socials";
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  AOS.init();

  export default {
    name: "my-projects",
    components: {SocialMedia, NavBar}
  }
</script>

<style scoped>
  .projects {
    background-color: #14110F;
    padding: 10px 0;
  }

  .project-pic {
    width: 65%;
    height: 60%;
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .projects-title {
    text-align: center;
    margin-bottom: 1rem;
    color: #7E7F83;
  }

  .project-container {
    display: flex;
    text-align: center;
    width: 70%;
    padding: 1rem;
  }

  .project-title,
  .project-details {
    margin-bottom: 0.5rem;
  }

  .project-card {
    background-color: white;
    border-radius: 11px;
    box-shadow: 0 3px 10px azure;
    padding: 20px;
    margin: 10px;
  }

  .project-container .project-left {
    width: 50%;
    height: 100%;
  }

  .project-container .project-right {
    text-align: left;
    width: 50%;
  }

  .project-container .project-right a {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 11%;
    margin-top: 3%;
    color: #14110F;
  }

  .project-container .project-right a:hover {
    color: #7E7F83;
  }

  .project-container .project-right p {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
  }

  .project-container .project-right img {
    width: 32px;
    height: 32px;
    margin-left: 10px;
  }

  .project-card .project-link {
    color: #F3F3F4;
  }
</style>