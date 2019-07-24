import React from 'react';

import { useDispatch } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { useSelector } from 'react-redux';

const App = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const removeFeature = item => {
		// dispatch an action here to remove an item
		console.log(item);
		dispatch({ type: 'REMOVE_FEATURE', payload: item });
	};

	const addFeature = item => {
		// dipsatch an action here to add an item
		console.log(item);
		dispatch({ type: 'ADD_FEATURE', payload: item });
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header car={state.car} />
				<AddedFeatures
					car={state.car}
					removeFeature={removeFeature}
				/>
			</div>
			<div className="box">
				<AdditionalFeatures
					store={state.store}
					addFeature={addFeature}
				/>
				<Total
					car={state.car}
					additionalPrice={state.additionalPrice}
				/>
			</div>
		</div>
	);
};

export default App;
