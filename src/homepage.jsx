import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './homepage.css'

function HomePage() {
    return (
        <>
            <div className="homePageMainContainer">
                <div className="wordsContainer">
                    <h4 className="topGreetingLabel">Hi There! I'm</h4>
                    <h2 className="nameLabel">Ivan Janner</h2>
                    <h4 className="briefIntroLabel">A dedicated front-end designer-developer and artist who’s flexible and can adapt easily.</h4>
                    <button type="button" className="contactButton">Contact</button>
                </div>
                <div className="portrainContainer">
                    <img src="/src/navi-resources/Fornal-Picture-Janner.JPEG" alt="portrait" className="myPortaitPicture"></img>
                </div>
            </div>
        </>
    )
}

export default HomePage;