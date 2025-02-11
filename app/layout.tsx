import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Background from './components/ui/Background';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sikkim Rising Star',
  description: 'Sikkim\'s Premier Talent Hunt Competition since 2018',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}