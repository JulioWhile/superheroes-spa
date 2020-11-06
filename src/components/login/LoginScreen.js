import React from 'react';

export const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		// history.push('/marvel'); // Permite volver atrás a pantallas visitadas
		history.replace('/'); // Elimina del "historial" las rutas visitadas antes
	};

	return (
		<div className='container mt-5'>
			<h1>LoginScreen</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
