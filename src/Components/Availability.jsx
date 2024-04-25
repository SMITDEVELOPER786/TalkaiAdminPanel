import React from 'react'
import FeatureCard from '../Common/FeatureCard'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Icon } from '@iconify/react/dist/iconify.js';

function Availability() {

    const percentageHR = 66; // Example percentage for HR Cost
    const percentageAI = 34; // Example percentage for AI Cost


  return (
<div className="p-10 bg-white">
      <div className="grid grid-cols-1 md:mx-10 md:grid-cols-2 justify-items-center gap-y-7  ">
        <FeatureCard
          title="Cost-Effectiveness"
          description="Talkai247's integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers."
          // You can add icon as a JSX component or an image
          icon={<Icon icon="mdi:tick-circle" width="36" height="36" />}
        />
        <FeatureCard
          title="24/7 Availability"
          description="Unlike human staff, Talkai247 operates 24/7 without breaks, vacations, or downtimes. This constant availability ensures that no call goes unanswered, capturing every opportunity and providing uninterrupted service to your customers, regardless of the time or day."
          icon={<Icon icon="mdi:tick-circle" width="36" height="36" />}

      />
        <FeatureCard
          title="Enhanced Customer Service"
          description="With AI-driven efficiency, Talkai247 handles calls with precision and professionalism, boosting customer satisfaction. It can promptly address common queries, forward calls to appropriate departments, and even handle bookings, ensuring a seamless and pleasant experience for your customers."
          icon={<Icon icon="mdi:tick-circle" width="36" height="36" />}

       />
        <FeatureCard
          title="Scalability and Flexibility"
          description="Talkai247 is designed to grow with your business. Easily update the AI's knowledge base with your evolving products, services, and pricing. The system's adaptability allows for easy customization and scaling, catering to fluctuating call volumes and changing business needs without the need for additional staffing."
          icon={<Icon icon="mdi:tick-circle" width="36" height="36" />}

     />
      </div>









    </div>  )
}

export default Availability