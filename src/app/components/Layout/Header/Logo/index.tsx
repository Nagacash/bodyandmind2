import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold'>
      <Image src='/images/logo/logo.svg' alt='Natalie Zimmermann Logo' width={150} height={40} className='w-24 h-8' />
    </Link>
  )
}

export default Logo
