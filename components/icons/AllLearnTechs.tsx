'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faDocker, faLinux, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  }
};

const AllLearningTechs = () => {
  return (
    <>
      <motion.p
        className='text-base text-center lg:text-start mb-2.5 text-gray-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        I am currently learning or interested in learning:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-[#444]'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 grayscale hover:grayscale-0'>
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ color: "white", fontSize: 24 }}
            title="Nodejs"
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#0277bd]'>
          <FontAwesomeIcon
            icon={faPython}
            style={{ color: "white", fontSize: 24 }}
            title="Python"
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 text-gray hover:text-[#ff4081]'>
          <FontAwesomeIcon
            icon={faLinux}
            style={{ color: "white", fontSize: 24 }}
            title="Linux"
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#FFF]'>
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            style={{ color: "white", fontSize: 24 }}
            title="Google Cloud Platform"
          />
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#066da5]'>
          <FontAwesomeIcon
            icon={faDocker}
            style={{ color: "white", fontSize: 24 }}
            title="Docker"
          />
          </div>
        </motion.li>

      </motion.ul>

    </>
  )
}


export default AllLearningTechs;