export default function Stack() {
    const stack = {
        Backend: ["Laravel", "Node.js", "MySQL", "SQLite"],
        Frontend: ["React", "TailwindCSS"],
    }

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-keyword mb-2">Stack</h2>
            <div className="grid grid-cols-2 gap-4">
                {Object.entries(stack).map(([category, technologies]) => (
                    <div key={category}>
                        <h3 className="text-xl text-function mb-2">{category}</h3>
                        <ul className="list-disc list-inside">
                            {technologies.map((tech) => (
                                <li key={tech} className="text-variable">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

