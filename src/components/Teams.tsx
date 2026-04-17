import { Mail, Linkedin } from 'lucide-react';

const AdvisoryLeaders = () => {
  const leaders = [
    {
      name: "Tom Puthiyamadam",
      role: "Managing Partner, Advisory Services",
      company: "Grant Thornton Advisors LLC",
      phone: "+1 646 825 8412",
      image: "https://via.placeholder.com/400x250" // Replace with actual image
    },
    {
      name: "Wade Kruse",
      role: "National Managing Partner, Business Consulting",
      company: "",
      phone: "+1 404 475 0181",
      image: "https://via.placeholder.com/400x250"
    },
    {
      name: "Paul Melville",
      role: "Chief Growth Officer",
      company: "",
      phone: "+1 312 602 8360",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <section className="bg-[#D6D1CA] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Connect with our Advisory leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-white mb-4 aspect-[16/9]">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#4F2D7F] text-xl font-bold mb-1">{leader.name}</h3>
              <p className="text-gray-800 text-sm font-medium">{leader.role}</p>
              {leader.company && <p className="text-gray-800 text-sm">{leader.company}</p>}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-semibold">{leader.phone}</span>
                <button className="p-1.5 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                  <Mail size={16} />
                </button>
                <button className="p-1.5 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryLeaders;