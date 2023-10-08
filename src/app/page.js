import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="container mx-auto text-center px-7 py-20">
        <HeroSection />
        <ProjectSection />
      </div>
    </main>
  
  )
}
