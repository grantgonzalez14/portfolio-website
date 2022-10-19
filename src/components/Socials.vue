<template>
  <div class="socials">
    <ul>
      <li class="linkedin">
        <a href="https://www.linkedin.com/in/grant-gonzalez-165117205/" target="_blank" class="linkedin-link">
          <span class="socials-text">LinkedIn</span>
          <img src="../assets/icons/icons8-linkedin-circled.gif" alt="LinkedIn" loading="lazy" class="socials-img">
        </a>
      </li>
      <li class="github">
        <a href="https://github.com/grantgonzalez14" target="_blank" class="github-link">
          <span class="socials-text">Github</span>
          <img src="../assets/icons/icons8-github.gif" alt="GitHub" loading="lazy" class="socials-img">
        </a>
      </li>
      <li class="email">
        <a href="/contact" class="email-link">
          <span class="socials-text">Email</span>
          <img src="../assets/icons/icons8-secured-letter.gif" alt="Email" loading="lazy" class="socials-img-email">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "social-media"
  }
</script>

<style scoped>
  .socials {
    position: fixed;
    bottom: 40%;
  }

  .socials ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  .socials ul li {
    transition: 0.3s;
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    width: 40%;
    height: 100%;
  }

  .socials ul li:hover {
    transition: 0.3s;
    width: 100%;
  }

  .socials ul li a {
    text-align: right;
    display: flex;
    height: 100%;
    width: 100%;
    padding: 15px 20px;
  }

  .linkedin .linkedin-link:hover,
  .github .github-link:hover {
    color: white;
  }

  .email .email-link:hover {
    color: black;
  }

  .linkedin {
    background-color: #0072b1;
  }

  .github {
    background-color: black;
  }

  .email {
    background-color: white;
  }

  .socials-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    opacity: 0;
    width: 100%;
    transition: 0.3s;
  }

  a:hover .socials-text {
    opacity: 1;
    justify-content: center;
    transition: 0.5s;
  }

  .socials-img {
    margin-left: -50%;
    width: 40px;
    height: 40px;
    transition: 0.3s;
  }

  a:hover .socials-img {
    transition: 0.3s;
    margin-left: 5%;
  }

  .socials-img-email {
    margin-left: -35%;
    width: 40px;
    height: 40px;
    transition: 0.3s;
  }

  a:hover .socials-img-email {
    transition: 0.3s;
    margin-left: 5%;
  }
</style>