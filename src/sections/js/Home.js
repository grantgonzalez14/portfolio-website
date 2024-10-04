import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import '../css/Home.scss';

function Home() {
    const data_aos_animation_time = 2000;
    const [mobile, setMobile] = useState(isMobile);
    const [responseData, setResponseData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [index, setIndex] = useState(Math.floor(Math.random() * 7));
    const [loadingTextList] = useState([
        'This joke is going to be hilarious...', 
        'Get ready to laugh...', 
        'This one is going to be a real knee-slapper...', 
        'You\'re in for a good laugh with this one...', 
        'Get your funny bone ready...', 
        'Brace yourself for some humor...', 
        'Laughing is inevitable with this joke...'
    ]);
    const [jokeText, setJokeText] = useState({jokeType: '', setup: '', delivery: '', showDelivery: false, joke: ''})
    const [loadingText, setLoadingText] = useState(loadingTextList[index]);
    const [isVisible, setIsVisible] = useState(true);

    
    const tellJoke = async () => {
        const baseUrl = 'https://v2.jokeapi.dev';
        const categories = ['Misc', 'Programming', 'Pun', 'Spooky', 'Christmas'];
        const params = [
            'format=json',
            'blacklistFlags=nsfw,religious,racist,political,sexist,explicit',
            'lang=en',
            'safe-mode'
        ];
    
        setIsLoading(true);
    
        try {
            const response = await Promise.race([
                fetch(`${baseUrl}/joke/${categories.join(',')}?${params.join('&')}`, { method: 'GET' }),
                new Promise((resolve, reject) => {
                    setTimeout(() => reject(new Error('Request timed out')), 15000);
                })
            ]);
    
            if (!response.ok) {
                setJokeText({ jokeType: 'single part', joke: 'I couldn\'t think of a joke :(' });
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setResponseData(data);
    
            let intervalID;
            if (data.type === 'twopart') {
                setJokeText({
                    jokeType: 'two part',
                    setup: data.setup,
                    delivery: data.delivery
                });
                intervalID = setInterval(() => {
                    setJokeText({
                        jokeType: 'two part',
                        setup: data.setup,
                        delivery: data.delivery,
                        showDelivery: true
                    });
                    clearInterval(intervalID);
                }, 3000);
            } else {
                setJokeText({
                    jokeType: 'single part',
                    joke: data.joke
                });
            }
        } catch (error) {
            setJokeText({ jokeType: 'single part', joke: 'I couldn\'t think of a joke :(' });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 925);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    useEffect(() => {
        if (isLoading === true) {
            const updateText = () => {
                if (responseData !== null) {
                    clearInterval(intervalID);
                    return;
                }
                setIsVisible(false); // Fade out
                setTimeout(() => {
                    setIndex(prevIndex => {
                        const newIndex = prevIndex === loadingTextList.length - 1 ? 0 : prevIndex + 1;
                        setLoadingText(loadingTextList[newIndex]);
                        return newIndex;
                    });
                    setIsVisible(true); // Fade in
                  }, 1000);
            }
            const intervalID = setInterval(updateText, 5000);
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
                    Hi, I'm Grant! Welcome to my website! I'm an application developer and consultant at <a href='https://dbservices.com/about/people/grant-gonzalez' target='__blank' className='db-link'>DB Services</a> that 
                    specializes full-stack development! I'm a results-driven developer with a passion for creating engaging, 
                    interactive, and visually appealing applications. With a deep understanding of database management principles and experience with
                    technologies such as FileMaker, Claris Studio, Claris Connect, and Claris Server I specialize in bringing
                    complex ideas to life in a simple, intuitive, and effective way. <br/><br/>
                    I believe that great development requires more than just technical expertise. It also requires a
                    deep understanding of user experience, design principles, and the ability to work collaboratively with
                    clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
                    practices in full-stack development, and I'm always looking for new opportunities to learn and grow.<br/><br/>
                </h2>
                {isLoading === true &&
                <h2 className={`joke-container fade-container ${isVisible ? 'visible' : 'hidden'}`}>
                    {loadingText}
                </h2>}
                {isLoading === false && jokeText.jokeType === 'two part' &&
                <h2 className='joke-container'>
                    {jokeText.setup}
                </h2>}
                {isLoading === false && jokeText.jokeType === 'two part' && jokeText.showDelivery === true &&
                <h2 className='joke-container'>
                    {jokeText.delivery}
                </h2>}
                {isLoading === false && jokeText.jokeType === 'single part' &&
                <h2 className='joke-container'>
                    {jokeText.joke}
                </h2>}
                {/* 
                    The below button is hidden because I don't want it, but the site won't deploy without it since it'll be
                    unreferenced. Keeping the code in the file though in case I wanna use it somewhere else.
                */}
                <button className='joke-button' onClick={tellJoke}>Click for a joke!</button>
            </div>
        </>
    );
}

export default Home;