import React from 'react';
import './About.scss';

function About() {
    return (
        <>
            <section class='about'>
                <div class='about-container' data-aos='fade-up' data-aos-duration='1000'>
                    <h1 class='about-header'>About Me</h1>
                    <div class='bio'>
                        <p>I'm Grant! I'm a recent computer science graduate from Clemson University.
                            I'm an alumni member of Theta Chi fraternity and have held the executive position of Scholarship
                            Chair in the past. I'm currently looking to start my career as a software engineer!</p>
                    </div>
                    <br/><br/>

                    <div class='previous-experience'>
                        <div class='experience-header'>
                        <h2>Experience</h2>
                        </div>
                        <div class='qualtrics'>
                            <p><i><strong>Qualtrics - Software Test Engineer Intern</strong></i></p><br/>
                            <ul style={{'list-style-type':'disc'}}>
                                <li>Utilized wide range of development tools, including Python, MySQL, Redash, and Gitlab.</li><br/>
                                <li>Worked closely with company mentor to learn best practices.</li><br/>
                                <li>Conducted full lifecycle software development from planning to deployment and maintenance.</li><br/>
                                <li>Participated in development team trainings, daily meetings, and huddles.</li>
                            </ul>
                        </div>
                        <div class='eleos'>
                            <p><i><strong>Eleos Technologies - Software QA Analyst</strong></i></p><br/>
                            <ul style={{'list-style-type':'disc'}}>
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