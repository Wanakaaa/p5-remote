import React, { useState } from 'react'
import chevron from '../../assets/chevron.svg';
import "./Collapse.scss"

function Collapse({ title, content }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='collapse-container'>
            <div className='collapse-title'>
                <span>{title}</span>
                <img
                src={chevron}
                alt='chevron'
                onClick={toggle}
                className={`chevron ${isVisible ? 'chevron-rotated' : ''}`}
                />
            </div>
            <div className={`collapse-content ${isVisible ? 'visible' : ''}`}>
            {isVisible ? <p className='content-p'>{content}</p> : null}
            </div>
        </div>
    );
    }

export default Collapse;

