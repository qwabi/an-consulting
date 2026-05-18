import type { Metadata } from "next";
import AboutAyabonga from './AboutAyabonga';

export const metadata: Metadata = {
  title: "Built by Ayabonga Qwabi | AN Consulting",
  description: "AN Consulting was built by Ayabonga Qwabi, a Senior Product Engineer specialising in Accounting services, Tax consulting, Audit support and production-ready...",
  alternates: {
    canonical: "https://www.anconsulting.co.za/about-developer",
  },
  openGraph: {
    title: "Built by Ayabonga Qwabi | AN Consulting",
    description: "AN Consulting was built by Ayabonga Qwabi, a Senior Product Engineer specialising in Accounting services, Tax consulting, Audit support and production-ready...",
    url: "https://www.anconsulting.co.za/about-developer",
    type: 'profile',
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayabonga Qwabi",
  "jobTitle": "Senior Product Engineer",
  "url": "https://www.qwabi.co.za",
  "sameAs": [
    "https://business.qwabi.co.za",
    "https://twitter.com/ayabongaqwabi"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Qwabi Engineering",
    "url": "https://business.qwabi.co.za"
  },
  "description": "Senior Product Engineer and Technical Co-founder as a Service (TaaS) specialising in mobile app development, web application development, AI agent development, and custom software systems for South African businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA"
  }
};

export default function AboutDeveloperPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 16px' }}>
        <p style={{ margin: '0 0 24px', color: 'inherit', lineHeight: 1.7 }}>
          AN Consulting was built by{' '}
          <a href="https://www.qwabi.co.za" rel="author">
            Ayabonga Qwabi
          </a>{' '}
          of{' '}
          <a href="https://business.qwabi.co.za">
            Qwabi Engineering
          </a>
          , with senior product engineering focused on production-ready systems for South African businesses.
        </p>
        <AboutAyabonga
          projectName="AN Consulting"
          projectCategory="financial records management and consulting website"
          highlightServices={["web-app","admin","crm","api"]}
        />
      </section>
    </main>
  );
}
