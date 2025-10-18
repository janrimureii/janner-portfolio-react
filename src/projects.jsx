import { useState } from 'react'
import './projects.css'

function ProjectPage () {
    return (
        <>
        <div className="outer-container">
        <div className="project-page-main-container">
            <div className="top-description-container">
                <h3 className="top-area-word">Projects</h3>
                <p className="project-top-description">This are some of the latest projects I did</p>
            </div>
            <div className="project-container-main">
                 <div className="project-1-container">
                    <div className="photo1-container">
                        <img src="/src/navi-resources/Guitar.png" alt="guitar" height="300" width="auto"></img>
                    </div>
                    <p>Guitar Render made with Blender 3D</p>
                 </div>
                 <div className="project-2-container">
                    <div className="photo2-container">
                        <img src="/src/navi-resources/Living room.png" alt="living room" height="300" width="auto"></img>
                    </div>
                    <p>Living room render made with Blender 3D</p>
                 </div>
                 <div className="project-3-container">
                    <div className="photo3-container">
                        <img src="/src/navi-resources/Bedroom2.png" alt="bed room" height="300" width="auto"></img>
                    </div>
                    <p>Bed Room render made with Blender 3D</p>
                 </div>
                 <div className="project-4-container">
                    <div className="photo4-container">
                        <img src="/src/navi-resources/Boat.png" alt="Boat" height="300" width="auto"></img>
                    </div>
                    <p>Dramatic Boat render made with Blender 3D</p>
                 </div>
                 <div className="project-5-container">
                    <div className="photo5-container">
                        <img src="/src/navi-resources/Candy-Photo.jpg" alt="Candy Drawing" height="300" width="auto"></img>
                    </div>
                    <p>Realistic Candy Drawing made with Colored Pencils</p>
                 </div>
                 <div className="project-6-container">
                    <div className="photo6-container">
                        <img src="/src/navi-resources/Dual-Face-Photo.jpg" alt="Abstract Face" height="300" width="auto"></img>
                    </div>
                    <p>Abstract Face Study, Referenced from Kayla Hume's Painting on Pinterest</p>
                 </div>
                 <div className="project-7-container">
                    <div className="photo7-container">
                        <img src="/src/navi-resources/Tomato_Photo.jpg" alt="Abstract Face" height="300" width="auto"></img>
                    </div>
                    <p>Object Painting Study made with gouache paints, referenced from Vicki McGrath Tomato</p>
                 </div>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default ProjectPage;