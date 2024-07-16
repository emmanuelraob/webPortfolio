import React from 'react';
import { useLanguage } from '../../locales/LanguageContext';

interface FilterMenuProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    
}

const getTranslation = (filter: string, translations: { [key: string]: any }): string => {
    switch (filter) {
      case 'All':
        return translations.All;
      case 'UXUI':
        return translations.UXUI;
      case 'Programming':
        return translations.Programming;
      case 'VisualDesign':
        return translations.VisualDesign;
      case 'AI':
        return translations.AI;
      case 'ProductDesign':
        return translations.ProductDesign;
      default:
        return filter; // Retorna el valor del filtro si no hay traducción disponible
    }
  };

  
const FilterMenu: React.FC<FilterMenuProps> = ({filters, activeFilter, onFilterChange }) => {
    const { translations } = useLanguage();

    return (
        <div className=' flex gap-4 text-white mb-[56px] '>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`py-[4px] px-[8px] rounded font-regular text-text-30 ${filter === activeFilter ? 'bg-primary font-bold text-grey-1' : ''}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {getTranslation(filter, translations)}
                    
                </button>
            ))}
        </div>
    )
}

export default FilterMenu