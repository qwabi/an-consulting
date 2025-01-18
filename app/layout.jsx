import './globals.css';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import { PackageProvider } from './context/site';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'AN Consulting - Your Partner in Financial Excellence',
  description:
    'AN Consulting provides expert accounting, audit, tax, and advisory services for small businesses in South Africa.',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-[#233142] text-[#7591a0]`}>
        <PackageProvider>
          <AnimatePresence>
            {children}
            <CustomCursor />
            <Toaster position='top-right' />
          </AnimatePresence>
        </PackageProvider>
      </body>
    </html>
  );
}
