import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-[#3D7A82] py-20 px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-light mb-4">Ready to talk? <span className="font-bold">We’re ready to listen.</span></h2>
        <p className="text-lg mb-8">Request a meeting and a member of our team will be in touch to see what we can do to meet your needs.</p>
        
        <p className="text-sm mb-8">Want to submit an RFP? Please submit your request through our <a href="#" className="font-bold underline">RFP submission page.</a></p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs mb-1">First Name *</label>
              <input type="text" placeholder="John" className="w-full p-3 rounded text-black outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Last Name *</label>
              <input type="text" placeholder="Smith" className="w-full p-3 rounded text-black outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Email *</label>
              <input type="email" placeholder="example@domain.com" className="w-full p-3 rounded text-black outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Company *</label>
              <input type="text" placeholder="Company name" className="w-full p-3 rounded text-black outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Job Function *</label>
              <select className="w-full p-3 rounded text-gray-500 bg-white outline-none appearance-none">
                <option>Select...</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1">Job Level *</label>
              <select className="w-full p-3 rounded text-gray-500 bg-white outline-none appearance-none">
                <option>Select...</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-8">
            <input type="checkbox" className="mt-1 h-5 w-5 rounded border-none" />
            <p className="text-xs leading-relaxed opacity-90">
              By submitting your personal information for the purpose of this webform, you acknowledge you have read our 
              <span className="font-bold underline"> Privacy Statement</span> and are aware of our processing of your personal information...
            </p>
          </div>

          <button type="submit" className="mt-6 border-2 border-white px-10 py-2 rounded font-bold hover:bg-white hover:text-[#3D7A82] transition-all">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;