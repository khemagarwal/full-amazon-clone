import React, { useState, useEffect } from 'react';

const EndOfExperiment = () => {

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, flexDirection:'column', padding:"30px" }}>
            <p>Thanks for playing (safely)!  Remember, clicking unknown links can be risky, even in experiments.



!</p>
<br/>
<p>Check if your info&apos;s been exposed: [https://haveibeenpwned.com/] #BeCyberSmart</p>
<br/>
<p>More coming soon! Thanks again for participating</p>
        </div>
    );
};

export default EndOfExperiment;