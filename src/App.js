import './App.scss';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { Element } from 'react-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

function App() {
	Aos.init();

	let pref = useRef();
	let scroll = (to) => {pref.current.scrollTo(to)};

	return (
		<>
			<Navbar scrollFunction={scroll}/>
			<Parallax pages={6} ref={pref}>
				<ParallaxLayer offset={0} speed={0.5} factor={12}  className='parallax'/>
				
				<ParallaxLayer offset={0} speed={1} style={{overflow: 'scroll'}}>
					<Element name='Home'>
						<Home />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={1} speed={1} className='layer'>
					<Element name='About'>
						<About />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={2} speed={1} className='layer'>
					<Element name='Education'>					
						<Education />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={3} speed={1} className='layer skills-layer'>
					<Element name='Skills'>
						<Skills />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={4} speed={1} className='layer'>
					<Element name='Projects'>
						<Projects />
					</Element>
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={1} className='layer'>
					<Element name='Contact'>
						<Contact />
					</Element>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default App;
