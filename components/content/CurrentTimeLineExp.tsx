'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.linkedin.com/company/bangkit-academy/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</a></TimelineEvent.Title>

        <TimelineEvent.SubTitle>Cloud Computing Student 2023 Cohort 2 &nbsp;&nbsp;||&nbsp;&nbsp; Aug. 2023 - Jan. 2024</TimelineEvent.SubTitle>

        <TimelineEvent.Description>
        I've learned the fundamentals of Cloud Computing, including IaaS, PaaS, and SaaS. and i've developed my problem-solving and critical thinking skills through challenging projects and assignments. And also i've collaborated with other students from different backgrounds to build a cloud-based application on a Capstone Project.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.linkedin.com/company/pt-grup-riset-potensial/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Grup Riset Potensial</a></TimelineEvent.Title>

        <TimelineEvent.SubTitle>Web Developer & IT Staff &nbsp;&nbsp;||&nbsp;&nbsp; Jul. 2017 - Feb. 2023</TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          I was worked as Web Developer and IT Staff, my jobdesk was maintaining application survey for internal use. such as handling database management, helping user to using the app, fixing minor bugs & errors. and i was have created many dashboard from the collected data for visualizing into a graphic chart, sometimes i do some data collecting like web scrapping or using third party api like google places api. 
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

      <TimelineEvent.Title><a href='https://www.linkedin.com/company/auditsi-executive-recruitment-services/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Auditsi Executive Search</a></TimelineEvent.Title>

      <TimelineEvent.SubTitle>Frontend Division (Internship) &nbsp;&nbsp;||&nbsp;&nbsp; Jul. 2016 - Oct. 2016</TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          My main role was Frontend Dev, and i was converting psd web design into responsive websites using HTML, CSS, JS, and the Bootstrap framework. and also i have to ensure the website works at any resolutions.   
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;