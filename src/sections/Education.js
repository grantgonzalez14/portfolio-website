import React from 'react';
import './Education.scss';

function Education() {
    return (
        <>
            <section class="education" id="education">
                <div class="education-container" data-aos="zoom-out" data-aos-duration="1000">
                    <h1 class="education-header">My Education</h1>
                    <div class="container">
                        <div class="education-images">
                            <img src="../assets/images/clemson_logo.png" alt="Clemson Seal" loading="lazy" class="clemson-images" id="clemson-logo" />
                            <img src="../assets/images/Clemson-SOC.png" alt="Clemson School of Computing" loading="lazy" class="clemson-images" />
                            <img src="../assets/images/theta-chi-clemson.jpeg" alt="Theta Chi Clemson" loading="lazy" class="clemson-images" />
                            <img src="../assets/images/clemson-tigers.webp" alt="Clemson Tigers" loading="lazy" class="clemson-images" />
                        </div>
                        <div class="education-info">
                            <h3>School:<p>&nbsp;Clemson University</p></h3>
                            <h3>Degree:<p>&nbsp;B.S. Computer Science</p></h3>
                            <h3>GPA:<p>&nbsp;3.47</p></h3>
                            <h3>President's List:<p>&nbsp;Spring 2022</p></h3>
                            <h3>Dean's List:<p>&nbsp;Fall 2021, Spring 2023</p></h3>
                            <h3>Extracurriculars:&nbsp;<p>Theta Chi Fraternity</p></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;