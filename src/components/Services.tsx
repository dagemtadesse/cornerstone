export default function AdvisoryServicesSection() {
  const services = [
    {
      title: "CFO Advisory",
      desc: "The responsibilities of CFOs have grown tremendously in recent years as the depth of their strategic acumen has become fully appreciated by their...",
    },
    {
      title: "Business Consulting",
      desc: "The purpose of growth isn’t just to get bigger. The real value is delivered when you grow and get better. Our people are skilled at helping you create...",
    },
    {
      title: "Outsourcing",
      desc: "As costs rise, talent gaps widen, and digital demands accelerate, it’s time to rethink how work gets done. Our Outsourcing Services keep you focused...",
    },
    {
      title: "Risk Advisory",
      desc: "To fully understand and effectively act on the range of risks across your enterprise, you need access to the latest knowledge and leading practices...",
    },
    {
      title: "Technology Modernization",
      desc: "A strategic update of an organization’s technology can help decrease costs, increase value, drive efficiencies, boost performance and even improve...",
    },
    {
      title: "Transaction Advisory",
      desc: "Our holistic approach to transaction advisory services addresses the financial, operational, tax, IT commercial, strategic, human capital, and...",
    },
  ];

  return (
    <section className="relative w-full py-20 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          alt="building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How can we help you?
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mb-12 text-white/90">
          Our advisory teams tackle challenges alongside you, designing fresh
          solutions with a balance of scale, skill and service you’ll only find here.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700">
                {item.desc}
                <span className="font-medium text-black cursor-pointer">
                  {" "}Show more
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}