 'use client';
import React, { useState } from 'react';
import Head from 'next/head';
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
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaInfoCircle,
  FaFlag,
  FaExclamationTriangle
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// Constants
const FAQ_DATA = [
  {
    question: "How does B2B content syndication differ from content marketing?",
    answer:
      "Content marketing focuses on creating and distributing original content through owned channels (your website, blog, email). Syndication extends the reach of that content by distributing it through third-party platforms. Think of content marketing as creating the asset and syndication as amplifying its distribution.",
  },
  {
    question: "What's the ideal length for syndicated content?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Articles: 800-1,500 words</li>
        <li>Whitepapers: 2,000-5,000 words</li>
        <li>Case studies: 1,000-2,000 words</li>
        <li>Infographics: Focus on key data points</li>
      </ul>
    ),
  },
  {
    question: "How do I measure the success of my syndication efforts?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
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
      <ul className="list-disc pl-5 space-y-2">
        <li>Evergreen content with lasting value</li>
        <li>Research-backed pieces that establish authority</li>
        <li>Case studies demonstrating success</li>
        <li>How-to guides addressing common pain points</li>
      </ul>
    ),
  },
];

const STATS = [
  { value: "72%", label: "of B2B marketers use content syndication" },
  { value: "3-5×", label: "More leads than traditional methods" },
  { value: "45%", label: "Lower cost per lead than PPC" },
  { value: "68%", label: "Higher conversion rates" }
];

const BENEFITS = [
  {
    title: "Expanded Reach and Visibility",
    description: "Syndication allows your content to appear on platforms with established, relevant audiences that you might not otherwise reach.",
    points: [
      "New market entrants establishing presence",
      "Niche products/services with limited organic reach",
      "Competitive industries where differentiation is challenging"
    ]
  },
  {
    title: "High-Quality Lead Generation",
    description: "Unlike broad-reach advertising, syndication delivers leads who have actively engaged with your content, indicating genuine interest.",
    points: [
      "Higher conversion rates (typically 3-5x display ads)",
      "More complete contact information through gated content",
      "Better alignment with buyer journey stages"
    ]
  }
];

// Components
const PlatformCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-100">
    <div className="text-teal-500 flex justify-center mb-3 text-3xl">{icon}</div>
    <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">{title}</h4>
    <p className="text-gray-600 text-center text-sm leading-relaxed">{desc}</p>
  </div>
);

const FAQItem = ({ item, index, isOpen, toggle }) => (
  <div 
    className={`rounded-lg p-5 my-3 transition-all duration-300 cursor-pointer border border-gray-100 ${
      isOpen ? "bg-teal-50 shadow-sm" : "bg-white hover:bg-gray-50"
    }`}
    onClick={() => toggle(index)}
  >
    <div className="flex justify-between items-center">
      <p className="text-base md:text-lg font-medium text-gray-800">
        {item.question}
      </p>
      {isOpen ? (
        <FaChevronUp className="text-teal-500" />
      ) : (
        <FaChevronDown className="text-teal-500" />
      )}
    </div>
    {isOpen && (
      <div className="mt-4 text-gray-700 text-sm md:text-base">{item.answer}</div>
    )}
  </div>
);

// Animation variants
const slideLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

const slideRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

