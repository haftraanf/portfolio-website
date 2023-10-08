'use client'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import { useEffect, useState } from "react";

export default function Home() {
  let start = new Date();
  let year = start.getFullYear().toString();

  return (
    <main>
      <div className="container mx-auto text-center px-7 py-20">
        <HeroSection />
        <ProjectSection />
      </div>
      <footer className="text-xs text-center fixed bottom-0 w-full">
        © Ha Tran {year} - All Rights Reserved.
      </footer>
    </main>
  
  )
}