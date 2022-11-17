<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="about">
        <div class="about-container" data-aos="fade-up" data-aos-duration="1000">
            <h1 v-if="innerWidth > 425" :key="rerender" class="about-header">About Me</h1>
            <h3 v-else class="about-header">About Me</h3>
            <div class="bio">
                <p>I'm Grant! I'm a computer science student at Clemson University graduating in May 2023.
                    I'm a member of Theta Chi fraternity and have held the executive position of Scholarship
                    Chair in the past. I'm currently looking to start my career as a software engineer!</p>
            </div>
            <br><br>
            <div class="previous-experience">
                <div class="experience-header" v-if="innerWidth > 425" :key="rerender">
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
                    <p><i><strong>Eleos Technologies - Software QA Analyst</strong></i></p><br>
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
        <!--
        <div class="about-container">
            <h1 v-if="innerWidth > 425" :key="rerender" class="about-header">Pictures!</h1>
            <h3 v-else class="about-header">Pictures!</h3>
        </div>
        -->
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
        
        data() {
            return {
                window_width: null,
                rerender: 0
            }
        },
        
        mounted() {
            this.window_width = window.innerWidth;

            window.addEventListener('resize', () => {
                let prev_size = this.window_width;
                this.window_width = window.innerWidth;

                if ((prev_size >= 925 && this.window_width < 925) || (prev_size < 925 && this.window_width >= 925) || (prev_size >= 425 && this.window_width < 425) || (prev_size < 425 && this.window_width >= 425)) this.rerender += 1;
            });
        },
        
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
        font-family: "Montserrat", "serif";
    }

    .about-container {
        background-color: white;
        max-width: 100rem;
        height: 30rem;
        margin: 1% auto;
        padding: 0.938rem;
        border-radius: 5px;
        box-shadow: 0 3px 10px azure;
        justify-content: center;
        flex-direction: column;
        overflow-y: scroll;
    }

    .about-container div {
        display: flex;
        place-content: start;
    }

    .about-container .previous-experience .experience-header {
        width: 12%;
        margin-left: 4%;
    }

    .about-container .bio {
        text-align: center;
        margin: 0 8%;
        font-family: "Montserrat", "serif";
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
        font-family: "Montserrat", "serif";
    }

    .about-container .previous-experience .qualtrics ul, .about-container .previous-experience .eleos ul {
        margin-left: 1rem;
        font-family: "Montserrat","serif";
        font-size: 14px;
    }

  @media screen and (max-width: 925px) {
      .about {
          max-width: 100%;
          height: 100vh;
      }

      .about-container {
          max-width: 30rem;
          margin: 0;
      }

      .bio {
          margin: 0 8%;
      }

      .about-container .previous-experience .experience-header {
          width: auto;
      }

      .about-header, .previous-experience, .experience-header {

      }
  }

    @media screen and (max-width: 425px) {
        .about {
            max-width: 100%;
        }

        .about-container {
            max-width: 15rem;
            margin: 0;
        }

        .about-container .previous-experience .experience-header {
            width: auto;
        }

        .about-container .previous-experience .qualtrics p {
            margin-left: 1rem;
        }

        .about-container .previous-experience .qualtrics ul {
            margin-left: -1rem;
        }
    }
</style>
