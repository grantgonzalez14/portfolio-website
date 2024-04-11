import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import '../css/Home.scss';

function Home() {
    const data_aos_animation_time = 2000;
    const [mobile, setMobile] = useState(isMobile);
    const [responseData, setResponseData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [index, setIndex] = useState(0);
    const [error, setError] = useState(null);
    const [loadingTextList] = useState(['This joke is going to be hilarious...', 'Get ready to laugh...', 'Here it comes!']);
    const [loadingText, setLoadingText] = useState(loadingTextList[index]);

    

    const tellJoke = () => {
        // try {
        //     const response = await fetch('api call here');
        //     if (!response.ok) {
        //         throw new Error('Failed to fetch data');
        //     }
        //     const data = await response.json();
        //     setResponseData(data);
        //     setIsLoading(false);
        // } catch (error) {
        //     setError(error);
        //     setIsLoading(false);
        // }
        setIsLoading(true);
        setTimeout(() => {
            setResponseData({data: 'received!'});
        })
    };
    
    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 925);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    // useEffect(() => {
    //     tellJoke();
    // }, []);

    useEffect(() => {
        if (isLoading) {
            const updateText = () => {
                if (responseData !== null) {
                    clearInterval(intervalID);
                    return;
                }
                setLoadingText(loadingTextList[index]);
                setIndex(prevIndex => (prevIndex === loadingTextList.length - 1 ? prevIndex : prevIndex + 1));
            }
            const intervalID = setInterval(updateText, 3000);
            return () => clearInterval(intervalID);
        }
    }, [isLoading, responseData, index, loadingTextList]);

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
                    Hi, I'm Grant! Welcome to my website! I'm an application developer and consultant at <a href='www.dbservices.com' className='db-link'>DB Services</a> that 
                    specializes full-stack development! I'm a results-driven developer with a passion for creating engaging, 
                    interactive, and visually appealing applications. With a deep understanding of database management principles and experience with
                    technologies such as FileMaker, Claris Studio, Claris Server I specialize in bringing
                    complex ideas to life in a simple, intuitive, and effective way. <br/><br/>
                    I believe that great development requires more than just technical expertise. It also requires a
                    deep understanding of user experience, design principles, and the ability to work collaboratively with
                    clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
                    practices in full-stack development, and I'm always looking for new opportunities to learn and grow.<br/><br/>
                </h2>
                {isLoading === true && 
                <h2>
                    {loadingText}
                </h2>}
                <button className='joke-button' onClick={tellJoke}>Click for a joke!</button>
            </div>
        </>
    );
}

export default Home;