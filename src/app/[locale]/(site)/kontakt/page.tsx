'use client'
import React, { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Icon } from '@iconify/react'
import { STUDIO_PHONE_DISPLAY, STUDIO_PHONE_E164, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from '@/app/data/contact'
import { STUDIO_SITE_URL } from '@/app/data/site'

const CONTACT_ICON_ACCENTS = [
  'bg-brand-blue text-white',
  'bg-brand-red text-white',
  'bg-brand-purple text-white',
  'bg-brand-blue text-white',
] as const

const CONTACT_BAR_ACCENTS = [
  'bg-brand-blue',
  'bg-brand-red',
  'bg-brand-purple',
  'bg-brand-purple',
] as const

const CONTACT_HOVER_BORDER = [
  'hover:border-brand-blue/40',
  'hover:border-brand-red/40',
  'hover:border-brand-purple/40',
  'hover:border-brand-blue/40',
] as const

const CONTACT_HOVER_TEXT = [
  'group-hover:text-brand-blue',
  'group-hover:text-brand-red',
  'group-hover:text-brand-purple',
  'group-hover:text-brand-blue',
] as const

function BrandSpark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`} aria-hidden>
      <span className='block h-3 w-[3px] -rotate-[28deg] rounded-full bg-brand-blue sm:h-3.5' />
      <span className='block h-4 w-[3px] -rotate-[28deg] rounded-full bg-brand-red sm:h-[18px]' />
      <span className='block h-3.5 w-[3px] -rotate-[28deg] rounded-full bg-brand-purple sm:h-4' />
    </span>
  )
}

const KontaktPage = () => {
  const t = useTranslations('kontakt')
  const reduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const motionIn = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 }, transition: { duration: 0.15 } }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55 } }

  const contactInfo = useMemo(
    () => [
      {
        icon: 'mdi:email-outline',
        label: t('labels.email'),
        value: 'info@nataliezimmermann.de',
        href: 'mailto:info@nataliezimmermann.de',
      },
      {
        icon: 'mdi:phone-outline',
        label: t('labels.phone'),
        value: STUDIO_PHONE_DISPLAY,
        href: `tel:${STUDIO_PHONE_E164}`,
      },
      {
        icon: 'mdi:whatsapp',
        label: t('labels.whatsapp'),
        value: WHATSAPP_NUMBER_DISPLAY,
        href: WHATSAPP_URL,
      },
      {
        icon: 'mdi:map-marker-outline',
        label: t('labels.address'),
        value: 'Rothenbaumchaussee 156, 20149 Hamburg',
        href: 'https://maps.google.com/?q=Rothenbaumchaussee+156,+20149+Hamburg',
      },
    ],
    [t],
  )

  const socialLinks = useMemo(
    () => [
      {
        icon: 'mdi:facebook',
        href: 'https://www.facebook.com/natalie.zimmermann.94',
        label: t('social.0'),
      },
      {
        icon: 'mdi:instagram',
        href: 'https://www.instagram.com/nataliezimmermann_ger/',
        label: t('social.1'),
      },
    ],
    [t],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`${t('emailSubjectPrefix')} ${formData.name}`)
    const body = encodeURIComponent(
      `${t('fields.name')}: ${formData.name}\n${t('fields.email')}: ${formData.email}\n${t('fields.phone')}: ${formData.phone}\n\n${t('fields.message')}:\n${formData.message}`,
    )

    window.location.href = `mailto:info@nataliezimmermann.de?subject=${subject}&body=${body}`

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  return (
    <div className='min-h-screen bg-grain bg-light'>
      <section className='page-section-top relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-brand-blue-light/30 via-light to-brand-purple-light/25 pb-12 md:pb-16'>
        <div
          className='pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-brand-purple/10 blur-3xl'
          aria-hidden
        />
        <div className='container relative mx-auto max-w-7xl px-4'>
          <motion.div {...motionIn} className='mx-auto mb-10 max-w-3xl text-center md:mb-12'>
            <p className='section-eyebrow'>{t('eyebrow')}</p>
            <div className='mb-4 flex justify-center'>
              <BrandSpark />
            </div>
            <h1 className='mb-4 font-display text-[clamp(1.875rem,5.5vw+0.75rem,3.75rem)] font-normal leading-[0.98] tracking-tight text-text-primary text-balance'>
              {t('title')}
            </h1>
            <div className='mb-4 flex justify-center gap-1' aria-hidden>
              <span className='h-1 w-10 rounded-full bg-brand-blue' />
              <span className='h-1 w-10 rounded-full bg-brand-red' />
              <span className='h-1 w-10 rounded-full bg-brand-purple' />
            </div>
            <p className='mx-auto max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg text-pretty'>
              {t('subtitle')}
            </p>
          </motion.div>

          <div className='mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-6'>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45 }}
              className='section-cta-brand h-full'
            >
              <div className='section-cta-brand-inner flex h-full flex-col py-8 md:py-9'>
                <div className='section-cta-brand-glow' aria-hidden />
                <div className='relative z-10 flex flex-1 flex-col'>
                  <p className='section-eyebrow section-eyebrow--on-dark mb-2'>Studio</p>
                  <h2 className='mb-2 font-display text-2xl font-normal text-white md:text-3xl text-balance'>
                    {t('studioHeading')}
                  </h2>
                  <p className='mb-6 flex-1 text-sm leading-relaxed text-white/85 md:text-base text-pretty'>
                    {t('studioDescription')}
                  </p>
                  <a
                    href={STUDIO_SITE_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-brand-gradient inline-flex min-h-11 w-full items-center justify-center gap-2 sm:w-auto'
                  >
                    {t('studioCta')}
                    <Icon icon='mdi:open-in-new' className='text-lg' aria-hidden />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45, delay: reduceMotion ? 0 : 0.08 }}
              className='h-full rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'
            >
              <div className='flex h-full flex-col rounded-[calc(1rem-2px)] bg-white p-6 md:p-8'>
                <div className='mb-3 flex items-center gap-2'>
                  <BrandSpark />
                  <p className='section-eyebrow section-eyebrow--sub mb-0'>{t('personalHeading')}</p>
                </div>
                <p className='mb-6 flex-1 text-sm leading-relaxed text-text-secondary md:text-base text-pretty'>
                  {t('personalDescription')}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-brand-gradient inline-flex min-h-11 w-full items-center justify-center gap-2 sm:w-auto'
                >
                  <Icon icon='mdi:whatsapp' className='text-xl' aria-hidden />
                  {t('labels.whatsapp')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-14 md:py-20 lg:py-24'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12'>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.15 : 0.5 }}
              className='space-y-8 lg:col-span-5'
            >
              <div>
                <p className='section-eyebrow section-eyebrow--sub'>{t('eyebrow')}</p>
                <h2 className='mb-4 font-display text-3xl font-normal text-text-primary md:text-4xl text-balance'>
                  {t('infoHeading')}
                </h2>
                <p className='max-w-prose text-base leading-relaxed text-text-secondary md:text-lg text-pretty'>
                  {t('infoDescription')}
                </p>
              </div>

              <ul className='space-y-3'>
                {contactInfo.map((info, index) => (
                  <li key={info.label}>
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0.15 : 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
                      className={`group relative flex min-h-[4.5rem] items-start gap-4 overflow-hidden rounded-xl border border-border/70 bg-white p-4 pl-5 shadow-[var(--shadow-sm)] transition-[border-color,background-color,box-shadow] duration-200 ${CONTACT_HOVER_BORDER[index % CONTACT_HOVER_BORDER.length]} hover:shadow-[var(--shadow-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 md:p-5 md:pl-6`}
                    >
                      <span
                        className={`absolute bottom-0 left-0 top-0 w-1 ${CONTACT_BAR_ACCENTS[index % CONTACT_BAR_ACCENTS.length]}`}
                        aria-hidden
                      />
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm ${CONTACT_ICON_ACCENTS[index % CONTACT_ICON_ACCENTS.length]}`}
                      >
                        <Icon icon={info.icon} className='text-2xl' aria-hidden />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <p className='font-telemetry mb-1 text-[10px] text-text-muted sm:text-[11px]'>
                          {info.label}
                        </p>
                        <p
                          className={`text-base font-semibold leading-snug text-text-primary transition-colors duration-200 md:text-lg break-words ${CONTACT_HOVER_TEXT[index % CONTACT_HOVER_TEXT.length]}`}
                        >
                          {info.value}
                        </p>
                      </div>
                      <Icon
                        icon='mdi:chevron-right'
                        className={`mt-2 shrink-0 text-xl text-text-muted opacity-0 transition-[opacity,transform,color] duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 ${CONTACT_HOVER_TEXT[index % CONTACT_HOVER_TEXT.length]}`}
                        aria-hidden
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className='border-t border-border pt-8'>
                <h3 className='mb-4 text-xl font-semibold text-text-primary md:text-2xl'>
                  {t('followUs')}
                </h3>
                <div className='flex gap-3'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-sm text-white shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${
                        index === 0 ? 'bg-brand-blue hover:bg-brand-blue-dark' : 'bg-brand-purple hover:bg-brand-purple-dark'
                      }`}
                      aria-label={social.label}
                    >
                      <Icon icon={social.icon} className='text-xl text-white' aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'>
                <div className='relative h-56 overflow-hidden rounded-[calc(1rem-2px)] bg-grey md:h-64'>
                  <Image
                    src='/images/hero/lind3.webp'
                    alt={t('locationImageAlt')}
                    fill
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 480px'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent' />
                  <div className='absolute inset-x-0 bottom-0 p-5 md:p-6'>
                    <p className='font-telemetry mb-1 text-[10px] text-white/80'>{t('locationArea')}</p>
                    <p className='text-lg font-semibold text-white md:text-xl'>{t('locationStudio')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.15 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
              className='lg:col-span-7 lg:sticky lg:top-[calc(5.5rem+env(safe-area-inset-top,0px))] lg:self-start'
            >
              <div className='rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'>
                <div className='rounded-[calc(1rem-2px)] bg-white p-6 md:p-8 lg:p-10'>
                <div className='mb-3 flex items-center gap-2'>
                  <BrandSpark className='scale-90' />
                  <p className='section-eyebrow section-eyebrow--sub mb-0'>{t('eyebrow')}</p>
                </div>
                <h2 className='mb-2 font-display text-3xl font-normal text-text-primary md:text-4xl text-balance'>
                  {t('formHeading')}
                </h2>
                <p className='mb-8 max-w-prose text-base leading-relaxed text-text-secondary text-pretty'>
                  {t('formDescription')}
                </p>

                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div>
                    <label htmlFor='name' className='mb-2 block text-sm font-semibold text-text-primary'>
                      {t('fields.name')} <span className='text-brand-red'>{t('fields.required')}</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='input-field'
                      placeholder={t('placeholders.name')}
                      autoComplete='name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm font-semibold text-text-primary'>
                      {t('fields.email')} <span className='text-brand-red'>{t('fields.required')}</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='input-field'
                      placeholder={t('placeholders.email')}
                      autoComplete='email'
                    />
                  </div>

                  <div>
                    <label htmlFor='phone' className='mb-2 block text-sm font-semibold text-text-primary'>
                      {t('fields.phone')}
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='input-field'
                      placeholder={t('placeholders.phone')}
                      autoComplete='tel'
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='mb-2 block text-sm font-semibold text-text-primary'>
                      {t('fields.message')} <span className='text-brand-red'>{t('fields.required')}</span>
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='input-field resize-none'
                      placeholder={t('placeholders.message')}
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='btn-brand-gradient w-full disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      <span className='flex items-center justify-center gap-2'>
                        <Icon icon='mdi:loading' className='animate-spin text-xl' aria-hidden />
                        {t('submitting')}
                      </span>
                    ) : (
                      <span className='flex items-center justify-center gap-2'>
                        {t('submit')}
                        <Icon icon='mdi:send' className='text-xl' aria-hidden />
                      </span>
                    )}
                  </button>

                  <p className='text-center text-sm text-text-muted text-pretty'>{t('requiredFieldsNote')}</p>
                </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='border-t border-white/10 bg-black py-10 md:py-14 lg:py-16'>
        <div className='container mx-auto max-w-7xl px-4'>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0.15 : 0.5 }}
            className='mx-auto w-full max-w-5xl overflow-hidden rounded-sm bg-gradient-to-r from-brand-blue via-brand-red to-brand-purple p-[2px] ring-1 ring-white/10'
          >
            <div className='overflow-hidden rounded-[calc(0.125rem-1px)] bg-black'>
            <Image
              src='/images/new/sponsor.jpg'
              alt={t('sponsorImageAlt')}
              width={1169}
              height={708}
              className='h-auto w-full'
              sizes='(max-width: 1024px) 100vw, 1024px'
            />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default KontaktPage
