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
				<Home id='Home' />
				<About id='About' />
				<Education id='Education' />
				<Skills id='Skills' />
				<Projects id='Projects' />
				<Contact id='Contact' />
			</div>
		</>
	);
}

export default App;
