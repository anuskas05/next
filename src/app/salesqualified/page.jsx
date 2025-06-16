"use client";
import React ,{ useState }  from "react";



import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { CheckCircleIcon ,CheckCircle, BarChart2, Mail, Settings, Users, TrendingUp, Lightbulb, BarChart3,Check, Star, Crown, ChevronDown, ChevronUp} from "lucide-react";
import LogoScroll from "@/components/LogoScroll";
const data = [
  { month: "January", leads: 305 },
  { month: "February", leads: 315 },
  { month: "March", leads: 230 },
  { month: "April", leads: 310 },
  { month: "May", leads: 215 },
  { month: "June", leads: 383 },
  { month: "July", leads: 210 },
  { month: "August", leads: 240 },
  { month: "September", leads: 375 },
  { month: "October", leads: 150 },
  { month: "November", leads: 180 },
  { month: "December", leads: 440 },
];

const funnelStages = [
  { label: "All Leads", color: "bg-gray-100" },
  { label: "Marketing Qualified", color: "bg-gray-100" },
  { label: "Sales Ready", color: "bg-gray-100" },
  { label: "Sales Qualified Leads", color: "bg-gray-100" },
];
const stats = [
  { value: "3–5x", label: "Higher Conversion\nRates" },
  { value: "500+", label: "SQLs Generated\nMonthly" },
  { value: "27%", label: "Average Close Rate" },
  { value: "60%", label: "Shorter Sales Cycles" },
];
  const leadFound = ["CXO", ">100 Employees", "Media", "Influencer"];
  const leadStatus = ["High Intent", "Budget Approved", "Decision Maker", "Urgent Need"];
