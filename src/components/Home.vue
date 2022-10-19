<template>
  <nav-bar></nav-bar>
  <social-media></social-media>
  <canvas id="canvas"></canvas>
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
  import { Particle } from '@/assets/js/particle';

  export default {
    name: "home-page",

    data() {
      return {
        canvas: null,
        ctx: null,
        particle_array: null,
        adjust_y: null,
        xpos1: null,
        xpos2: null,
        ypos1: null,
        ypos2: null,
        font_size: null,
        text_coordinates: null,
        text_coordinates2: null,
        mouse: null
      }
    },

    methods: {
      init() {
        for (let y = 0, y2 = this.text_coordinates.height; y < y2; y++) {
          for (let x = 0, x2 = this.text_coordinates.width; x < x2; x++) {
            if (this.text_coordinates.data[(y * 4 * this.text_coordinates.width) + (x * 4) + 3] > 128) {
              let position_x = x;
              let position_y = y + this.adjust_y;
              this.particle_array.push(new Particle(position_x * 10, position_y * 10));
            }
          }
        }

        for (let y = 0, y2 = this.text_coordinates2.height; y < y2;  y++) {
          for (let x = 0, x2 = this.text_coordinates2.width; x < x2; x++) {
            if (this.text_coordinates2.data[(y * 4 * this.text_coordinates2.width) + (x * 4) + 3] > 128) {
              let position_x = x;
              let position_y = y + this.adjust_y;
              this.particle_array.push(new Particle(position_x * 10, position_y * 10));
            }
          }
        }

      },

      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particle_array.length; i++) {
          this.particle_array[i].draw(this.ctx);
          this.particle_array[i].update(this.mouse);
        }

        requestAnimationFrame(this.animate);
      },

      main() {
        this.init();
        this.animate();
      }
    },
    mounted: function () {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight / 1.5;
      this.particle_array = [];
      this.adjust_y = 10;
      this.xpos1 = window.innerWidth * 0.008;
      this.xpos2 = window.innerWidth * 0.02;
      this.ypos1 = window.innerHeight * 0.02;
      this.ypos2 = window.innerHeight * 0.04;
      this.font_size = window.innerWidth / 90;
      this.text_coordinates = null;
      this.text_coordinates2 = null;
      this.mouse = {
        x: null,
        y: null,
        radius: 250
      };

      window.addEventListener('mousemove', (event) => {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
      });

      this.ctx.fillStyle = 'white';
      this.ctx.font = this.font_size + 'px Verdana';
      this.ctx.fillText('Grant Gonzalez', this.xpos1, this.ypos1);
      this.text_coordinates = this.ctx.getImageData(0, 0, window.innerWidth, 100);
      this.ctx.fillText('CS Student', this.xpos2, this.ypos2);
      this.text_coordinates2 = this.ctx.getImageData(0, 0, window.innerWidth, 100);

      this.main();
    },
    components: {SocialMedia, NavBar}
  }
</script>

<style scoped>
  .images {
    background-color: #14110F;
    text-align: center;
  }

  .images img {
    display: inline-block;
    justify-content: center;
    width: 160px;
    height: 160px;
    margin: 0 4% 10%;
  }
</style>