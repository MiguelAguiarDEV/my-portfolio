import Header from '../Components/Portfolio/Header'
import Bio from "../Components/Portfolio/Bio"
import Stack from "../Components/Portfolio/Stack"
import Projects from "../Components/Portfolio/Projects"
import SocialLinks from "../Components/Portfolio/SocialLinks"
import Learning from "../Components/Portfolio/Learning"
import { Head } from '@inertiajs/react';

export default function Home() {


    return (
        <main className="min-h-screen bg-background text-text p-8 font-mono">
            <Head title="Portfolio" />
            <div className="max-w-3xl mx-auto">
                <Header />
                <Bio />
                <Stack />
                <Projects />
                <SocialLinks />
                <Learning />
            </div>
        </main>
    )
}

