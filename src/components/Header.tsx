export default function Header() {
  return (
    <>
      <header className="w-full bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              {/* Placeholder logo circle */}
              <div className="w-5 h-5 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold">Cornerstone Advisory</span>
          </div>
        </div>
      </header>

      <header className="">
        <div className="w-full">
          {/* Hero Section */}
          <div className="relative h-[420px] w-full overflow-hidden">
            {/* Background Image */}
            <img
              src="/earth.jpg"
              alt="Light bulbs"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cornerstone Advisory
              </h1>

              <p className="text-lg md:text-2xl max-w-2xl font-medium">
                A pan-African company headquartered in Ethiopia, bringing
                together top professionals across East, West and North Africa
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <ul className="flex flex-wrap gap-8 py-4 text-gray-700 text-sm md:text-base">
                <li className="hover:text-black cursor-pointer">
                  Introduction
                </li>
                <li className="hover:text-black cursor-pointer">
                  Our services
                </li>
                <li className="hover:text-black cursor-pointer">Why us</li>
                <li className="hover:text-black cursor-pointer">
                  Recent insights
                </li>
                <li className="hover:text-black cursor-pointer">
                  Events & webcasts
                </li>
                <li className="hover:text-black cursor-pointer">Our leaders</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
