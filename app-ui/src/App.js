import './App.css';
import Dashboard from './layout/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'semantic-ui-css/semantic.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lobby from './components/Lobbyy';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';


function App() {
	// return (
	// 	<div className="App">
	// 		<div className='container-fluid' style={{ background: '#f2ebfb' }}>
	// 			<Dashboard />
	// 		</div>
	// 		<ToastContainer theme='dark' />
	// 	</div>
	// );
	const [connection, setConnection] = useState();
	const joinRoom = async (user, room) => {
		try {
			const connection = new HubConnectionBuilder()
				.withUrl("https://localhost:7246/chat")
				.configureLogging(LogLevel.Information)
				.build();

			connection.on("ReceiveMessage", (user, message) => {
				console.log('message received', message);
			});

			await connection.start();
			await connection.invoke("joinRoom", {user, room});
			setConnection(connection)
		}
		catch (e) {
			console.log(e);
		}
	}

	return (
		<div className='app'>
			<h2>MyChat</h2>
			<hr className='line' />
			<Lobby joinRoom={joinRoom} />
		</div>
	)
}

export default App;
