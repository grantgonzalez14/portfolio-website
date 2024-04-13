import './App.scss';
import Aos from 'aos';
import Navbar from './components/js/Navbar';
import Home from './sections/js/Home';
import About from './sections/js/About';
import Education from './sections/js/Education';
import Skills from './sections/js/Skills';
import Projects from './sections/js/Projects';
import Contact from './sections/js/Contact';
import { Element } from 'react-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

// const url = (name) =>
//   `url(../pulbic/assets/images/${name})`

function App() {
	Aos.init();

	let pref = useRef();
	let scroll = (to) => {pref.current.scrollTo(to)};

	return (
		<>
			<Navbar scrollFunction={scroll}/>
			<Parallax pages={6} ref={pref}>
				{/* Background Image Layers */}
				<ParallaxLayer offset={0} speed={0} factor={12} className='stars' style={{backgroundRepeat: 'repeat', zIndex: 2, top: 0}} />
				<ParallaxLayer offset={0} speed={0.5} factor={12} className='parallax' style={{ zIndex: 1 }}/>
				<ParallaxLayer offset={5.5} speed={-0.4} className='earth' style={{zIndex: 3, backgroundSize: 'cover', marginLeft: '3rem'}}/>
				<ParallaxLayer offset={1.25} speed={-0.3} className='satelliteOne' style={{zIndex: 3, display: 'block', marginLeft: '87%', backgroundSize: '360px 360px'}} />
				<ParallaxLayer offset={2.5} speed={-0.3} className='satelliteTwo' style={{zIndex: 3, display: 'block', marginLeft: '3%', backgroundSize: '360px 360px'}} />
				<ParallaxLayer offset={3.75} speed={-0.3} className='satelliteThree' style={{zIndex: 3, display: 'block', marginLeft: '85%', backgroundSize: '360px'}} />

				<ParallaxLayer offset={5.52} speed={0.5} className='astronautCharacter' style={{zIndex: 4, display: 'block', marginLeft: '13%', backgroundSize: '150px'}} />
				<ParallaxLayer offset={5.5} speed={0.5} className='rocketShip' style={{zIndex: 4, display: 'block', marginLeft: '18%', backgroundSize: '100px'}} />

				{/* ---------- CLOUDS ---------- */}
				{/* Bottom Right */}
				<ParallaxLayer offset={5.5} speed={-0.4} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '77%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.5} speed={-0.4} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '75%', backgroundSize: '15%'}} />
				{/* Top Right */}
				<ParallaxLayer offset={5.1} speed={-0.26} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '67%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.1} speed={-0.26} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '65%', backgroundSize: '15%'}} />
				{/* Second to Bottom Right */}
				<ParallaxLayer offset={5.3} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '55%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.3} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '53%', backgroundSize: '15%'}} />
				{/* Top Middle */}
				<ParallaxLayer offset={5} speed={-0.2} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '47%', opacity: '0.4'}} />
				<ParallaxLayer offset={5} speed={-0.2} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '45%', backgroundSize: '15%'}} />
				{/* Bottom Middle */}
				<ParallaxLayer offset={5.25} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '37%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.25} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '35%', backgroundSize: '15%'}} />
				{/* Top Left */}
				<ParallaxLayer offset={5.05} speed={-0.26} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '27%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.05} speed={-0.26} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '25%', backgroundSize: '15%'}} />
				{/* Second to bottom left */}
				<ParallaxLayer offset={5.35} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '19%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.35} speed={-0.23} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '17%', backgroundSize: '15%'}} />
				{/* Bottom Left */}
				<ParallaxLayer offset={5.55} speed={-0.4} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '7%', opacity: '0.4'}} />
				<ParallaxLayer offset={5.55} speed={-0.4} className='cloud' style={{zIndex: 3, display: 'block', marginLeft: '5%', backgroundSize: '15%'}} />
				
				{/* Element Layers */}
				<ParallaxLayer offset={0} speed={1} style={{overflow: 'scroll', zIndex: 3}}>
					<Element name='Home'>
						<Home />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={1} speed={1} className='layer' style={{ zIndex: 3 }}>
					<Element name='About'>
						<About />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={2} speed={1} className='layer' style={{ zIndex: 3 }}>
					<Element name='Education'>					
						<Education />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={3} speed={1} className='layer skills-layer' style={{ zIndex: 3 }}>
					<Element name='Skills'>
						<Skills />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={4} speed={1} className='layer' style={{ zIndex: 3 }}>
					<Element name='Projects'>
						<Projects />
					</Element>
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={1} className='layer' style={{ zIndex: 3 }}>
					<Element name='Contact'>
						<Contact />
					</Element>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default App;
