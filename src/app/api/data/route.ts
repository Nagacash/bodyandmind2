import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Home', href: '/#Hero' },
  { label: 'Über Mich', href: '/#About' },
  { label: 'Team', href: '/#Team' },
  { label: 'FAQ', href: '/#FAQ' },
  { label: 'Shop', href: '/shop' },

  { label: 'Featured', href: '/#Featured' },
  { label: 'Presse', href: '/#Presse' },



]

// mobile header nav-links data
const mobileHeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#Hero' },
  { label: 'Über Mich', href: '/#About' },
  { label: 'Team', href: '/#Team' },
  { label: 'FAQ', href: '/#FAQ' },
  { label: 'Featured', href: '/#Featured' },
  { label: 'Presse', href: '/#Presse' },
  { label: 'Blog', href: '/#Blog' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressum', href: '/imprint' },
  { label: 'Datenschutz', href: '/privacy' },
  { label: 'AGB', href: '/agb' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Über Mich.',
    imgSrc: '/images/aboutus/boxa6.jpg',
    paragraph:
      'Seit meinem 20. Lebensjahr bin ich Leistungssportlerin und habe meine Leidenschaft außerdem zu meinem Beruf gemacht.\n\n\nSeit fast 20 Jahren arbeite ich bereits als Physiotherapeutin, Personal Fitness Trainerin und Mental Trainerin.\n\n\nIch liebe es, zu lernen und mich weiterzuentwickeln, und strebe danach, jeden Tag mein Bestes zu geben – sowohl im Sport als auch als Coach.\n\n\nDaher bilde ich mich kontinuierlich fort, um sowohl als Kämpferin als auch als Coach 100% Leistung zu erbringen und meine Klienten optimal zu betreuen.',
    fullParagraph:
      'Seit meinem 20. Lebensjahr bin ich Leistungssportlerin und habe meine Leidenschaft außerdem zu meinem Beruf gemacht. Seit fast 20 Jahren arbeite ich bereits als Physiotherapeutin, Personal Fitness Trainerin und Mental Trainerin. \n\nIch liebe es, zu lernen und mich weiterzuentwickeln, und strebe danach, jeden Tag mein Bestes zu geben – sowohl im Sport als auch als Coach. Daher bilde ich mich kontinuierlich fort, um sowohl als Kämpferin als auch als Coach 100% Leistung zu erbringen und meine Klienten optimal zu betreuen.\nMit Freude gebe ich meine Expertise weiter, um Menschen zu inspirieren und zu motivieren, eine bessere Version ihrer selbst zu werden und das Beste aus ihrem Leben zu machen, um ein glückliches, gesundes und erfülltes Leben zu führen. \nEs ist nie zu spät, um an sich zu glauben und seine Ziele und Träume zu verwirklichen: So habe ich mich mit Mitte 30 dazu entschieden, meinen Traum zu verfolgen und Profiboxerin zu werden. 2023 habe ich diesen Traum verwirklicht und den Meisterschaftstitel gewonnen.',
    link: 'Learn more',
  },
  {
    heading: 'Die Speakerin.',
    imgSrc: '/images/aboutus/NatalieZimmermann3.jpg',
    paragraph:
      'Als erfolgreiche Profibox-Weltmeisterin und leidenschaftliche Rednerin teile ich meine inspirierende Geschichte und wertvolle Erkenntnisse über Erfolg, Durchhaltevermögen und mentale Stärke mit Ihnen.\n\nVon der Schäferstochter zur Boxweltmeisterin: Erleben Sie eine inspirierende Reise von der Schäfertochter zur Boxweltmeisterin. \n\n\nIn diesem Vortrag teile ich meine Erfolgsgeheimnisse und zeige, wie ich es geschafft habe, meine Träume zu verwirklichen.\nLassen Sie sich von meiner Geschichte motivieren und lernen Sie, wie Sie Ihre eigenen Ziele erreichen können.',
    fullParagraph:
      'Als erfolgreiche Profibox-Weltmeisterin und leidenschaftliche Rednerin teile ich meine inspirierende Geschichte und wertvolle Erkenntnisse über Erfolg, Durchhaltevermögen und mentale Stärke mit Ihnen.\n\nVon der Schäferstochter zur Boxweltmeisterin: Erleben Sie eine inspirierende Reise von der Schäferstochter zur Boxweltmeisterin. In diesem Vortrag teile ich meine Erfolgsgeheimnisse und zeige, wie ich es geschafft habe, meine Träume zu verwirklichen. Lassen Sie sich von meiner Geschichte motivieren und lernen Sie, wie Sie Ihre eigenen Ziele erreichen können.\n\nBelastungsgrenzen sprengen: In diesem Workshop lernen Sie, wie Sie Belastungsgrenzen sprengen und Herausforderungen mit innerer Freude, Gelassenheit und Vertrauen meistern können. Anstatt auszubrennen oder krank zu werden, zeige ich Ihnen Techniken, um stressige Situationen positiv zu bewältigen und Ihre Resilienz zu stärken.\n\nWie ich mein biologisches Alter zurückdrehen kann: Entdecken Sie Maßnahmen und Tools, die Ihnen helfen, Ihr biologisches Alter zurückzudrehen und sich zu verjüngen. In diesem Vortrag stelle ich effektive Methoden vor, die nicht nur körperlich, sondern auch mental und emotional verjüngen.\n\nAußerdem biete ich Ihnen maßgeschneiderte Speaker-Auftritte, bezogen auf Ihre individuellen Themen, auf Konferenzen, Workshops und Veranstaltungen an, die Ihre Zuhörer motivieren und inspirieren werden. \nBuchen Sie mich für Ihre nächste Veranstaltung, profitieren Sie von meinem Wissen als Physiotherapeutin, Mentalcoach und Fitnesstrainerin und lassen Sie sich von meiner Begeisterung und meinem Wissen inspirieren, um Ihre eigenen Ziele erreichen.',
    link: 'Learn more',
  },
  {
    heading: 'DER MENTAL-COACH:',
    imgSrc: '/images/aboutus/boxa6.jpg',
    paragraph:
      'Egal, ob Sie in Ihrem Sport, Beruf oder persönlichen Leben vor Herausforderungen stehen, ich biete maßgeschneidertes Coaching an, das genau auf Ihre individuellen Bedürfnisse abgestimmt ist.\nGemeinsam arbeiten wir daran, Ihre inneren Blockaden zu überwinden, Ihre Ziele klar zu definieren und Strategien zu entwickeln, um diese zu erreichen.\n\nWarum Mentales Coaching mit mir?\nErfahrung und Expertise: Mit meiner fundierten Ausbildung als Physiotherapeutin, Mentalcoach und Fitnesstrainerin bringe ich ein umfassendes Wissen und praktische Erfahrung mit, um Sie bestmöglich zu unterstützen',
    fullParagraph:
      'Egal, ob Sie in Ihrem Sport, Beruf oder persönlichen Leben vor Herausforderungen stehen, ich biete maßgeschneidertes Coaching an, das genau auf Ihre individuellen Bedürfnisse abgestimmt ist. \n\n\nGemeinsam arbeiten wir daran, Ihre inneren Blockaden zu überwinden, Ihre Ziele klar zu definieren und Strategien zu entwickeln, um diese zu erreichen. \n\n\nWarum Mentales Coaching mit mir? \n\n\nErfahrung und Expertise: Mit meiner fundierten Ausbildung als Physiotherapeutin, Mentalcoach und Fitnesstrainerin bringe ich ein umfassendes Wissen und praktische Erfahrung mit, um Sie bestmöglich zu unterstützen.<br />Persönliche Erfolgsgeschichte: Als Profibox-Weltmeisterin weiß ich, was es bedeutet, sich durchzusetzen und an die eigenen Grenzen zu gehen. Diese Erfahrungen fließen in mein Coaching ein und bieten Ihnen wertvolle Einblicke und Motivation.\n\n\nGanzheitlicher Ansatz: Mein Coaching-Ansatz ist ganzheitlich und berücksichtigt sowohl Ihre körperliche als auch geistige Gesundheit. So können Sie nachhaltig und langfristig von den positiven Effekten profitieren.',
    link: 'Learn more',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Mental Coach, Speaker, Influencer, Profiboxerin, Personal Trainer, Physiotherapeutin. Spezialisiert auf Manuelle Therapie und Leistungssportler. Faszienexpertin und Lu Jong Yoga Lehrerin. Mentalcoach mit Schwerpunkt Wingwave. Leidenschaftliche Kampfsportlerin seit 22 Jahren.',
    name: 'Natalie',
    imgSrc: '/images/wework/coach1.avif',
    width: 182,
    height: 182,
  },
  {
    profession: 'Bachelor of Arts in Fitnessökonomie. Zertifizierter Trainer (B- und A-Lizenz), Ernährungsberater und Athletiktrainer (B-Lizenz). Bietet EMS-Training an. Ehemaliger semi-professioneller Fußballspieler, jetzt Fußballcoach, Box- und Kickboxen-Coach.',
    name: 'Jerry',
    imgSrc: '/images/wework/coach2.avif',
    width: 182,
    height: 182,
  },
  {
    profession: 'Ernährungswissenschaftler (B.Sc.), M.Sc. in Ernährung und Sport. Dozent an der Macromedia Hochschule. Über zehn Jahre Erfahrung als Personal Trainer mit Zusatzqualifikationen als Functionaltrainer. Sportliche Erfahrungen in Karate, Fußball, Leistungsturnen, Kickboxen, Boxen, Thaiboxen, Grappling, BJJ und MMA.',
    name: 'Juri',
    imgSrc: '/images/wework/coach3.avif',
  },
  {
    profession: 'Staatlich anerkannte Sportlehrerin und Dozentin. Bereiche: Pilates, Yinyoga, Kampfsportfitness/Combat, Tanz, Funktionales Training, Faszien Training, Gesundheitstraining, Schmerztherapie, Atemtherapie, Cupping/Schröpfen, Taping und verschiedene Massagen.',
    name: 'Zasou',
    imgSrc: '/images/wework/coach4.avif',
  },
  
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: '',
    imgSrc: '/images/featured/box1.jpg',
  },
  {
    heading: '',
    imgSrc: '/images/featured/box2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Powerworkout 2 Times a Week',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'pro Monat',
    features: [
      '2 Trainingseinheiten pro Woche',
      'Individueller Trainingsplan',
      'Ernährungsberatung (Basis)',
      'Zugang zur Community',
      'E-Mail-Support',
    ],
  },
  {
    heading: '4 Times a Week',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'pro Monat',
    features: [
      '4 Trainingseinheiten pro Woche',
      'Fortgeschrittener Trainingsplan',
      'Detaillierte Ernährungsberatung',
      'Premium Community Zugang',
      'Priorisierter E-Mail-Support',
    ],
  },
  {
    heading: 'Jeden Tag Trainieren',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'pro Monat',
    features: [
      'Tägliche Trainingseinheiten',
      'Maßgeschneiderter Elite-Trainingsplan',
      'Umfassende Ernährungs- und Lebensstilberatung',
      'Exklusiver 1-zu-1 Coaching-Zugang',
      '24/7 WhatsApp Support',
    ],
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'FATI',
    profession: 'AMATEUR BOXER',
    comment:
      'Kann ich nur weiter empfehlen,danke für die nette Beratung,die besten personal Trainer aus Hamburg sind hier zu finden !!',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'EINSTÜCKMAXIKA',
    profession: 'STUDENTIN',
    comment:
      'Mein Vater und ich waren vor unserer Kilimandscharoreise fünf mal beim Höhentraining, um uns bestmöglich auf die extreme Höhe vorzubereiten.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'DEMET A',
    profession: 'VATER',
    comment:'Kann ich nur weiterempfehlen! Seit 8 Wochen trainiere ich mit Natalie. Beide sind absolute Profis auf ihrem Gebiet und man merkt ihnen an, dass sie ihre Passion gefunden haben, was mich total motiviert.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'RobertA Foxy',
    profession: 'MUTTER',
    comment:
      'SUPER !! ',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Seit 8 Wochen trainiere ich mit Natalie und Eugen mindestens einmal die Woche und will es nicht mehr missen. Selbst wenn ich vor dem Training gestresst und müde bin - danach fühle ich mich grandios und gleichzeitig ausgepowert und voller Energie. Beide sind absolute Profis auf ihrem Gebiet und man merkt ihnen an, dass sie ihre Passion gefunden haben, was mich total motiviert.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'ENRICO Fisher',
    profession: 'ARBEITER',
    comment:
      'ZU GUT DAS GANZE, UNBEDINGT BUCHEN :)',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: 'Jetzt anfragen',
    heading: 'Speakerin',
    heading2: '',
    name: 'Erlebe den fesselnden Werdegang von der Schäferstochter zur Weltmeisterin im Profiboxen. Motivation, Strategie und Selbstbehauptung. \n\n\nIch teile meinen Erfolg mit dir.',
    date: '2025',
    imgSrc: '/images/articles/nat1.jpg',
    width: 200,
    height: 200,
  },
  {
    time: 'Jetzt anfragen',
    heading: 'Marken-botschafterin',
    heading2: 'Für ihre Produkte!',
    name: 'Als Markenbotschafterin bringe ich Ihre Marke authentisch und sympathisch rüber, erstelle zielgerichtete Inhalte und stärke Ihre Marketingkampagnen. Mit meiner aktiven Social Media Präsenz und positiven Kommunikation baue ich Vertrauen auf und fördere die Kundenbindung.',
    date: '2025',
    imgSrc: '/images/articles/sab8.jpg',
    width: 200,
    height: 200,
  },
  {
    time: 'Jetzt anfragen',
    heading: 'Coaching',
    heading2: 'Für ein freies Denken!',
    name: 'Mental-/Healthcoaching: Du möchtest Altlasten, Blockaden und negative Gedanken loswerden? Du möchtest deine Muster durchbrechen oder einfach das Beste aus dir herausholen? - In meinem Onlinecoaching helfe ich dir, dein Selbst neu zu finden und selbstbewusst und erfolgreich aufzutreten. ',
    date: '2025',
    imgSrc: '/images/articles/nat2.jpg',
    width: 200,
    height: 200,
  },

]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: headerData
  },
  {
    section: 'Others',
    links: [
      { label: 'Leistungen', href: '/#Blog' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Speakerin', href: '/#Blog' },
    ]
  },
  {
    section: 'Partners',
    links: [
      { label: 'Mesoskin', href: 'https://www.mesoskin-hamburg.com' },
    ]
  }
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    mobileHeaderData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
