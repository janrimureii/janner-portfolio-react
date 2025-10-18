import { useRef, useState } from 'react'

import './topBar.css'

function TopBar() {

    return(
        <>
        <div className="topBarContainer">
            <div className="monogramContainer">
                <h3 className="topBarMonogram">/Janrimurei</h3>
            </div>
            <div className="functionsContainer">
               <a href="#homepage"> <h3>Home</h3> </a>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
        </div>
        </>
    )
}

export default TopBar;