import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './about-me-page.css'

function AboutMe() {
    return (
        <>
        <div className="aboutMeContainer">
            <div className="aboutMeContainerInner">
                <h3>About Me</h3>
                <p className="FirstParagraph">BS Information undergrad major in Digital Graphics. I specialize in front-end development and web design, combining clean code with creative visuals to deliver engaging user experiences.</p>
                <p className="SecondParagraph">Also has a creative foundation as a mixed media artist focusing on watercolor and gouache paints.</p>
            </div>
            <div className="ExperiencesContainer">
                <h3>Experiences</h3>
                <p className="Experience1">3+ years of experience as a virtual assistant in world food Mission.</p>
                <p className="Experience2">Front-End Developer for project: Cloud-Based Branch Management System with Coordinate Logging System for Perfect Brew</p>
            </div>
            <div className="CreativeSkillsContainer">
                <h3 className="DivTitle">Creative Skills</h3>
                <p className="digitalSkillText">Digital Skill Set</p>
                {/* Canva Area */}
                <div className="canvaDiv">
                    <div className="canvaNameContainer">
                        <h3 className="canvaName">Canva</h3>
                    </div>
                    <div className="canvaStat">
                        <p className="canvaLevel">90%</p>
                    </div>
                </div>
                {/* Photoshop Area */}
                <div className="photostopDiv">
                    <div className="photoshopNameContainer">
                        <h3 className="photoshopName">Adobe Photoshop</h3>
                    </div>
                    <div className="photoshopStat">
                        <p className="photoshopLevel">30%</p>
                    </div>
                </div>
                {/* Blender Area */}
                <div className="blenderDiv">
                    <div className="blenderNameContainer">
                        <h3 className="blenderName">Blender 3D</h3>
                    </div>
                    <div className="blenderStat">
                        <p classsName="blenderLevel">70%</p>
                    </div>
                </div>

                <h3 className="traditionalArtLabel">Traditional Art</h3>
                <div classname="watercolorContainer">
                    <h3 className="waterColorLabel">Watercolor Paint</h3>
                    <div className="waterColorStatContainer">
                        <p className="watercolorStat">100%</p>
                    </div>
                </div>
                <div className="gouacheContainer">
                    <h3 className="gouacheLabel">Gouache Paint</h3>
                    <div className="gouachaStatContainer">
                        <p className="gouacheStat">87%</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe;