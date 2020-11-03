import React from 'react';

import Header from './features/car/Header';
import AddedFeatures from './features/addFeatures/AddedFeatures';
import AdditionalFeatures from './features/addFeatures/AdditionalFeatures';
import Total from './features/addFeatures/Total';

const App = () => {
	return (
		<div className="boxes">
			<div className="box">
				<Header />
				<AddedFeatures />
			</div>
			<div className="box">
				<AdditionalFeatures />
				<Total />
			</div>
		</div>
	);
};

export default App;
