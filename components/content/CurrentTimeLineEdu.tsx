'use client';

import { Timeline, TimelineEvent } from './TimeLineEdu';

const CurrentTimeLineEdu = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.linkedin.com/company/bangkit-academy/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Institut Bisnis & Informatika Kesatuan</a></TimelineEvent.Title>

        <TimelineEvent.SubTitle>System Informatics | Jun. 2021 - Currently</TimelineEvent.SubTitle>

        <TimelineEvent.Description>
            Undergraduate student majoring in Information Systems.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://www.linkedin.com/company/pt-grup-riset-potensial/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>SMK WIKRAMA BOGOR</a></TimelineEvent.Title>

        <TimelineEvent.SubTitle>Software Engineering | Jun. 2014 - May. 2017</TimelineEvent.SubTitle>

        <TimelineEvent.Description>
           Graduate from Vocational High School majoring in Software Engineering.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineEdu;