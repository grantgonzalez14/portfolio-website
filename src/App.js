import './App.scss';
import Aos from 'aos';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';

function App() {
	Aos.init();

	return (
		<>
			<Navbar />
			<Home />
			<About />
		</>
	);
}

export default App;
