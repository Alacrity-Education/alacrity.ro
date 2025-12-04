"use client";

import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions/contact";
import { useActionState, useState, useEffect } from "react"; 

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      className="btn btn-primary w-full mt-6 text-lg font-semibold shadow-md" 
      type="submit" 
      disabled={pending}
    >
      {pending ? (
        <>
          <span className="loading loading-spinner"></span> Sending...
        </>
      ) : (
        "Send"
      )}
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (state.message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  return (

      <div className="card-body p-8 relative">
        {isVisible && state.message && (
          <div 
            role="alert" 
            className={`
              absolute top-6 left-4 right-4 z-50 
              alert ${state.success ? 'alert-success' : 'alert-error'} 
              text-sm shadow-lg animate-in fade-in slide-in-from-top-2 duration-300
            `}
          >
            <button onClick={() => setIsVisible(false)} className="btn btn-xs btn-ghost btn-circle absolute right-2 top-2">✕</button>
            <span>{state.message}</span>
          </div>
        )}

        <h2 className="card-title text-3xl font-bold mb-6 text-base-content">Write a message</h2>
        
        <form action={formAction} className="flex flex-col gap-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="form-control w-full flex flex-col">
              <label className="label px-0">
                <span className="label-text font-semibold text-base">Name</span>
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                className="input input-bordered w-full bg-base-200 focus:bg-base-100 focus:input-primary transition-colors" 
                required 
              />
            </div>

            {/* Email */}
            <div className="form-control w-full flex flex-col">
              <label className="label px-0">
                <span className="label-text font-semibold text-base">Email</span>
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="email@example.com" 
                className="input input-bordered w-full bg-base-200 focus:bg-base-100 focus:input-primary transition-colors" 
                required 
              />
            </div>
          </div>

          {/* Subject */}
          <div className="form-control w-full flex flex-col">
            <label className="label px-0">
              <span className="label-text font-semibold text-base">Subject</span>
            </label>
            <input 
              type="text" 
              name="subject" 
              placeholder="Ex: Partnership Inquiry" 
              className="input input-bordered w-full bg-base-200 focus:bg-base-100 focus:input-primary transition-colors" 
              required 
            />
          </div>

          {/* Message */}
          <div className="form-control w-full flex flex-col">
            <label className="label px-0">
              <span className="label-text font-semibold text-base">Message</span>
            </label>
            <textarea 
              name="message" 
              className="textarea resize-none textarea-bordered h-40 text-base w-full bg-base-200 focus:bg-base-100 focus:textarea-primary transition-colors" 
              placeholder="Hello, I would like to discuss..." 
              required
            ></textarea>
          </div>

          <SubmitButton />
        </form>
      </div>
  );
}