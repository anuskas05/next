 'use client';
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
 
 import {
  FaLinkedin,
  FaMedium,
  FaQuora,
  FaSlideshare,
  FaRobot,
  FaNewspaper,
  FaNetworkWired,
  FaLaptopCode,
} from "react-icons/fa";

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How does B2B content syndication differ from content marketing?",
    answer:
      "Content marketing focuses on creating and distributing original content through owned channels (your website, blog, email). Syndication extends the reach of that content by distributing it through third-party platforms. Think of content marketing as creating the asset and syndication as amplifying its distribution.",
  },
  {
    question: "What’s the ideal length for syndicated content?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Articles: 800–1,500 words</li>
        <li>Whitepapers: 2,000–5,000 words</li>
        <li>Case studies: 1,000–2,000 words</li>
        <li>Infographics: Focus on key data points</li>
      </ul>
    ),
  },
  {
    question: "How do I measure the success of my syndication efforts?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Impressions/views</li>
        <li>Engagement (time on page, shares)</li>
        <li>Lead conversion rate</li>
        <li>Cost per lead (CPL)</li>
        <li>Marketing qualified leads (MQLs)</li>
        <li>Sales accepted leads (SALs)</li>
        <li>Opportunities and closed deals</li>
      </ul>
    ),
  },
  {
    question: "Should I syndicate all my content?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Evergreen content with lasting value</li>
        <li>Research-backed pieces that establish authority</li>
        <li>Case studies demonstrating success</li>
        <li>How-to guides addressing common pain points</li>
      </ul>
    ),
  },
];

