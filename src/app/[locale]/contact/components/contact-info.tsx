import React from "react";
import ContactMap from "./location";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const CONTACT = {
  phone: "+40 736 382 448",
  email: "contact@alacrity.ro",
  name: "Vavilov Iris",
}

export default function ContactInfo() {
  return (
    <div id="contact-info" className="h-full p-6 lg:p-8">
      
      <div className="flex flex-col h-full w-full rounded-xl overflow-hidden shadow-sm border border-base-200">
        
        {/* Map */}
        <div className="flex-grow w-full min-h-[300px] relative">
          <ContactMap />
        </div>

        {/* Contact Details */}
        <div className="relative z-10 bg-gradient-to-br from-primary to-primary/70 text-primary-content p-4">
          
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 opacity-90">
            Contact Us
          </h3>
          
          <div className="flex flex-col gap-2 text-base">
            
            {/* Telefon */}
            <a 
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform shadow-sm">
                <FaPhone className="h-3 w-3" />
              </div>
              <span className="font-medium tracking-wide text-sm md:text-base">{CONTACT.phone} ({CONTACT.name})</span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform shadow-sm">
                <FaEnvelope className="h-3 w-3" />
              </div>
              <span className="font-medium tracking-wide text-sm md:text-base">{CONTACT.email}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}