 "use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaList, FaBullseye, FaHeartbeat, FaEnvelope } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
const yTicks = Array.from({ length: 9 }, (_, i) => i * 30); // [0, 30, ..., 240]

 const dataSets = {
  content: [
    { name: "M1", value: 48 },
    { name: "M2", value: 70 },
    { name: "M3", value: 93 },
    { name: "M4", value: 111 },
    { name: "M5", value: 133 },
    { name: "M6", value: 152 },
    { name: "M7", value: 176 },
    { name: "M8", value: 193 },
    { name: "M9", value: 216 },
    { name: "M10", value: 230 },
    { name: "M11", value: 255 },
    { name: "M12", value: 271 },
    { name: "M13", value: 294 },
    { name: "M14", value: 313 },
    { name: "M15", value: 338 },
    { name: "M16", value: 358 },
    { name: "M17", value: 380 },
    { name: "M18", value: 395 },
    { name: "M19", value: 418 },
    { name: "M20", value: 435 },
    { name: "M21", value: 458 },
    { name: "M22", value: 472 },
    { name: "M23", value: 497 },
    { name: "M24", value: 513 },
  
  ],
  leads: [
    { name: "M1", value: 20 },
    { name: "M2", value: 31 },
    { name: "M3", value: 45 },
    { name: "M4", value: 60 },
    { name: "M5", value: 70 },
    { name: "M6", value: 85 },
    { name: "M7", value: 96 },
    { name: "M8", value: 110 },
    { name: "M9", value: 125 },
    { name: "M10", value: 137 },
    { name: "M11", value: 151 },
    { name: "M12", value: 165 },
    { name: "M13", value: 177 },
    { name: "M14", value: 190 },
    { name: "M15", value: 205 },
    { name: "M16", value: 217 },
    { name: "M17", value: 231 },
    { name: "M18", value: 245 },
    { name: "M19", value: 256 },
    { name: "M20", value: 270 },
    { name: "M21", value: 285 },
    { name: "M22", value: 298 },
    { name: "M23", value: 311 },
    { name: "M24", value: 327 },
    { name: "M25", value: 340 },
    { name: "M26", value: 351 },
    { name: "M27", value: 365 },
    { name: "M28", value: 378 },
    { name: "M29", value: 392 },
    { name: "M30", value: 407 },
    { name: "M31", value: 418 },
    
  ],
  intent: [
    { name: "M1", value: 35 },
    { name: "M2", value: 52 },
    { name: "M3", value: 70 },
    { name: "M4", value: 89 },
    { name: "M5", value: 105 },
    { name: "M6", value: 124 },
    { name: "M7", value: 144 },
    { name: "M8", value: 158 },
    { name: "M9", value: 177 },
    { name: "M10", value: 193 },
    { name: "M11", value: 210 },
    { name: "M12", value: 230 },
    { name: "M13", value: 247 },
    { name: "M14", value: 263 },
    { name: "M15", value: 281 },
    { name: "M16", value: 299 },
    { name: "M17", value: 318 },
    { name: "M18", value: 334 },
    { name: "M19", value: 353 },
    { name: "M20", value: 371 },
   
    
  ],
  email: [
    { name: "M1", value: 38 },
    { name: "M2", value: 59 },
    { name: "M3", value: 80 },
    { name: "M4", value: 102 },
    { name: "M5", value: 123 },
    { name: "M6", value: 145 },
    { name: "M7", value: 166 },
    { name: "M8", value: 187 },
    { name: "M9", value: 208 },
    { name: "M10", value: 230 },
    { name: "M11", value: 251 },
    { name: "M12", value: 273 },
    { name: "M13", value: 295 },
    { name: "M14", value: 316 },
    { name: "M15", value: 338 },
    { name: "M16", value: 359 },
    { name: "M17", value: 380 },
    { name: "M18", value: 403 },
    { name: "M19", value: 423 },
    { name: "M20", value: 445 },
     
     
  ],
};



const chartColors = {
  content: "#007bff",
  leads: "#28a745",
  intent: "#dc3545",
  email: "#ffc107",
};

 const cards1 = [
  {
    title: "Content Syndication",
    icon: <FaList className="text-2xl text-gray-700" />,
    description:
      "Strategic distribution of content across multiple platforms to increase reach and engagement.",
    dataKey: "content",
    image: "/images/content-syndication.webp",
     link: "/Content-Syndication",
  },
  {
    title: "Sales Qualified Leads",
    icon: <FaBullseye className="text-2xl text-gray-700" />,
    description:
      "High-quality leads that have been vetted and show strong potential for conversion.",
    dataKey: "leads",
    image: "/images/lead-generation.webp",
     link: "",
  },
  {
    title: "Intent Leads",
    icon: <FaHeartbeat className="text-2xl text-gray-700" />,
    description:
      "Targeted leads showing specific buying signals and readiness to purchase.",
    dataKey: "intent",
    image: "/images/intent-leads.webp",
    link: "",
  },
  {
    title: "Email Marketing",
    icon: <FaEnvelope className="text-2xl text-gray-700" />,
    description:
      "Targeted email campaigns designed to nurture leads and drive conversions.",
    dataKey: "email",
    image: "/images/email-marketing.webp",
    link: "",
  },
];

