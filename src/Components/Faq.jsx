import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from "react";

function Faq() {






    
      const [questions, setQuestions] = useState([
        {
          id: 1,
          name: "What is Talkai247 and how does it work?",
          answer:"Talkai247 is an AI-powered receptionist service designed to handle business communications efficiently. Utilizing advanced natural language processing, it can manage calls, schedule appointments, and respond to customer inquiries 24/7. The AI system is programmed to understand and interact in a conversational manner, ensuring a seamless and professional experience for your customers.",
        },
        {
          id: 2,
          name: "Can Talkai247 handle calls in different languages?",
          answer:"Talkai247 is an AI-powered receptionist service designed to handle business communications efficiently. Utilizing advanced natural language processing, it can manage calls, schedule appointments, and respond to customer inquiries 24/7. The AI system is programmed to understand and interact in a conversational manner, ensuring a seamless and professional experience for your customers.",
        },
        {
          id: 3,
          name: "How does Talkai247 ensure privacy and data security",
          answer:"Talkai247 is an AI-powered receptionist service designed to handle business communications efficiently. Utilizing advanced natural language processing, it can manage calls, schedule appointments, and respond to customer inquiries 24/7. The AI system is programmed to understand and interact in a conversational manner, ensuring a seamless and professional experience for your customers.",
        },
    
        {
          id: 4,
          name: "Is Talkai247 suitable for small businesses?",
          answer:"Talkai247 is an AI-powered receptionist service designed to handle business communications efficiently. Utilizing advanced natural language processing, it can manage calls, schedule appointments, and respond to customer inquiries 24/7. The AI system is programmed to understand and interact in a conversational manner, ensuring a seamless and professional experience for your customers.",
        },
        {
          id: 5,
          name: "How can I integrate Talkai247 into my existing business processes?",
          answer:"Talkai247 is an AI-powered receptionist service designed to handle business communications efficiently. Utilizing advanced natural language processing, it can manage calls, schedule appointments, and respond to customer inquiries 24/7. The AI system is programmed to understand and interact in a conversational manner, ensuring a seamless and professional experience for your customers.",
        },
    
       
      ]);
    
      const toggleQuestion = (id) => {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) =>
            question.id === id
              ? { ...question, isOpen: !question.isOpen }
              : question
          )
        );
      };
    

  return (
    <>
    <div className='py-10 bg-white'>
    <h1 className='font-bold text-[#FE7E29] text-center uppercase text-xl md:text-3xl mt-14'>Frequently Asked Questions</h1>
    <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />


<p className='md:text-sm text-xs text-center mx-10 md:mx-20 py-5'>Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers. With services covering everything from call handling to automated invoicing, Talkai247 stands as a comprehensive solution for modern business communication needs.</p>


<div className=" flex items-center mx-10 md:mx-auto justify-center md:justify-normal bg-white md:w-1/4 rounded-full border border-gray-600">
<Icon icon="heroicons-solid:search" className='md:ml-5' width="25" color='gray' height="25" />
      <input
        type="text"
        placeholder="What can we help you find?"
        className="py-2 md:px-3 placeholder:text-sm    focus:outline-none focus:border-blue-500"
      />
    
    </div>




    <div className="mx-auto w-[77%] mt-10 bg-white">
  {questions.map((question) => (
    <div key={question.id} className="cursor-pointer rounded-xl my-3 bg-gray-100">
      <div onClick={() => toggleQuestion(question.id)} className="flex justify-between items-center">
        <p className="p-5 ml-2 md:text-[18px] font-bold  text-[12px]" onClick={() => toggleQuestion(question.id)}>
          {question.name}
        </p>
        <div>
          <Icon
            icon={
              question.isOpen
                ? "line-md:chevron-up"
                : "line-md:chevron-down"
            }
            className="mr-5"
            onClick={() => toggleQuestion(question.id)}
          />
        </div>
      </div>
      {question.isOpen && (
        <>
          <p className="mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
            {question.answer}
          </p>
         </>
      )}
    </div>
  ))}
</div>






    </div>

    
    
    
    
    
    
    
    </>
  )
}

export default Faq