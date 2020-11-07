import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// history.push('/marvel'); // Permite volver atrás a pantallas visitadas

		const lastPath = localStorage.getItem('lastPath') || '/';

		dispatch({
			type: types.login,
			payload: {
				name: 'Julio',
			},
		});
		history.replace(lastPath); // Elimina del "historial" las rutas visitadas antes
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
