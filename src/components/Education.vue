<template>
  <nav-bar></nav-bar>
  <social-media></social-media>
  <section class="education" id="education">
    <div class="education-container" data-aos="zoom-out" data-aos-duration="1000">
      <h1 class="education-header">My Education</h1>
      <div class="container">
        <img src="../assets/images/clemson_logo.png" alt="Clemson Seal" loading="lazy" class="clemson-logo">
        <div class="education-info">
          <h3>School: Clemson University</h3>
          <h3>Graduating: May 2023</h3>
          <h3>GPA: 3.45</h3>
          <h3>Major: Computer Science</h3>
          <h3>President's List: Spring 2022</h3>
          <h3>Dean's List: Fall 2021</h3>
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
    name: "my-education",
    components: {SocialMedia, NavBar}
  }
</script>

<style scoped>
  .education {
    display: grid;
    place-items: center;
    height: 85vh;
    margin: 1rem auto;
    text-align: center;
  }

  .education-header {
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: #14110F;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .education-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 50rem;
    margin: 0 auto;
    padding: 0.938rem;
    border-radius: 5px;
    box-shadow: 0 3px 10px azure;
    justify-content: left;
  }

  .education-container img {
    padding: 0.25rem;
    margin-bottom: 1rem;
  }

  .education-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
    margin-bottom: 1rem;
    overflow-wrap: normal;
  }

  .education-info h3 {
    display: flex;
    margin-bottom: 1rem;
    justify-content: left;
  }
</style>