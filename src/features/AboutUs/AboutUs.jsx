import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import aboutus from '../../Assets/aboutus.jpg';
import FAQ from '../../Assets/FAQs.jpg'

export default function AboutUS() {

  const { t } = useTranslation();
  
   const services = [
    {
      title: "BRANDING & DESIGN",
      description: t("BrandnDesign"),
      items: [
        "Logo Design",
        "Brand Identity & Strategy",
        "Graphic Design",
        "Brochure Design",
        "Digital Profile Design",
        "Packaging Design",
        "Event Branding",
        "Brand Activation"
      ]
    },
    {
      title: "WEB DESING",
      description: t("WebSite"),
      items: [
        "Static Website",
        "Custom Website Devlopment",
        "E-Commerce Website",
      ]
    }
  ]


  const faqs = [
  {
    question: "What creative services does Artifice Studio offer?",
    answer: "Artifice Studio offers a comprehensive range of creative services including brand identity design, UI/UX design, motion graphics, 3D visualization, digital illustration, and custom artwork creation. We specialize in crafting unique visual experiences that help brands stand out in the digital landscape."
  },
  {
    question: "How does your design process work?",
    answer: "Our design process begins with an in-depth consultation to understand your vision and objectives. We then move through research, conceptualization, design development, and refinement phases. We maintain open communication throughout the process, ensuring your feedback is incorporated at every stage to deliver results that exceed expectations."
  },
  {
    question: "What makes Artifice Studio different from other design studios?",
    answer: "Artifice Studio combines technical expertise with artistic innovation. We don't just create designs; we craft experiences that tell stories and evoke emotions. Our team's diverse skill set allows us to approach each project from multiple creative angles, ensuring unique and impactful solutions for every client."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A basic brand identity might take 2-3 weeks, while a comprehensive design system could take 6-8 weeks. We provide detailed timelines during our initial consultation and keep you updated on progress throughout the project."
  },
  {
    question: "Do you offer ongoing design support after project completion?",
    answer: "Yes, we provide continued support and maintenance packages for our clients. This includes design updates, asset creation, and technical support to ensure your visual content remains fresh and effective. We believe in building long-term partnerships with our clients."
  }
]

 const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='pt-28 sm:pt-24 md:pt-28 lg:pt-28 xl:pt-28 top-1 '>

  {/* -----Heading----- */}
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("WhoWeAre")}</h2>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("À propos de nous")}</h1>
      </div>
    </div>


    <section className="bg-black text-white py-10">
  <div className="max-w-screen-lg mx-auto px-6">
    <div className="max-w-3xl">
      <p className="text-lg">
        {t("AboutUsPOne")}
      </p>
      <br/>
      <p className="max-w-3xl text-lg">
        {t("AboutUsPTwo")}
      </p>
    </div>
  </div>
    </section>


  {/* -----Transperent Section---- */}
    <section>
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="relative md:absolute md:inset-0">
        <img
          src={aboutus}
          alt="Office Space"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 md:h-[calc(100vh)] flex items-start">
        <div className="w-full md:w-1/2 lg:w-1/3 md:ml-auto lg:mr-40 p-8 md:p-16 bg-black  md:bg-black md:bg-opacity-70 text-white min-h-[80vh] md:min-h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl mb-6 font-light">
            Hello, we are,
            <br />
            ARTIFICE 
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
           {t("AboutUsPThree")}
          </p>
        </div>
      </div>
    </div>
    </section>


  {/*-----Service Section----- */}
    <div className="bg-black text-white min-h-screen">
    <h1 className="text-2xl md:text-5xl font-bold text-center mb-1 pt-10" > {t("WhatWeProvide")} </h1>
  {services.map((service, index) => (
    <section key={index} className="py-20 px-6 md:px-12 lg:px-24 relative border-b border-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {service.title}
            </h2>
          </div>
          <div>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-4">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 text-lg">
                  <span className="text-xl">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              {/* <button
                href="#"
                className="inline-flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
              >
                Details
                <span className="inline-block transform rotate-45">→</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  ))}
    </div>

  {/* -----FAQ----- */}
    <section className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src={FAQ}
              alt="FAQ Concept with Books and Question Marks"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-700 pb-6"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className="text-2xl ml-4 transform transition-transform duration-300">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div 
                    className={`mt-4 text-gray-400 transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* -----let's Talk----- */}
    <section className=" bg-black flex flex-col items-center justify-center px-4 py-20">
      <div className="inline-block px-6 py-2 border border-white rounded-full mb-8 transition-colors duration-300">
        <span className="text-white text-sm tracking-wider uppercase">Work with us</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center max-w-4xl mb-10 leading-tight">
        Elevate Your Brand with Expert Design
      </h2>
      <p className="text-xl text-white mb-6">From logos to full brand identities, we craft designs that make you stand out</p>
      <a 
        href="#contact" 
        className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white hover:border-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-md"
      >
        <span className="text-sm mr-2">Explore Our Services</span>
        <svg 
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </section>
   

    </div>
  );
}