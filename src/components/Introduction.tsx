const Introduction = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#F7F6F4] to-[#D6D1CA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
            Cornerstone Advisory
          </h2>
          <div className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
            <p>
              Our vision is to be the leading enabler of market entry and
              scalable digital growth across Africa, offering core services in
              strategic partnerships, deal facilitation, and regulatory
              advisory. We combine deep local insight with global expertise to
              deliver actionable strategies and digital ecosystems that unlock
              high-value opportunities for our clients.
            </p>
            <p>
              Driven by a team of over 10 legal, tech, and sales experts with
              vast networks across East, West, and North Africa, we have
              established a strong track record of success. Since January, we
              have helped companies like Lira, 54Pay, Nala, and PrepayNation
              expand their reach and close pivotal deals, bridging the gap
              between strategy and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
