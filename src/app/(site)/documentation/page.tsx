import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Natalie Zimmermann',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}