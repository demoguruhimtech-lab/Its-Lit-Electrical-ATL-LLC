import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/siteData';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-secondary-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex items-center justify-between w-full px-6 py-4 text-left font-bold text-secondary-900 hover:bg-secondary-50 transition-colors"
          >
            <span className="pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-secondary-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
