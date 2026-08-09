import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 border-t border-charcoal-900 bg-charcoal-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-charcoal-400 font-sans text-sm md:text-base">
            I am actively looking for junior software developer, game programmer, and backend engineer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Contact Information
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">
                Feel free to reach out directly if you have an opening, a project idea, or just want to connect.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg border border-charcoal-800 bg-charcoal-900/40 text-accent-teal shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-charcoal-500 uppercase tracking-widest block font-bold">Email</span>
                  <a href={`mailto:${email}`} className="text-sm sm:text-base text-white hover:text-accent-teal transition-colors font-medium">
                    {email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg border border-charcoal-800 bg-charcoal-900/40 text-accent-orange shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-charcoal-500 uppercase tracking-widest block font-bold">Phone</span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base text-white hover:text-accent-orange transition-colors font-medium">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg border border-charcoal-800 bg-charcoal-900/40 text-accent-teal shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-charcoal-500 uppercase tracking-widest block font-bold">Location</span>
                  <p className="text-sm sm:text-base text-white font-medium">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="pt-6 border-t border-charcoal-900">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Follow My Code & Work
              </h4>
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-charcoal-800 bg-charcoal-900/20 text-charcoal-350 hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all duration-200"
                >
                  <Github className="h-4 w-4" /> <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-charcoal-800 bg-charcoal-900/20 text-charcoal-350 hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all duration-200"
                >
                  <Linkedin className="h-4 w-4" /> <span className="text-xs font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-charcoal-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-charcoal-300 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder-charcoal-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-charcoal-300 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder-charcoal-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-charcoal-300 uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role or project idea..."
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal rounded-lg px-4 py-3 text-white text-sm outline-none transition-all resize-none placeholder-charcoal-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className={`w-full py-3.5 rounded-lg font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md ${
                    isSent
                      ? 'bg-emerald-500 text-charcoal-950 hover:bg-emerald-600 shadow-emerald-500/10'
                      : 'bg-accent-teal text-charcoal-950 hover:bg-accent-teal-hover shadow-accent-teal/10 hover:shadow-accent-teal/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin"></span>
                  ) : isSent ? (
                    <>
                      <Check className="h-4 w-4" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
