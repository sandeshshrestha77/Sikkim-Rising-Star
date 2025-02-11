
import Section from '../ui/Section';
import Card from '../ui/Card';

const sponsors = [
  {
    category: "Title Sponsors",
    logos: [
      { name: "Company 1", url: "https://placeholder.co/200x80" },
      { name: "Company 2", url: "https://placeholder.co/200x80" }
    ]
  },
  {
    category: "Media Partners",
    logos: [
      { name: "Media 1", url: "https://placeholder.co/160x60" },
      { name: "Media 2", url: "https://placeholder.co/160x60" },
      { name: "Media 3", url: "https://placeholder.co/160x60" }
    ]
  }
];

export default function Sponsors() {
  return (
    <Section title="Sponsors & Partners" className="mb-24">
      <div className="space-y-12">
        {sponsors.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-bold text-white mb-8">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {category.logos.map((logo) => (
                <Card key={logo.name} className="p-6 flex items-center justify-center group">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
