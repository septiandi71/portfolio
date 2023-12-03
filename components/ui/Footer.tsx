import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab, faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFile, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto'>

      <hr className='w-full border-1 border-gray-800 mb-8' />

      <AnimationContainer customClassName='w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3'>

        <div className='flex flex-col space-y-4'>

          <Link
            href='/'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'
          >
            <FontAwesomeIcon
            icon={faHome}
            style={{ fontSize: 18 }}
            title='Home'
          />
            Home
          </Link>

          <Link
            href='/about'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'
          >
            <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: 18 }}
            title='About'
          />
            About
          </Link>

          <Link
            href='/projects'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'
          >
            <FontAwesomeIcon
            icon={faCode}
            style={{ fontSize: 18 }}
            title='Projects'
          />
            Projects
          </Link>

        </div>

        <div className='flex flex-col space-y-4'>

        <Link
            href='https://gitlab.com/septiandi71'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'
          >
          <FontAwesomeIcon
            icon={faGitlab}
            style={{ fontSize: 18 }}
            title='GitLab'
          />
            GitLab
          </Link>

          <Link href='https://github.com/septiandi71'
          className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: 18 }}
            title='GitHub'
          />
            GitHub
          </Link>

          <Link href='https://linkedin.com/in/septiandi71'
          className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: 18 }}
            title='GitHub'
          />
            LinkedIn
          </Link>

        </div>

        <div className='flex flex-col space-y-4'>

          <Link href='https://open.spotify.com/user/31vg53v52vag3j4tcwmswqniqe7e'
          className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'>
          <FontAwesomeIcon
            icon={faSpotify}
            style={{ fontSize: 18 }}
            title='Spotify'
          />
          Spotify
          </Link>

          <Link href='https://drive.google.com/file/d/1bylHv51yadbBjP3EuEzZCI52f6yeM5wa/view?usp=sharing'
          className='flex items-center gap-2 text-gray-500 hover:text-gray-400 transition ease'>
          <FontAwesomeIcon
            icon={faFile}
            style={{ fontSize: 18 }}
            title='CV'
          />
            My CV
          </Link>
          

        </div>
      </AnimationContainer>

    </footer>
  )
}

export default Footer;