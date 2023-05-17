import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import './Home.scss';

function Home() {
    const data_aos_animation_time = 2000;
    const [mobile, setMobile] = useState(isMobile);
    
    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 925);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    return (
        <>
            {!mobile && 
            <div className='pictures'>
                <div className='up'>
                    <img src='assets/images/GatSeattleLake.jpeg' alt='Grant Ring Ceremony' loading='lazy' data-aos='fade-up' data-aos-duration={data_aos_animation_time} className='g-img' />
                </div>
                <div className='down'>
                    <img src='assets/images/GGGradBowman.jpeg' alt='Grant Ring Ceremony' loading='lazy' data-aos='fade-down' data-aos-duration={data_aos_animation_time} className='g-img' />
                </div>
                <div className='up'>
                    <img src='assets/images/GGGradSikes.jpeg' alt='Grant Ring Ceremony' loading='lazy' data-aos='fade-up' data-aos-duration={data_aos_animation_time} className='g-img' />
                </div>
                <div className='down'>
                    <img src='assets/images/GGGradBowmanRing.jpeg' alt='Grant Ring Ceremony' loading='lazy' data-aos='fade-down' data-aos-duration={data_aos_animation_time} className='g-img' />
                </div>
                <div className='up'>
                    <img src='assets/images/GatQ.jpeg' alt='Grant Ring Ceremony' loading='lazy' data-aos='fade-up' data-aos-duration={data_aos_animation_time} className='g-img' />
                </div>
            </div>}
            <div className='bio' data-aos='zoom-in' data-aos-duration={data_aos_animation_time}>
                <h1 className='title'>Grant Gonzalez - Software Developer</h1>
                <h2 className='about-me'>
                    Hi, I'm Grant! I'm a software developer that specializes in front-end web development!
                    I'm a results-driven web developer with a passion for creating engaging, interactive, and visually
                    appealing websites. With a deep understanding of web development principles and experience with
                    front-end technologies such as Vue, React, JavaScript, Python, HTML, and CSS, I specialize in bringing
                    complex ideas to life in a simple, effective way. <br/><br/>
                    I believe that great web development requires more than just technical expertise. It also requires a
                    deep understanding of user experience, design principles, and the ability to work collaboratively with
                    clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
                    practices in web development, and I'm always looking for new opportunities to learn and grow. <br/><br/>
                    If you're looking for a web developer who is passionate about creating high-quality, user-focused solutions,
                    I'd love to hear from you! Let's work together to create a website that truly stands out in today's crowded
                    digital landscape.
                </h2>
            </div>
        </>
    );
}

export default Home;