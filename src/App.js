import './App.scss';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
	Aos.init();

	return (
		<>
			<div className='app-container'>
				<Navbar />
				<Home />
				<About />
				<Education />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
}

export default App;
