
export default function Projects() {
    const currentProject = { Queater: "https://queater.com/" }

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-keyword mb-2">Current Project</h2>
            {Object.entries(currentProject).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-function hover:underline">
                    {name}
                </a>
            ))}
        </section>
    )
}

