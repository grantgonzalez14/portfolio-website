<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="projects" id="projects">
        <h1 class="projects-title" data-aos="flip-down" data-aos-duration="1000">My Projects</h1>
        <div class="projects-container">
            <div class="project-container project-card" data-aos="fade-right" data-aos-duration="1000">
                <div class="project-left" v-if="window_width > 925" :key="rerender">
                    <img src="../assets/images/truck-driver-incentive-program-catalog.jpeg" alt="Truck Driver Incentive Program (Coming Soon!)" loading="lazy" class="project-pic"/>
                </div>
                <div class="project-right">
                    <h3 class="project-title"><i>Truck Driver Incentive Program (Coming Soon!)</i></h3>
                    <div class="pictures" v-if="window_width <= 925" :key="rerender">
                        <img src="../assets/images/truck-driver-incentive-program-catalog.jpeg" alt="Truck Driver Incentive Program (Coming Soon!)" loading="lazy" class="project-pic"/>
                    </div>
                    <p><strong>Made with:</strong>
                        <img src="../assets/icons/icons8-vue-js-48.png" alt="Vue JS" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-javascript.svg" alt="Javascript" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-css3.svg" alt="CSS3" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-html-5.svg" alt="HTML5" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-python.svg" alt="Python" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-flask-100.png" alt="Flask" loading="lazy" class="icon">
                        <img src="../assets/icons/icons8-amazon-web-services-48.png" alt="AWS" loading="lazy" class="icon">
                    </p>
                    <h4>Description:<p>A web application that can be used to incentivize the improvement of the on-road performance of
                                    truck drivers. To encourage better driving, sponsor companies award points to drivers for behaviors they
                                    want to encourage and possibly take away points for bad driving. The program is much like many reward programs
                                    where you earn points for doing things the rewarder wants you to do. In this application, the sponsor companies
                                    maintain a catalog of products where the driver can redeem their points. This project was built as a semester long
                                    group project at Clemson University.</p></h4>
                    <a href="/" onclick="return false"><strong>Check it out!</strong></a>
                    <a href="/" target="_blank" onclick="return false"><strong>Source Code</strong></a>
                </div>
            </div>
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
            <div class="project-container project-card" data-aos="fade-right" data-aos-duration="1000">
                <div class="project-left" v-if="window_width > 925">
                    <img src="../assets/images/coming_soon.jpeg" alt="Game Engine Project (Coming Soon!)" loading="lazy" class="project-pic"/>
                </div>
                <div class="project-right">
                    <h3 class="project-title"><i>Game Engine (Coming Soon!)</i></h3>
                    <div class="pictures" v-if="window_width <= 925" :key="rerender">
                        <img src="../assets/images/coming_soon.jpeg" alt="Game Engine Project (Coming Soon!)" loading="lazy" class="project-pic"/>
                    </div>
                    <p><strong>Made with:</strong>
                        <img src="../assets/icons/icons8-python.svg" alt="Python" loading="lazy" class="icon">
                    </p>
                    <h4>Description:<p>A 2-D game engine built using the pygame library along with 2 supplementary games! The game engine "Gonzo"
                                    has multiple engines (Actor, Physics, Play, Sound, UI, Utility) to use for the creation of various 2-D games.
                                    This project was built as a semester long project at Clemson University.</p></h4>
                    <a href="/" onclick="return false"><strong>Check it out!</strong></a>
                    <a href="/" target="_blank" onclick="return false"><strong>Source Code</strong></a>
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
                console.log(this.window_width);

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
        width: 12%;
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