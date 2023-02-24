<template>
    <video autoplay muted loop id="backgroundVideo">
        <source src="../assets/videos/purple_paint_background.mp4" type="video/mp4">
    </video>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="projects" id="projects">
        <h1 class="projects-title" data-aos="flip-down" data-aos-duration="1000">My Projects</h1>
        <div class="projects-container">
            <div class="project-container project-card" data-aos="fade-left" data-aos-duration="1000">
                <div class="project-left" v-if="window_width > 925" :key="rerender">
                    <img src="../assets/images/portfolio-website.png" alt="Portfolio Website" loading="lazy" class="project-pic"/>
                </div>
                <div class="project-right">
                    <h3 class="project-title"><i>Portfolio Website</i></h3>
                    <div class="pictures" v-if="window_width <= 925" :key="rerender">
                        <img src="../assets/images/portfolio-website.png" alt="Portfolio Website" loading="lazy" class="project-pic"/>
                    </div>
                    <p><strong>Made with:</strong>
                        <img src="../assets/icons/icons8-vue-js-48.png" alt="Vue JS" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-javascript.svg" alt="Javascript" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-css3.svg" alt="CSS3" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-html-5.svg" alt="HTML5" loading="lazy" class="icon">
                    </p>
                    <h4>Description:<p>You're lookin' at it!</p></h4>
                    <a href="/home"><strong>Check it out!</strong></a>
                    <a href="https://github.com/grantgonzalez14/portfolio-website" target="_blank"><strong>Source Code</strong></a>
                </div>
            </div>

            <div class="project-container project-card" data-aos="fade-left" data-aos-duration="1000">
                <div class="project-left" v-if="window_width > 925" :key="rerender">
                    <img src="../assets/images/Bug_Zapper_Coming_Soon.png" alt="Portfolio Website" loading="lazy" class="project-pic"/>
                </div>
                <div class="project-right">
                    <h3 class="project-title"><i>Bug Zapper</i></h3>
                    <div class="pictures" v-if="window_width <= 925" :key="rerender">
                        <img src="../assets/images/Bug_Zapper_Coming_Soon.png" alt="Portfolio Website" loading="lazy" class="project-pic"/>
                    </div>
                    <p><strong>Made with:</strong>
                        <img src="../assets/icons/icons8-react-30.png" alt="React" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-javascript.svg" alt="Javascript" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-css3.svg" alt="CSS3" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-html-5.svg" alt="HTML5" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-firebase-48.png" alt="Firebase" loading="lazy" class="icon">
                    </p>
                    <h4>Description:<p>
                        Say goodbye to those pesky bugs with Bug Zapper, the ultimate web application for tracking and 
                        zapping all the nasty bugs in your code! With Bug Zapper, you can quickly and easily track and 
                        resolve issues in your code, ensuring that your software is of the highest quality. Bug Zapper 
                        is a user-friendly and intuitive web application that provides a centralized platform for you to
                        resolve all of your bugs! <!-- If you're tired of dealing with those pesky bugs, try Bug Zapper today and zap 
                        them once and for all! -->
                    </p></h4>
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

        data() {
            return {
                window_width: null,
                rerender: 0
            }
        },

        mounted() {

            window.addEventListener('resize', () => {
                let prev_size = this.window_width;
                this.window_width = window.innerWidth;

                if ((prev_size >= 925 && this.window_width < 925) || (prev_size < 925 && this.window_width >= 925)) this.rerender += 1;
            });
        },

        components: {SocialMedia, NavBar}
    }
</script>

<style scoped>
    #backgroundVideo {
        max-width: 115vw;
    }

    .projects {
        background-color: transparent;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-pic {
        width: 85%;
        height: 100%;
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .projects-title {
        text-align: center;
        margin-bottom: 1rem;
        color: var(--secondary-color);
        width: 50%;
    }

    .project-container {
        display: flex;
        text-align: center;
        width: 70%;
    }

    .project-title {
        margin-bottom: 0.5rem;
    }

    .project-card {
        background-color: white;
        border-radius: 11px;
        box-shadow: 0 3px 10px azure;
        padding: 20px;
        margin: 10px;
        justify-content: center;
        align-items: center;
    }

    .project-left {
        width: 50%;
        height: 100%;
    }

    .project-right {
        text-align: left;
        width: 50%;
    }

    .project-right a {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 3%;
        color: #14110F;
        width: fit-content;
    }

    .project-right a:hover {
        color: var(--secondary-color);
    }

    .project-right p {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        overflow-x: auto;
    }

    .project-right .icon {
        width: 32px;
        height: 32px;
        margin-left: 10px;
    }

    .project-right h4 {
        display: flex;
        flex-direction: row;
    }

    .project-right h4 p {
        margin: 0 0 0 1rem;
        font-family: "Montserrat", "serif";
    }

    @media screen and (max-width: 925px) {
        #backgroundVideo {
            max-width: none;
        }

        .project-right {
            width: 90%;
        }

        .project-right a {
            width: 38%
        }

        .pictures {
            text-align: center;
        }

        .project-right img .project-pic {
            width: 100%;
            height: 100%;
        }

        .project-title {
            text-align: center;
        }
    }
</style>
