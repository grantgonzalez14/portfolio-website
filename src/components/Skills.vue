<template>
    <video autoplay muted id="backgroundVideo">
        <source src="../assets/videos/Color_Powder_Explosion_Top_Corners_Small.mp4" type="video/mp4">
    </video>
    <nav-bar></nav-bar>
    <social-media v-if="window_width > 925" :key="rerender"></social-media>
    <section class="skills" id="skills">
        <h1 class="skill-header" data-aos="fade-down" data-aos-duration="1000">My Skills</h1>
        <div class="skills-wrapper-large" v-if="window_width > 925" :key="rerender">
            <div class="row">
                <div class="flip-card" data-aos="fade-down-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-html-5.svg"
                                alt="HTML5"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="html"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>HTML5</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-down" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-css3.svg"
                                alt="CSS3"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="css"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>CSS3</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-down" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-javascript.svg"
                                alt="JavaScript"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="javascript"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>JavaScript</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-down-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-python.svg"
                                alt="Python"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="python"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Python</h1>
                            <p><strong>Years of Experience: </strong>4.5</p>
                            <p><strong>Used at: </strong>High School, Clemson University, Qualtrics</p>
                            <ul>
                                <li>Introduction to Computer Science</li>
                                <li>Networks and Network Programming</li>
                                <li>Introduction to Software Engineering</li>
                                <li>2-D Game Engine Construction</li>
                                <li>Professional Issues II</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="flip-card" data-aos="fade-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-c++.svg"
                                alt="C++"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="cpp"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>C++</h1>
                            <p><strong>Years of Experience: </strong>1.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Computer Science II</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Design Analysis of Algorithms</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-c-programming.svg"
                                alt="C"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="c"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>C</h1>
                            <p><strong>Years of Experience: </strong>3</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Computer Science I</li>
                                <li>Discrete Structures</li>
                                <li>Introduction to Computer Organization</li>
                                <li>Computer Systems Organization</li>
                                <li>Introduction to Operating Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-java.svg"
                                alt="Java"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="java"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Java</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Software Development Foundations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-mysql-logo-144.png"
                                alt="MySQL"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="mysql"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>MySQL</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Software Test Engineer Internship</li>
                                <li>Professional Issues II</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="flip-card" data-aos="fade-up-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-git.svg"
                                alt="Git"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="git"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Git</h1>
                            <p><strong>Years of Experience: </strong>1</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Introduction to Software Engineering</li>
                                <li>Professional Issues II</li>
                                <li>2-D Game Engine Construction</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-up" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-vue-js-144.png"
                                alt="Vue JS"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="vue"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Vue</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-up" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-flask-100.png"
                                alt="Flask"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="flask"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Flask</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-amazon-web-services-144.png"
                                alt="AWS"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="aws"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>AWS</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="(window_width <= 925 && window_width > 475)" :key="rerender">
            <div class="row">
                <div class="flip-card" data-aos="fade-down-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-html-5.svg"
                                alt="HTML5"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="html"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>HTML5</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-down" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-css3.svg"
                                alt="CSS3"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="css"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>CSS3</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-down-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-javascript.svg"
                                alt="JavaScript"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="javascript"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>JavaScript</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="flip-card" data-aos="fade-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-python.svg"
                                alt="Python"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="python"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Python</h1>
                            <p><strong>Years of Experience: </strong>4.5</p>
                            <p><strong>Used at: </strong>High School, Clemson University, Qualtrics</p>
                            <ul>
                                <li>Introduction to Computer Science</li>
                                <li>Networks and Network Programming</li>
                                <li>Introduction to Software Engineering</li>
                                <li>2-D Game Engine Construction</li>
                                <li>Professional Issues II</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="zoom-out" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-c++.svg"
                                alt="C++"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="cpp"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>C++</h1>
                            <p><strong>Years of Experience: </strong>1.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Computer Science II</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Design Analysis of Algorithms</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-c-programming.svg"
                                alt="C"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="c"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>C</h1>
                            <p><strong>Years of Experience: </strong>3</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Computer Science I</li>
                                <li>Discrete Structures</li>
                                <li>Introduction to Computer Organization</li>
                                <li>Computer Systems Organization</li>
                                <li>Introduction to Operating Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="flip-card" data-aos="fade-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-java.svg"
                                alt="Java"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="java"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Java</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Software Development Foundations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="zoom-out" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-mysql-logo-144.png"
                                alt="MySQL"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="mysql"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>MySQL</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Software Test Engineer Internship</li>
                                <li>Professional Issues II</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-git.svg"
                                alt="Git"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="git"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Git</h1>
                            <p><strong>Years of Experience: </strong>1</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Introduction to Software Engineering</li>
                                <li>Professional Issues II</li>
                                <li>2-D Game Engine Construction</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="flip-card" data-aos="fade-up-right" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-vue-js-144.png"
                                alt="Vue JS"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="vue"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Vue</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Personal Portfolio Website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-up" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-flask-100.png"
                                alt="Flask"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="flask"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>Flask</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                            <ul>
                                <li>Professional Issues II</li>
                                <li>Software Test Engineer Internship</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                src="../assets/icons/icons8-amazon-web-services-144.png"
                                alt="AWS"
                                loading="lazy"
                                class="icon icon-card"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                id="aws"
                            />
                        </div>
                        <div class="flip-card-back">
                            <h1>AWS</h1>
                            <p><strong>Years of Experience: </strong>0.5</p>
                            <p><strong>Used at: </strong>Clemson University</p>
                            <ul>
                                <li>Professional Issues II</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" v-if="window_width <= 475" :key="rerender">
            <div class="flip-card" data-aos="fade-down-right" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-html-5.svg"
                            alt="HTML5"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="html"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>HTML5</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Professional Issues II</li>
                            <li>Personal Portfolio Website</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-down" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-css3.svg"
                            alt="CSS3"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="css"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>CSS3</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Professional Issues II</li>
                            <li>Personal Portfolio Website</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-down-left" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-javascript.svg"
                            alt="JavaScript"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="javascript"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>JavaScript</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Professional Issues II</li>
                            <li>Personal Portfolio Website</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-right" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-python.svg"
                            alt="Python"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="python"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>Python</h1>
                        <p><strong>Years of Experience: </strong>4.5</p>
                        <p><strong>Used at: </strong>High School, Clemson University, Qualtrics</p>
                        <ul>
                            <li>Introduction to Computer Science</li>
                            <li>Networks and Network Programming</li>
                            <li>Introduction to Software Engineering</li>
                            <li>2-D Game Engine Construction</li>
                            <li>Professional Issues II</li>
                            <li>Software Test Engineer Internship</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-c++.svg"
                            alt="C++"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="cpp"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>C++</h1>
                        <p><strong>Years of Experience: </strong>1.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Computer Science II</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Design Analysis of Algorithms</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-left" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-c-programming.svg"
                            alt="C"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="c"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>C</h1>
                        <p><strong>Years of Experience: </strong>3</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Computer Science I</li>
                            <li>Discrete Structures</li>
                            <li>Introduction to Computer Organization</li>
                            <li>Computer Systems Organization</li>
                            <li>Introduction to Operating Systems</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-right" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-java.svg"
                            alt="Java"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="java"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>Java</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Software Development Foundations</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-mysql-logo-144.png"
                            alt="MySQL"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="mysql"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>MySQL</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                        <ul>
                            <li>Software Test Engineer Internship</li>
                            <li>Professional Issues II</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-left" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-git.svg"
                            alt="Git"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="git"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>Git</h1>
                        <p><strong>Years of Experience: </strong>1</p>
                        <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                        <ul>
                            <li>Introduction to Software Engineering</li>
                            <li>Professional Issues II</li>
                            <li>2-D Game Engine Construction</li>
                            <li>Software Test Engineer Internship</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-up-right" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-vue-js-144.png"
                            alt="Vue JS"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="vue"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>Vue</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Professional Issues II</li>
                            <li>Personal Portfolio Website</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-up" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-flask-100.png"
                            alt="Flask"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="flask"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>Flask</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University, Qualtrics</p>
                        <ul>
                            <li>Professional Issues II</li>
                            <li>Software Test Engineer Internship</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flip-card" data-aos="fade-up-left" data-aos-duration="1000">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src="../assets/icons/icons8-amazon-web-services-144.png"
                            alt="AWS"
                            loading="lazy"
                            class="icon icon-card"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            id="aws"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>AWS</h1>
                        <p><strong>Years of Experience: </strong>0.5</p>
                        <p><strong>Used at: </strong>Clemson University</p>
                        <ul>
                            <li>Professional Issues II</li>
                        </ul>
                    </div>
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
        name: "my-skills",

        data() {
            return {
                window_width: null,
                rerender: 0,
                clicked: []
            }
        },

        mounted() {
            this.window_width = window.innerWidth;

            window.addEventListener('resize', () => {
                let prev_size = this.window_width;
                this.window_width = window.innerWidth;

                if ((prev_size >= 925 && this.window_width < 925) || (prev_size < 925 && this.window_width >= 925)) this.rerender += 1;
            });

            for (let i = 0; i < 12; i++) this.clicked.push(false);
        },

        components: {SocialMedia, NavBar}
    }
