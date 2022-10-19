<template>
  <nav-bar></nav-bar>
  <social-media></social-media>
  <section class="about">
    <div class="about-container" data-aos="fade-up" data-aos-duration="1000">
      <h1 class="about-header">About Me</h1>
      <div class="bio">
        <div class="bio-header">
          <h2>Bio</h2>
        </div>
        <p>I'm Grant! I'm a computer science student at Clemson University, and like every other CS student, I like to code.</p>
      </div>
      <br><br>
      <div class="previous-experience">
        <div class="experience-header">
          <h2>Experience</h2>
        </div>
        <div class="qualtrics">
          <p><i><strong>Qualtrics - Software Test Engineer Intern</strong></i></p><br>
          <ul style="list-style-type:disc">
            <li>Utilized wide range of development tools, including Python, MySQL, Redash, and Gitlab.</li><br>
            <li>Worked closely with company mentor to learn best practices.</li><br>
            <li>Conducted full lifecycle software development from planning to deployment and maintenance.</li><br>
            <li>Participated in development team trainings, daily meetings, and huddles.</li>
          </ul>
        </div>
        <div class="eleos">
          <p><i><strong>Eleos - Software QA Analyst</strong></i></p><br>
          <ul style="list-style-type:disc">
            <li>Tests functionality, performance and compliance of each product against design specifications to maintain strong
              development standards and high customer satisfaction.</li><br>
            <li>Searches for bugs in newly-developed aspects of existing web applications in sandbox environments, reporting
              errors to deliver complete functionality.</li><br>
            <li>Collaborates with developers, system installers and technical support representatives in identifying errors to
              determine appropriate team to consult for resolving issue.</li>
          </ul>
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
    name: "about-me",
    components: {SocialMedia, NavBar}
  }
</script>

<style scoped>
  .about {
    display: grid;
    place-items: center;
    height: 85vh;
    max-width: 80rem;
    margin: 1rem auto;
  }

  .about-header {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    color: #14110F;
  }

  .about-container {
    display: flex;
    background-color: white;
    max-width: 100rem;
    height: 30rem;
    margin: 0 auto;
    padding: 0.938rem;
    border-radius: 5px;
    box-shadow: 0 3px 10px azure;
    justify-content: center;
    flex-direction: column;
  }

  .about-container div {
    display: flex;
    place-content: start;
  }

  .about-container .bio .bio-header, .about-container .previous-experience .experience-header {
    width: 20%;
  }

  .about-container .bio {
    justify-content: left;
    place-items: center;
  }

  .about-container .previous-experience {
    justify-content: left;
    place-items: start;
  }

  .about-container .previous-experience .qualtrics {
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  .about-container .previous-experience .eleos {
    width: 35%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
  }

  .about-container .previous-experience .qualtrics p, .about-container .previous-experience .eleos p {
    margin-left: 3rem;
  }

  .about-container .previous-experience .qualtrics ul, .about-container .previous-experience .eleos ul {
    margin-left: 1rem;
  }
</style>