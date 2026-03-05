import React, { useState } from "react";
import greenwell from "../assets/greenwell.jpg"
import innovell from "../assets/innovell.jpg"
const clients = [
  { logo: greenwell, name: "Aramex", detail: "Logistics" },
  { logo:innovell, name: "ESET", detail: "Cyber Security" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=blackboard.com", name: "Blackboard", detail: "Education Tech" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=havas.com", name: "Havas", detail: "Media & Marketing" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=tait.com", name: "TAIT", detail: "Event Production" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=acino.swiss", name: "Acino", detail: "Healthcare" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=paceconsulting.com", name: "PACE", detail: "Consulting" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=teleologica.com", name: "Teleologica", detail: "Product Studio" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=dxm.com", name: "DXM", detail: "Digital Transformation" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=medsito.com", name: "Medsito", detail: "Health Platform" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=innovasolutions.com", name: "Innova", detail: "Enterprise SaaS" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=aloft.com", name: "Aloft", detail: "Travel Tech" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=synapse.org", name: "Synapse", detail: "AI Automation" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=verity.com", name: "Verity", detail: "Fintech" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=nextech.com", name: "Nextech", detail: "Cloud Services" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=qubix.com", name: "Qubix", detail: "B2B Software" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=rivermarkcu.org", name: "Rivermark", detail: "Retail" },
  { logo: "https://www.google.com/s2/favicons?sz=128&domain_url=zentrointernet.com", name: "Zentro", detail: "Tech Products" },
];

export default function Our_Client({ id }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id={id} className="bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center text-black">
            Our Clients
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-black/55 sm:text-base">
            We are proud of contributing to the success of leading brands.
          </p>
        </div>

        <div className="grid grid-cols-2 overflow-hidden  border border-black/10 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => {
            const isActive = activeCard === index;
            return (
              <article
                key={client.name}
                onClick={() => setActiveCard(isActive ? null : index)}
                className="group relative h-40 border border-black/10 bg-[#f7f7f7] p-4 transition-colors duration-300 hover:bg-blue-900/60"
                style={{
                  backgroundColor: isActive ? "rgb(30 58 138 / 0.6)" : undefined,
                }}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-5 ${
                    isActive ? "-translate-y-5" : ""
                  }`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 w-auto max-w-[120px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                    style={{ filter: isActive ? "grayscale(0)" : undefined }}
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        client.name
                      )}&background=111827&color=ffffff&size=128&bold=true&format=png`;
                    }}
                  />
                </div>

                <div
                  className={`absolute inset-x-4 bottom-4 text-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{client.name}</p>
                  <p className="mt-1 text-xs text-white/80">{client.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
