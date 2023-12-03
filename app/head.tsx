'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Devin Septiandi ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hello World! My name is Devin Septiandi, As a Website Developer, I have quite good knowledge and I have strong dedication to always stay update for latest developments in the tech industry and I keep trying improve my skills at every opportunity.`,
    keywords: 'Devin Septiandi, Devin, Devin Septiandi portafolio, Pindepin portafolio, Pindepin portfolio, Devin Septiandi portfolio, septiandi71 github, septiandi71 gitlab, Devin Septiandi github, Devin Septiandi gitlab, Devin Septiandi LinkedIn, Devin LinkedIn, Web.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`pindepin.site`} />
      <link rel='canonical' href={`pindepin.site`} />
      <link rel='me' href='mailto:septiandi71@gmail.com' />
      <link rel='icon' href='/favicon.webp' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Devin Septiandi' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@pindepinnnn' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;