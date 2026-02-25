import React from 'react';
import { Search } from 'lucide-react';

const LanguagePage = () => {
  const languages = [
    { name: 'Bengali', flag: '🇧🇩' },
    { name: 'Afrikaans', flag: '🇿🇦' },
    { name: 'Basque', flag: '🇪🇸' },
    { name: 'Armenian', flag: '🇦🇲' },
    { name: 'Albanian', flag: '🇦🇱' },
    { name: 'Amharic', flag: '🇪🇹', active: true },
    { name: 'Azerbaijani', flag: '🇦🇿' },
    { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Bosnian', flag: '🇧🇦' },
    { name: 'Burmese', flag: '🇲🇲' },
    { name: 'Belarusian', flag: '🇧🇾' },
    { name: 'Albanian', flag: '🇦🇱' },
    { name: 'Bengali', flag: '🇧🇩' },
    { name: 'Afrikaans', flag: '🇿🇦' },
    { name: 'Basque', flag: '🇪🇸' },
    { name: 'Armenian', flag: '🇦🇲' },
    { name: 'Albanian', flag: '🇦🇱' },
    { name: 'Amharic', flag: '🇪🇹' },
    { name: 'Azerbaijani', flag: '🇦🇿' },
    { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Bosnian', flag: '🇧🇦' },
    { name: 'Burmese', flag: '🇲🇲' },
    { name: 'Belarusian', flag: '🇧🇾' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Language</h1>
      <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">Select the language you're most comfortable with. You can always change it later in settings.</p>
      
      <div className="relative mb-8 md:mb-10">
        <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search languages" 
          className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 text-gray-600 text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {languages.map((lang, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl border transition-all cursor-pointer ${
              lang.active ? 'border-blue-500 bg-white ring-1 ring-blue-500 shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50 text-xl md:text-2xl flex-shrink-0">
              {lang.flag}
            </div>
            <span className="font-medium text-gray-700 text-sm md:text-base truncate">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
