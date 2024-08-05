import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoMWDesign from '@/images/logos/mwdesignlogo.png'
import logoLearnArena from '@/images/logos/learnarena.png'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import { Container } from '@/components/Container'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

const projects = [
  {
    name: 'LearnArena',
    description:
      'Take courses in computer programming, data science, and philosophy. Earn a return on your investment in each course by placing highly in your class.',
    link: { href: 'https://learnarena.com/', label: 'LearnArena.com' },
    logo: logoLearnArena,
  },
  {
    name: 'MW Website Design',
    description:
      'Personal website deisgn & development company specializing in digital marketing for resorts and hotels with a focus on simplicity.',
    link: { href: 'https://webdesign.mascolo.co/', label: 'webdesign.mascolo.co' },
    logo: logoMWDesign,
  },
  {
    name: 'Artificial Intelligent Dungeon Master',
    description:
      'A web application that uses artificial intelligence to dynamically generate encounters for a Dungeons & Dragons campaign.',
    link: { href: '/articles/ai-dungeon-master-next13', label: 'Read More' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Crossplay Photo Share with Expo',
    description:
      'React Native app that solves the perennial problem of sharing high-resolution photos between iOS and Android devices.',
    link: { href: '/articles/expo-crossplay-photo-share', label: 'Read More' },
    logo: logoOpenShuttle,
  },
  {
    name: 'More to come',
    description:
      'Working on compiling some more of my work here!',
    link: { href: '#', label: 'Stay Tuned!' },
    logo: logoOpenShuttle,
  },
]

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'A Few Projects.',
}

export default async function Projects() {
  let articles = (await getAllArticles()).slice(0, 4)
  return (
    <SimpleLayout
      title="A Few Projects."
      intro="Throughout my career, I have been involved in a range of projects that have allowed me to apply and expand my web development skills. Highlighted below are some of the key projects that I take particular pride in. These projects exemplify the breadth of my work, from creating dynamic websites to recording and producing engaging podcasts, and even to implementing GIS technology for urban planning. Please take a moment to explore these and get a better understanding of my professional experience and areas of expertise."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center bg-white shadow-md drop-shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border rounded-full dark:bg-white dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      <div className="mt-20 md:mt-24">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Recent Articles
        </h2>
        <div className='my-8'></div>
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
      </div>
    </SimpleLayout>
  )
}
