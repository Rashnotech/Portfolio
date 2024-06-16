const skills: string[] = [
    "CSS", "Tailwind",
    "Javascript", "TypeScript",
    "Python", "Node.js",
    "React", "C", "DevOps", "Wordpress",
    "MySQL", "Mongo", "Postgres"
]

const Skills = () => {
    return (
        <>
            <section className="flex mt-3 container text-white p-12 md:p-16 space-y-4 flex-col">
                <h2 className="font-groteck text-5xl md:text-6xl">
                    My Skills
                </h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 list-inside gap-2 md:gap-3 text-xl marker:text-pink-500 list-disc font-manrope">
                    {skills.map((items, idx) => <li key={idx}>{items}</li>)}
                </ul>
            </section>
        </>
    )
}

export default Skills;