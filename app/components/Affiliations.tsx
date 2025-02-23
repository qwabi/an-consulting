'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Affiliations() {
  const affiliations = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irba-01BUkrrfxMYucU1ii43BCt3yIHmst8.png',
      alt: 'IRBA Certification',
      width: 200,
      height: 80,
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intuit-FETYVAvEQ6eh4ihB8jm4aJlr4BdQ9Y.png',
      alt: 'QuickBooks ProAdvisor Certification',
      width: 200,
      height: 200,
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saica.jpg-40lX12COhJ1nCd1NayopNS0sa4SR1n.jpeg',
      alt: 'SAICA Membership',
      width: 300,
      height: 120,
    },
  ];

  return (
    <section className='w-full py-12 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Our Affiliations & Accreditations
        </h2>
        <div className='max-w-4xl mx-auto'>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='affiliations-swiper'
          >
            {affiliations.map((affiliation, index) => (
              <SwiperSlide key={index}>
                <div className='flex items-center justify-center p-6 h-[200px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <Image
                    src={affiliation.src || '/placeholder.svg'}
                    alt={affiliation.alt}
                    width={affiliation.width}
                    height={affiliation.height}
                    className='object-contain max-h-[160px] w-auto'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
