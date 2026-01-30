import { Header } from '@/components/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Tools } from '@/components/sections/Tools'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <Hero />
                <Services />
                <Tools />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
