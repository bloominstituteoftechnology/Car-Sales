import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
    //Props contains features available, plus the addFeature action
    //console.log("AdditionalFeatures ~ ", props);

    return (
        <div className="content">
            <h4>Additional Features</h4>

            {props.additionalFeatures.length ? (
                <ol type="1">
                    {props.additionalFeatures.map(item => (                        
                        <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
                    ))}
                </ol>
                ) : (<p>Nice looking car!</p>
            )}
            
        </div>
    );
};

export default AdditionalFeatures;
