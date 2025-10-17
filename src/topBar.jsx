import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './topBar.css'

function TopBar() {
    return(
        <>
        <div className="topBarContainer">
            <div className="monogramContainer">
                <h3 className="topBarMonogram">/Janrimurei</h3>
            </div>
            <div className="functionsContainer">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
        </div>
        </>
    )
}

export default TopBar;