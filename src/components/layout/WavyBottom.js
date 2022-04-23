import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'

import './css/wavyBottom.css';

const WavyBottom = props => {
    const [flip, set] = useState(false)

    const styles = useSpring({
        reset: true,
        config: {duration: 10000},
        delay: 300,
        reverse: flip,
        from: { x: 0 },
        to: { x: -500},
        onRest: () => set(!flip),
    })

    return (
        <div className="wave-container">
            <div className="custom-shape-divider-top-1650725327">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <animated.path style={styles} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></animated.path>
                </svg>
            </div>
        </div>
    );
};

export default WavyBottom;