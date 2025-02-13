
"use client";

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

const categories = [
  {
    title: "General Information",
    questions: [
      {
        question: "What is Sikkim Rising Star?",
        answer: "Sikkim Rising Star is the state's premier talent hunt competition, established in 2018. We provide a professional platform for aspiring artists to showcase their talents in singing, dancing, and music, with a focus on nurturing and promoting local talent on a national stage."
      },
      {
        question: "When was Sikkim Rising Star established?",
        answer: "The competition was established in 2018 with the vision of creating a professional platform for Sikkim's talented youth. Since then, we have successfully launched numerous careers in the performing arts industry."
      }
    ]
  },
  {
    title: "Participation & Eligibility",
    questions: [
      {
        question: "Who can participate?",
        answer: "Anyone between the ages of 16-35 residing in Sikkim can participate. We welcome participants across all categories - singing, dancing, and music. While prior experience is valuable, we emphasize raw talent and potential."
      },
      {
        question: "What are the participation categories?",
        answer: "We offer three main categories: Singing (solo and duet), Dancing (classical, contemporary, and folk), and Music (instrumental and band). Each category has specific sub-categories to ensure fair competition."
      }
    ]
  },
  {
    title: "Competition Process",
    questions: [
      {
        question: "How does the selection process work?",
        answer: "The selection process consists of multiple rounds: initial registration and screening, live auditions, semi-finals, and the grand finale. Each round is judged by industry professionals based on technique, creativity, and stage presence."
      },
      {
        question: "What are the prizes and rewards?",
        answer: "Winners receive substantial cash prizes (total pool of ₹10 lakhs), professional contracts, mentorship opportunities, and exposure through our media partners. Additional benefits include recording sessions, portfolio development, and performance opportunities."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <Section title="Frequently Asked Questions" className="mb-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {categories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-6">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.questions.map((faq) => (
                <Disclosure key={faq.question}>
                  {({ open }) => (
                    <div className="group">
                      <Disclosure.Button className="w-full px-8 py-6 flex justify-between items-center bg-gradient-to-br from-amber-950/90 to-black rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/5">
                        <span className="text-lg font-medium text-white group-hover:text-amber-200 transition-colors text-left">
                          {faq.question}
                        </span>
                        <ChevronDownIcon className={`w-6 h-6 text-amber-400 transform transition-all duration-300 ${open ? 'rotate-180 text-amber-300' : ''}`} />
                      </Disclosure.Button>
                      
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-8 py-6 mt-2 bg-gradient-to-br from-amber-950/50 to-black rounded-xl text-gray-300 leading-relaxed border border-amber-500/10">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
