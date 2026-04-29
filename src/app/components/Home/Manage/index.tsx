'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  const [showBuchungen, setShowBuchungen] = useState(false) // Set to false to hide initially
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('yearly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'yearly' ? 'monthly' : 'yearly'
    )
  }

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory],
  }))

  return (
    <>
      {showBuchungen && (
        <section id='services-section' className='py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center '>
          Buchungen
        </motion.h2>
        {/*  */}
        <div className='flex sm:block'>
          <div className='flex flex-col sm:flex-row gap-5 md:justify-evenly mt-20 items-start mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold'>Best Training</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold'>weekly</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold'>Cancel Anytime</p>
            </motion.div>
          </div>
        </div>
        {/*  */}
        <div className='mt-6 relative'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52  text-center -rotate-[10deg] mb-5'>
            freies probetraining
          </motion.div>
          <Image
            src='/images/manage/toggle.svg'
            alt='toggle-image'
            width={24}
            height={24}
            className='absolute left-[37%] top-8'
          />
          <div className='flex items-center justify-center'>
            <p className='text-sm font-medium mr-5'>Billed Yearly</p>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className='relative inline-flex h-6 w-11 items-center rounded-full bg-black'>
              <span className='sr-only'>Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </Switch>
            <p className='text-sm font-medium ml-5'>Billed Monthly</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className='shadow-manage-shadow border border-border text-center p-10 rounded-3xl'
                  key={i}>
                  <h5 className='mb-3'>{items.heading}</h5>
                  <p className='text-6xl font-extrabold mb-3'>${items.price}</p>
                  <p className='text-sm font-medium mb-6'>{items.user}</p>
                  <Link
                    href='mailto:info@example.com'
                    className='btn-outline-primary mb-6'
                  >
                    Start My 15-day Trial
                  </Link>
                  {/* Map through the features object and render each key-value pair dynamically */}
                  {items.features.map((feature: string, index: number) => (
                    <p
                      className='text-sm font-medium text-darkgrey mb-3'
                      key={index}>
                      {feature}
                    </p>
                  ))}
                </motion.div>
              ))}
        </div>
      </div>
    </section>
      )}
    </>
  )
}

export default Manage
