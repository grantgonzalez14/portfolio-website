<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
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
                    <a href="/" onclick="return false">Check it out!</a>
                    <a href="/" target="_blank" onclick="return false">Source Code</a>
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
                    <a href="/" onclick="return false">Check it out!</a>
                    <a href="/" target="_blank" onclick="return false">Source Code</a>
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
            this.window_width = window.innerWidth;

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
    .projects {
        background-color: #14110F;
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
        color: #7E7F83;
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
    }

    .project-right a:hover {
        color: #7E7F83;
    }

    .project-right p {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        overflow-x: auto;
    }

    .project-right img {
        width: 32px;
        height: 32px;
        margin-left: 10px;
    }
</style>