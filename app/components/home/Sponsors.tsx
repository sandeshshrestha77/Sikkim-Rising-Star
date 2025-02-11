"use client";
import { useEffect, useRef } from "react";
import Section from "../ui/Section";

const sponsors = [
  { name: "Company 1", url: "https://placeholder.co/200x80" },
  { name: "Company 2", url: "https://placeholder.co/200x80" },
  { name: "Company 3", url: "https://placeholder.co/200x80" },
  { name: "Company 4", url: "https://placeholder.co/200x80" },
  { name: "Company 5", url: "https://placeholder.co/200x80" },
  { name: "Company 6", url: "https://placeholder.co/200x80" },
];

export default function Sponsors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPos = 0;
    let direction = 1;
    const speed = 1; // Adjust speed as needed

    const animate = () => {
      if (!scrollContainer) return;

      scrollPos += speed * direction;
      scrollContainer.scrollLeft = scrollPos;

      // Reverse direction when reaching the edges
      if (scrollPos >= scrollWidth - clientWidth) {
        direction = -1;
      } else if (scrollPos <= 0) {
        direction = 1;
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Section
      title="Our Sponsors"
      className="mb-24"
      aria-labelledby="sponsors-section"
    >
      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth visual transition */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden py-8 px-4 scroll-smooth"
          role="list"
          aria-label="Sponsor logos"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-purple-900/30 rounded-lg border border-purple-500/20 backdrop-blur-sm p-4 flex items-center justify-center group hover:border-purple-500/40 transition-all duration-300"
              role="listitem"
            >
              <img
                src={sponsor.url}
                alt={`Logo of ${sponsor.name}`}
                className="max-w-full max-h-full opacity-75 group-hover:opacity-100 transition-opacity"
                loading="lazy" // Lazy load images for performance
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
