import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import  customercare  from '../../Assets/Customer.jpeg'

export default function ContactUS() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log(formData)
//   }


return (
    <div className='pt-28 sm:pt-24 md:pt-28 lg:pt-28 xl:pt-28 top-1 '>

    {/* -----Heading----- */}
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("LetTalk")}</h2>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("contactUs")}</h1>
      </div>
    </div>


    <section className="bg-black text-white py-10">
  <div className="max-w-screen-lg mx-auto px-6">
    <div className="max-w-3xl">
      <p className="text-lg">
        Whether you have a question, need support, or want to discuss a project, we're here to help. Fill out the form below or reach us via the details provided.
      </p>
      <br/>
      <p className="text-lg">
        Great! We're excited to connect with you and look forward to creating something special together. Feel free to reach out with any inquiries.
      </p>
      <br/>
      
    </div>
  </div>
    </section>


    <section>
        <div className="min-h-screen bg-black text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              We’re Just a Message Away!
            </h1>
            <h2 className="text-3xl">Say Hello</h2>
          </div>

          <div className="space-y-4">
            <p className="flex items-center transition-transform ">
              <span className="mr-2">📞</span>
              <a href="tel:+919537663308" className="hover:text-gray-300">
                +91 95376 63308
              </a>
            </p>
            <p className="flex items-center transition-transform ">
              <span className="mr-2">✉️</span>
              <a href="mailto:info@aksharconcept.com" className="hover:text-gray-300">
                info@aksharconcept.com
              </a>
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Address :</p>
            <p className="text-gray-300">
              515, STC, Nr. One World West,S P Ring Road, Ambali 'T' Junction,Ahmedabad, Gujarat 380058
            </p>
          </div>

          <div className="flex space-x-4">
            {/* Social Media button Here */}
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name *"
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <textarea
                placeholder="Messages *"
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-tl from-black to-white group-hover:shadow-md group-hover:shadow-white/50"></div>
            <button
                type="submit"
                className="rounded-full relative w-auto h-auto px-6 py-2 bg-[#090909] text-white border border-gray-300 flex items-center justify-center overflow-hidden group"
            >
                <span className="relative z-10">Submit</span>
                <span className="absolute left-0 top-0 w-full h-full bg-black group-hover:translate-x-full transition-transform duration-300"></span>
            </button>
            </div>
            </div>
        </form>
      </div>
    </div>
    </section>


    <div className="w-full mb-1">
        <img
          src={customercare}
          alt="Contact Us"
          className="w-full h-auto object-cover"
        />
    </div>


    </div>
);

}