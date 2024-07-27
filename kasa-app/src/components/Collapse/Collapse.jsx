import React, { useState } from 'react'
import chevron from '../../assets/chevron.svg';

function Collapse({ title, content, className }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='collapse-container'>
            <div className='collapse-title'>
                <span className={`${className}`}>{title}</span>
                <img 
                src={chevron} 
                alt="chevron"
                onClick={toggle}
                className={`chevron ${isVisible ? 'chevron-rotated' : ''}`} />
            </div>
            <div className={`collapse-item hide ${isVisible ? 'dropdown-open' : ''}`}>
                {content}
            </div>
        </div>
    );
    }

export default Collapse;
