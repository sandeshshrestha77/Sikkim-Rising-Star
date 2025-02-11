import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';
import Card from '../ui/Card';

const steps = [
  {
    title: "Registration",
    description: "Complete the online registration form and submit required documents",
    details: [
      "Fill in personal details",
      "Choose your category",
      "Upload portfolio/previous work",
      "Pay registration fee"
    ]
  },
  {
    title: "Audition Round",
    description: "Showcase your talent in front of our expert panel",
    details: [
      "Live performance",
      "Technical assessment",
      "Personal interview",
      "Feedback session"
    ]
  },
  {
    title: "Training & Mentorship",
    description: "Selected candidates receive professional guidance",
    details: [
      "One-on-one mentoring",
      "Workshop sessions",
      "Performance techniques",
      "Industry insights"
    ]
  },
  {
    title: "Live Shows",
    description: "Perform on the big stage and compete for the title",
    details: [
      "Weekly performances",
      "Public voting",
      "Judge feedback",
      "Elimination rounds"
    ]
  }
];

export default function HowItWorks() {
  return (
    <Section title="How It Works" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <Card key={step.title} className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
              <span className="text-purple-400 font-bold">{index + 1}</span>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
            <p className="text-gray-300 mb-6">{step.description}</p>
            
            <ul className="space-y-3">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}