const cards = [
  {
    icon: <FaList className="text-gray-600" />,
    title: "Content Syndication",
    description:
      "QuoreB2B implements content syndication by first analyzing your target audience to identify relevant industry platforms where decision-makers consume content.",
    link: "/Content-Syndication",
  },
  {
    icon: <FaBullseye className="text-gray-600" />,
    title: "Sales Qualified Leads",
    description:
      "QuoreB2B boosts SQL generation by syndicating your content on high-intent industry platforms where decision-makers actively engage, ensuring quality lead flow.",
    link: "",
  },
  {
    icon: <FaHeartbeat className="text-gray-600" />,
    title: "Intent Leads",
    description:
      "QuoreB2B specializes in high-quality intent leads, helping businesses target ready-to-buy prospects. Our AI-powered platform identifies real-time buyer signals, ensuring higher conversions.",
    link: "",
  },
  {
    icon: <FaEnvelope className="text-gray-600" />,
    title: "Email Marketing",
    description:
      "QuoreB2B transforms email marketing with AI-powered precision, delivering hyper-targeted campaigns that convert. Our platform automates personalized outreach, boosts engagement, and maximizes ROI—so you focus on closing deals.",
    link: "",
  },
];

export default function Solution() {
  return (
    <>
      <Head>
        <title>Solution</title>
        <meta property="og:title" content="Solution" />
        <meta
          property="og:description"
          content="QuoreB2B’s comprehensive suite of solutions empowers your business to achieve measurable growth."
        />
        <meta property="og:image" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="QuoreB2B solution" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Section 1 */}
 <section className="w-full bg-white px-4 py-12 mt-18">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
    {/* Text First on Mobile, Left on Desktop */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 order-2 lg:order-1"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Convert More. Grow Faster.{" "}
        <span className="text-[#00F0B5]">QuoreB2B</span> Solutions Deliver
      </h2>
      <div className="w-10 h-1 bg-[#00F0B5] mb-4 rounded-sm" />
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        QuoreB2B’s comprehensive suite of solutions empowers your business to
        achieve measurable growth. Our email marketing campaigns connect with
        decision-makers, while our intent leads identify prospects actively
        searching for your solutions. Through strategic content syndication, we
        expand your reach to new audiences, and our sales qualified leads
        program delivers prospects ready for meaningful conversations. With
        QuoreB2B as your partner, you’ll transform your marketing efforts into a
        powerful engine for sustainable business growth.
      </p>
    </motion.div>

    {/* Image Second on Mobile, Right on Desktop */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 order-2 lg:order-2 rounded-3xl overflow-hidden shadow-xl"
    >
      <Image
        src="/images/solns.webp"
        alt="Team collaborating on business strategy"
        width={800}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </motion.div>
  </div>
</section>


      {/* Section 2 */}
      <section className="bg-white py-16 px-4 mt-18">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left Text */}
           
          <div className="flex-1 space-y-4 mt-54">
            <h2 className="text-3xl font-semibold text-gray-800">
              We integrate powerful{" "}
              <span className="text-[#00d9a6]">B2B marketing solutions</span> to
              drive growth:{" "}
              <span className="text-[#00d9a6]">Intent-Based Lead Generation</span>,
              Targeted Advertising, AI-Powered Email Campaigns, and Strategic
              Content Distribution.
            </h2>
          </div>
 {/* Right Cards */}
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {cards.map((card, index) => {
    const Wrapper = card.link ? Link : "div";
    const wrapperProps = card.link ? { href: card.link } : {};

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <Wrapper {...wrapperProps} className="group block h-full">
          <div
            className="h-96 flex flex-col justify-between p-6
              border border-gray-200 bg-white rounded-2xl
              hover:bg-gradient-to-r hover:from-[#00D2A8] hover:to-[#84D82D]
              hover:text-white transition-all duration-300 shadow hover:shadow-lg"
          >
            <div>
              <div className="mb-3 text-[#00d9a6] group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 group-hover:text-white">{card.description}</p>
            </div>
          </div>
        </Wrapper>
      </motion.div>
    );
  })}
</div>

        </div>
      </section>
    <section className="bg-gray-50 py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {cards1.map((card, index) => {
      const CardContent = (
        <div
          className="bg-white p-6 rounded-2xl shadow-md text-center space-y-4 transition duration-300 hover:bg-gradient-to-r hover:from-[#00D2A8] hover:to-[#84D82D] hover:text-white"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover rounded-xl"
          />
          <div className="flex justify-center items-center text-4xl">
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
            {card.title}
          </h3>
          <p className="text-sm text-gray-500 group-hover:text-white">
            {card.description}
          </p>
          <div className="h-40 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataSets[card.dataKey]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
    <YAxis
  type="number"
  domain={[0, 240]}
  ticks={[0, 60, 120, 180, 240]} // Fewer ticks = more space between them
  interval={0}
  tick={{ fill: "#4B5563", fontSize: 12 }}
  stroke="#ccc"
/>


<Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={chartColors[card.dataKey]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

      return card.link ? (
        <Link href={card.link} key={index} className="group block">
          {CardContent}
        </Link>
      ) : (
        <div key={index} className="group">
          {CardContent}
        </div>
      );
    })}
  </div>
</section>

    </>
  );
}
