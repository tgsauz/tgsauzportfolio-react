const Projects = ({ isVisible }) => {
    return (
        <section className={`page ${isVisible ? "visible" : "hidden"}`}>
            <a className="github" href="https://github.com/tgsauz" target="_blank" rel="noopener">
                Github ↗
            </a>
        </section>
    )
}

export default Projects;