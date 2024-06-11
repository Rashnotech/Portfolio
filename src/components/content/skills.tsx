const skills: string[] = [
    "CSS", "Tailwind",
    "Javascript", "TypeScript",
    "Python", "Node.js",
    "React", "C", "DevOps",
    "MySQL", "Mongo", "Postgres"
]

const Skills = () => {
    return (
        <>
            <section className="flex mt-3 container text-white p-16 space-y-4 flex-col">
                <h2 className="font-groteck text-6xl">
                    My Skills
                </h2>
                <ul className="grid grid-cols-3 gap-3 text-xl font-manrope">
                    {skills.map((items, idx) => <li key={idx}>{items}</li>)}
                </ul>
            </section>
        </>
    )
}

export default Skills;