const floatY = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function ContentSyndication() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("definition");
  
  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const TAB_CONTENT = {
    definition: (
      <p className="text-gray-700 leading-relaxed">
        Content syndication involves republishing your original content (whitepapers, case
        studies, articles, etc.) on partner websites, industry platforms, or specialized
        content networks. The goal is to leverage these platforms' existing audiences to
        increase visibility and generate leads.
      </p>
    ),
    importance: (
      <p className="text-gray-700 leading-relaxed">
        In today's crowded digital landscape, simply creating great content isn't enough.
        Syndication helps overcome content-discovery challenges by placing your materials
        where your ideal customers are already looking for information. It's particularly
        crucial for B2B companies with longer sales cycles and niche target audiences.
      </p>
    ),
    compare: (
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700 border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-3 font-semibold text-sm">Feature</th>
              <th className="px-4 py-3 font-semibold text-sm">B2B Syndication</th>
              <th className="px-4 py-3 font-semibold text-sm">B2C Syndication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">Target Audience</td>
              <td className="px-4 py-3">Business professionals, decision-makers</td>
              <td className="px-4 py-3">General consumers</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">Content Types</td>
              <td className="px-4 py-3">Whitepapers, case studies, webinars</td>
              <td className="px-4 py-3">Blog posts, listicles, viral content</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">Lead Capture</td>
              <td className="px-4 py-3 text-teal-600 font-semibold">Gated content with forms</td>
              <td className="px-4 py-3 text-red-500 font-semibold">Rarely gated</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">Conversion Path</td>
              <td className="px-4 py-3">Nurturing through email sequences</td>
              <td className="px-4 py-3">Direct to purchase</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  };

  return (
    <>
      <Head>
        <title>B2B Content Syndication Services | Amplify Your Reach</title>
        <meta name="description" content="Boost your B2B marketing with professional content syndication services. Distribute whitepapers, case studies, and webinars to targeted audiences." />
        <meta name="keywords" content="B2B content syndication, content marketing, lead generation, whitepaper distribution, case study promotion" />
        <meta property="og:title" content="B2B Content Syndication Services | Amplify Your Reach" />
        <meta property="og:description" content="Professional content syndication services to expand your B2B marketing reach and generate qualified leads." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              B2B Content Syndication Services
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Supercharge your content marketing strategy. Publish white papers,
              case studies, and webinars to target the right audience at the right
              time.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              By distributing your high-value content through trusted third-party platforms, you
              can amplify visibility, attract qualified leads, and establish
              authority in your industry.
            </p>

            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
              Get Started <FiArrowRight />
            </button>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-xl mx-auto"
          >
            <div className="overflow-hidden rounded-tr-[160px] rounded-br-[160px] shadow-xl">
              <Image
                src="/images/content-syndication-main1.png"
                alt="Business professional reviewing content"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <motion.div
              variants={floatY}
              animate="animate"
              className="absolute -bottom-6 left-6 shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src="/images/content-syndication-chart.png"
                alt="Content performance metrics"
                width={220}
                height={160}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Accounts Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-xl mx-auto order-2 md:order-1"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/target-accounts-main.png"
                alt="Marketer analyzing data"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              variants={floatY}
              animate="animate"
              className="absolute -bottom-6 left-[65%] -translate-x-1/2 shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src="/images/target-accounts-chart.png"
                alt="Engagement metrics"
                width={260}
                height={180}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Target Key Accounts with Custom Content
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Engage your target accounts with highly relevant and personalized
              content assets tailored to their specific needs, pain points, and
              preferences.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Strengthen relationships with high-quality leads by maintaining
              consistent communication, offering timely resources, and
              addressing their unique challenges.
            </p>

            <ul className="space-y-3">
              {[
                "Account-specific content customization",
                "Industry-focused messaging",
                "Decision-maker targeting",
                "Performance tracking"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Database Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Expansive Database to Amplify Reach
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Expand your reach and maximize your impact by syndicating your content across multiple
              high-visibility channels beyond your website or email list.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Leverage our extensive database of over 100 million B2B contacts to connect with
              professionals across various industries and geographies.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100M+", label: "B2B Contacts" },
                { value: "50+", label: "Industries" },
                { value: "150+", label: "Countries" },
                { value: "7K+", label: "Technologies" }
              ].map((stat, index) => (
                <div key={index} className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-teal-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-xl mx-auto"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/database-main.png"
                alt="Team collaborating on data"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              variants={floatY}
              animate="animate"
              className="absolute -bottom-6 left-6 shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src="/images/database-chart.png"
                alt="Data distribution chart"
                width={200}
                height={150}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sniper Leads Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-xl mx-auto order-2 md:order-1"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/sniper-leads-main.png"
                alt="Team analyzing marketing data"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              variants={floatY}
              animate="animate"
              className="absolute -bottom-6 left-[65%] -translate-x-1/2 shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src="/images/sniper-leads-chart.jpg"
                alt="Lead targeting metrics"
                width={260}
                height={180}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sniper-Targeted Leads
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Target high-value accounts with precision by leveraging in-depth technology insights to
              tailor your marketing efforts.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our advanced technographic intelligence provides unparalleled visibility into the technology
              adoption landscape, tracking over 7,000 technology installations.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Targeting Options:</h4>
              <div className="flex flex-wrap gap-2">
                {["Industry", "Company Size", "Job Title", "Technology Stack", "Geographic Location", "Purchase Intent"].map((item, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is B2B Content Syndication */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What is B2B Content Syndication?
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              A strategic approach to amplify your content's reach and generate high-quality leads
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <FaInfoCircle className="text-teal-500 text-2xl mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Understanding Content Syndication
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  B2B (business-to-business) content syndication is a strategic marketing approach where
                  companies distribute their content through third-party platforms to expand their reach
                  to professional audiences.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap border-b border-gray-200 gap-4">
                {[
                  { key: "definition", label: "Definition" },
                  { key: "importance", label: "Importance" },
                  { key: "compare", label: "B2B vs B2C" }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-3 px-1 font-medium text-sm md:text-base relative ${
                      activeTab === tab.key
                        ? "text-teal-600"
                        : "text-gray-500 hover:text-teal-600"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {TAB_CONTENT[activeTab]}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
                <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Benefits of B2B Content Syndication
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Why leading B2B companies invest in content syndication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-teal-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-teal-50 border border-teal-100 rounded-xl p-6 md:p-8"
          >
            <blockquote className="italic text-gray-700 text-lg leading-relaxed">
              "Our content syndication program generates 35% of our marketing-qualified leads at a 40% lower cost than our paid search campaigns. The quality of leads is consistently higher as well."
            </blockquote>
            <p className="mt-4 font-medium text-gray-800">
              — Rohit Sawantt, VP Marketing at Quoreb2b.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Best Practices for Effective Syndication
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Maximize your results with these proven strategies
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Audience Research",
                description: "Develop detailed buyer personas including:",
                items: [
                  "Job titles and responsibilities",
                  "Pain points and challenges",
                  "Content consumption preferences",
                  "Decision-making processes"
                ]
              },
              {
                title: "Content Creation",
                description: "Develop materials that address specific needs:",
                tags: ["Whitepapers", "Case Studies", "Research Reports", "Webinars", "Infographics", "E-books"],
                note: "Ensure content provides genuine value rather than being overly promotional."
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{practice.title}</h3>
                    <p className="mt-2 text-gray-600">{practice.description}</p>
                    
                    {practice.items && (
                      <ul className="mt-3 space-y-2 pl-1">
                        {practice.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheck className="text-teal-500 mt-1 text-sm flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {practice.tags && (
                      <>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {practice.tags.map((tag, i) => (
                            <span key={i} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-gray-600">{practice.note}</p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top B2B Content Syndication Platforms
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Distribute your content where your audience engages
            </p>
          </motion.div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">General Business Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <PlatformCard
                icon={<FaLinkedin />}
                title="LinkedIn"
                desc="Ideal for professional content and networking with decision-makers"
              />
              <PlatformCard
                icon={<FaMedium />}
                title="Medium"
                desc="Great for thought leadership articles and industry insights"
              />
              <PlatformCard
                icon={<FaQuora />}
                title="Quora"
                desc="Answer industry questions to demonstrate expertise"
              />
              <PlatformCard
                icon={<FaSlideshare />}
                title="SlideShare"
                desc="Perfect for presentations, infographics, and data visualizations"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 text-gray-800">Technology-Specific Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <PlatformCard
                icon={<FaLaptopCode />}
                title="TechCrunch"
                desc="For innovative tech companies and startups"
              />
              <PlatformCard
                icon={<FaNewspaper />}
                title="VentureBeat"
                desc="Transformative tech news and analysis"
              />
              <PlatformCard
                icon={<FaNetworkWired />}
                title="ZDNet"
                desc="Enterprise technology and business solutions"
              />
              <PlatformCard
                icon={<FaRobot />}
                title="The Next Web"
                desc="International tech news and trends"
              />
            </div>
          </div>
        </div>
      </section>
{/* Advanced Strategies Section */}
  <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#00C3A5] mb-10 flex items-center gap-3">
        <span role="img" aria-label="icon">📘</span> Advanced Syndication Strategies
      </h2>

      {/* Account-Based Syndication */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Account-Based Syndication</h3>
        <p className="text-gray-700 mb-4">Target content distribution to specific companies or accounts:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Use IP targeting for key accounts</li>
          <li>Create customized content for priority verticals</li>
          <li>Coordinate with sales teams for account-specific messaging</li>
        </ul>
      </div>

      {/* Multi-Touch Content Sequences */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Multi-Touch Content Sequences</h3>
        <p className="text-gray-700 mb-4">Develop content series that guide prospects through the buyer journey:</p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li><strong>Awareness:</strong> Industry reports, trend analyses</li>
          <li><strong>Consideration:</strong> Solution comparisons, case studies</li>
          <li><strong>Decision:</strong> Product deep dives, demo offers</li>
        </ol>
      </div>

      {/* Retargeting Integration */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Retargeting Integration</h3>
        <p className="text-gray-700 mb-4">Combine syndication with retargeting for maximum impact:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Retarget content engagers with related offers</li>
          <li>Use sequential messaging to nurture leads</li>
          <li>Leverage lookalike audiences from your best converters</li>
        </ul>
      </div>

      {/* Influencer Co-Creation */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Influencer Co-Creation</h3>
        <p className="text-gray-700 mb-4">Collaborate with industry influencers to amplify reach:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Co-author content with recognized experts</li>
          <li>Leverage influencer networks for distribution</li>
          <li>Tap into established credibility and audiences</li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Challenges Section */}
  <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#00C3A5] mb-10 flex items-center gap-3">
        <span role="img" aria-label="warning">⚠️</span> Potential Challenges & Solutions
      </h2>

      {/* Content Duplication */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">1. Content Duplication Issues</h3>
        <p className="text-gray-700 mb-4">Search engines may penalize duplicate content. Solutions:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Use canonical tags to indicate original source</li>
          <li>Publish excerpts with links to full content</li>
          <li>Wait 1–2 weeks before syndicating after original publication</li>
          <li>Modify content slightly for different platforms</li>
        </ul>
      </div>

      {/* Lead Quality */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">2. Lead Quality Concerns</h3>
        <p className="text-gray-700 mb-4">Not all syndicated leads will be sales-ready. Mitigation strategies:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Implement lead scoring to prioritize follow-up</li>
          <li>Use progressive profiling to gather more data</li>
          <li>Create clear content tiering (top/middle/bottom funnel)</li>
          <li>Establish strict qualification criteria with partners</li>
        </ul>
      </div>

      {/* Brand Consistency */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">3. Brand Consistency</h3>
        <p className="text-gray-700 mb-4">Maintaining consistent messaging across platforms can be challenging:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
          <li>Create comprehensive brand guidelines for partners</li>
          <li>Review all syndicated content before publication</li>
          <li>Request approval rights in partner agreements</li>
          <li>Monitor placements regularly</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Get answers to common questions about B2B content syndication
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            {FAQ_DATA.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={openFaqIndex === index}
                toggle={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Amplify Your Content Reach?
            </h2>
            <p className="text-teal-100 text-lg mb-8">
              Our B2B content syndication services can help you connect with your target audience and generate high-quality leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </>
  );
}