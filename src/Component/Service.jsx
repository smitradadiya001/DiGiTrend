import React, { useState } from "react";
import StarburstBubble from "./StarBubble";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    subtitle: "Designs That Click And Stick",
    description:
      "We craft interfaces that are not just pretty, they perform. From user flows and wireframes to polished final screens.",
    highlights: [
      "User Research & Strategy",
      "Wireframing & Prototyping",
      "UI Design & Visual Branding",
      "UX Optimization & Testing",
      "Responsive & Adaptive Design",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Website Development",
    subtitle: "Fast, Modern Websites Built To Scale",
    description:
      "From company websites to complex product platforms, we engineer clean, scalable code with strong performance ",
    highlights: [
      "Custom Frontend Development",
      "Backend & API Integrations",
      "CMS Implementation",
      "E-commerce Experiences",
      "Performance & Technical SEO",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "App Development",
    subtitle: "Mobile Apps That Users Keep Coming Back To",
    description:
      "We build native and cross-platform mobile apps with a product-first process. Your app gets smooth UX, robust.",
    highlights: [
      "iOS & Android Development",
      "React Native / Flutter Builds",
      "Backend & Cloud Connectivity",
      "Analytics & Notifications",
      "Versioning & Long-term Support",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    subtitle: "Strategy-Led Growth Across Channels",
    description:
      "Our campaigns combine content, SEO, paid media, and funnel optimization to drive qualified traffic.",
    highlights: [
      "SEO & Search Visibility",
      "Paid Ads & Media Buying",
      "Social Content Strategy",
      "Email & Retention Flows",
      "Performance Tracking",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Brand Identity",
    subtitle: "A Brand System That Feels Consistent Everywhere",
    description:
      "We shape memorable identities with strategic positioning, visual language, and practical.",
    highlights: [
      "Brand Positioning",
      "Visual Identity System",
      "Logo & Typography Direction",
      "Color & Tone Guidelines",
      "Brand Asset Toolkit",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Content Creation",
    subtitle: "Content That Builds Trust And Drives Action",
    description:
      "We produce brand-aligned content for product marketing, social media, and campaigns. The result is clear storytelling that drives better engagement and conversion.",
    highlights: [
      "Campaign Content Planning",
      "Video & Motion Production",
      "Creative Copywriting",
      "Social-first Assets",
      "Content Performance Reviews",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];

const defaultCarouselState = { index: 1, animate: true };

const ServicesComponent = ({ id }) => {
  const [expandedService, setExpandedService] = useState(null);
  const [carouselState, setCarouselState] = useState({});

  const toggleService = (serviceId) => {
    setExpandedService((prev) => (prev === serviceId ? null : serviceId));
  };

  const getPairs = (gallery) =>
    gallery.map((img, idx) => ({
      left: img,
      right: gallery[(idx + 1) % gallery.length],
    }));

  const getState = (serviceId) => carouselState[serviceId] || defaultCarouselState;

  const nextSlide = (serviceId) => {
    setCarouselState((prev) => {
      const current = prev[serviceId] || defaultCarouselState;
      return {
        ...prev,
        [serviceId]: { ...current, index: current.index + 1, animate: true },
      };
    });
  };

  const prevSlide = (serviceId) => {
    setCarouselState((prev) => {
      const current = prev[serviceId] || defaultCarouselState;
      return {
        ...prev,
        [serviceId]: { ...current, index: current.index - 1, animate: true },
      };
    });
  };

  const handleTransitionEnd = (serviceId, pairsLength) => {
    const current = getState(serviceId);
    if (current.index !== 0 && current.index !== pairsLength + 1) return;

    const resetIndex = current.index === 0 ? pairsLength : 1;
    setCarouselState((prev) => ({
      ...prev,
      [serviceId]: { index: resetIndex, animate: false },
    }));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCarouselState((prev) => ({
          ...prev,
          [serviceId]: { ...(prev[serviceId] || defaultCarouselState), animate: true },
        }));
      });
    });
  };

  return (
    <div id={id} className="min-h-screen w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1720px] mx-auto">
        <section className="relative flex items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
          <div className="relative text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[0.9] tracking-tight text-black">
              What we&apos;re
            </h1>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[0.9] tracking-tight text-black">
              absolutely killer at
            </h2>
            <div className="absolute top-[48%] left-[44%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] pointer-events-none">
              <div className="relative w-10 h-12 sm:w-14 sm:h-14 left-26 md:left-55  bottom-8 sm:-bottom-0">
                <StarburstBubble name="Services"/>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          {services.map((service) => {
            const pairs = getPairs(service.gallery);
            const virtualPairs = [pairs[pairs.length - 1], ...pairs, pairs[0]];
            const current = getState(service.id);
            const isOpen = expandedService === service.id;

            return (
              <div key={service.id} className="bg-amber-100 rounded-[2rem] overflow-hidden border border-black/10">
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-start justify-between text-left"
                >
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold text-black">{service.title}</h3>
                    <p className="text-base sm:text-2xl text-black mt-2">{service.subtitle}</p>
                  </div>
                  <span className="ml-4 mt-1 text-black">
                    {isOpen ? (
                      <svg className="w-9 h-9 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    ) : (
                      <svg className="w-9 h-9 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </span>
                </button>

                <div className="px-3 pb-4 sm:px-10">
                  <div className="h-px bg-black/30" />
                </div>

                <div className={`transition-all duration-500 ease-out overflow-hidden ${isOpen ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 sm:px-10 py-8 sm:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 sm:gap-10 items-start">
                      <div className="flex flex-wrap lg:flex-col items-start gap-2">
                        {service.highlights.map((point, idx) => (
                          <div
                            key={`${service.id}-point-${idx}`}
                            className="inline-flex w-fit max-w-full items-start justify-start text-left rounded-xl bg-white border border-black/10 px-3 py-2 text-sm sm:text-base leading-tight text-black"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl leading-[1.3] font-semibold text-[#2f2f2f] mb-5">
                          {service.description}
                        </p>
                        <div className="mt-8 sm:mt-10 relative">
                          <div className="overflow-hidden rounded-[2rem]">
                            <div
                              className="flex"
                              style={{
                                transform: `translateX(-${current.index * 100}%)`,
                                transition: current.animate ? "transform 520ms ease" : "none",
                              }}
                              onTransitionEnd={() => handleTransitionEnd(service.id, pairs.length)}
                            >
                              {virtualPairs.map((pair, idx) => (
                                <div key={`${service.id}-pair-${idx}`} className="w-full flex-shrink-0">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <img
                                      src={pair.left}
                                      alt={`${service.title} visual left ${idx + 1}`}
                                      className="w-full h-[220px] sm:h-[280px] lg:h-[250px] object-cover rounded-[2rem]"
                                    />
                                    <img
                                      src={pair.right}
                                      alt={`${service.title} visual right ${idx + 1}`}
                                      className="hidden md:block w-full h-[220px] sm:h-[280px] lg:h-[250px] object-cover rounded-[2rem]"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => prevSlide(service.id)}
                            className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/72 hover:bg-black text-white flex items-center justify-center transition-colors"
                            aria-label={`Previous ${service.title} images`}
                          >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => nextSlide(service.id)}
                            className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/72 hover:bg-black text-white flex items-center justify-center transition-colors"
                            aria-label={`Next ${service.title} images`}
                          >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
