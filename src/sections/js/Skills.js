import React from 'react';
import '../css/Skills.scss';

function Skills() {
    return (
        <>
            <section className='skills' id='skills'>
                <h1 className='skill-header' data-aos='fade-in' data-aos-duration='1000'>My Skills</h1>
                {(window.innerWidth >= 925 || window.innerWidth < 425) && 
                <div className='skills-wrapper'>
                    <div>
                        <img
                            src='assets/icons/icons8-html-5.svg'
                            alt='HTML5'
                            loading='lazy'
                            className='icon icon-card'
                            id='html'
                        />
                        <img
                            src='assets/icons/icons8-css3.svg'
                            alt='CSS3'
                            loading='lazy'
                            className='icon icon-card'
                            id='css'
                        />
                        <img
                            src='assets/icons/icons8-javascript.svg'
                            alt='JavaScript'
                            loading='lazy'
                            className='icon icon-card'
                            id='javascript'
                        />
                        <img
                            src='assets/icons/icons8-python.svg'
                            alt='Python'
                            loading='lazy'
                            className='icon icon-card'
                            id='python'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-vue-js-144.png'
                            alt='Vue JS'
                            loading='lazy'
                            className='icon icon-card'
                            id='vue'
                        />
                        <img
                            src='assets/icons/icons8-react-160.png'
                            alt='React'
                            loading='lazy'
                            className='icon icon-card'
                            id='react'
                        />
                        <img
                            src='assets/icons/FileMakerProIcon.png'
                            alt='FileMaker Pro'
                            loading='lazy'
                            className='icon icon-card'
                            id='fmp'
                        />
                        <img
                            src='assets/icons/FigmaIcon.png'
                            alt='Figma'
                            loading='lazy'
                            className='icon icon-card'
                            id='figma'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-git.svg'
                            alt='Git'
                            loading='lazy'
                            className='icon icon-card'
                            id='git'
                        />
                        <img
                            src='assets/icons/icons8-c++.svg'
                            alt='C++'
                            loading='lazy'
                            className='icon icon-card'
                            id='cpp'
                        />
                        <img
                            src='assets/icons/icons8-c-programming.svg'
                            alt='C'
                            loading='lazy'
                            className='icon icon-card'
                            id='c'
                        />
                        <img
                            src='assets/icons/PostmanIcon.png'
                            alt='Postman'
                            loading='lazy'
                            className='icon icon-card'
                            id='postman'
                        />
                    </div>
                </div>}
                {(window.innerWidth < 925 && window.innerWidth >= 425) && 
                <div className='skills-wrapper'>
                    <div>
                        <img
                            src='assets/icons/icons8-html-5.svg'
                            alt='HTML5'
                            loading='lazy'
                            className='icon icon-card'
                            id='html'
                        />
                        <img
                            src='assets/icons/icons8-css3.svg'
                            alt='CSS3'
                            loading='lazy'
                            className='icon icon-card'
                            id='css'
                        />
                        <img
                            src='assets/icons/icons8-javascript.svg'
                            alt='JavaScript'
                            loading='lazy'
                            className='icon icon-card'
                            id='javascript'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-python.svg'
                            alt='Python'
                            loading='lazy'
                            className='icon icon-card'
                            id='python'
                        />
                        <img
                            src='assets/icons/icons8-vue-js-144.png'
                            alt='Vue JS'
                            loading='lazy'
                            className='icon icon-card'
                            id='vue'
                        />
                        <img
                            src='assets/icons/icons8-react-160.png'
                            alt='React'
                            loading='lazy'
                            className='icon icon-card'
                            id='react'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/FileMakerProIcon.png'
                            alt='FileMaker Pro'
                            loading='lazy'
                            className='icon icon-card'
                            id='fmp'
                        />
                        <img
                            src='assets/icons/FigmaIcon.png'
                            alt='Figma'
                            loading='lazy'
                            className='icon icon-card'
                            id='figma'
                        />
                        <img
                            src='assets/icons/icons8-git.svg'
                            alt='Git'
                            loading='lazy'
                            className='icon icon-card'
                            id='git'
                        />
                    </div>
                    <div>
                        <img
                            src='assets/icons/icons8-c++.svg'
                            alt='C++'
                            loading='lazy'
                            className='icon icon-card'
                            id='cpp'
                        />
                        <img
                            src='assets/icons/icons8-c-programming.svg'
                            alt='C'
                            loading='lazy'
                            className='icon icon-card'
                            id='c'
                        />
                        <img
                            src='assets/icons/PostmanIcon.png'
                            alt='Postman'
                            loading='lazy'
                            className='icon icon-card'
                            id='postman'
                        />
                    </div>
                </div>}
            </section>
        </>
    );
}

export default Skills;