<template>
    <div class="nav">
        <a class="btn" href="/home">Home</a>
        <a class="btn" href="/about">About</a>
        <a class="btn" href="/education">Education</a>
        <a class="btn" href="/skills">Skills</a>
        <a class="btn" href="/projects">Projects</a>
        <a class="btn" href="/contact">Contact</a>
    </div>


    <div class="burger-nav">
        <button class="hamburger" @click="show()">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
        </button>

        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://www.linkedin.com/in/grant-gonzalez-165117205/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/grantgonzalez14" target="_blank" class="github-link"></a>Github</li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',

        methods: {
            show() {
                document.querySelector('.hamburger').classList.toggle('open');
                document.querySelector('.burger-nav').classList.toggle('active');
            }
        }
    }
</script>

<style scoped>
    .nav {
        width: 100%;
        height: 45px;
        background-color: #7E7F83;
        overflow: auto;
        visibility: visible;
    }

    .nav a {
        float: left;
        padding: 12px;
        color: #F3F3F4;
        text-decoration: none;
        font-size: 17px;
        transition: 0.2s ease-in;
    }

    .nav a:hover {
        background-color: #D9C5B2;
        color: #34312D;
        box-shadow: 0 0 5px #D9C5B2,
                    0 0 25px #D9C5B2,
                    0 0 50px #D9C5B2,
                    0 0 200px #D9C5B2;
    }

    .burger-nav {
        visibility: hidden;
        width: 0;
        height: 0;
        z-index: 1;
    }

    @media screen and (max-width: 925px) {
        /* Large Tablets */
        * {
            margin: 0;
            padding: 0;
        }

        a, button {
            cursor: pointer;
        }

        nav {
            position: absolute;
        }

        .nav {
            visibility: hidden;
            height: 0;
        }

        .burger-nav a {
            color: #F3F3F4;
            text-decoration: none;
            font-size: 17px;
        }

        .burger-nav a:hover {
            color: #34312D;
        }

        .burger-nav {
            position: fixed;
            visibility: visible;
            right: -100vw;
            width: 0;
            height: 100%;
            background-color: #7E7F83;
            transition: 0.7s;
        }

        .burger-nav ul li {
            color: #F3F3F4;
            text-align: left;
            text-transform: uppercase;
            font-size: 17px;
            list-style-type: none;
            padding: 15px 30px;
            border-bottom: 1pt solid #D9C5B2;
        }

        .hamburger, .bar {
            position: fixed;
        }

        .hamburger {
            display: block;
            top: 5vh;
            left: 93vw;
            width: 30px;
            height: 30px;
            transform: translateY(-50%);
            border: 0;
            background: 0 0;
            z-index: 1;
        }

        .bar {
            top: 0;
            background: #7E7F83;
            width: 100%;
            height: 4px;
            transition: all 0.3s ease-in;
            z-index: 1;
        }

        #bar2 {
            top: 8px;
        }

        #bar3 {
            top: 16px;
        }

        .burger-nav.active {
            right: 0;
            width: 225px;
            height: 100%;
            transition: 0.5s ease-out;
            z-index: 1;
        }

        .hamburger.open #bar1 {
            background-color: #F3F3F4;
            transform: rotate(45deg) translate(6px, 5px);
        }

        .hamburger.open #bar2 {
            background-color: transparent;
        }

        .hamburger.open #bar3 {
            background-color: #F3F3F4;
            transform: rotate(-45deg) translate(6px, -5px);
        }


    }

    @media screen and (max-width: 500px) {
        .hamburger {
            display: block;
            top: 5vh;
            left: 92vw;
            width: 30px;
            height: 30px;
            transform: translateY(-50%);
            border: 0;
            background: 0 0;
        }
    }

    @media screen and (max-width: 425px) {
        .hamburger {
            display: block;
            top: 5vh;
            left: 90vw;
            width: 30px;
            height: 30px;
            transform: translateY(-50%);
            border: 0;
            background: 0 0;
        }
    }

</style>