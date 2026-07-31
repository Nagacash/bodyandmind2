import { SITE_URL } from '@/app/data/site'

export const faqPageLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie kann man Natalie Zimmermann erreichen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sie erreichen Natalie Zimmermann über das Kontaktformular auf nataliezimmermann.de, per E-Mail an info@nataliezimmermann.de oder telefonisch unter 040 / 53790578. Das Body & Mind Studio befindet sich in der Rothenbaumchaussee 156, 20149 Hamburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Stunde Personal Training in Hamburg bei Natalie Zimmermann?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Die Kosten für eine Stunde Personal Training bei Body & Mind by Natalie Zimmermann variieren je nach individuellen Bedürfnissen, Trainingsumfang und Zielen. Für ein maßgeschneidertes Angebot kontaktieren Sie uns bitte direkt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie verläuft die Terminvergabe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Nehmen Sie Kontakt über das Kontaktformular oder telefonisch unter 040 / 53790578 auf und vereinbaren Sie flexibel Ihren Wunschtermin. Wir passen uns Ihrem Zeitplan an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wo findet das Training statt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Das Training findet im Body & Mind Studio in Hamburg-Harvestehude statt – einer Jugendstilvilla in der Rothenbaumchaussee 156, 20149 Hamburg. Zusätzlich bieten wir Online-Coaching und Online-Training an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Trainingsarten bietet Natalie Zimmermann an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Wir bieten Boxen, Kickboxen, Personal Training, Mental Coaching (u. a. Wingwave), Massagen, Physiotherapie, Manuelle Therapie, Faszientraining und Lu Jong Yoga. Jedes Training wird individuell angepasst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich Vorkenntnisse für Boxen oder Personal Training haben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Nein, Vorkenntnisse sind nicht erforderlich. Das Training wird an Ihr individuelles Fitnesslevel angepasst – sowohl für Anfänger als auch für Fortgeschrittene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bietet Natalie Zimmermann Wingwave Coaching in Hamburg an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ja. Natalie Zimmermann ist Mental Coach mit Schwerpunkt Wingwave und bietet Wingwave Coaching im Body & Mind Studio in Hamburg-Harvestehude an (Rothenbaumchaussee 156, 20149 Hamburg). Wingwave ist eine neurobiologisch fundierte Methode zur schnellen Lösung emotionaler Blockaden und Stress — kombiniert mit Personal Training und Physiotherapie. Kontakt: info@nataliezimmermann.de oder 040 / 53790578.',
      },
    },
  ],
} as const

export function breadcrumbLd(name: string, itemUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: itemUrl },
    ],
  }
}
