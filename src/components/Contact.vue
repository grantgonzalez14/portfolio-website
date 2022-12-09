<template>
    <video autoplay muted loop id="backgroundVideo">
        <source src="../assets/videos/Particles_Small.mp4" type="video/mp4">
    </video>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="contact" id="contact">
        <div class="contact-form-container" data-aos="fade-down" data-aos-duration="1000">
            <h1>Get In Touch With Me</h1>
            <div class="contact-form">
                <form action="https://formspree.io/f/xnqrjaoe" method="POST">
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="sender-name" placeholder="Enter your name" class="input-field" required/>
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="sender-email" placeholder="Enter Your Email" class="input-field" required/>
                    </div>
                    <div class="form-control">
                        <label for="message">Message</label>
                        <textarea id="message" cols="60" rows="10" placeholder="Enter Your Message" name="message" class="input-field" required></textarea>
                    </div>
                    <input type="submit" value="Submit" id="submit-btn" class="submit-btn"/>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import NavBar from "@/components/Navbar";
    import SocialMedia from "@/components/Socials";

    export default {
        name: "contact-me",

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
    #backgroundVideo {
        max-width: 115vw;
    }

    .contact {
        display: grid;
        height: 85vh;
        place-items: center;
    }

    .contact h1 {
        text-align: center;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }

    .contact-form-container {
        background-color: white;
        max-width: 40.75rem;
        max-height: 35rem;
        margin: 0 auto;
        padding: 0.938rem;
        border-radius: 5px;
        box-shadow: 0 3px 10px azure;
    }

    .contact-form-container label {
        line-height: 2.7em;
        font-weight: 700;
        color: #14110F;
    }

    .contact-form-container textarea {
        min-height: 6.25rem;
        font-size: 14px;
    }

    .contact-form-container .input-field {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;
        border: 2px outset var(--primary-color);
        font-size: 0.875rem;
        outline: none;
    }

    .input-field::placeholder {
        padding: 0.5rem;
        color: var(--primary-color);
    }

    .submit-btn {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        background-color: white;
        border: 2px solid var(--primary-color);
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 700;
        transition: 0.3s;
    }

    .submit-btn:hover {
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        color: var(--quaternary-color);
        cursor: pointer;
    }

    @media screen and (max-width: 425px) {
        #backgroundVideo {
            max-width: none;
        }

        .contact-form-container {
            width: 80%;
            margin-top: 15%;
        }
    }
</style>
