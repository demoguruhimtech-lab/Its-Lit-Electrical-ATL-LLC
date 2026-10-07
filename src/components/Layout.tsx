import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CallButton from './CallButton';

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children || <Outlet />}</main>
      <Footer />
      {/* Sticky mobile call button */}
      <div className="lg:hidden">
        <CallButton variant="sticky" />
      </div>
    </div>
  );
}
