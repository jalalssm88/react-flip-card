import React from 'react';
import './card.css';

const Cards = (props)=>(
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">
                    {
                        props.eng
                    }
                </div>
            </div>
            <div className="back">
                <div className="urdu">
                    {
                        props.urdu
                    }
                </div>
            </div>
        </div>
    </div>
)

export default Cards;