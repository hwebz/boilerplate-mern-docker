import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [welcomeMessage, setWelcomeMessage] = useState();

	useEffect(() => {
		getWelcomeMessage();
	}, [])

	const getWelcomeMessage = async () => {
		try {
			const res = await axios.get('/api/user');
			console.log(res);
			setWelcomeMessage(res.data);
		} catch (error) {
			console.error(error);
		}
	}
	
	return (
		<div className="App">
			<h1>"Hello server!" says the client</h1>
			<h1>"{welcomeMessage}" says the server</h1>
		</div>
	);
}

export default App;
