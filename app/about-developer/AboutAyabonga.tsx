'use client';
/**
 * AboutAyabonga.tsx
 * ─────────────────────────────────────────────────────────────────
 * Plug-and-play "About the Developer" section for any React project.
 * Compatible with: Create React App (TS), Vite/React (TS), Next.js
 *                  Pages Router, Next.js App Router.
 *
 * USAGE
 * ─────
 * import AboutAyabonga from './AboutAyabonga';
 *
 * // Generic:
 * <AboutAyabonga />
 *
 * // Project-aware (recommended for SEO):
 * <AboutAyabonga
 *   projectName="uTap"
 *   projectCategory="campus wallet and mobile payments"
 *   highlightServices={['mobile-app', 'react-native', 'saas', 'payment']}
 * />
 *
 * // Compact (sidebar / footer):
 * <AboutAyabonga compact showProjects={false} highlightServices={['web-app']} />
 *
 * NOTE — Next.js App Router
 * ─────────────────────────
 * The 'use client' directive at the top of this file handles App Router
 * compatibility. Remove it if you're using Pages Router or Vite.
 * ─────────────────────────────────────────────────────────────────
 */

import React, { CSSProperties, useState } from 'react';

/* ─── Types ─────────────────────────────────────────────────────── */

export type ServiceKey =
  | 'website'
  | 'web-app'
  | 'landing-page'
  | 'lead-gen'
  | 'ecommerce'
  | 'pwa'
  | 'mobile-app'
  | 'cross-platform'
  | 'react-native'
  | 'flutter'
  | 'desktop'
  | 'ai-agent'
  | 'llm'
  | 'chatbot'
  | 'whatsapp-bot'
  | 'facebook-bot'
  | 'rag'
  | 'prompt-engineering'
  | 'crm'
  | 'booking'
  | 'marketplace'
  | 'saas'
  | 'api'
  | 'payment'
  | 'admin'
  | 'white-label';

type ServiceGroup = 'web' | 'mobile' | 'ai' | 'systems';

interface Service {
  key: ServiceKey;
  label: string;
  group: ServiceGroup;
}

interface Stat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  desc: string;
  url: string;
  tag: string;
}

export interface AboutAyabongaProps {
  /** Name of the current project — shown in the intro line */
  projectName?: string;
  /** Short descriptor e.g. "ride-hailing platform" — shown in the intro line */
  projectCategory?: string;
  /**
   * Restrict the services list to only the keys relevant to this project.
   * When omitted, all 26 services are shown with a toggle.
   */
  highlightServices?: ServiceKey[];
  /** Show the selected work grid (default: true) */
  showProjects?: boolean;
  /** Show the services section (default: true) */
  showAllServices?: boolean;
  /** Narrower layout for sidebars or footers (default: false) */
  compact?: boolean;
}

/* ─── Data ─────────────────────────────────────────────────────── */

const PROFILE = {
  name: 'Ayabonga Qwabi',
  title: 'Senior Product Engineer',
  tagline: "I don't write code. I build systems that compound.",
  origin: 'Eastern Cape, South Africa',
  bio: 'Founder of Qwabi Engineering. 10+ years shipping production systems — mobile apps, web platforms, AI tools, and the infrastructure underneath them. Based in South Africa, building for African realities.',
  personalUrl: 'https://www.qwabi.co.za',
  businessUrl: 'https://business.qwabi.co.za',
  whatsappUrl:
    'https://wa.me/27603116777?text=Hi%20Ayabonga%2C%20I%20found%20your%20site%20and%20I%27d%20like%20to%20chat.',
  twitterUrl: 'https://twitter.com/ayabongaqwabi',
} as const;

const STATS: Stat[] = [
  { value: '10+', label: 'Years shipping' },
  { value: '30+', label: 'Projects delivered' },
  { value: '8 wks', label: 'Typical MVP' },
];

