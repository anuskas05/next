 "use client";

import Image from "next/image";
import {
  GaugeCircle,
  ShieldCheck,
  DollarSign,
  Link2,
  BarChart2,
  Workflow,
  FileBarChart,
  CheckCircle,
  DatabaseZap,
} from "lucide-react";

const cardData = [
  {
    title: "Data Consulting Solutions",
    iconColor: "bg-green-500",
    points: [
      "Comprehensive data strategy development aligned with business objectives",
      "Technology stack optimization for maximum efficiency and scalability",
      "Organizational data maturity assessment and roadmap creation",
      "Strategic technology recommendations with ROI analysis",
      "Data monetization strategy development",
      "Change management for data-driven transformation",
    ],
    benefits:
      "Align your data initiatives with business goals, avoid costly technology mismatches, and accelerate your journey to becoming a data-driven organization.",
  },
  {
    title: "Data Lifecycle Management",
    iconColor: "bg-cyan-500",
    points: [
      "Data capture optimization with intelligent ingestion frameworks",
      "Storage tiering and cost-optimized management strategies",
      "Automated retention and archival policies with compliance checks",
      "Secure data deprecation and disposal protocols",
      "Data lineage tracking and version control",
      "Real-time data quality monitoring throughout lifecycle",
    ],
    benefits:
      "Reduce storage costs by up to 60%, maintain regulatory compliance automatically, and ensure data integrity at every stage of its lifecycle.",
  },
  {
    title: "Data Governance Solutions",
    iconColor: "bg-green-500",
    points: [
      "Regulatory compliance management (GDPR, CCPA, HIPAA)",
      "Enterprise-wide data quality frameworks and metrics",
      "Role-based access control and data masking policies",
      "Business glossary and metadata management",
      "Data stewardship program development",
      "Privacy-by-design implementation",
      "Audit trails and compliance reporting",
    ],
    benefits:
      "Mitigate regulatory risks, establish a single source of truth, and enable confident decision-making with trusted, well-governed data assets.",
  },
  {
    title: "Data Operations Services",
    iconColor: "bg-cyan-500",
    points: [
      "End-to-end data pipeline orchestration and monitoring",
      "Real-time performance monitoring and anomaly detection",
      "Automated workflow development with self-healing capabilities",
      "Advanced analytics integration and model operations",
      "DataOps culture and practice implementation",
      "Observability and proactive incident management",
      "Cost-optimized cloud data operations",
    ],
    benefits:
      "Achieve 99.9% data pipeline reliability, reduce operational overhead by 45%, and enable continuous delivery of data products.",
  },
];

