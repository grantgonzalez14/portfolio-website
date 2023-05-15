import './App.scss';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';

function App() {
	Aos.init();

	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Education />
			<Skills />
		</>
	);
}

export default App;
