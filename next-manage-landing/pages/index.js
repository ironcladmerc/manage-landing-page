import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Manage Landing Page</title>
                <meta name="description" content="Manage landing page" />
                <link rel="icon" href="manage-logo.ico" />
            </Head>
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}
