import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';
import Card from '../ui/Card';

const steps = [
  {
    title: "Registration",
    description: "Complete the online registration form and submit required documents",
    icon: "✨",
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
          <Card key={step.title} className="relative group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-amber-950/90 to-black border border-amber-500/20 hover:border-amber-500/40">
            <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4">{step.title}</h3>
            <p className="text-gray-300 mb-6">{step.description}</p>
            
            <ul className="space-y-3">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 group/item">
                  <CheckCircleIcon className="w-5 h-5 text-amber-400 shrink-0 group-hover/item:text-amber-300 transition-colors" />
                  <span className="text-gray-300 group-hover/item:text-white transition-colors">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}