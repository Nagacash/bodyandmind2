'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Bebas_Neue } from 'next/font/google'
import { workdata } from '@/app/types/workdata'
import Link from 'next/link'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<workdata[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTeamMembers(data.WorkData || [])
      } catch (error) {
        console.error('Error fetching team data:', error)
      }
    }
    fetchData()
  }, [])

  const achievements = [
    { icon: 'mdi:trophy', label: 'Box Weltmeisterin', value: 'WBO' },
    { icon: 'mdi:heart-pulse', label: 'Physiotherapeutin', value: 'Expertin' },
    { icon: 'mdi:dumbbell', label: 'Personal Trainer', value: 'Zertifiziert' },
    { icon: 'mdi:brain', label: 'Mental Coach', value: 'Wingwave' },
  ]

  return (
    <section className='overflow-hidden py-16 md:py-20 lg:py-24 bg-grey'>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-accent-cyan text-sm md:text-base font-bold mb-4 uppercase tracking-wider'
          >
            Unser Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
          Mit Leidenschaft zum Erfolg!
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed'
          >
            Leidenschaftliche Boxweltmeisterin, engagierte Physiotherapeutin und einfühlsame Personaltrainerin – Erfahren Sie mehr über unsere Reise und unsere Mission, Ihre Gesundheit und Ihr Wohlbefinden zu fördern.
        </motion.p>
        </motion.div>

        {/* Main Content - Natalie Featured */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20'>
          {/* Image Section */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='relative'
          >
            <div className='relative rounded-3xl overflow-hidden shadow-2xl group'>
          <Image
            src='/images/team/boxa5.jpg'
                alt='Natalie Zimmermann - Box Weltmeisterin, Physiotherapeutin und Personaltrainerin'
                width={1296}
            height={684}
                className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                <h3 className={`text-white text-3xl md:text-4xl font-bold mb-2 ${bebasNeue.className}`}>
                  Natalie Zimmermann
                </h3>
                <p className='text-white/90 text-lg font-semibold'>
                  Box Weltmeisterin • Physiotherapeutin • Mental Coach
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-col justify-center'
          >
            <div className='bg-white rounded-3xl p-8 md:p-10 shadow-xl'>
              <div className='mb-6'>
                <h3 className={`text-3xl md:text-4xl font-bold text-text-primary mb-4 ${bebasNeue.className}`}>
                  Die Geschichte hinter dem Erfolg
                </h3>
                <p className='text-text-secondary text-base md:text-lg leading-relaxed mb-6'>
                  Von der Schäferstochter zur Weltmeisterin im Profiboxen – meine Reise ist geprägt von Leidenschaft, Disziplin und dem unerschütterlichen Willen, Menschen zu helfen, ihre Ziele zu erreichen.
                </p>
                <p className='text-text-secondary text-base md:text-lg leading-relaxed'>
                  Als Physiotherapeutin, Personal Trainerin und Mental Coach kombiniere ich körperliche Stärke mit mentaler Resilienz, um meinen Klienten einen ganzheitlichen Ansatz für Gesundheit und Fitness zu bieten.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className='grid grid-cols-2 gap-4 mt-8'>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className='bg-accent-cyan/10 rounded-2xl p-4 text-center'
                  >
                    <Icon icon={achievement.icon} className='text-accent-cyan text-3xl mb-2 mx-auto' />
                    <p className='text-text-secondary text-xs font-semibold uppercase tracking-wide mb-1'>
                      {achievement.label}
                    </p>
                    <p className='text-text-primary font-bold text-sm'>{achievement.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='mt-8'
              >
                <Link
                  href='/about-me'
                  className='inline-flex items-center gap-2 btn-primary'
                >
                  Mehr über mich erfahren
                  <Icon icon='mdi:arrow-right' className='text-xl' />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Team Members Section */}
        {teamMembers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className='text-center mb-12'>
              <h3 className={`text-3xl md:text-4xl font-bold text-text-primary mb-4 ${bebasNeue.className}`}>
                Unser Expertenteam
              </h3>
              <p className='text-text-secondary text-lg max-w-2xl mx-auto'>
                "Die Stärke des Teams ist jedes einzelne Mitglied. Die Stärke eines jeden Mitglieds ist das Team." - Phil Jackson
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
              {teamMembers.slice(0, 4).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  {/* Image */}
                  <div className='relative h-64 bg-grey overflow-hidden'>
                    <Image
                      src={member.imgSrc}
                      alt={member.name || 'Team member'}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    
                    {/* LinkedIn Badge */}
                    <div className='absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <Icon icon='mdi:linkedin' className='text-accent-cyan text-xl' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-text-primary mb-2'>{member.name}</h4>
                    <p className='text-text-secondary text-sm leading-relaxed line-clamp-4'>
                      {member.profession}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Team Link */}
            {teamMembers.length > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className='text-center mt-12'
              >
                <Link
                  href='/#Team'
                  className='inline-flex items-center gap-2 text-accent-cyan font-semibold hover:text-accent-cyan/80 transition-colors duration-300'
                >
                  Alle Teammitglieder anzeigen
                  <Icon icon='mdi:arrow-right' className='text-lg' />
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='mt-16 md:mt-20'
        >
          <div className='bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
            <div className='relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-bold mb-2'>22+</div>
                <p className='text-white/90 text-sm md:text-base'>Jahre Erfahrung</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-bold mb-2'>1000+</div>
                <p className='text-white/90 text-sm md:text-base'>Zufriedene Kunden</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-bold mb-2'>50+</div>
                <p className='text-white/90 text-sm md:text-base'>Erfolgreiche Programme</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-bold mb-2'>1</div>
                <p className='text-white/90 text-sm md:text-base'>Weltmeisterin</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