const features = [
  {
    icon: <CheckCircle className="text-[#00d9a6] w-6 h-6" />,
    title: "Precision Targeting",
    description:
      "Identify and reach your Ideal Customer Profile with laser-focused accuracy using our advanced targeting algorithms.",
  },
  {
    icon: <TrendingUp className="text-[#00d9a6] w-6 h-6" />,
    title: "Smart Lead Scoring",
    description:
      "Our dynamic scoring model evaluates both behavioral and demographic signals to prioritize the hottest leads.",
  },
  {
    icon: <Mail className="text-[#00d9a6] w-6 h-6" />,
    title: "High-Converting Outreach",
    description:
      "Proven email and LinkedIn sequences that get responses from even the most elusive decision-makers.",
  },
  {
    icon: <Settings className="text-[#00d9a6] w-6 h-6" />,
    title: "Automated Nurturing",
    description:
      "Keep leads engaged with personalized content until they're sales-ready, reducing leakage in your funnel.",
  },
  {
    icon: <BarChart2 className="text-[#00d9a6] w-6 h-6" />,
    title: "Real-Time Analytics",
    description:
      "Track every interaction and optimize your campaigns based on what’s actually working to generate SQLs.",
  },
  {
    icon: <Users className="text-[#00d9a6] w-6 h-6" />,
    title: "ABM Integration",
    description:
      "Align your SQL generation with account-based marketing strategies for enterprise-level results.",
  },
];
const steps = [
  {
    number: "1",
    title: "ICP Development & Targeting",
    description:
      "We work with you to refine your Ideal Customer Profile, then build targeted lists of companies and decision-makers that match your criteria.",
  },
  {
    number: "2",
    title: "Multi-Channel Engagement",
    description:
      "Our system engages prospects through email, LinkedIn, content marketing, and paid ads - all coordinated to move them toward becoming SQLs.",
  },
  {
    number: "3",
    title: "Lead Scoring & Qualification",
    description:
      "Using our proprietary scoring model, we identify which leads are truly sales-ready based on their engagement level, firmographics, and intent signals.",
  },
  {
    number: "4",
    title: "Sales Handoff & Optimization",
    description:
      "SQLs are delivered to your sales team with full context, while we continuously optimize campaigns based on conversion data and feedback.",
  },
];
const testimonials = [
  {
    quote:
      "QuoreB2B helped us increase our SQL conversion rate by 300% in just 90 days. Their targeting and scoring system is unlike anything we've used before.",
    name: "Sarah Johnson",
    title: "VP of Sales, TechSolutions",
    image: "/images/sarah.jpg",
  },
  {
    quote:
      "We were struggling with lead quality before working with QuoreB2B. Now our sales team loves the leads they're getting - they actually convert!",
    name: "Michael Chen",
    title: "CMO, GrowthStack",
    image: "/images/michael.jpg",
  },
  {
    quote:
      "The combination of their technology and strategic approach has given us a predictable pipeline for the first time. Worth every penny.",
    name: "Amanda Rodriguez",
    title: "CEO, SaaSForward",
    image: "/images/amanda.jpg",
  },
];
const faqs = [
  {
    question: "What exactly is an SQL?",
    answer:
      "A Sales Qualified Lead (SQL) is a prospect who has been thoroughly vetted and is ready for a sales conversation. They have confirmed budget, decision-making authority, clear pain points your solution addresses, and urgency to buy within 30-90 days."
  },
  {
    question: "How do you ensure lead quality?",
    answer:
      "We use advanced lead scoring, manual verification, and real-time validation to ensure every lead meets high-quality standards."
  },
  {
    question: "What industries do you work with?",
    answer:
      "We use a proprietary lead scoring model that evaluates both behavioral signals (content engagement, website visits, etc.) and firmographic fit (company size, industry, etc.). Only leads that meet our strict threshold are passed to your sales team as SQLs."
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see their first SQLs within 2-3 weeks of launch. Full program optimization typically takes 60-90 days as we gather data and refine targeting based on what's converting best."
  },
  {
    question: "Do you work with international companies?",
    answer:
      "Yes, we have experience running SQL generation campaigns in North America, Europe, and APAC regions. Our approach is adapted based on regional differences in buying behavior and communication preferences."
  }
];

  
export default function SalesQualifiedPage() {const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    
    <section className="w-full px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sales-Qualified Lead Generation
            </h2>
            <p className="text-gray-700 mb-3">
              We identify and generate leads after taking them through the funnel.
              Then, we verify their interest in your product. So you get SQLs that
              take much less effort and nurturing to convert. Our proprietary
              qualification process ensures every lead meets your specific criteria
              for budget, authority, need, and timeline before they reach your sales
              team.
            </p>
            <p className="text-gray-700 mb-3">
              Our Sales Qualified Leads come pre-warmed through strategic
              multi-touch engagement campaigns that educate prospects on your unique
              value proposition. We employ advanced behavioral tracking to monitor
              engagement signals including content downloads, webinar attendance,
              and product page visits to scientifically determine buying intent.
            </p>
            <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 to-teal-400 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden mt-4 shadow-md">
              <Image
                src="/images/sales.jpg"
                alt="About QuoreB2B"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* New Lead Found */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-2">
              <CheckCircleIcon className="text-[#00d9a6]" size={24} />
              New lead found
            </h3>
            <p className="text-gray-500 mb-4">100% Criteria match</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-[#00d9a6] font-medium">
              {leadFound.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        {/* Lead Status */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-2">
              <CheckCircleIcon className="text-[#00d9a6]" size={24} />
              Lead Status
            </h3>
            <p className="text-gray-500 mb-4">Ready to Convert</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-[#00d9a6] font-medium">
              {leadStatus.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Chart */}
        <div className="max-w-6xl mx-auto w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} angle={-15} textAnchor="end" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  fontSize: "14px",
                  background: "#fff",
                  border: "1px solid #ccc",
                }}
              />
              <Legend />
              <Bar
                dataKey="leads"
                name="Leads Generated"
                fill="#06d6a0"
                radius={[6, 6, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="w-full px-4 py-12   bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl w-full max-w-md"
          >
            <Image
              src="/images/leads.jpg"
              alt="Leads"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

          {/* Funnel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Leads Funnel
            </h2>
            <div className="flex flex-col gap-4">
              {funnelStages.map((stage, index) => (
                <div
                  key={index}
                  className={`relative px-6 py-4 text-center text-lg font-semibold text-gray-800 transition-all duration-300 cursor-pointer hover:bg-emerald-400 hover:text-white ${stage.color} ${stage.active ? "text-white" : ""}`}
                  style={{
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  {stage.label}
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#00d9a6] group-hover:text-white text-sm font-light">
                    —
                  </span>
                </div>
              ))}
            </div>
          </motion.div> </div>
      </section>
 <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl font-semibold text-[#00d9a6]">{stat.value}</p>
              <p className="text-gray-700 whitespace-pre-line text-sm md:text-base mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-[2px] bg-emerald-50" />

        {/* Subsection Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Advanced SQL Generation Framework
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our comprehensive approach combines the best of marketing automation,
            sales intelligence, and conversion optimization
          </p>
        </motion.div>
      </div>
    </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
           className="rounded-2xl shadow-md bg-white border p-6 transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02] hover:border-teal-500"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Proven 4-Step SQL Generation Process
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          We’ve helped hundreds of B2B companies transform their lead generation into a predictable revenue engine
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Don’t just take our word for it - hear from companies that have transformed their lead generation with QuoreB2B
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Case Study: 500+ SQLs in 30 Days
        </h2>
        <p className="text-gray-600 text-lg">
          How we helped a SaaS company transform their lead generation
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Challenge */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-emerald-500 p-3 rounded-full">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              The Challenge
            </h3>
            <p className="text-gray-700">
              A fast-growing SaaS company was generating plenty of leads, but their sales team was
              frustrated with low conversion rates. Only 5% of marketing leads were becoming SQLs, and the
              sales cycle was too long.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-emerald-500 p-3 rounded-full">
              <Lightbulb className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Our Solution
            </h3>
            <p className="text-gray-700">
              We implemented our full SQL generation framework: rebuilt their ICP, deployed multi-channel
              campaigns, implemented lead scoring, and aligned sales/marketing processes.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-emerald-500 p-3 rounded-full">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              The Results
            </h3>
            <p className="text-gray-700">
              Within 30 days, they generated 527 SQLs (up from 85 previously). The close rate improved from
              8% to 27%, driving $1.2M in new revenue that quarter.
            </p>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-lg">
          Choose the plan that fits your growth goals
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="border rounded-lg shadow-sm p-6 text-center transition-transform transform hover:scale-105 hover:shadow-md hover:border-emerald-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
          <p className="text-4xl font-bold text-[#00d9a6] mb-1">$2,500<span className="text-lg font-normal text-gray-600">/month</span></p>
          <ul className="text-gray-700 space-y-2 mt-4 mb-6 text-left">
            <li className="flex items-center gap-2"><Check className="text-[#00d9a6] w-5 h-5" />Up to 100 SQLs/month</li>
            <li className="flex items-center gap-2"><Check className="text-[#00d9a6] w-5 h-5" />Basic Lead Scoring</li>
            <li className="flex items-center gap-2"><Check className="text-[#00d9a6] w-5 h-5" />Email Campaigns</li>
            <li className="flex items-center gap-2"><Check className="text-[#00d9a6] w-5 h-5" />Monthly Reporting</li>
            <li className="flex items-center gap-2"><Check className="text-[#00d9a6] w-5 h-5" />Dedicated Account Manager</li>
          </ul>
          <button className="bg-gradient-to-r from-lime-300 to-emerald-500 text-white py-2 px-6 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        {/* Growth Plan */}
        <div className="rounded-lg shadow-sm p-6 text-center relative transition-transform transform hover:scale-105 hover:shadow-md hover:border-emerald-500 border">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
          <p className="text-4xl font-bold text-emerald-500 mb-1">$5,000<span className="text-lg font-normal text-gray-600">/month</span></p>
          <ul className="text-gray-700 space-y-2 mt-4 mb-6 text-left">
            <li className="flex items-center gap-2"><Star className="text-[#00d9a6] w-5 h-5" />Up to 300 SQLs/month</li>
            <li className="flex items-center gap-2"><Star className="text-[#00d9a6] w-5 h-5" />Advanced Lead Scoring</li>
            <li className="flex items-center gap-2"><Star className="text-[#00d9a6] w-5 h-5" />Multi-Channel Campaigns</li>
            <li className="flex items-center gap-2"><Star className="text-[#00d9a6] w-5 h-5" />Weekly Optimization</li>
            <li className="flex items-center gap-2"><Star className="text-[#00d9a6] w-5 h-5" />CRM Integration</li>
          </ul>
          <button className="bg-gradient-to-r from-lime-300 to-emerald-500 text-white py-2 px-6 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg shadow-sm p-6 text-center transition-transform transform hover:scale-105 hover:shadow-md hover:border-emerald-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
          <p className="text-4xl font-bold text-emerald-500 mb-1">$9,000<span className="text-lg font-normal text-gray-600">/month</span></p>
          <ul className="text-gray-700 space-y-2 mt-4 mb-6 text-left">
            <li className="flex items-center gap-2"><Crown className="text-[#00d9a6] w-5 h-5" />500+ SQLs/month</li>
            <li className="flex items-center gap-2"><Crown className="text-[#00d9a6] w-5 h-5" />Custom Scoring Model</li>
            <li className="flex items-center gap-2"><Crown className="text-[#00d9a6] w-5 h-5" />Full ABM Integration</li>
            <li className="flex items-center gap-2"><Crown className="text-[#00d9a6] w-5 h-5" />Dedicated Strategist</li>
            <li className="flex items-center gap-2"><Crown className="text-[#00d9a6] w-5 h-5" />Priority Support</li>
          </ul>
          <button className="bg-gradient-to-r from-lime-300 to-emerald-500 text-white py-2 px-6 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
     <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to know about our SQL generation services
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 bg-white hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
     <section className="bg-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00d9a6] mb-2">
          QUORE B2B MARKETING
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Compliant BANT Verification to Be Extra Sure
        </h3>
        <p className="text-base sm:text-lg max-w-4xl">
          The SQLs you get will have met the Budget, Authority, Need, and Timing criteria, making them sales-ready. We’ll also confirm their current solutions and the challenges they’re facing, so we don’t miss out on any details.
        </p>
      </div>
    </section>
    <LogoScroll/>
    </>
  );
};