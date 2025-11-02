import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Presse from '@/app/components/Home/Presse'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Natalie Zimmermann - Box Weltmeisterin, Speakerin & Mental Coach | Fitness & Gesundheit',
  description: 'Gemeinsam zu körperlicher Stärke und mentaler Resilienz. Natalie Zimmermann, Box Weltmeisterin, Speakerin & Mental Coach, hilft Ihnen, Ihre Gesundheits- und Fitnessziele zu erreichen. Entdecken Sie ihr neues Buch und ihr Expertenteam.',
  keywords: 'Natalie Zimmermann, Box Weltmeisterin, Speakerin, Mental Coach, Fitness Trainer, Gesundheit, Fitness, Resilienz, Boxen, Personal Training, Buch, Expertenteam',
  alternates: {
    canonical: 'https://www.nataliezimmermann.de',
  },
  openGraph: {
    title: 'Natalie Zimmermann - Box Weltmeisterin, Speakerin & Mental Coach',
    description: 'Gemeinsam zu körperlicher Stärke und mentaler Resilienz. Natalie Zimmermann, Box Weltmeisterin, Speakerin & Mental Coach, hilft Ihnen, Ihre Gesundheits- und Fitnessziele zu erreichen.',
    url: 'https://www.nataliezimmermann.de',
    siteName: 'Natalie Zimmermann',
    images: [
      {
        url: 'https://www.nataliezimmermann.de/images/hero/natalie.jpg',
        width: 800,
        height: 600,
        alt: 'Natalie Zimmermann - Box Weltmeisterin',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natalie Zimmermann - Box Weltmeisterin, Speakerin & Mental Coach',
    description: 'Gemeinsam zu körperlicher Stärke und mentaler Resilienz. Natalie Zimmermann, Box Weltmeisterin, Speakerin & Mental Coach, hilft Ihnen, Ihre Gesundheits- und Fitnessziele zu erreichen.',
    images: ['https://www.nataliezimmermann.de/images/hero/natalie.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'Sports',
  creator: 'Natalie Zimmermann',
  publisher: 'Natalie Zimmermann',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nataliezimmermann.de'),
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Presse />
      <Join />
      <Insta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Natalie Zimmermann",
            "url": "https://www.nataliezimmermann.de",
            "image": "https://www.nataliezimmermann.de/images/hero/natalie.jpg",
            "sameAs": [
              "https://www.facebook.com/natalie.zimmermann.94",
              "https://tiktok.com/@nataliezimmermann", // Placeholder, replace with actual
              "https://www.instagram.com/nataliezimmermann_ger/",
              "https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL_ID" // Placeholder, replace with actual
            ],
            "jobTitle": "Box Weltmeisterin, Speakerin, Mental Coach, Fitness Trainer",
            "description": "Natalie Zimmermann ist eine Box Weltmeisterin, Speakerin und Mental Coach, die Menschen dabei unterstützt, körperliche Stärke und mentale Resilienz zu entwickeln und ihre Gesundheits- und Fitnessziele zu erreichen."
          }),
        }}
      />
    </main>
  )
}
