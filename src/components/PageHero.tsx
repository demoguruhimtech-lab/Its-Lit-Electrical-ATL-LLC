import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: { label: string; path?: string }[];
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative bg-secondary-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/80 to-secondary-950/40" />
      </div>
      <div className="container-x relative py-16 lg:py-24">
        <nav className="flex items-center gap-1 text-sm mb-4 animate-fade-in">
          {breadcrumbs.map((bc, i) => (
            <span key={i} className="flex items-center gap-1">
              {bc.path ? (
                <Link
                  to={bc.path}
                  className="text-primary-400 hover:text-primary-300 font-semibold"
                >
                  {bc.label}
                </Link>
              ) : (
                <span className="text-secondary-400">{bc.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3 h-3 text-secondary-500" />
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight animate-fade-in-up max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-secondary-300 mt-4 max-w-2xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
