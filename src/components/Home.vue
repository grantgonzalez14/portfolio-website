<template>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <div class="pictures">
        <img src="../assets/images/GRingCeremony.jpeg" alt="Grant Ring Ceremony" loading="lazy" class="g-img up">
        <img src="../assets/images/GnBSikes.jpg" alt="Grant Ring Ceremony" loading="lazy" class="g-img down">
        <img src="../assets/images/GRatLJ.jpeg" alt="Grant Ring Ceremony" loading="lazy" class="g-img up double">
        <img src="../assets/images/GatSeattleLake.jpeg" alt="Grant Ring Ceremony" loading="lazy" class="g-img down">
        <img src="../assets/images/GatQ.jpeg" alt="Grant Ring Ceremony" loading="lazy" class="g-img up">
    </div>
    <div class="images">
        <img src="../assets/icons/icons8-active-directory-80.png" alt="Active Directory" loading="lazy" class="ps-img">
        <img src="../assets/icons/icons8-code-80.png" alt="Code Image" loading="lazy" class="ps-img">
        <img src="../assets/icons/icons8-code-fork-80.png" alt="Code Fork Image" loading="lazy" class="ps-img">
        <img src="../assets/icons/icons8-module-80.png" alt="Module Image" loading="lazy" class="ps-img">
        <img src="../assets/icons/icons8-web-design-80.png" alt="Web Design Image" loading="lazy" class="ps-img">
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
  .images {
    background-color: #14110F;
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
      background-color: #14110F;
      text-align: center;
  }

  .pictures .g-img {
      display: inline-block;
      justify-content: center;
      width: 12%;
      height: 12%;
      margin: 2% 4% 10%;
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



  @media screen and (max-width: 812px) {
      #canvas {
          visibility: hidden;
          width: 0;
          height: 0;
      }
  }


</style>