const ALL_SERVICES: Service[] = [
  { key: 'website',            label: 'Website Development',                          group: 'web' },
  { key: 'web-app',            label: 'Web Application Development',                  group: 'web' },
  { key: 'landing-page',       label: 'Landing Page Development',                     group: 'web' },
  { key: 'lead-gen',           label: 'Lead Generation Website Development',          group: 'web' },
  { key: 'ecommerce',          label: 'Headless E-commerce Development',              group: 'web' },
  { key: 'pwa',                label: 'Progressive Web App (PWA) Development',        group: 'web' },
  { key: 'mobile-app',         label: 'Mobile Application Development (iOS & Android)', group: 'mobile' },
  { key: 'cross-platform',     label: 'Cross-Platform Application Development',       group: 'mobile' },
  { key: 'react-native',       label: 'React Native App Development',                 group: 'mobile' },
  { key: 'flutter',            label: 'Flutter App Development',                      group: 'mobile' },
  { key: 'desktop',            label: 'Desktop Application Development (Electron/Tauri)', group: 'mobile' },
  { key: 'ai-agent',           label: 'AI Agent Development',                         group: 'ai' },
  { key: 'llm',                label: 'LLM Integration & Fine-Tuning',                group: 'ai' },
  { key: 'chatbot',            label: 'AI Chatbot Development',                       group: 'ai' },
  { key: 'whatsapp-bot',       label: 'WhatsApp Bot Development',                     group: 'ai' },
  { key: 'facebook-bot',       label: 'Facebook Messenger Bot Development',           group: 'ai' },
  { key: 'rag',                label: 'RAG Pipeline Development',                     group: 'ai' },
  { key: 'prompt-engineering', label: 'Prompt Engineering & AI Workflow Automation',  group: 'ai' },
  { key: 'crm',                label: 'Custom CRM Development',                       group: 'systems' },
  { key: 'booking',            label: 'Booking & Scheduling System Development',      group: 'systems' },
  { key: 'marketplace',        label: 'Marketplace Platform Development',             group: 'systems' },
  { key: 'saas',               label: 'SaaS Product Development',                     group: 'systems' },
  { key: 'api',                label: 'API Development & Integration',                group: 'systems' },
  { key: 'payment',            label: 'Payment Integration (Paystack / Stitch / Ozow)', group: 'systems' },
  { key: 'admin',              label: 'Admin Dashboard & Internal Tools Development', group: 'systems' },
  { key: 'white-label',        label: 'White-Label SaaS Development',                 group: 'systems' },
];

const GROUP_LABELS: Record<ServiceGroup, string> = {
  web:     'Web & Frontend',
  mobile:  'Mobile & Desktop',
  ai:      'AI & Automation',
  systems: 'Systems & Platforms',
};

const SELECTED_PROJECTS: Project[] = [
  { title: 'uTap',                  desc: 'Campus NFC digital wallet for SA students',               url: 'https://utaptech.co.za',                     tag: 'Mobile · SaaS' },
  { title: 'ClinicPlus',            desc: 'Occupational health bookings for mining & construction',  url: 'https://clinicplusbookings.co.za',            tag: 'Web App' },
  { title: 'Queens Connect',        desc: 'Community AI assistant for Queenstown',                   url: 'https://queensconnect.qwabi.co.za',           tag: 'AI Agent' },
  { title: 'Trip (Taxi Assist)',    desc: 'Compliance-first ride-hailing, Eastern Cape & Gauteng',  url: 'https://trip.qwabi.co.za',                   tag: 'Mobile · Marketplace' },
  { title: 'Laundry Marketplace',   desc: 'Multi-sided turnkey laundry platform',                    url: 'https://laundry.qwabi.co.za',                tag: 'Marketplace' },
  { title: 'Warner Music Africa',   desc: 'Participant management — Culture Shifters competition',   url: 'https://www.warnermusicafrica.com',           tag: 'Enterprise' },
];

/* ─── Helpers ───────────────────────────────────────────────────── */

function groupServices(services: Service[]): [ServiceGroup, Service[]][] {
  const map = new Map<ServiceGroup, Service[]>();
  for (const s of services) {
    if (!map.has(s.group)) map.set(s.group, []);
    map.get(s.group)!.push(s);
  }
  return Array.from(map.entries());
}

/* ─── Sub-components ────────────────────────────────────────────── */

function WhatsAppIcon(): React.ReactElement {
  return (
    <svg
      style={{ width: 15, height: 15, flexShrink: 0 }}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.571a.5.5 0 0 0 .617.61l5.882-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.925 0-3.72-.524-5.257-1.435l-.378-.224-3.913 1.026 1.001-3.8-.246-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...s.projectCard,
        ...(hovered ? s.projectCardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={s.projectHeader}>
        <span style={s.projectTitle}>{project.title}</span>
        <span style={s.projectTag}>{project.tag}</span>
      </div>
      <p style={s.projectDesc}>{project.desc}</p>
    </a>
  );
}

interface WhatsAppButtonProps {
  href: string;
}

function WhatsAppButton({ href }: WhatsAppButtonProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...s.whatsappBtn,
        background: hovered ? '#128C7E' : '#25D366',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <WhatsAppIcon />
      Chat on WhatsApp
    </a>
  );
}

