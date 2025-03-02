"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Carousel } from "./components/Carousel"
import { GallerySection } from "./components/GallerySection"
import { ContactSection } from "./components/ContactSection"
import { WhatsAppButton } from "./components/WhatsAppButton"
import { Waves, Utensils, Wifi, Menu, X } from "lucide-react"
import { WaveIcon } from "./components/WaveIcon"

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => setIsEnglish(!isEnglish)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <WaveIcon className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold font-surf">Hostel Cliff</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="hover:underline text-lg">
                {isEnglish ? "Home" : "Inicio"}
              </Link>
              <Link href="#gallery" className="hover:underline text-lg">
                {isEnglish ? "Gallery" : "Galería"}
              </Link>
              <Link href="#contact" className="hover:underline text-lg">
                {isEnglish ? "Contact" : "Contacto"}
              </Link>
            </div>
            <button
              onClick={toggleLanguage}
              className="bg-white text-teal-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors"
            >
              {isEnglish ? "ES" : "EN"}
            </button>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-teal-600 z-20 flex flex-col items-center justify-center">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <X className="h-6 w-6 text-white" />
          </button>
          <Link href="#home" className="text-white text-2xl my-2" onClick={toggleMenu}>
            {isEnglish ? "Home" : "Inicio"}
          </Link>
          <Link href="#gallery" className="text-white text-2xl my-2" onClick={toggleMenu}>
            {isEnglish ? "Gallery" : "Galería"}
          </Link>
          <Link href="#contact" className="text-white text-2xl my-2" onClick={toggleMenu}>
            {isEnglish ? "Contact" : "Contacto"}
          </Link>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section id="home" className="pt-16">
          <Carousel isEnglish={isEnglish} />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-orange-50">
          <GallerySection isEnglish={isEnglish} />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-teal-50 wave-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-surf text-teal-800">
              {isEnglish ? "Surfer Experience" : "Experiencia Surfera"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Waves className="w-16 h-16 text-teal-600" />}
                title={isEnglish ? "Nearby Beach" : "Playa Cercana"}
              />
              <FeatureCard
                icon={<Utensils className="w-16 h-16 text-teal-600" />}
                title={isEnglish ? "Shared Kitchen" : "Cocina Compartida"}
              />
              <FeatureCard
                icon={<Wifi className="w-16 h-16 text-teal-600" />}
                title={isEnglish ? "Free Wi-Fi" : "Wi-Fi Gratis"}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-orange-100">
          <ContactSection isEnglish={isEnglish} />
        </section>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-teal-600 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2025 Hostel Cliff. {isEnglish ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {icon}
      <h3 className="mt-4 text-2xl font-semibold text-teal-800">{title}</h3>
    </div>
  )
}

