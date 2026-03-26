import {useState} from "react";

const Projects = () => {
    const [openPopup, setOpenPopup] = useState(false)

  return (
    <section className="projects" id="projects-section">
      <div className="projects-wrap">
        <h2>Projects</h2>
        <div className="graphicDesign">
            <h2>Graphic Design</h2>
            <div className="gDesignProjects">
                <div className="design-project item 1" onClick={()=> setOpenPopup(false)}>
                    <h2>Item 1</h2>
                </div>
                <div className="design-project item 2" onClick={()=> setOpenPopup(false)}>
                    <h2>Item 2</h2>
                </div>
            </div>
        </div>
        <div className="webDev">
            <h2>Web Dev</h2>
        </div>
      </div>
    </section>
  )
}

export default Projects