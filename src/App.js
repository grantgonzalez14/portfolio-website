import './App.scss';
import Aos from 'aos';

import Navbar from './components/Navbar';
import Home from './sections/Home';

function App() {
	Aos.init();

	return (
		<>
			<Navbar />
			<Home />
		</>
	);
}

export default App;