/* ─── Main component ────────────────────────────────────────────── */

export default function AboutAyabonga({
  projectName,
  projectCategory,
  highlightServices = [],
  showProjects = true,
  showAllServices = true,
  compact = false,
}: AboutAyabongaProps): React.ReactElement {
  const [expanded, setExpanded] = useState(false);

  const hasHighlight = highlightServices.length > 0;

  const filteredServices = hasHighlight
    ? ALL_SERVICES.filter((svc) => highlightServices.includes(svc.key))
    : ALL_SERVICES;

  const allGroups = groupServices(filteredServices);
  const visibleGroups = hasHighlight || expanded ? allGroups : allGroups.slice(0, 2);
  const showToggle = !hasHighlight && allGroups.length > 2;

  const introLine = projectName
    ? `${projectName} was designed and built by Ayabonga Qwabi${
        projectCategory ? `, a ${projectCategory} specialist` : ''
      } and founder of Qwabi Engineering.`
    : 'This project was designed and built by Ayabonga Qwabi, founder of Qwabi Engineering.';

  return (
    <section style={s.section} aria-labelledby="about-dev-heading">
      <div style={s.container}>

        {/* ── Header ── */}
        <div style={s.header}>
          <div style={s.avatar} aria-hidden="true">AQ</div>
          <div style={s.headerText}>
            <p style={s.introLine}>{introLine}</p>
            <h2 id="about-dev-heading" style={s.name}>{PROFILE.name}</h2>
            <span style={s.titleBadge}>{PROFILE.title} · Qwabi Engineering</span>
          </div>
        </div>

        <div style={s.divider} aria-hidden="true" />

        {/* ── Bio + Stats ── */}
        <div style={compact ? s.bioRowCompact : s.bioRow}>
          <div style={s.bioBlock}>
            <p style={s.tagline}>"{PROFILE.tagline}"</p>
            <p style={s.bio}>{PROFILE.bio}</p>
            <p style={s.origin}>
              <span aria-hidden="true">◎</span>
              {PROFILE.origin}
            </p>
          </div>
          <div style={s.statsBlock}>
            {STATS.map((stat) => (
              <div key={stat.label} style={s.statCard}>
                <span style={s.statValue}>{stat.value}</span>
                <span style={s.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services ── */}
        {showAllServices && (
          <>
            <div style={s.divider} aria-hidden="true" />
            <div>
              <p style={s.sectionLabel}>
                {hasHighlight ? 'Services used on this project' : 'Services'}
              </p>
              <div style={s.servicesGrid}>
                {visibleGroups.map(([group, items]) => (
                  <div key={group}>
                    <p style={s.groupLabel}>{GROUP_LABELS[group]}</p>
                    <ul style={s.serviceList}>
                      {items.map((svc) => (
                        <li key={svc.key} style={s.serviceItem}>
                          <span style={s.serviceDot} aria-hidden="true" />
                          <a
                            href={`${PROFILE.personalUrl}/services`}
                            style={s.serviceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {svc.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {showToggle && (
                <button
                  style={s.toggleBtn}
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                >
                  {expanded
                    ? '↑ Show less'
                    : `↓ Show all ${ALL_SERVICES.length} services`}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── Projects ── */}
        {showProjects && (
          <>
            <div style={s.divider} aria-hidden="true" />
            <div>
              <p style={s.sectionLabel}>Selected work</p>
              <div style={s.projectsGrid}>
                {SELECTED_PROJECTS.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── CTA ── */}
        <div style={s.divider} aria-hidden="true" />
        <div style={s.ctaRow}>
          <div style={s.ctaLinks}>
            <a
              href={PROFILE.personalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaPrimary}
            >
              qwabi.co.za →
            </a>
            <a
              href={PROFILE.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaSecondary}
            >
              business.qwabi.co.za →
            </a>
            <a
              href={PROFILE.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaSecondary}
            >
              @ayabongaqwabi
            </a>
          </div>
          <WhatsAppButton href={PROFILE.whatsappUrl} />
        </div>

        {/* ── SEO attribution ── */}
        <p style={s.attribution}>
          Built by{' '}
          <a href={PROFILE.personalUrl} style={s.attrLink} target="_blank" rel="noopener noreferrer">
            Ayabonga Qwabi
          </a>{' '}
          ·{' '}
          <a href={PROFILE.businessUrl} style={s.attrLink} target="_blank" rel="noopener noreferrer">
            Qwabi Engineering
          </a>{' '}
          · Senior Product Engineer South Africa
        </p>

      </div>
    </section>
  );
}

/* ─── Styles ────────────────────────────────────────────────────── */

const s: Record<string, CSSProperties> = {
  section: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: 'inherit',
    padding: '3rem 0',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '0 1.25rem',
  },

  /* Header */
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  avatar: {
    flexShrink: 0,
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'rgba(128,128,128,0.12)',
    border: '1px solid rgba(128,128,128,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: 1,
    opacity: 0.8,
  },
  headerText: { flex: 1 },
  introLine: {
    fontSize: 13,
    opacity: 0.55,
    margin: '0 0 4px',
    letterSpacing: 0.2,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    margin: '0 0 6px',
    letterSpacing: -0.3,
  },
  titleBadge: {
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 500,
    padding: '2px 10px',
    borderRadius: 20,
    background: 'rgba(128,128,128,0.1)',
    border: '1px solid rgba(128,128,128,0.18)',
    letterSpacing: 0.3,
  },

  divider: {
    height: 1,
    background: 'rgba(128,128,128,0.15)',
    margin: '1.5rem 0',
  },

  /* Bio + Stats */
  bioRow: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bioRowCompact: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bioBlock: { flex: '1 1 300px' },
  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    opacity: 0.65,
    margin: '0 0 0.75rem',
    lineHeight: 1.5,
  },
  bio: {
    fontSize: 13.5,
    opacity: 0.78,
    margin: '0 0 0.75rem',
    lineHeight: 1.7,
  },
  origin: {
    fontSize: 12.5,
    opacity: 0.48,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  statsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.55rem',
    minWidth: 138,
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.55rem 0.85rem',
    borderRadius: 8,
    background: 'rgba(128,128,128,0.07)',
    border: '1px solid rgba(128,128,128,0.13)',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 10,
    opacity: 0.5,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: 2,
  },

  /* Services */
  sectionLabel: {
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: 0.42,
    margin: '0 0 0.9rem',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.2rem',
  },
  groupLabel: {
    fontSize: 11,
    fontWeight: 600,
    opacity: 0.48,
    margin: '0 0 0.45rem',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  serviceList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  serviceItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  serviceDot: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'currentColor',
    opacity: 0.32,
    flexShrink: 0,
  },
  serviceLink: {
    fontSize: 13,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.72,
    lineHeight: 1.5,
  },
  toggleBtn: {
    marginTop: '0.85rem',
    background: 'none',
    border: '1px solid rgba(128,128,128,0.2)',
    borderRadius: 6,
    padding: '5px 14px',
    fontSize: 12,
    cursor: 'pointer',
    color: 'inherit',
    opacity: 0.58,
    letterSpacing: 0.2,
  },

  /* Projects */
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '0.7rem',
  },
  projectCard: {
    display: 'block',
    padding: '0.8rem 0.95rem',
    borderRadius: 8,
    border: '1px solid rgba(128,128,128,0.14)',
    background: 'rgba(128,128,128,0.04)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s',
  },
  projectCardHover: {
    borderColor: 'rgba(128,128,128,0.3)',
    background: 'rgba(128,128,128,0.09)',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
    gap: 8,
  },
  projectTitle: {
    fontSize: 13.5,
    fontWeight: 600,
    letterSpacing: -0.1,
  },
  projectTag: {
    fontSize: 10,
    opacity: 0.42,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    whiteSpace: 'nowrap',
  },
  projectDesc: {
    fontSize: 12.5,
    opacity: 0.58,
    margin: 0,
    lineHeight: 1.5,
  },

  /* CTA */
  ctaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  ctaLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.85rem',
    alignItems: 'center',
  },
  ctaPrimary: {
    fontSize: 13,
    fontWeight: 600,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.85,
    letterSpacing: -0.1,
  },
  ctaSecondary: {
    fontSize: 13,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.45,
  },
  whatsappBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    color: '#fff',
    border: 'none',
    borderRadius: 7,
    padding: '8px 16px',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.15s',
    letterSpacing: 0.1,
  },

  /* Attribution */
  attribution: {
    marginTop: '1.5rem',
    fontSize: 11.5,
    opacity: 0.35,
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  attrLink: {
    color: 'inherit',
    textDecoration: 'none',
    opacity: 1,
  },
};