export default function DataSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 text-black">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Unlock the Power of Data with{" "}
                <span className="text-[#00d9a6]">Quoreb2b</span>
              </h1>

              <p className="text-lg leading-relaxed text-black">
                At <span className="text-[#00d9a6]">Quoreb2b</span>, we provide
                cutting-edge data solutions to streamline operations and enhance
                decision-making. Our expertise in data analytics, AI and cloud
                computing ensure actionable insights that drive business growth. We
                combine data storage, processing, and visualization to empower
                organizations with real-time intelligence. Partner with us for
                innovative, scalable, and secure data-driven solutions.
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/data-power-hero.webp"
                  alt="Data analytics visualization"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 shadow-xl">
                <span className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white font-bold text-base">
                  Real-time Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Data Solutions Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-10 w-full">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategic Data Solutions
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Advanced data analytics and insights to power your decision making...
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="font-medium text-gray-800 text-base">
                    Precise demographic and behavior targeting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="font-medium text-gray-800 text-base">
                    Eye-catching designs with compelling messaging
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="font-medium text-gray-800 text-base">
                    Data-driven optimization for maximum ROI
                  </span>
                </li>
              </ul>

              <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white font-bold text-base">
                Get Started Today
              </button>
            </div>

            <div className="flex-1">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/data-solutions.jpg"
                  alt="Strategic Data Solutions"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <h2 className="text-center text-3xl font-semibold mb-12">
              Solutions Provided By Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border-t-4"
                  style={{ borderTopColor: card.iconColor.includes("cyan") ? "#06b6d4" : "#22c55e" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-full ${card.iconColor} text-white`}>
                      <DatabaseZap size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700 text-base space-y-2 mb-4">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <div className="bg-gray-100 p-4 rounded-lg mt-2">
                    <p className="text-base font-semibold mb-1">Key Benefits:</p>
                    <p className="text-base text-gray-700">{card.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Left Column - Data Migration Framework */}
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-cyan-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Migration Framework</h3>
              <p className="text-base text-gray-500 mb-6">Seamless transition to modern systems</p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Assessment & Planning",
                    desc: "Inventory analysis and migration roadmap",
                  },
                  {
                    step: "2",
                    title: "Schema Transformation",
                    desc: "Data model conversion and optimization",
                  },
                  {
                    step: "3",
                    title: "Validation & Testing",
                    desc: "Quality checks and reconciliation",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-500 text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-gray-800">{item.title}</h4>
                      <p className="text-base text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Data Quality Benefits */}
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-green-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Data Quality Matters</h3>

              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>
                  <span className="text-green-600 font-semibold">85% reduction</span> in reporting errors
                </li>
                <li>
                  <span className="text-cyan-600 font-semibold">40% faster</span> decision making
                </li>
                <li>
                  <span className="text-emerald-600 font-semibold">3x ROI</span> on analytics investments
                </li>
                <li>
                  <span className="text-teal-600 font-semibold">92% compliance</span> with regulations
                </li>
              </ul>

              <p className="text-base text-gray-600 mt-6 border-t pt-4">
                Our solution improves data quality by <strong>99.9%</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Enterprise Data Analytics",
                desc: "Comprehensive data analytics platform leveraging advanced machine learning algorithms to transform raw data into actionable business intelligence. Our solution provides deep insights, predictive modeling, and real-time decision support across multiple industries.",
                stats: [
                  { label: "Accuracy Rate", value: "99.7%" },
                  { label: "Data Sources", value: "250+" },
                ],
                tags: ["Machine Learning", "Predictive Analytics", "Deep Learning", "Neural Networks"],
                tagColor: "bg-green-100 text-green-700",
              },
              {
                icon: "🖥️",
                title: "Big Data Infrastructure",
                desc: "Hyper-scalable cloud-based data management ecosystem designed to handle massive data volumes with unparalleled performance, security, and reliability. Our distributed computing architecture ensures seamless data processing and real-time analytics at global scale.",
                stats: [
                  { label: "Storage Capacity", value: "500 PB" },
                  { label: "Uptime Guarantee", value: "99.999%" },
                ],
                tags: ["Distributed Computing", "Cloud Architecture", "Kubernetes", "Microservices"],
                tagColor: "bg-cyan-100 text-cyan-700",
              },
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                desc: "Advanced artificial intelligence and machine learning platform that enables intelligent automation, predictive insights, and cognitive computing. Our solutions integrate cutting-edge algorithms to solve complex business challenges and drive digital transformation.",
                stats: [
                  { label: "Model Accuracy", value: "85%" },
                  { label: "AI Algorithms", value: "10+" },
                ],
                tags: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision"],
                tagColor: "bg-emerald-100 text-emerald-700",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 border">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600 mb-4">{item.desc}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {item.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-lg px-3 py-2 text-center"
                    >
                      <div className="font-semibold text-gray-900 text-lg">{stat.value}</div>
                      <div className="text-gray-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <h4 className="text-base font-semibold text-gray-800 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${item.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#00B389] mb-4">
            Key Benefits
          </h2>
          <p className="text-center text-base text-gray-600 mb-12">Why choose our data platform</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              icon: <GaugeCircle className="text-[#00B389] w-6 h-6" />, title: "10x Faster Processing",
              text: "Parallel computing architecture reduces processing time. Our in-memory computing and optimized query execution deliver unmatched performance."
            }, {
              icon: <DollarSign className="text-[#00B389] w-6 h-6" />, title: "Cost Efficient",
              text: "Reduces infra costs via cloud-native platform. Smart resource scaling and optimization enable performance without overprovisioning."
            }, {
              icon: <ShieldCheck className="text-[#00B389] w-6 h-6" />, title: "Enterprise Security",
              text: "AES-256 encryption, detailed audit logging, SOC 2 Type II, and regular compliance testing ensure secure and compliant data usage."
            }, {
              icon: <Link2 className="text-[#00B389] w-6 h-6" />, title: "Seamless Integration",
              text: "Integrates with 150+ data sources and APIs (Salesforce, AWS, Azure). Auto-detects schemas, maps data 80% faster."
            }].map((item, i) => (
              <div key={i} className="bg-white border rounded-2xl p-6 shadow-md">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Data Quality Dashboard */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#00B389]">Data Quality Dashboard</h2>
              <p className="text-gray-600">Comprehensive metrics and improvement tools</p>

              <div className="flex items-center gap-8">
                {/* Circular Score */}
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="text-[#00B389]"
                      strokeDasharray="82, 100"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-[#00B389]">82</span>
                    <span className="text-sm text-gray-700">DQ Score</span>
                  </div>
                </div>

                {/* Improvement Bars */}
                <div className="flex-1 space-y-3">
                  {[
                    { label: "Completeness", percent: 73 },
                    { label: "Timeliness", percent: 85 },
                    { label: "Consistency", percent: 91 },
                  ].map(({ label, percent }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm">
                        <span>{label}</span>
                        <span className="text-[#00B389] font-medium">{percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#00B389] h-2 rounded-full"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-sm pt-2">
                <span className="bg-[#DFF9F1] text-[#00B389] px-2 py-1 rounded">Excellent (90-100)</span>
                <span className="bg-[#FFF3C3] text-yellow-700 px-2 py-1 rounded">Good (75-89)</span>
                <span className="bg-[#FFE5E5] text-red-500 px-2 py-1 rounded">Needs Work (&lt;75)</span>
              </div>
            </div>

            {/* Cloud Migration Journey */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#00B389]">Cloud Data Migration Journey</h2>
              <p className="text-gray-600">We guide you through every step</p>

              {/* Step Cards */}
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { title: "Assessment", desc: "Analyze current state", icon: "🔍" },
                  { title: "Planning", desc: "Create roadmap", icon: "📝" },
                  { title: "Execution", desc: "Automated migration", icon: "🛠️" },
                  { title: "Optimization", desc: "Performance tuning", icon: "🚀" },
                ].map(({ title, desc, icon }) => (
                  <div key={title} className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold text-[#00B389]">{title}</div>
                    <div className="text-xs text-gray-500">{desc}</div>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="flex gap-6 text-base font-medium">
                <div><span className="text-[#00B389] font-bold">200+</span> Migrations</div>
                <div><span className="text-[#00B389] font-bold">40%</span> Cost Reduction</div>
                <div><span className="text-[#00B389] font-bold">99.9%</span> Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Framework Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#00D084]">Enterprise Data Governance Framework</h3>
            <p className="text-lg text-gray-700 mt-2">Compliance, quality, and security management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
            {/* Policies */}
            <div className="bg-[#f9fafb] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h4 className="text-2xl font-bold text-[#00D084] mb-4">Policies</h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Data classification</li>
                <li>Retention rules</li>
                <li>Access controls</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-[#f9fafb] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="text-2xl font-bold text-[#00D084] mb-4">Security</h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Encryption</li>
                <li>Masking</li>
                <li>Audit trails</li>
              </ul>
            </div>

            {/* Quality */}
            <div className="bg-[#f9fafb] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="text-2xl font-bold text-[#00D084] mb-4">Quality</h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Validation rules</li>
                <li>Cleansing</li>
                <li>Monitoring</li>
              </ul>
            </div>
          </div>

          {/* Compliance Tags */}
          <div className="text-center mt-10 text-base">
            <span className="font-medium mr-2">Supports:</span>
            <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mx-1">GDPR</span>
            <span className="inline-block bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full mx-1">CCPA</span>
            <span className="inline-block bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full mx-1">HIPAA</span>
          </div>
        </div>
      </section>
    </>
  );
}