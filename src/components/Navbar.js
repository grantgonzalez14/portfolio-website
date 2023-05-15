import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='logo'>
                        <a href='#Home' className='nav-link'>
                            <span className='link-text logo-text'><img src='assets/images/GGLogo.png' alt='Grant Gonzalez Logo' className='logo-img'/> </span>
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='angle-double-right'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                                className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
                            >
                                <g className='fa-group'>
                                    <path
                                        fill='currentColor'
                                        d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                                        className='fa-secondary'
                                    ></path>
                                    <path
                                        fill='currentColor'
                                        d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                                        className='fa-primary'
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Home' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='home'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 576 512'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Home</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#About' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='about'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 512 512'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>About</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Education' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='education'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 448 512'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Education</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Skills' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='skills'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 512 512'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Skills</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Projects' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='projects'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 640 512'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Projects</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Contact' className='nav-link'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='contact'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 512 512'
                            >
                                <path
                                    fill='currentColor'
                                    d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Contact</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/grant-gonzalez-165117205/' className='nav-link' target='_blank' rel='noreferrer'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='linkedin'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 448 512'
                            >
                                <path
                                    fill='currentColor' 
                                    d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>LinkedIn</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://github.com/grantgonzalez14' className='nav-link' target='_blank' rel='noreferrer'>
                            <svg 
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fad'
                                data-icon='github'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 496 512'
                            >
                                <path
                                    fill='currentColor'
                                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                                    className='fa-primary'
                                />
                            </svg>
                            <span className='link-text'>Github</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Navbar;