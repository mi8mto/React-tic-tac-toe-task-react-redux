import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

export const App = () => {
	return (
		<div>
			{<Header />}
			<Provider store={store}>
				<Game />
			</Provider>
		</div>
	);
};
