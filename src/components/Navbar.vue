<template>
  <div class="nav">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/education">Education</a>
    <a href="/skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 45px;
    background-color: #7E7F83;
    overflow: auto;
  }

  .nav a {
    float: left;
    padding: 12px;
    color: #F3F3F4;
    text-decoration: none;
    font-size: 17px;
  }

  .nav a:hover {
    background-color: #D9C5B2;
    color: #34312D;
  }

  @media screen and (max-width: 500px) {
    .navbar a {
      float: none;
      display: block;
    }
  }

</style>