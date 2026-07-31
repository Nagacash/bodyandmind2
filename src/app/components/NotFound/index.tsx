import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='bg-grain bg-light pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-24 md:pb-32'>
      <div className='container mx-auto max-w-3xl px-4 text-center'>
        <p className='section-eyebrow mx-auto'>Error 404</p>
        <h1 className='mb-4 font-display text-7xl leading-none tracking-tight text-text-primary md:text-8xl'>
          404
        </h1>
        <p className='mx-auto mb-2 max-w-md text-lg font-semibold text-text-primary text-balance'>
          Diese Seite existiert nicht.
        </p>
        <p className='mx-auto mb-10 max-w-md text-base text-text-secondary text-pretty'>
          Der Link ist veraltet oder wurde verschoben. Wählen Sie ein Kapitel auf der Startseite
          oder kehren Sie zur Übersicht zurück.
        </p>
        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Link href='/' className='btn-primary inline-flex min-h-12 items-center justify-center px-6'>
            Zur Startseite
          </Link>
          <Link
            href='/kontakt'
            className='btn-secondary inline-flex min-h-12 items-center justify-center px-6'
          >
            Kontakt
          </Link>
        </div>
        <div className='relative mx-auto mt-14 aspect-[357/384] max-w-[220px] opacity-90'>
          <Image
            src='/images/404.svg'
            alt=''
            fill
            className='object-contain'
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}

export default NotFound
