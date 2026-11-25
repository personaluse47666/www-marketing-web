import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { Seo, faqJsonLd, breadcrumbJsonLd } from '../components/Seo';
import { BUSINESS, AREAS_SERVED, LOCAL_FAQS, LOCAL_PAGE_PATH } from '../lib/siteConfig';

const LOCAL_SERVICES = [
  {
    title: 'Digital Marketing',
    to: '/services/digital-marketing',
    text: 'Full-funnel digital marketing for Eastvale and Inland Empire businesses: strategy, paid ads, email, landing pages and monthly reporting tied to calls, leads and sales.',
  },
  {
    title: 'Branding & Brand Identity',
    to: '/services/graphic-design',
    text: 'Logo design, brand identity, messaging and launch assets that make a local business look established on its website, social media, storefront and ads.',
  },
  {
    title: 'Social Media Management',
    to: '/services/social-media-marketing',
    text: 'Content calendars, design, captions, Reels and TikTok video, community replies and monthly analytics for Instagram, Facebook, TikTok and LinkedIn.',
  },
  {
    title: 'Social Media Marketing',
    to: '/services/meta-ads',
    text: 'Paid Facebook, Instagram and TikTok campaigns targeted to Eastvale, Corona, Chino, Ontario, Riverside and Los Angeles audiences.',
  },
  {
    title: 'Local SEO & Google Business Profile',
    to: '/services/seo-services',
    text: 'Rank in the Google Map Pack and organic results for "near me" searches, with Google Business Profile optimization, citations, reviews and local content.',
  },
  {
    title: 'Google Ads (PPC)',
    to: '/services/google-ads',
    text: 'Search and Local Services ads that put your phone number in front of people in your service area who are ready to buy today.',
  },
  {
    title: 'AI Search Optimization (ChatGPT, Gemini, Claude)',
    to: '/services/chatgpt-optimization',
    text: 'Structured data, clear answers and trusted citations so AI assistants like ChatGPT, Gemini, Claude and Siri can find and recommend your business.',
  },
  {
    title: 'Website Design & Development',
    to: '/services/website-development',
    text: 'Fast, mobile-first websites built to turn visitors into phone calls, bookings and form submissions.',
  },
];

const GROWTH_STEPS = [
  'Fix the foundation: a fast, mobile-friendly website with a clear offer, click-to-call button and short contact form.',
  'Claim and complete your Google Business Profile, add photos weekly and ask every happy customer for a review.',
  'Target local keywords such as "marketing agency Eastvale" or "plumber in Corona" with dedicated service and city pages.',
  'Post on social media three to five times a week, with short-form video showing real work, real customers and real results.',
  'Run Google Search and Meta ads limited to your service area so every dollar reaches people who can actually buy.',
  'Follow up fast: reply to calls, messages and form leads within five minutes, and retarget visitors who did not convert.',
  'Measure calls, leads and revenue each month, then move budget to the channels that bring paying customers.',
];

export const LocalMarketingPage: React.FC = () => {
  const title = 'Marketing, Branding & Social Media Agency in Eastvale, CA | West Ward Works';
  const description =
    'West Ward Works is a digital marketing, branding and social media management agency in Eastvale, California serving Corona, the Inland Empire and Los Angeles. Get more customers with SEO, ads and social media. Call +1 (951) 454-2565.';

  return (
    <div className="relative min-h-screen pt-28 pb-0 overflow-hidden">
      <Seo
        title={title}
        description={description}
        path={LOCAL_PAGE_PATH}
        keywords="marketing agency Eastvale, digital marketing Eastvale CA, branding agency Eastvale, social media management Eastvale, social media marketing Inland Empire, digital marketing agency Los Angeles, how to get more customers, small business marketing California"
        jsonLd={[
          faqJsonLd(LOCAL_FAQS),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Eastvale Digital Marketing Agency', path: LOCAL_PAGE_PATH },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-xs font-bold uppercase tracking-wider text-[#FF6B6B] flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Eastvale, California · Inland Empire · Los Angeles
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Digital Marketing, Branding &amp; Social Media Agency in Eastvale, California
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
          West Ward Works helps small and growing businesses in Eastvale, Corona, Chino, Ontario, Riverside and Los Angeles
          get more customers. We combine digital marketing, branding, social media management, social media marketing,
          local SEO and paid ads into one plan measured by calls, leads and sales.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3D5AFE] to-[#536DFE] text-white font-bold"
          >
            <Phone className="w-4 h-4" /> Call {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white font-bold hover:bg-white/5"
          >
            Get a free marketing audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-slate-950/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Marketing services for Eastvale businesses</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCAL_SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="block rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-[#3D5AFE]/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white">{s.title} in Eastvale, CA</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">How to get more customers for your local business</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            The seven-step plan we run for clients in Eastvale, the Inland Empire and Los Angeles:
          </p>
          <ol className="mt-8 space-y-4">
            {GROWTH_STEPS.map((step, i) => (
              <li key={i} className="flex gap-4 text-slate-300">
                <span className="w-8 h-8 shrink-0 rounded-full bg-[#3D5AFE]/20 text-[#536DFE] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-slate-950/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Areas we serve</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {AREAS_SERVED.map((area) => (
              <li key={area} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B6B]" /> {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {LOCAL_FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <address className="not-italic max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF6B6B]" /> {BUSINESS.name}, {BUSINESS.addressDisplay}</span>
          <a href={`tel:${BUSINESS.phoneE164}`} className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4 text-[#3D5AFE]" /> {BUSINESS.phoneDisplay}</a>
          <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4 text-[#3D5AFE]" /> {BUSINESS.email}</a>
        </address>
      </section>

      <CallToActionBanner />
    </div>
  );
};