</script>

<style scoped>
    #backgroundVideo {
        top: 0;
        max-width: 115vw;
    }

    .flip-card {
        display: flex;
        background-color: transparent;
        perspective: 1000px;
        justify-content: center;
        margin: 1.25rem;
    }

    .flip-card-inner {
        position: relative;
        width: 14.375rem;
        height: 13.75rem;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .flip-card-inner p,
    .flip-card-inner ul,
    .flip-card-inner ul li {
        text-align: left;
        color: var(--primary-color);
    }

    .flip-card-inner p {
        margin-left: 1rem;
    }

    .flip-card-inner ul li {
        margin-bottom: 0.5rem;
    }

    strong, h1 {
        color: var(--primary-color);
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        background-color: white;
        color: black;
        border-radius: 11px;
        box-shadow: 0 3px 10px azure;
    }

    .flip-card-front img {
        padding: 1.25rem;
    }

    .flip-card-back {
        background-color: var(--quaternary-color);
        color: white;
        transform: rotateY(180deg);
        border-radius: 11px;
        box-shadow: 0 3px 10px azure;
        overflow-y: auto;
    }

    .skills {
        max-width: 68.75rem;
        margin: auto;
        text-align: center;
    }

    .skill-header {
        margin-bottom: 1rem;
        margin-top: 3rem;
        color: var(--secondary-color);
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
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 925px) {
        #backgroundVideo {
            max-width: none;
            right: -60%;
        }

        .flip-card-inner {
            width: 11rem;
            height: 11rem;
        }

        .icon {
            width: 9rem;
            height: 9rem;
        }
    }
</style>
