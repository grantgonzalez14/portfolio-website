import React from 'react';
import './Skills.scss';

function Skills() {
    return (
        <>
            <section className='skills' id='skills'>
                <h1 className='skill-header' data-aos='fade-in' data-aos-duration='1000'>My Skills</h1>
                <div className='skills-wrapper-large'>
                    <div>
                        <img
                            src='assets/icons/icons8-html-5.svg'
                            alt='HTML5'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='html'
                        />
                        <img
                            src='assets/icons/icons8-css3.svg'
                            alt='CSS3'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='css'
                        />
                        <img
                            src='assets/icons/icons8-javascript.svg'
                            alt='JavaScript'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='javascript'
                        />
                        <img
                            src='assets/icons/icons8-python.svg'
                            alt='Python'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='python'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-c++.svg'
                            alt='C++'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='cpp'
                        />
                        <img
                            src='assets/icons/icons8-c-programming.svg'
                            alt='C'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='c'
                        />
                        <img
                            src='assets/icons/icons8-java.svg'
                            alt='Java'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='java'
                        />
                        <img
                            src='assets/icons/icons8-mysql-logo-144.png'
                            alt='MySQL'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='mysql'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-git.svg'
                            alt='Git'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='git'
                        />
                        <img
                            src='assets/icons/icons8-vue-js-144.png'
                            alt='Vue JS'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='vue'
                        />
                        <img
                            src='assets/icons/icons8-react-160.png'
                            alt='React'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='react'
                        />
                        <img
                            src='assets/icons/icons8-flask-100.png'
                            alt='Flask'
                            loading='lazy'
                            className='icon icon-card'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            id='flask'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;