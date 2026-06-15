import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WaveDivider from '@/components/WaveDivider'
import Features from '@/components/Features'
import GlobalNetwork from '@/components/GlobalNetwork'
import WhySection from '@/components/WhySection'
import JoinCrew from '@/components/JoinCrew'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CursorGlow />
      <Header />
      <Hero />
      <WaveDivider from="bg-hero-gradient" to="bg-white" />
      <Features />
      <WaveDivider from="bg-white" to="bg-navy" flip />
      <GlobalNetwork />
      <WaveDivider from="bg-navy" to="bg-white" />
      <WhySection />
      <JoinCrew />
      <Footer />
    </main>
  )
}
