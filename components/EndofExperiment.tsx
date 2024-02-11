import React, { useState, useEffect } from 'react';

const EndOfExperiment = () => {

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
            <p>This is the end of the social experiment</p>
        </div>
    );
};

export default EndOfExperiment;