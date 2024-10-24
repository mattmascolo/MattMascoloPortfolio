import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/MattOnTheMountain.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I&apos;m Matt Mascolo. I live in Chattanooga, Tennessee.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I build web apps.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I&apos;m Matt Mascolo, a dedicated web developer with a knack for transforming complex concepts into engaging digital experiences. My developer journey began in 2014, when I created my first iPhone application. It was just a fun game for friends, but it was the spark that started my love for programming.
            </p>
            <p>
            Since stepping into the world of web development, I&apos;ve made it my mission to design unique and dynamic digital experiences. My broad-ranging portfolio reflects this commitment, encompassing projects as varied as creating websites for local charities to establishing digital platforms for major utility companies. I have directly developed around 100 websites and overseen the management of an additional 300, acquiring in-depth experience in diverse aspects of the field. Beyond the building and hosting of websites, my expertise extends to digital marketing, where I&apos;ve gained experience in recording, editing, and producing podcasts. This fusion of technical and creative skills has granted me a holistic understanding of digital communication and continues to fuel my passion for the field.
            </p>
            <p>
            Embedded in my professional DNA is a profound commitment to community service. This ethos manifested early in my career when I volunteered to build websites for local charities. It has since evolved into a more ambitious goal of reshaping education through Learn Arena, the competitive eLearning platform I co-founded. The platform aims to democratize learning by offering courses in various domains, including computer programming, data science, and philosophy. With an engaging competitive edge and the potential for learners to earn returns on their course investments, we aspire to make education as immersive and captivating as video games.
            </p>
            <p>
            Another project I&apos;ve undertaken was with the city of Memphis, TN, involving GIS technology. Utilizing both public and private data to map population distribution, employment status, and other metrics across Memphis. This work has been instrumental in aiding traffic and road planning, demonstrating how technology can address urban planning challenges.
            </p>
            <p>
            Overall, my career path has been an exploration of the intersections between technology, community service, and education. As a web developer, digital marketer, urban planner, and co-founder of Learn Arena, my journey is defined by the integration of these domains to foster positive social impact. Looking forward, I anticipate expanding Learn Arena&apos;s course offerings and fostering a vibrant learning community that breaks down traditional educational barriers.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/mattmascolo" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mattmascolo/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            {/* <SocialLink href="https://github.com/mattmascolo/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink> */}
            <SocialLink href="https://www.linkedin.com/in/matthew-mascolo-02b1ab154/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mattmascolo@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mattmascolo@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
