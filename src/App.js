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

function App() {
	Aos.init();

	return (
		<>
			<div className='app-container'>
				<Navbar />
				<Element name='Home' ><Home /></Element>
				<Element name='About'><About /></Element>
				<Element name='Education'><Education /></Element>
				<Element name='Skills'><Skills /></Element>
				<Element name='Projects'><Projects /></Element>
				<Element name='Contact'><Contact /></Element>
			</div>
		</>
	);
}

export default App;
