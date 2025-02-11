"use client";

import { Disclosure } from '@headlessui/react';
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
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-bold text-white border-b-2 border-purple-500 pb-3 mb-4">{category.title}</h3>
            {category.questions.map((faq) => (
              <Disclosure key={faq.question}>
                {({ open }) => (
                  <div className="mb-4 group hover:scale-[1.01] transition-all duration-300">
                    <Disclosure.Button className="w-full px-8 py-5 flex justify-between items-center bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 rounded-xl hover:from-purple-800/50 hover:via-purple-700/50 hover:to-purple-800/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                      <span className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">{faq.question}</span>
                      <ChevronDownIcon className={`w-5 h-5 text-purple-400 transform transition-all duration-300 ${open ? 'rotate-180 text-purple-300' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-8 py-6 mt-2 bg-purple-900/30 rounded-xl text-gray-200 leading-relaxed border border-purple-500/20 backdrop-blur-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
