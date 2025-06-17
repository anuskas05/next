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

  const dataSets = {
  content: [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 62 },
    { name: "Apr", value: 70 },
    { name: "May", value: 78 },
    { name: "Jun", value: 90 },
    { name: "Jul", value: 95 },
    { name: "Aug", value: 100 },
    { name: "Sep", value: 105 },
    { name: "Oct", value: 110 },
    { name: "Nov", value: 115 },
    { name: "Dec", value: 120 },
    { name: "Jan'", value: 125 },
    { name: "Feb'", value: 130 },
    { name: "Mar'", value: 135 },
    { name: "Apr'", value: 140 },
    { name: "May'", value: 145 },
    { name: "Jun'", value: 150 },
  ],
  leads: [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 28 },
    { name: "Apr", value: 35 },
    { name: "May", value: 42 },
    { name: "Jun", value: 48 },
    { name: "Jul", value: 54 },
    { name: "Aug", value: 60 },
    { name: "Sep", value: 65 },
    { name: "Oct", value: 70 },
    { name: "Nov", value: 75 },
    { name: "Dec", value: 80 },
    { name: "Jan'", value: 85 },
    { name: "Feb'", value: 90 },
    { name: "Mar'", value: 95 },
    { name: "Apr'", value: 100 },
    { name: "May'", value: 105 },
    { name: "Jun'", value: 110 },
  ],
  intent: [
    { name: "Jan", value: 25 },
    { name: "Feb", value: 32 },
    { name: "Mar", value: 40 },
    { name: "Apr", value: 50 },
    { name: "May", value: 60 },
    { name: "Jun", value: 70 },
    { name: "Jul", value: 80 },
    { name: "Aug", value: 90 },
    { name: "Sep", value: 95 },
    { name: "Oct", value: 100 },
    { name: "Nov", value: 105 },
    { name: "Dec", value: 110 },
    { name: "Jan'", value: 115 },
    { name: "Feb'", value: 120 },
    { name: "Mar'", value: 125 },
    { name: "Apr'", value: 130 },
    { name: "May'", value: 135 },
    { name: "Jun'", value: 140 },
  ],
  email: [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 72 },
    { name: "May", value: 85 },
    { name: "Jun", value: 95 },
    { name: "Jul", value: 100 },
    { name: "Aug", value: 110 },
    { name: "Sep", value: 120 },
    { name: "Oct", value: 130 },
    { name: "Nov", value: 140 },
    { name: "Dec", value: 150 },
    { name: "Jan'", value: 160 },
    { name: "Feb'", value: 170 },
    { name: "Mar'", value: 180 },
    { name: "Apr'", value: 190 },
    { name: "May'", value: 200 },
    { name: "Jun'", value: 210 },
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
      <section className="w-full bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Convert More. Grow Faster.{" "}
              <span className="text-[#00F0B5]">QuoreB2B</span> Solutions Deliver
            </h2>
            <div className="w-10 h-1 bg-[#00F0B5] mb-4 rounded-sm" />
            <p className="text-gray-600 text-lg leading-relaxed">
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 rounded-3xl overflow-hidden shadow-xl"
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
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left Text */}
           
          <div className="flex-1 space-y-4 mt-28">
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
                  <Wrapper
                    {...wrapperProps}
                    className="group block h-full"
                  >
                    <div className="h-full flex flex-col justify-between p-6 border border-gray-200 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-green-400 group-hover:to-teal-500 group-hover:text-white transition-all duration-300 shadow hover:shadow-lg">
                      <div>
                        <div className="mb-3 text-[#00d9a6] group-hover:text-white">
                          {card.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-600">{card.description}</p>
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
          <div className="h-32 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataSets[card.dataKey]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
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
