import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import './Projects.scss';

function Projects() {
    const [mobile, setMobile] = useState(isMobile);
    
    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 925);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    return (
        <>
            <section className='projects' id='projects'>
                <h1 className='projects-header' data-aos='fade-in' data-aos-duration='1000'>My Projects</h1>
                <div className='projects-container'>
                    <div className='project-container project-card' data-aos='fade-up' data-aos-duration='1000'>
                        {!mobile && 
                        <div className='project-left'>
                            <img src='assets/images/portfolio-website.png' alt='Portfolio Website' loading='lazy' className='project-pic' />
                        </div>}
                        <div className='project-right'>
                            <h3 className='project-title'><i>Portfolio Website</i></h3>
                            {mobile && 
                            <div className='pictures'>
                                <img src='assets/images/portfolio-website.png' alt='Portfolio Website' loading='lazy' className='project-pic' />
                            </div>}
                            <p><strong>Made with:</strong>
                                <img src='assets/icons/icons8-react-30.png' alt='Vue JS' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' className='icon' />
                            </p>
                            <h4>Description:<p>You're lookin' at it!</p></h4>
                            <a href='/home'><strong>Check it out!</strong></a>
                            <a href='https://github.com/grantgonzalez14/portfolio-website' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
                        </div>
                    </div>

                    <div className='project-container project-card' data-aos='fade-up' data-aos-duration='1000'>
                        {!mobile && 
                        <div className='project-left'>
                            <img src='assets/images/Bug_Zapper_Home_Page.png' alt='Bug Zapper Home Page' loading='lazy' className='project-pic' />
                        </div>}
                        <div className='project-right'>
                            <h3 className='project-title'><i>Bug Zapper</i></h3>
                            {mobile && 
                            <div className='pictures'>
                                <img src='assets/images/Bug_Zapper_Home_Page.png' alt='Portfolio Website' loading='lazy' className='project-pic' />
                            </div>}
                            <p><strong>Made with:</strong>
                                <img src='assets/icons/icons8-react-30.png' alt='React' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' className='icon' />
                                <img src='assets/icons/icons8-firebase-48.png' alt='Firebase' loading='lazy' className='icon' />
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