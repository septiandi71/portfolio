import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import CurrentTimeLineEdu from '../content/CurrentTimeLineEdu';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
          Hello World! My name is Devin Septiandi, As a Website Developer, I have quite good knowledge and I have strong dedication to always stay update for latest developments in the tech industry and I keep trying improve my skills at every opportunity.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <CurrentTimeLineEdu />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills & Tools</h2>

          <p className='text-base text-gray-400'>
          Take a look at all the programming languages, libraries, and tools I've worked with, I've started programming when i was at a highschool. I have tried a few programming languages and technology stack.
          </p>

          <p className='text-base text-gray-400'>
          Event though the scope of tech development is wide, until now I still continue to learn a new things to increase my value in the tech industry.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            For now i will ontinue to develop my skills in Laravel and Node.js. I want to become a proficient user of both frameworks and be able to use them to create complex and scalable web applications. and the wev development is constantly evolving, and I want to make sure that I am always up-to-date on the latest technologies.

          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides web development such as Blockchain and IoT Programming, for now i will take those things as a hobby.
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

export default AboutSection;