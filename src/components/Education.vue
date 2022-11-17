<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="education" id="education">
        <div class="education-container" data-aos="zoom-out" data-aos-duration="1000">
            <h1 class="education-header">My Education</h1>
            <div class="container">
                <div class="education-images" v-if="window_width < 425" :key="rerender">
                    <img src="../assets/images/clemson_logo.png" alt="Clemson Seal" loading="lazy" class="clemson-images" id="clemson-logo">
                    <img src="../assets/images/Clemson-SOC.png" alt="Clemson School of Computing" loading="lazy" class="clemson-images">
                    <img src="../assets/images/theta-chi-clemson.jpeg" alt="Theta Chi Clemson" loading="lazy" class="clemson-images">
                    <img src="../assets/images/clemson-tigers.webp" alt="Clemson Tigers" loading="lazy" class="clemson-images">
                </div>
                <div class="education-images-container" v-else>
                    <div class="education-images">
                        <img src="../assets/images/clemson_logo.png" alt="Clemson Seal" loading="lazy" class="clemson-images" id="clemson-logo">
                        <img src="../assets/images/Clemson-SOC.png" alt="Clemson School of Computing" loading="lazy" class="clemson-images">
                    </div>
                    <div class="education-images">
                        <img src="../assets/images/theta-chi-clemson.jpeg" alt="Theta Chi Clemson" loading="lazy" class="clemson-images" id="theta-chi">
                        <img src="../assets/images/clemson-tigers.webp" alt="Clemson Tigers" loading="lazy" class="clemson-images">
                    </div>
                </div>
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
    }

    .education-container {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 45rem;
        margin: 0 auto;
        padding: 0.938rem;
        border-radius: 5px;
        box-shadow: 0 3px 10px azure;
        justify-content: left;
    }

    .education-images {
        width: 50%;
    }

    .education-images-container {
        display: flex;
        flex-direction: row;
        width: 50%;
    }

    .clemson-images {
        height: 150px;
        width: 150px;
        margin-top: 2rem;
        padding: 0.25rem;
    }

    .education-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 5%;
        margin-bottom: 0.5rem;
        overflow-wrap: normal;
    }

    .education-info h3 {
        display: flex;
        margin-bottom: 1rem;
        justify-content: left;
    }

    @media screen and (max-width: 925px) {
        .education {
            max-width: 30rem;
        }

        .education-container {
            max-width: 30rem;
        }

        .clemson-images {
            height: 100px;
            width: 100px;
            margin-top: 0.5rem;
        }

        .container {
            width: 60vw;
            text-align: left;
        }

        #clemson-logo, #theta-chi {
            margin-top: 3rem;
        }
    }

    @media screen and (max-width: 425px) {
        .education {
            max-width: 30rem;
        }

        .education-container {
            width: 15rem;
            flex-direction: column;
        }

        .education-images {
            width: 50%;
        }

        .clemson-images {
            height: 100px;
            width: 100px;
        }

        #clemson-logo {
            margin-top: 1rem;
        }

        #theta-chi {
            margin-top: 0;
        }

        .container {
            text-align: left;
        }
    }
</style>