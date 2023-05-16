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


function App() {
	Aos.init();

	return (
		<>
			<Navbar />
			<Parallax pages={6}>
				<ParallaxLayer offset={0} speed={0.25} factor={12} className='parallax'/>
				<Element name='Home'>
					<ParallaxLayer offset={0} speed={1} factor={6}>
						<Home />
					</ParallaxLayer>
				</Element>
				<Element name='About'>
					<ParallaxLayer offset={1} speed={1}>
						<About />
					</ParallaxLayer>
				</Element>
				<Element name='Education'>
					<ParallaxLayer offset={2} speed={1}>
						<Education />
					</ParallaxLayer>
				</Element>
				<Element name='Skills'>
					<ParallaxLayer offset={3} speed={1}>
						<Skills />
					</ParallaxLayer>
				</Element>
				<Element name='Projects'>
					<ParallaxLayer offset={4} speed={1}>
						<Projects />
					</ParallaxLayer>
				</Element>
				<Element name='Contact'>
					<ParallaxLayer offset={5} speed={1}>
						<Contact />
					</ParallaxLayer>
				</Element>
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
