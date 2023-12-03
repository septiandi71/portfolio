import AnimationContainer from '../utils/AnimationContainer';

const ContactMe = () => {
  return (
    <AnimationContainer customClassName='w-full'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start' id='contact'>
        Contact me
      </h2>

      <div className='w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl'>

        <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10'>

          <a href='mailto:septiandi71@gmail.com' target='_blank' rel='noreferrer' className='w-full'>
            <div className='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'>
              <h6 className='font-bold text-1xl tracking-tight text-white text-start'>
                Email
              </h6>
              <p className='text-base mt-2 text-gray-400'>
                septiandi71@gmail.com
              </p>
            </div>
          </a>

          <a href='https://wa.me/62881010709933' target='_blank' rel='noreferrer' className='w-full'>
            <div className='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'>
              <h6 className='font-bold text-1xl tracking-tight text-white text-start'>
                Phone
              </h6>
              <p className='text-base mt-2 text-gray-400'>
                +62 881 0107 09933
              </p>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/septiandi71/' target='_blank' rel='noreferrer' className='w-full'>
            <div className='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'>
              <h6 className='font-bold text-1xl tracking-tight text-white text-start'>
                LinkedIn
              </h6>
              <p className='text-base mt-2 text-gray-400'>
                Devin Septiandi
              </p>
            </div>
          </a>

        </div>

      </div>

    </AnimationContainer >
  )
}

export default ContactMe;