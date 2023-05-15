import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <>
            <section class='projects' id='projects'>
                <h1 class='projects-header' data-aos='flip-down' data-aos-duration='1000'>My Projects</h1>
                <div class='projects-container'>
                    <div class='project-container project-card' data-aos='fade-left' data-aos-duration='1000'>
                        <div class='project-left'>
                            <img src='assets/images/portfolio-website.png' alt='Portfolio Website' loading='lazy' class='project-pic' />
                        </div>
                        <div class='project-right'>
                            <h3 class='project-title'><i>Portfolio Website</i></h3>
                            <p><strong>Made with:</strong>
                                <img src='assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='icon' />
                            </p>
                            <h4>Description:<p>You're lookin' at it!</p></h4>
                            <a href='/home'><strong>Check it out!</strong></a>
                            <a href='https://github.com/grantgonzalez14/portfolio-website' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
                        </div>
                    </div>

                    <div class='project-container project-card' data-aos='fade-left' data-aos-duration='1000'>
                        <div class='project-left'>
                            <img src='assets/images/Bug_Zapper_Home_Page.png' alt='Bug Zapper Home Page' loading='lazy' class='project-pic' />
                        </div>
                        <div class='project-right'>
                            <h3 class='project-title'><i>Bug Zapper</i></h3>
                            <p><strong>Made with:</strong>
                                <img src='assets/icons/icons8-react-30.png' alt='React' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='icon' />
                                <img src='assets/icons/icons8-firebase-48.png' alt='Firebase' loading='lazy' class='icon' />
                            </p>
                            <h4>Description:<p>
                                Say goodbye to those pesky bugs with Bug Zapper, the ultimate web application for tracking and 
                                zapping all the nasty bugs in your code! With Bug Zapper, you can quickly and easily track and 
                                resolve issues in your code, ensuring that your software is of the highest quality. Bug Zapper 
                                is a user-friendly and intuitive web application that provides a centralized platform for you to
                                resolve all of your bugs!
                            </p></h4>
                            <a href='https://bug-zapper.netlify.app/' target='_blank' rel='noreferrer'><strong>Check it out!</strong></a>
                            <a href='https://github.com/grantgonzalez14/bug-zapper' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Projects;