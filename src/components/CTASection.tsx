import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/data/siteData';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  text: string;
  image?: string;
}

export default function CTASection({
  title,
  text,
  image,
}: CTASectionProps) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-secondary-950" />
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg text-secondary-300 mt-4">{text}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary-600 hover:border-primary-500 text-white hover:text-primary-400 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