const PlatformCard = ({ icon, title, desc }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
    <div className="text-teal-500 flex justify-center mb-2">{icon}</div>
    <h4 className="text-lg font-semibold mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);
/* --- Animation variants --- */
const slideLeft = {
  hidden: { x: -120, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideRight = {
  hidden: { x: 120, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const floatY = {
  animate: {
    y: [0, -12, 0],          // up 12 px then back
    transition: {
      duration: 4,           // 4 s per bob
      repeat: Infinity,      // loop forever
      ease: 'easeInOut',
    },
  },
};

export default function ContentSyndication() {
    const [openIndex, setOpenIndex] = useState(null);

 
 const toggleFAQ = (index) => 
    setOpenIndex(openIndex === index ? null : index);
   
  /* ---------------- state ---------------- */
  const [activeTab, setActiveTab] = useState("definition"); // ✅


  /* ------------- tab content ------------- */
  const TAB_CONTENT = {
    definition: (
      <p className="text-gray-700 leading-relaxed">
        Content syndication involves republishing your original content (whitepapers, case
        studies, articles, etc.) on partner websites, industry platforms, or specialized
        content networks. The goal is to leverage these platforms’ existing audiences to
        increase visibility and generate leads.
      </p>
    ),
    importance: (
      <p className="text-gray-700 leading-relaxed">
        In today’s crowded digital landscape, simply creating great content isn’t enough.
        Syndication helps overcome content‑discovery challenges by placing your materials
        where your ideal customers are already looking for information. It’s particularly
        crucial for B2B companies with longer sales cycles and niche target audiences.
      </p>
    ),
    compare: (
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead>
            <tr className="bg-emerald-500 text-white font-semibold">
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">B2B Syndication</th>
              <th className="px-4 py-3">B2C Syndication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium">Target Audience</td>
              <td className="px-4 py-3">Business professionals, decision‑makers</td>
              <td className="px-4 py-3">General consumers</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Content Types</td>
              <td className="px-4 py-3">Whitepapers, case studies, webinars</td>
              <td className="px-4 py-3">Blog posts, listicles, viral content</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Lead Capture</td>
              <td className="px-4 py-3 text-emerald-600 font-semibold">Gated content with forms</td>
              <td className="px-4 py-3 text-red-600 font-semibold">Rarely gated</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Conversion Path</td>
              <td className="px-4 py-3">Nurturing through email sequences</td>
              <td className="px-4 py-3">Direct to purchase</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  };

  /* ------------- helper ------------- */
  const tabBase = 'pb-3 transition font-medium text-sm';
 const isActive = (key) => activeTab === key;

  return (
    <>
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === Left Content === */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            B2B Content Syndication Services
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Supercharge your content marketing strategy. Publish white papers,
            case studies, and webinars to target the right audience at the right
            time. Syndicate content assets smartly across our network with B2B
            content marketing to maximize reach and engagement. By distributing
            your high‑value content through trusted third‑party platforms, you
            can amplify visibility, attract qualified leads, and establish
            authority in your industry.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Content syndication ensures your whitepapers, research reports, and
            thought leadership articles don’t go unnoticed—instead, they reach
            decision‑makers actively searching for insights. Leverage our
            extensive B2B network to place your content in front of niche
            audiences, driving traffic back to your site while boosting brand
            credibility. With strategic syndication, you can repurpose existing
            assets for multiple channels, extending their lifespan and
            improving ROI.
          </p>
        </motion.div>

        {/* === Right Image Layout === */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative w-full max-w-xl mx-auto"
        >
          {/* Main curved photo */}
          <div className="overflow-hidden rounded-tr-[160px] rounded-br-[160px]">
            <Image
              src="/images/content‑syndication‑main.png"
              alt="Business woman"
              width={640}
              height={420}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Floating pie chart */}
          <motion.div
            variants={floatY}
            animate="animate"
            className="absolute -bottom-6 left-6"
          >
            <Image
              src="/images/content‑syndication‑chart.png"
              alt="Mediums pie chart"
              width={220}
              height={160}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

    

 {/* --- container --- */}

<div className="bg-white py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* === Left: photo + floating chart === */}
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* main image */}
      <div className="overflow-hidden rounded-3xl shadow-md">
        <Image
          src="/images/target-accounts-main.png"     // 640 × 420 ish; put in /public/images
          alt="Marketer smiling while working"
          width={640}
          height={420}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* floating bar‑chart overlay */}
 <motion.div
  variants={floatY}
  animate="animate"
  className="absolute -bottom-8 left-[65%] -translate-x-1/2"
>
  <Image
    src="/images/target-accounts-chart.png"
    alt="Engagement bar chart"
    width={260}
    height={180}
    className="rounded-xl shadow-xl"
  />
</motion.div>



    </motion.div>

    {/* === Right: heading + paragraphs === */}
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Target Key Accounts<br />with custom Content
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Engage your target accounts with highly relevant and personalized
        content assets tailored to their specific needs, pain points, and
        preferences. Deliver value‑driven insights that capture their interest,
        nurture their engagement, and position your brand as a trusted solution
        provider.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Strengthen relationships with high‑quality leads by maintaining
        consistent communication, offering timely and relevant resources, and
        addressing their unique challenges. By fostering meaningful interactions
        and keeping prospects engaged throughout the buyer’s journey, you can
        accelerate conversions, enhance customer loyalty, and ultimately drive
        significant sales revenue growth.
      </p>
    </motion.div>
  </div>
</div>
{/* =========  Section – “Expansive Database”  ========= */}
<div className="bg-[#F4FCFA] py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* -- Left column: Heading + body -- */}
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Expansive Database to<br />Amplify Reach
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Expand your reach and maximize your impact by syndicating your content across multiple
        high‑visibility channels beyond your website or email list. Distribute your white papers,
        case studies, webinars, and other valuable assets to a broader audience, ensuring they reach
        the right decision‑makers at the right time.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Leverage our extensive database of over 100 million B2B contacts to connect with
        professionals across various industries and geographies. Tap into a global network of key
        decision‑makers, influencers, and business leaders to generate high‑quality leads and
        accelerate your sales pipeline.
      </p>
    </motion.div>

    {/* -- Right column: main photo + floating chart -- */}
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* main square photo */}
      <div className="overflow-hidden rounded-3xl shadow-md">
        <Image
          src="/images/database-main.png"          /* 640×420ish */
          alt="Two professionals smiling"
          width={640}
          height={420}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* floating pie / donut chart */}
       <motion.div
            variants={floatY}
            animate="animate"
            className="absolute -bottom-6 left-6"
      >
        <Image
          src="/images/database-chart.png"         /* ~260×180 */
          alt="Buyer preference chart"
          width={200}
          height={150}
          className="rounded-xl shadow-xl"
        />
      </motion.div>
    </motion.div>
  </div>
</div>
{/* =========  Section – “Sniper-Targeted Leads”  ========= */}
<div className="bg-white py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* -- Left: Image with floating overlay -- */}
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="overflow-hidden rounded-3xl shadow-md">
        <Image
          src="/images/sniper-leads-main.png"   // 640x420 like group photo
          alt="Team collaboration image"
          width={640}
          height={420}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

       <motion.div
  variants={floatY}
  animate="animate"
  className="absolute -bottom-8 left-[65%] -translate-x-1/2"
>
        <Image
          src="/images/sniper-leads-chart.jpg"  // overlay chart image
          alt="Campaign performance chart"
          width={260}
          height={180}
          className="rounded-xl shadow-xl"
        />
      </motion.div>
    </motion.div>

    {/* -- Right: Text content -- */}
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Sniper‑Targeted Leads
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Target high‑value accounts with precision by leveraging in‑depth technology insights to
        tailor your marketing efforts. Identify businesses using specific technology stacks and
        engage them with highly relevant messaging, solutions, and offers that align with their
        existing infrastructure and needs.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our advanced technographic intelligence provides unparalleled visibility into the technology
        adoption landscape, tracking over 7,000 technology installations across more than 2 million
        businesses worldwide. This data‑driven approach enables you to refine your targeting
        strategy, personalize outreach efforts, and maximize ROI.
      </p>
    </motion.div>
  </div>
</div>
{/* =========  Section – “What is B2B Content Syndication?”  ========= */}
 
 <section className="bg-[#F4FCFA] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ------------- Card ------------- */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6 md:p-10">
          {/* Heading */}
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-emerald-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 18.5A6.5 6.5 0 1012 5.5a6.5 6.5 0 000 13z"
              />
            </svg>

            <h3
              className={`text-xl md:text-2xl font-semibold ${
                activeTab === 'definition' ? 'text-gray-900' : 'text-emerald-600'
              }`}
            >
              What is B2B Content Syndication?
            </h3>
          </div>

          {/* Intro blurb (static) */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            B2B (business‑to‑business) content syndication is a strategic marketing approach where
            companies distribute their content through third‑party platforms to expand their reach
            to professional audiences. This method differs significantly from B2C
            (business‑to‑consumer) syndication in its targeting, content types, and distribution
            channels.
          </p>

          {/* Tabs */}
          <div className="mt-6 flex gap-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('definition')}
              className={`${tabBase} ${
                isActive('definition') ? 'text-emerald-600 relative' : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              Definition
              {isActive('definition') && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-emerald-600" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('importance')}
              className={`${tabBase} ${
                isActive('importance') ? 'text-emerald-600 relative' : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              Importance
              {isActive('importance') && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-emerald-600" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`${tabBase} ${
                isActive('compare') ? 'text-emerald-600 relative' : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              B2B&nbsp;vs&nbsp;B2C
              {isActive('compare') && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-emerald-600" />
              )}
            </button>
          </div>

          {/* Dynamic content */}
          <div className="mt-6">{TAB_CONTENT[activeTab]}</div>
        </div>

        {/* ---------- Stats row (unchanged) ---------- */}
        {/* … keep the stats grid you already had … */}
      </div>
      {/* ---------- Stats row ---------- */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">
      {/* 1 */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-8 text-center">
        <p className="text-3xl font-extrabold text-emerald-600">72%</p>
        <p className="mt-2 text-sm text-gray-600">
          of B2B marketers use content syndication
        </p>
      </div>

      {/* 2 */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-8 text-center">
        <p className="text-3xl font-extrabold text-emerald-600">3‑5×</p>
        <p className="mt-2 text-sm text-gray-600">
          More leads than traditional methods
        </p>
      </div>

      {/* 3 */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-8 text-center">
        <p className="text-3xl font-extrabold text-emerald-600">45%</p>
        <p className="mt-2 text-sm text-gray-600">
          Lower cost per lead than PPC
        </p>
      </div>

      {/* 4 */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-8 text-center">
        <p className="text-3xl font-extrabold text-emerald-600">68%</p>
        <p className="mt-2 text-sm text-gray-600">
          Higher conversion rates
        </p>
      </div>
    </div>
    </section>
    {/** */}
     <section className="bg-white rounded-xl shadow-md p-6 sm:p-10 md:p-12 mt-10 relative">
  {/* Top Emerald Line */}
  <div className="absolute top-0 left-4 right-4 h-1 bg-emerald-500 rounded-t-xl z-10" />

  <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-6 flex items-center gap-2 mt-4">
    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    The Benefits of B2B Content Syndication
  </h2>

  {/* Section 1 */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">1. Expanded Reach and Visibility</h3>
    <p className="text-gray-700 mb-3">
      Syndication allows your content to appear on platforms with established, relevant audiences that you might not otherwise reach. This is particularly valuable for:
    </p>
    <ul className="space-y-2 pl-4">
      <li className="flex items-start gap-2">✅ New market entrants establishing presence</li>
      <li className="flex items-start gap-2">✅ Niche products/services with limited organic reach</li>
      <li className="flex items-start gap-2">✅ Competitive industries where differentiation is challenging</li>
    </ul>
  </div>

  {/* Section 2 */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">2. High-Quality Lead Generation</h3>
    <p className="text-gray-700 mb-3">
      Unlike broad-reach advertising, syndication delivers leads who have actively engaged with your content, indicating genuine interest. Benefits include:
    </p>
    <ul className="space-y-2 pl-4">
      <li>✅ Higher conversion rates (typically 3-5x display ads)</li>
      <li>✅ More complete contact information through gated content</li>
      <li>✅ Better alignment with buyer journey stages</li>
    </ul>
  </div>

  {/* Section 3 */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">3. Cost-Effective Marketing</h3>
    <p className="text-gray-700 mb-3">
      Compared to other lead generation methods, syndication often delivers superior ROI:
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
      <li>45-60% lower cost per lead than PPC campaigns</li>
      <li>30-50% less than traditional outbound methods</li>
      <li>Ongoing value from evergreen content</li>
    </ul>
  </div>

  {/* Section 4 */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">4. Brand Authority Building</h3>
    <p className="text-gray-700 mb-3">Regular appearances on respected industry platforms:</p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
      <li>Enhances perceived expertise and trustworthiness</li>
      <li>Creates association with leading platforms in your space</li>
      <li>Provides third-party validation of your insights</li>
    </ul>
  </div>

  {/* Quote */}
  <blockquote className="italic border-l-4 border-teal-500 pl-4 text-gray-600 bg-gray-50 p-4 rounded-md">
    “Our content syndication program generates 35% of our marketing-qualified leads at a 40% lower cost than our paid search campaigns. The quality of leads is consistently higher as well.”<br />
    <span className="block mt-2 font-medium text-gray-700">— Rohit Sawantt, VP Marketing at Quoreb2b.com</span>
  </blockquote>
</section>

 <section className="py-12 px-6 md:px-12 lg:px-24 bg-white rounded-xl shadow-md relative">

  {/* Top Line */}
  <div className="absolute top-0 left-4 right-4 h-1 bg-emerald-500 rounded-t-xl" />

  {/* Section Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 flex items-center gap-2 mb-8 mt-4">
    ✅ Best Practices for Effective Syndication
  </h2>

  {/* Practice 1 */}
  <div className="mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">1</div>
      <h3 className="text-xl font-semibold">Audience Research</h3>
    </div>
    <p className="pl-14 mt-2 text-gray-700">Develop detailed buyer personas including:</p>
    <ul className="list-disc pl-20 mt-2 space-y-1 text-gray-700">
      <li>Job titles and responsibilities</li>
      <li>Pain points and challenges</li>
      <li>Content consumption preferences</li>
      <li>Decision-making processes</li>
    </ul>
  </div>

  {/* Practice 2 */}
  <div className="mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">2</div>
      <h3 className="text-xl font-semibold">Content Creation</h3>
    </div>
    <div className="pl-14 mt-3 text-gray-700">
      <p className="mb-3">Develop materials that address specific needs:</p>
      <div className="flex flex-wrap gap-3">
        {["Whitepapers", "Case Studies", "Research Reports", "Webinars", "Infographics", "E-books"].map((item) => (
          <span key={item} className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
        ))}
      </div>
      <p className="mt-2">Ensure content provides genuine value rather than being overly promotional.</p>
    </div>
  </div>

  {/* Practice 3 */}
  <div className="mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">3</div>
      <h3 className="text-xl font-semibold">Platform Selection</h3>
    </div>
    <ul className="list-disc pl-20 mt-3 space-y-1 text-gray-700">
      <li>Audience alignment with your ICP</li>
      <li>Domain authority and reputation</li>
      <li>Content formats supported</li>
      <li>Lead capture capabilities</li>
    </ul>
  </div>

  {/* Practice 4 */}
  <div className="mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">4</div>
      <h3 className="text-xl font-semibold">Optimization</h3>
    </div>
    <ul className="list-disc pl-20 mt-3 space-y-1 text-gray-700">
      <li>A/B testing headlines and CTAs</li>
      <li>Tailoring content for each platform</li>
      <li>SEO optimization for discoverability</li>
      <li>Mobile-friendly formatting</li>
    </ul>
  </div>

  {/* Practice 5 */}
  <div className="mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">5</div>
      <h3 className="text-xl font-semibold">Measurement & Improvement</h3>
    </div>
    <p className="pl-14 mt-3 text-gray-700">Track key metrics:</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-14 pt-4">
      {[{ label: "CTR", desc: "Click-through Rate" }, { label: "CPL", desc: "Cost Per Lead" }, { label: "MQLs", desc: "Marketing Qualified Leads" }, { label: "ROI", desc: "Return on Investment" }].map((metric) => (
        <div key={metric.label} className="bg-white shadow-md p-4 rounded-xl text-center">
          <div className="text-emerald-500 text-2xl font-bold">{metric.label}</div>
          <div className="text-gray-600 text-sm">{metric.desc}</div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="px-4 sm:px-6 lg:px-12 py-10">
      <div className="bg-white shadow-md rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
          <span className="inline-block">📤</span>
          Top B2B Content Syndication Platforms
        </h2>

        {/* General Business Platforms */}
        <h3 className="text-lg font-semibold mb-2">General Business Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <PlatformCard
            icon={<FaLinkedin size={28} />}
            title="LinkedIn"
            desc="Ideal for professional content and networking with decision-makers"
          />
          <PlatformCard
            icon={<FaMedium size={28} />}
            title="Medium"
            desc="Great for thought leadership articles and industry insights"
          />
          <PlatformCard
            icon={<FaQuora size={28} />}
            title="Quora"
            desc="Answer industry questions to demonstrate expertise"
          />
          <PlatformCard
            icon={<FaSlideshare size={28} />}
            title="SlideShare"
            desc="Perfect for presentations, infographics, and data visualizations"
          />
        </div>

        {/* Technology-Specific Platforms */}
        <h3 className="text-lg font-semibold mb-2">Technology-Specific Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <PlatformCard
  icon={<FaLaptopCode size={28} />}
  title="TechCrunch"
  desc="For innovative tech companies and startups"
/>
<PlatformCard
  icon={<FaNewspaper size={28} />}
  title="VentureBeat"
  desc="Transformative tech news and analysis"
/>
<PlatformCard
  icon={<FaNetworkWired size={28} />}
  title="ZDNet"
  desc="Enterprise technology and business solutions"
/>
<PlatformCard
  icon={<FaRobot size={28} />}
  title="The Next Web"
  desc="International tech news and trends"
/>

        </div>

        {/* Industry-Specific Networks */}
        <h3 className="text-lg font-semibold mb-2">Industry-Specific Networks</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
          <li><strong>Healthcare:</strong> MedPage Today, FierceHealthcare</li>
          <li><strong>Finance:</strong> American Banker, Financial Times</li>
          <li><strong>Manufacturing:</strong> IndustryWeek, Manufacturing.net</li>
          <li><strong>Marketing:</strong> MarketingProfs, Adweek</li>
        </ul>
      </div>
    </section>
  <section className="w-full bg-white py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-8 sm:p-10 lg:p-12">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#00C3A5] mb-8 flex items-center gap-2">
      <span role="img" aria-label="icon">📘</span> Advanced Syndication Strategies
    </h2>

    {/* Account-Based Syndication */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2">Account-Based Syndication</h3>
      <p className="mb-4 text-gray-700">Target content distribution to specific companies or accounts:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Use IP targeting for key accounts</li>
        <li>Create customized content for priority verticals</li>
        <li>Coordinate with sales teams for account-specific messaging</li>
      </ul>
    </div>

    {/* Multi-Touch Content Sequences */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2">Multi-Touch Content Sequences</h3>
      <p className="mb-4 text-gray-700">Develop content series that guide prospects through the buyer journey:</p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700">
        <li><strong>Awareness:</strong> Industry reports, trend analyses</li>
        <li><strong>Consideration:</strong> Solution comparisons, case studies</li>
        <li><strong>Decision:</strong> Product deep dives, demo offers</li>
      </ol>
    </div>

    {/* Retargeting Integration */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2">Retargeting Integration</h3>
      <p className="mb-4 text-gray-700">Combine syndication with retargeting for maximum impact:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Retarget content engagers with related offers</li>
        <li>Use sequential messaging to nurture leads</li>
        <li>Leverage lookalike audiences from your best converters</li>
      </ul>
    </div>

    {/* Influencer Co-Creation */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Influencer Co-Creation</h3>
      <p className="mb-4 text-gray-700">Collaborate with industry influencers to amplify reach:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Co-author content with recognized experts</li>
        <li>Leverage influencer networks for distribution</li>
        <li>Tap into established credibility and audiences</li>
      </ul>
    </div>
  </div>
</section>
<section className="w-full bg-white py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-8 sm:p-10 lg:p-12">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#00C3A5] mb-8 flex items-center gap-2">
      <span role="img" aria-label="warning">⚠️</span> Potential Challenges & Solutions
    </h2>

    {/* Content Duplication Issues */}
    <div className="mb-10">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Content Duplication Issues</h3>
      <p className="mb-4 text-gray-700">
        Search engines may penalize duplicate content. Solutions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Use canonical tags to indicate original source</li>
        <li>Publish excerpts with links to full content</li>
        <li>Wait 1–2 weeks before syndicating after original publication</li>
        <li>Modify content slightly for different platforms</li>
      </ul>
    </div>

    {/* Lead Quality Concerns */}
    <div className="mb-10">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Lead Quality Concerns</h3>
      <p className="mb-4 text-gray-700">
        Not all syndicated leads will be sales-ready. Mitigation strategies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Implement lead scoring to prioritize follow-up</li>
        <li>Use progressive profiling to gather more data</li>
        <li>Create clear content tiering (top/middle/bottom funnel)</li>
        <li>Establish strict qualification criteria with partners</li>
      </ul>
    </div>

    {/* Brand Consistency */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Brand Consistency</h3>
      <p className="mb-4 text-gray-700">
        Maintaining consistent messaging across platforms can be challenging:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Create comprehensive brand guidelines for partners</li>
        <li>Review all syndicated content before publication</li>
        <li>Request approval rights in partner agreements</li>
        <li>Monitor placements regularly</li>
      </ul>
    </div>
  </div>
</section>
 <section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
    {/* Header */}
    <div className="flex items-center border-b-2 border-teal-500 pb-4 mb-4">
      <HelpCircle className="text-teal-600 mr-2" />
      <h2 className="text-xl font-semibold text-teal-700">
        Frequently Asked Questions
      </h2>
    </div>

    {/* FAQ Items */}
    {faqData.map((item, index) => (
      <div
        key={index}
        className={`rounded-xl px-4 py-3 my-2 transition-all duration-300 cursor-pointer ${
          openIndex === index
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)] bg-white"
            : "bg-white"
        }`}
        onClick={() => toggleFAQ(index)}
      >
        {/* Question */}
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base font-medium text-teal-700">
            {item.question}
          </p>
          {openIndex === index ? (
            <ChevronUp className="text-teal-500 w-5 h-5" />
          ) : (
            <ChevronDown className="text-teal-500 w-5 h-5" />
          )}
        </div>

        {/* Answer */}
        {openIndex === index && (
          <div className="mt-3 text-gray-700 text-sm">{item.answer}</div>
        )}
      </div>
    ))}
  </div>
</section>

<section className="w-full bg-white py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-8 sm:p-10 lg:p-12">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#00C3A5] mb-6 flex items-center gap-2">
      <span role="img" aria-label="flag">🏁</span> Conclusion & Next Steps
    </h2>

    <p className="text-gray-700 mb-8 leading-relaxed">
      B2B content syndication represents a powerful channel for expanding your reach, generating quality leads,
      and establishing thought leadership in your industry. When executed strategically, it can deliver superior ROI
      compared to many other marketing tactics.
    </p>

    <h3 className="text-lg sm:text-xl font-semibold mb-4">Getting Started Checklist</h3>
    <ul className="list-none space-y-3 text-gray-700">
      <li className="flex items-start gap-2">
        ✅ <span>Audit existing content for syndication potential</span>
      </li>
      <li className="flex items-start gap-2">
        ✅ <span>Identify 3–5 target platforms aligned with your audience</span>
      </li>
      <li className="flex items-start gap-2">
        ✅ <span>Develop a content calendar for syndication</span>
      </li>
      <li className="flex items-start gap-2">
        ✅ <span>Create tracking mechanisms to measure performance</span>
      </li>
      <li className="flex items-start gap-2">
        ✅ <span>Establish lead nurture sequences for captured contacts</span>
      </li>
    </ul>

    <p className="mt-8 text-gray-600">
      Remember that successful syndication requires ongoing optimization. Regularly review performance data, test
      different approaches, and refine your strategy based on what delivers the best results for your specific business goals.
    </p>
  </div>
</section>
 

</>
  );
}
