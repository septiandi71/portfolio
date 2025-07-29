import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      Software Developer specializing in web development (Laravel, NodeJS). And experienced in Web3 through an 
      internship with Kemdikbudristek and a graduate of the Bangkit Academy Cloud Computing cohort. Eager to 
      contribute to innovative and challenging tech projects.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;