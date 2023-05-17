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
				
				<ParallaxLayer offset={0} speed={0.5} factor={12}  className='parallax'>
					
				</ParallaxLayer>
				
				<ParallaxLayer offset={0} speed={1}>
					<Element className='element' name='Home'>
						<Home />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={1} speed={1}>
					<Element className='element' name='About'>
						<About id='About'/>
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={2} speed={1}>
					<Element className='element' name='Education'>					
						<Education />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={3} speed={1}>
					<Element className='element' name='Skills'>
						<Skills />
					</Element>
				</ParallaxLayer>
				
				<ParallaxLayer offset={4} speed={1}>
					<Element className='element' name='Projects'>
						<Projects />
					</Element>
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={1}>
					<Element className='element' name='Contact'>
						<Contact />
					</Element>
				</ParallaxLayer>
			</Parallax>

			{/* <div className='app-container'>
				<Navbar />
				<Element name='Home' ><Home /></Element>
				<Element name='About'><About /></Element>
				<Element name='Education'><Education /></Element>
				<Element name='Skills'><Skills /></Element>
				<Element name='Projects'><Projects /></Element>
				<Element name='Contact'><Contact /></Element>
			</div> */}
		</>
	);
}

export default App;
