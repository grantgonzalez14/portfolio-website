<template>
    <video autoplay muted id="backgroundVideo">
        <source src="../assets/videos/space_time_rip_small.mp4" type="video/mp4">
    </video>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <div class="pictures" v-if="window_width > 425" :key="rerender">
        <div class="up">
            <img src="../assets/images/GatSeattleLake.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img">
        </div>
        <div class="down">
            <img src="../assets/images/GGGradBowman.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-down" :data-aos-duration="data_aos_animation_time" class="g-img">
        </div>
        <div class="up">
            <img src="../assets/images/GGGradSikes.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img">
        </div>
        <div class="down">
            <img src="../assets/images/GGGradBowmanRing.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-down" :data-aos-duration="data_aos_animation_time" class="g-img">
        </div>
        <div class="up">
            <img src="../assets/images/GatQ.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img">
        </div>
    </div>
    <div class="bio" data-aos="zoom-in" :data-aos-duration="data_aos_animation_time">
        <h1 class="title">Grant Gonzalez - Software Developer</h1>
        <h2 class="about-me">
            Hi, I'm Grant! I'm a software developer that specializes in front-end web development!
            I'm a results-driven web developer with a passion for creating engaging, interactive, and visually
            appealing websites. With a deep understanding of web development principles and experience with
            front-end technologies such as Vue, React, JavaScript, Python, HTML, and CSS, I specialize in bringing
            complex ideas to life in a simple, effective way. <br><br>
            I believe that great web development requires more than just technical expertise. It also requires a
            deep understanding of user experience, design principles, and the ability to work collaboratively with
            clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
            practices in web development, and I'm always looking for new opportunities to learn and grow. <br><br>
            If you're looking for a web developer who is passionate about creating high-quality, user-focused solutions,
            I'd love to hear from you! Let's work together to create a website that truly stands out in today's crowded
            digital landscape.
        </h2>
    </div>
</template>

<script>
    import NavBar from "@/components/Navbar";
    import SocialMedia from "@/components/Socials";

    export default {
        name: "home-page",

        data() {
            return {
                window_width: null,
                rerender: 0,
                data_aos_animation_time: 2000
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
    #backgroundVideo {
        max-width: 115vw;
    }

    .bio {
        display: block;
        text-align: center;
        margin-bottom: 4%;
    }

    .title,
    .about-me {
        color: #7E7F83;
        font-family: "Montserrat", "serif";
        margin: 1rem 25% 0 25%;
    }

    .images {
        background-color: transparent;
        text-align: center;
    }

    .images .ps-img {
        display: inline-block;
        justify-content: center;
        width: 160px;
        height: 160px;
        margin: 0 4% 10%;
    }

    .pictures {
        display: flex;
        flex-direction: row;
        background-color: transparent;
        text-align: center;
        align-items: center;
        margin: 0 5% 0 5%;
    }

    .g-img {
        display: inline-block;
        justify-content: center;
        width: 50%;
        height: 12%;
        margin: 2% 4% 0 4%;
        border-radius: 10px;
    }

    .up {
        width: 100%;
        padding-bottom: 3%;
    }

    .down {
        width: 100%;
        padding-top: 5%;
    }

    .double {
        padding-bottom: 7%;
    }

    @media screen and (max-width: 425px) {
        #backgroundVideo {
            max-width: none;
        }

        .pictures {
            display: flex;
            flex-direction: column;
            background-color: transparent;
            text-align: center;
            align-items: center;
        }

        .pictures .g-img {
            display: inline-block;
            justify-content: center;
            width: 50%;
            height: 50%;
            margin: 2% 4% 3% 4%;
        }

        .left {
            padding-right: 20%;
        }

        .right {
            padding-left: 20%;
        }
    }
</style>
