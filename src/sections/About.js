import React from 'react';
import './About.scss';

function About() {
    return (
        <>
            <section className='about'>
                <div className='about-container' data-aos='fade-up' data-aos-duration='1000'>
                    <h1 className='about-header'>About Me</h1>
                    <div className='bio'>
                        <p>I'm Grant! I'm a recent computer science graduate from Clemson University.
                            I'm an alumni member of Theta Chi fraternity and have held the executive position of Scholarship
                            Chair in the past. I'm currently looking to start my career as a software engineer!</p>
                    </div>
                    <br/><br/>

                    <div className='previous-experience'>
                        <div className='experience-header'>
                        <h2>Experience</h2>
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
                                <li>Tests functionality, performance and compliance of each product against design specifications to maintain strong
                                development standards and high customer satisfaction.</li><br/>
                                <li>Searches for bugs in newly-developed aspects of existing web applications in sandbox environments, reporting
                                errors to deliver complete functionality.</li><br/>
                                <li>Collaborates with developers, system installers and technical support representatives in identifying errors to
                                determine appropriate team to consult for resolving issue.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;