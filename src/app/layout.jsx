import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Matt Mascolo',
    default:
      'Matt Mascolo - Web Developer, co-founder, and lifelong learner.',
  },
  description:
    'I&apos;m Matt Mascolo, a seasoned web developer and entrepreneur based out of Chattanooga, TN. As the co-founder of Learn Arena, we&apos;re focused on leveraging technology to democratize education, providing people with a competitive, engaging platform to learn and grow on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
