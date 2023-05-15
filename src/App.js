import './App.scss';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

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
			</div>
		</>
	);
}

export default App;
