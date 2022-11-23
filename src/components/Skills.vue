<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="skills" id="skills">
        <h1 class="skill-header" data-aos="fade-down" data-aos-duration="1000">My Skills</h1>
        <div class="skills-wrapper-large" v-if="window_width > 925" :key="rerender">
            <div>
                <img
                    src="../assets/icons/icons8-html-5.svg"
                    alt="HTML5"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-css3.svg"
                    alt="CSS3"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-javascript.svg"
                    alt="JavaScript"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-python.svg"
                    alt="Python"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down-left"
                    data-aos-duration="1000"
                />
            </div>
            <div>
                <img
                    src="../assets/icons/icons8-c++.svg"
                    alt="C++"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-c-programming.svg"
                    alt="C"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-java.svg"
                    alt="Java"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-mysql-logo-144.png"
                    alt="MySQL"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                />
            </div>
            <div>
                <img
                    src="../assets/icons/icons8-git.svg"
                    alt="Git"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-vue-js-144.png"
                    alt="Vue JS"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-flask-100.png"
                    alt="Flask"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-amazon-web-services-144.png"
                    alt="AWS"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                />
            </div>
        </div>
        <div class="skills-wrapper-small" v-else>
            <div>
                <img
                    src="../assets/icons/icons8-html-5.svg"
                    alt="HTML5"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-css3.svg"
                    alt="CSS3"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-javascript.svg"
                    alt="JavaScript"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-down-left"
                    data-aos-duration="1000"
                />
            </div>
            <div>
                <img
                    src="../assets/icons/icons8-python.svg"
                    alt="Python"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-c++.svg"
                    alt="C++"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-c-programming.svg"
                    alt="C"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                />
            </div>
            <div>
                <img
                    src="../assets/icons/icons8-java.svg"
                    alt="Java"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-mysql-logo-144.png"
                    alt="MySQL"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-git.svg"
                    alt="Git"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                />
            </div>
            <div>
                <img
                    src="../assets/icons/icons8-vue-js-144.png"
                    alt="Vue JS"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-flask-100.png"
                    alt="Flask"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />
                <img
                    src="../assets/icons/icons8-amazon-web-services-144.png"
                    alt="AWS"
                    loading="lazy"
                    class="icon icon-card"
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                />
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
        name: "my-skills",

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
    .skills {
        max-width: 68.75rem;
        margin: auto;
        text-align: center;
    }

    .skill-header {
        margin-bottom: 1rem;
        margin-top: 1rem;
        color: #7E7F83;
    }

    .skills-wrapper-large img {
        padding: 1.25rem;
    }

    .icon {
        width: 11.875rem;
        height: 11.25rem;
    }

    .icon-card {
        background-color: white;
        border-radius: 11px;
        box-shadow: 0 3px 10px azure;
        padding: 20px;
        margin: 10px;
    }

    .icon:hover,
    .icon-card:hover {
        width: 12.875rem;
        height: 12.25rem;
        margin: 2px;
        transition-timing-function: ease;
    }

    @media screen and (max-width: 925px) {
        .icon {
            width: 9rem;
            height: 9rem;
        }

        .icon:hover, .icon-card:hover {
            width: 11rem;
            height: 11rem;
        }
    }
</style>
