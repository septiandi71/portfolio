import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
          Devin Septiandi
        </h1>

        <h2 className='flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0'>

          <span className='font-semibold'>Website Developer & Tech Enthusiast</span>

        </h2>
        <a className="bg-gray-200 hover:bg-gray-400 text-black-800 font-bold py-2 px-4 rounded inline-flex items-center mb-8" href='https://drive.google.com/file/d/1bylHv51yadbBjP3EuEzZCI52f6yeM5wa/view?usp=sharing' target='_blank'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
        </svg>
          <span>&nbsp;Devin Septiandi CV</span>
        </a>
      </AnimationContainer>

      <AnimationContainer customClassName='w-[300px] sm:w-[300px] relative mb-6 lg:mb-0'>
        <Image
          alt='Devin Septiandi'
          height={350}
          width={350}
          src='/pin-hello.webp'
          sizes='30vw'
          priority
          className='rounded-full'
          style={{
            backgroundColor:'#292929'
          }}
        />
      </AnimationContainer>

    </div>
  )
}

export default Hero;