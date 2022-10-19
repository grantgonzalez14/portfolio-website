<template>
  <nav-bar></nav-bar>
  <social-media></social-media>
  <section class="contact" id="contact">
    <div class="contact-form-container" data-aos="fade-down" data-aos-duration="1000">
      <h1>Get In Touch With Me</h1>
      <div class="contact-form">
        <form action="https://formspree.io/f/xnqrjaoe" method="POST">
          <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" name="sender-name" placeholder="Enter your name" class="input-field" required/>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" name="sender-email" placeholder="Enter Your Email" class="input-field" required/>
          </div>
          <div class="form-control">
            <label for="message">Message</label>
            <textarea id="message" cols="60" rows="10" placeholder="Enter Your Message" name="message" class="input-field" required></textarea>
          </div>
          <input type="submit" value="Submit" id="submit-btn" class="submit-btn"/>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import NavBar from "@/components/Navbar";
  import SocialMedia from "@/components/Socials";
  export default {
    name: "contact-me",
    components: {SocialMedia, NavBar}
  }
</script>

<style scoped>
  .contact {
    display: grid;
    height: 85vh;
    place-items: center;
  }

  .contact h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #14110F;
  }

  .contact-form-container {
    background-color: white;
    max-width: 40.75rem;
    max-height: 35rem;
    margin: 0 auto;
    padding: 0.938rem;
    border-radius: 5px;
    box-shadow: 0 3px 10px azure;
  }

  .contact-form-container label {
    line-height: 2.7em;
    font-weight: 700;
    color: #14110F;
  }

  .contact-form-container textarea {
    min-height: 6.25rem;
    font-size: 14px;
  }

  .contact-form-container .input-field {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 2px outset #14110F;
    font-size: 0.875rem;
    outline: none;
  }

  .input-field::placeholder {
    padding: 0.5rem;
    color: #14110F;
  }

  .submit-btn {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: white;
    border: 2px solid #14110F;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    transition: 0.3s;
  }

  .submit-btn:hover {
    background-color: #14110F;
    border: 2px solid #14110F;
    color: #F3F3F4;
    cursor: pointer;
  }
</style>