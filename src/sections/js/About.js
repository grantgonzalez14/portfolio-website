import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import '../css/About.scss';

function About() {
    const [mobile, setMobile] = useState(isMobile);
    
    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 925);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    return (
        <>
            <section className='about'>
                <div className='about-container' data-aos='fade-up' data-aos-duration='1000'>
                    <h1 className='about-header'>About Me</h1>
                    <div className='bio'>
                        <p>I'm Grant! I'm currently working as a full-stack software developer in New York City. I'm a recent 
                            computer science graduate from Clemson University and am an alumni member of Theta Chi fraternity.</p>
                    </div>
                    <br/><br/>
                    
                    <div className='experience-header'>
                        <h2>Experience</h2>
                    </div>
                    
                    <div className='previous-experience'>
                    <div className='db-services'>
                            <p><i><strong>DB Services - Application Developer</strong></i></p><br/>
                            <ul style={{'listStyleType':'disc'}}>
                                <li>
                                    Develops custom FileMaker solutions for clients, leveraging advanced scripting, layout design, and 
                                    database management techniques to create intuitive and efficient applications.
                                </li><br/>
                                <li>
                                    Implemented API integrations to enhance functionality and connectivity, seamlessly integrating third-party 
                                    services such as Stripe payment gateways, BackBlaze cloud photo storage, and Amazon selling partner services
                                    platforms into FileMaker solutions.
                                </li><br/>
                                <li>
                                    Contributes to the development lifecycle of FileMaker projects, from initial concept to deployment, ensuring 
                                    adherence to project timelines, budget constraints, and quality standards, while actively communicating with 
                                    stakeholders to gather feedback and refine solutions as needed.
                                </li>
                            </ul>
                        </div>
                        <div className='qualtrics'>
                            <p><i><strong>Qualtrics - Software Test Engineer Intern</strong></i></p><br/>
                            <ul style={{'listStyleType':'disc'}}>
                                <li>Utilized wide range of development tools, including Python, MySQL, Redash, and Gitlab.</li><br/>
                                <li>Worked closely with company mentor to learn best practices.</li><br/>
                                <li>Conducted full lifecycle software development from planning to deployment and maintenance.</li><br/>
                                <li>Participated in development team trainings, daily meetings, and huddles.</li>
                            </ul>
                        </div>
                        <div className='eleos'>
                            <p><i><strong>Eleos Technologies - Software QA Analyst</strong></i></p><br/>
                            <ul style={{'listStyleType':'disc'}}>
                                <li>
                                    Tested functionality, performance and compliance of each product against design specifications to maintain strong
                                    development standards and high customer satisfaction.
                                </li><br/>
                                <li>
                                    Searched for bugs in newly-developed aspects of existing web applications in sandbox environments, reporting
                                    errors to deliver complete functionality.
                                </li><br/>
                                <li>
                                    Collaborated with developers, system installers and technical support representatives in identifying errors to
                                    determine appropriate team to consult for resolving issue.
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;