export default function Learning() {
    const learningTopics = ["Algorithms and Data Structures"]

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-keyword mb-2">Currently Learning</h2>
            <ul className="list-disc list-inside">
                {learningTopics.map((topic) => (
                    <li key={topic} className="text-string">
                        {topic}
                    </li>
                ))}
            </ul>
        </section>
    )
}

