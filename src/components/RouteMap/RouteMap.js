import React, { Fragment, useEffect } from 'react';
import './RouteMap.css';
import Button from '@enact/moonstone/Button';
import Scroller from '@enact/ui/Scroller';

const RouteMap = ({anonymous}) => {
    
    return (
        <div className="RouteMap">
        <div className="out-background">
        <div className="inside-background">
			
				<h1> 노선도 </h1>
                <div className="route-line">
                <Scroller
                      verticalScrollbar="auto"
                      onScrollStart={anonymous}
                      onScrollStop={anonymous}
                    >
                        <div className="route-btn"> 
                            
                        </div>
                  
                </Scroller>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RouteMap;