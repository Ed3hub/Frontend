import React from 'react';
import { Search } from 'lucide-react';

const LanguagePage = () => {
  const languages = [
    { name: 'Bengali', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMPaua-dxNnIysH300GqdWl9-EFUTFNYDyw&s' },
    { name: 'Afrikaans', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg' },
    { name: 'Basque', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/1280px-Flag_of_the_Basque_Country.svg.png' },
    { name: 'Armenian', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GvwgzSPAGliasiBe5wng8Py825pOhAPDuQ&s' },
    { name: 'Albanian', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIA06TApmPmZ-KaBx-nZ4rWcI0aZjJ52juDQ&s' },
    { name: 'Amharic', flag: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg', active: true },
    { name: 'Azerbaijani', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg' },
    { name: 'Arabic', flag: 'https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg' },
    { name: 'Bosnian', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png' },
    { name: 'Burmese', flag: 'https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg' },
    { name: 'Belarusian', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg' }, 
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
              {lang.flag.startsWith('http') ? (
                <img src={lang.flag} alt={`${lang.name} flag`} className="w-full h-full object-cover" />
              ) : (
                <span>{lang.flag}</span>
              )}
            </div>
            <span className="font-medium text-gray-700 text-sm md:text-base truncate">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
