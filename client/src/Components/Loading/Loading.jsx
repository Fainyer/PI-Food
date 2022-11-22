import React from 'react';
import { Link } from 'react-router-dom';
import './Loading.css'

const Loading = () => {
    return (
        // <div className='loading-body' >
        //     <Link to='/home'>
        //         <button className='start_Button'> start</button>
        //     </Link>
        // </div>
        <div className="header">
            <div className="info">
                <h1>FOOD APP</h1>
                <div className="sides">
                    <Link to='/home'>
                        <button type="button" class="slide">
                            <div>Start</div>
                            <i class="icon-arrow-right"></i>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Loading;