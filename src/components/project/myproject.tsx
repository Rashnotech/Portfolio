const Projects = () => {
    return (
        <>
            <section id="projects" className="container p-16 text-white">
                <h3 className="text-6xl font-groteck text-right mr-10">
                    My Projects
                </h3>
                <section className="grid w-3/4 mx-auto align-middle border grid-cols-1 gap-2">
                    <Project />
                </section>
            </section>
        </>
    )
}


const Project = () => {
    return (
        <article className="relative">
            <img src="#" alt="Project 1" className="w-1/2 border rounded-2xl object-cover"  />
                <div className="absolute top-1/2 left-1/2">
                    <h4 className="text-2xl font-groteck">Project 1</h4>
                    <p className="font-manrope text-lg font-medium">Aug 2022</p>
                </div>
        </article>
    )
}

export default Projects