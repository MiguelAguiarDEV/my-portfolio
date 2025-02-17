import { Linkedin, Twitter } from "lucide-react"

export default function SocialLinks() {
    const socialLinks = {
        LinkedIn: "https://www.linkedin.com/in/miguel-alejandro-santiesteban-aguiar/",
        X: "https://x.com/MiguelAguiarDev",
    }

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-keyword mb-2">Social Links</h2>
            <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-function hover:text-variable"
                    >
                        {platform === "LinkedIn" && <Linkedin className="w-6 h-6" />}
                        {platform === "X" && <Twitter className="w-6 h-6" />}
                    </a>
                ))}
            </div>
        </section>
    )
}

