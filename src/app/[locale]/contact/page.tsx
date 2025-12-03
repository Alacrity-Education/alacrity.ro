import React from "react";
import ContactHero from "./components/hero";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-base-100 pb-20">
      <ContactHero />

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="card bg-base-100 shadow-xl border border-base-200 border-primary/20 h-full rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Contact Form */}
            <div id="contact-form" className="scroll-mt-24"> 
              <ContactForm />
            </div>

            {/* Right: Map + Contact Card */}
            <ContactInfo />

          </div>
        </div>
      </div>
    </main>
  );
}