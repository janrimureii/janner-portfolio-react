import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './homepage.jsx'
import TopBar from './topBar.jsx'
import AboutMe from './about-me-page.jsx'
import DevSkills from './dev-skills.jsx'
import ProjectPage from './projects.jsx'
import ContactPage from './contact-page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="portfolio-Container">
      <TopBar/>
      <HomePage/>
      <AboutMe/>
      <DevSkills/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  </StrictMode>,
)
