'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel, faBootstrap, faGitlab, faJs, faHtml5, faCss3, faPhp, faGithub } from "@fortawesome/free-brands-svg-icons";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  }
};

const AllFavTechs = () => {
  return (
    <>
      <motion.p
        className='text-base text-center lg:text-start mb-2.5 text-gray-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Current favorite tech stack/tools:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-[#444] mx-auto'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#3178C6]'>

          <FontAwesomeIcon
            icon={faLaravel}
            style={{ color: "white", fontSize: 24 }}
            title='Laravel'
          />
          </div>
        </motion.li>


        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#61DAFB]'>
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{ color: "white", fontSize: 24 }}
            title='Bootstrap'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#FFFFFF]'>
          <FontAwesomeIcon
            icon={faGitlab}
            style={{ color: "white", fontSize: 24 }}
            title='GitLab'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#FFFFFF]'>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "white", fontSize: 24 }}
            title='GitHub'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 filter grayscale hover:grayscale-0'>
          <FontAwesomeIcon
            icon={faPhp}
            style={{ color: "white", fontSize: 24 }}
            title='PHP'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 filter grayscale hover:grayscale-0'>
          <FontAwesomeIcon
            icon={faJs}
            style={{ color: "white", fontSize: 24 }}
            title='Javascript'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 filter grayscale hover:grayscale-0'>
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "white", fontSize: 24 }}
            title='HTML'
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 filter grayscale hover:grayscale-0'>
          <FontAwesomeIcon
            icon={faCss3}
            style={{ color: "white", fontSize: 24 }}
            title='CSS'
          />
          </div>
        </motion.li>

      </motion.ul>
    </>
  )
}

export default AllFavTechs;