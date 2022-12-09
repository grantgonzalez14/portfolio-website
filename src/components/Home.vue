<template>
    <video autoplay muted id="backgroundVideo">
        <source src="../assets/videos/space_time_rip_small.mp4" type="video/mp4">
    </video>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <div class="pictures" v-if="window_width > 425" :key="rerender">
        <img src="../assets/images/GRingCeremony.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img up">
        <img src="../assets/images/GnBSikes.jpg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-down" :data-aos-duration="data_aos_animation_time" class="g-img down">
        <img src="../assets/images/GRatDV.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img up double">
        <img src="../assets/images/GatSeattleLake.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-down" :data-aos-duration="data_aos_animation_time" class="g-img down">
        <img src="../assets/images/GatQ.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="g-img up">
    </div>
    <div class="bio" data-aos="zoom-in" :data-aos-duration="data_aos_animation_time">
        <h1>Grant Gonzalez</h1>
        <h1>CS Student</h1>
    </div>
    <div class="pictures" v-if="window_width <= 425" :key="rerender">
        <img src="../assets/images/GRingCeremony.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up-left" :data-aos-duration="data_aos_animation_time" class="g-img right">
        <img src="../assets/images/GnBSikes.jpg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up-right" :data-aos-duration="data_aos_animation_time" class="g-img left">
        <img src="../assets/images/GRatDV.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up-left" :data-aos-duration="data_aos_animation_time" class="g-img up right">
        <img src="../assets/images/GatSeattleLake.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up-right" :data-aos-duration="data_aos_animation_time" class="g-img left">
        <img src="../assets/images/GatQ.jpeg" alt="Grant Ring Ceremony" loading="lazy" data-aos="fade-up-left" :data-aos-duration="data_aos_animation_time" class="g-img right">
    </div>
    <div class="images" v-if="window_width > 425" :key="rerender">
        <img src="../assets/icons/icons8-active-directory-80.png" alt="Active Directory" loading="lazy" data-aos="fade-right" :data-aos-duration="data_aos_animation_time" class="ps-img">
        <img src="../assets/icons/icons8-code-80.png" alt="Code Image" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="ps-img">
        <img src="../assets/icons/icons8-code-fork-80.png" alt="Code Fork Image" loading="lazy" data-aos="fade-down" :data-aos-duration="data_aos_animation_time" class="ps-img">
        <img src="../assets/icons/icons8-module-80.png" alt="Module Image" loading="lazy" data-aos="fade-up" :data-aos-duration="data_aos_animation_time" class="ps-img">
        <img src="../assets/icons/icons8-web-design-80.png" alt="Web Design Image" loading="lazy" data-aos="fade-left" :data-aos-duration="data_aos_animation_time" class="ps-img">
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

    h1 {
        color: #7E7F83;
        font-family: "Montserrat", "serif";
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

    .pictures .g-img {
        display: inline-block;
        justify-content: center;
        width: 12%;
        height: 12%;
        margin: 2% 4% 0 4%;
    }

    .up {
        padding-bottom: 5%;
    }

    .down {
        padding-top: 5%;
    }

    .double {
        padding-bottom: 10%;
    }

    @media screen and (max-width: 425px) {
        #backgroundVideo {
            max-width: none;
        }

        h1 {
            color: var(--primary-color);
            font-family: "Montserrat", "serif";
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
