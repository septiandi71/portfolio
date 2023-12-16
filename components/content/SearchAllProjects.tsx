'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '2',
    title: '360° Virtual Office Design',
    des: 'Making virtual office design with sketchup and rendering into 360° panoramic image.',
    category: 'virtual realty - 360 design - sketchup',
    repo: '#private',
    link: 'https://momento360.com/e/uc/c89b370f08eb4e4580cd43e0e6689eb3?utm_campaign=embed&utm_source=other&size=medium&display-plan=true'
  },
  {
    id: '8',
    title: 'Hone Inu (ERC20)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: 'https://etherscan.io/address/0xe3d48a3f218a0a4e2d560121701b65817e2bc4f4',
    link: 'https://www.honeinu.com/'
  },
  {
    id: '9',
    title: 'Panther Inu (ERC20)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: '#private',
    link: 'https://www.pantherinu.co/'
  },
  {
    id: '10',
    title: 'Troy (ERC20)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: 'https://etherscan.io/address/0x4e3f9ad6ec4ea27a715a93bf978aff44417d4d00',
    link: 'hthttps://www.troyerc.com/'
  },
  {
    id: '11',
    title: 'The Almanack (ERC20)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: 'https://etherscan.io/token/0xe5a8ac2fbfcf2c239e2872d84707c885d805b500',
    link: 'https://www.thealmanack.co/'
  },
  {
    id: '12',
    title: 'Kyuurbi (Arbitrum)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: 'https://arbiscan.io/address/0xdf7676e0b6964fdfba4f9c187e02016595ee68b9',
    link: 'https://www.kyuurbi.world/'
  },
  {
    id: '13',
    title: 'Arbone (Arbitrum)',
    des: 'Static website for marketing purpose only',
    category: 'html - static - marketing - blockchain token',
    repo: '#private',
    link: 'https://www.arbone.site/'
  },
  {
    id: '7',
    title: 'Static Web Voting',
    des: 'Static web Voting for campus assignments',
    category: 'html - static - javascript',
    repo: '#private',
    link: 'https://webvoting.vercel.app/'
  },
  {
    id: '6',
    title: "Keb's Birthday Website",
    des: 'Static website for celebrating my gf bday',
    category: 'html - static - javascript',
    repo: '#private',
    link: 'https://keb-bday.fly.dev/'
  },
  {
    id: '5',
    title: 'My Old Portofolio Website',
    des: 'Static website for portofolio',
    category: 'html - static - javascript',
    repo: '#private',
    link: 'https://porto-devin.vercel.app/'
  },
  {
    id: '4',
    title: 'Custom QR Code Generator with qrcode-monkey Lib',
    des: 'Custom QR Code Generator',
    category: 'laravel - qrcode - generator',
    repo: 'https://gitlab.com/septiandi71/ifqrcodegenerator/',
    link: '#'
  },
  {
    id: '3',
    title: 'CMS Website Profile for School',
    des: 'CMS Website Profile for School',
    category: 'html - bootstrap - javascript - mysql - codeigniter',
    repo: '#private',
    link: 'https://smkashshohehdua.sch.id/'
  },
  {
    id: '1',
    title: 'Kunjungin App - Bangkit Capstone Project',
    des: 'Bangkit Capstone Project, my role was Cloud Computing, i developed the infrastructure and api with my teamate',
    category: 'gcp - app engine - nodejs - python - api',
    repo: 'https://github.com/vinsensiuschristo/KunjungIn/tree/cc',
    link: '#'
  }

];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;