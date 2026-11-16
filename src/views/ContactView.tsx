import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Instagram, ArrowUpRight, Send, Check } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE, INSTAGRAM_URL, PRODUCTS, getWhatsAppUrl } from '../data/products';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedLook, setSelectedLook] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Hello BERBIECLOSET, my name is ${name || 'a customer'}.`,
      selectedLook ? `Enquiry regarding: ${selectedLook}` : '',
      size ? `Preferred size: ${size}` : '',
      message ? `Message: ${message}` : 'I would like to inquire about current pieces and availability.',
    ].filter(Boolean);

    const fullMessage = parts.join('\n');
    window.open(getWhatsAppUrl(fullMessage), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
          LET'S FIND YOUR NEXT FAVOURITE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f2e8d4] font-normal tracking-tight leading-[1.05]">
          We'd love to hear <br />
          <em className="text-[#c6a15b] italic">from you.</em>
        </h1>
        <p className="text-sm sm:text-base text-[#b3a17f] max-w-xl mt-4 font-light leading-relaxed">
          Questions about a piece, sizing consultations or bespoke styling? Contact our Lagos concierge team directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Info & WhatsApp */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-8 bg-[#14120e] border border-[#2b2216]">
            <h3 className="font-serif text-2xl text-[#f2e8d4] mb-3">
              Direct Concierge
            </h3>
            <p className="text-xs text-[#a8997c] mb-6 leading-relaxed">
              For immediate assistance, availability checks, or order confirmations, reach out on WhatsApp.
            </p>

            <a
              href={getWhatsAppUrl('Hello BERBIECLOSET, I have an enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bc-btn py-4 justify-center text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#100d07]" />
              <span>Chat on WhatsApp ↗</span>
            </a>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 p-4 border border-[#261f14] bg-[#0e0c0a]">
              <div className="p-2 border border-[#382e1e] rounded-full text-[#c6a15b]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#8e8067] block">
                  Studio Location
                </span>
                <span className="text-sm text-[#f2e8d4] font-medium">
                  Lagos, Nigeria
                </span>
              </div>
            </div>

            <a
              href={`tel:+${WHATSAPP_PHONE}`}
              className="flex items-center gap-4 p-4 border border-[#261f14] bg-[#0e0c0a] hover:border-[#c6a15b]/50 transition-colors"
            >
              <div className="p-2 border border-[#382e1e] rounded-full text-[#c6a15b]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#8e8067] block">
                  Telephone
                </span>
                <span className="text-sm text-[#f2e8d4] font-medium">
                  {DISPLAY_PHONE}
                </span>
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-[#261f14] bg-[#0e0c0a] hover:border-[#c6a15b]/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#382e1e] rounded-full text-[#c6a15b]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#8e8067] block">
                    Instagram Showcase
                  </span>
                  <span className="text-sm text-[#f2e8d4] font-medium">
                    @berbiecloset
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#c6a15b]" />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Quick Concierge Message Form */}
        <div className="lg:col-span-7 bg-[#14120e] border border-[#2b2216] p-8 sm:p-10">
          <h3 className="font-serif text-2xl text-[#f2e8d4] mb-2">
            Send an Enquiry
          </h3>
          <p className="text-xs text-[#a8997c] mb-8 font-light">
            Fill in your enquiry below and our team will connect with you directly via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#b3a17f] mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Amina Adebayo"
                className="w-full bg-[#0b0b0a] border border-[#382e1e] rounded-md px-4 py-2.5 text-xs text-[#f2e8d4] placeholder-[#756752] focus:outline-none focus:border-[#c6a15b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-look" className="block text-xs uppercase tracking-wider text-[#b3a17f] mb-1.5">
                  Piece of Interest (Optional)
                </label>
                <select
                  id="contact-look"
                  value={selectedLook}
                  onChange={(e) => setSelectedLook(e.target.value)}
                  className="w-full bg-[#0b0b0a] border border-[#382e1e] rounded-md px-3.5 py-2.5 text-xs text-[#f2e8d4] focus:outline-none focus:border-[#c6a15b]"
                >
                  <option value="">Select a piece...</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-size" className="block text-xs uppercase tracking-wider text-[#b3a17f] mb-1.5">
                  Estimated Size
                </label>
                <select
                  id="contact-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full bg-[#0b0b0a] border border-[#382e1e] rounded-md px-3.5 py-2.5 text-xs text-[#f2e8d4] focus:outline-none focus:border-[#c6a15b]"
                >
                  <option value="">Any / Unsure</option>
                  <option value="Size 10">UK Size 10</option>
                  <option value="Size 12">UK Size 12</option>
                  <option value="Size 14">UK Size 14</option>
                  <option value="Size 16">UK Size 16</option>
                  <option value="Size 18">UK Size 18</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#b3a17f] mb-1.5">
                Your Message / Question
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about piece availability, custom sizing, delivery timelines or styling tips..."
                className="w-full bg-[#0b0b0a] border border-[#382e1e] rounded-md px-4 py-3 text-xs text-[#f2e8d4] placeholder-[#756752] focus:outline-none focus:border-[#c6a15b]"
              />
            </div>

            <button
              type="submit"
              className="w-full bc-btn py-3.5 justify-center text-xs font-semibold cursor-pointer"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4 text-[#100d07]" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#100d07]" />
                  <span>Open WhatsApp Consultation ↗</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
