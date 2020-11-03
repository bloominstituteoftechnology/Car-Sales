import React from 'react';
import { useSelector } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
	const availableFeatures = useSelector(state => state.features.available);
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{availableFeatures.length ? (
				<ol type="1">
					{availableFeatures.map(item => (
						<AdditionalFeature key={item.id} feature={item} />
					))}
				</ol>
			) : (
					<p>Nice looking car!</p>
				)}
		</div>
	);
};

export default AdditionalFeatures;
