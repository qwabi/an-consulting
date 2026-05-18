import fs from 'node:fs';
import path from 'node:path';

const siteUrl = "https://www.anconsulting.co.za".replace(/\/$/, '');
const root = process.cwd();
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const isViteApp = Boolean(packageJson.scripts?.dev?.includes('vite'));
const isCreateReactApp = Boolean(packageJson.scripts?.build?.includes('react-scripts')); 
const outputDir = fs.existsSync(path.join(root, 'dist')) ? path.join(root, 'dist') : path.join(root, 'public');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', 'dist', 'build', 'api', 'admin'].includes(entry.name)) return [];
      return walk(full);
    }
    return [full];
  });
}

function routeFromFile(file) {
  const appDir = path.join(root, 'app');
  const pagesDir = fs.existsSync(path.join(root, 'src/pages')) ? path.join(root, 'src/pages') : path.join(root, 'pages');
  const vitePagesDir = path.join(root, 'src/pages');
  if (file.startsWith(appDir) && /\/page\.(tsx|ts|jsx|js)$/.test(file)) {
    const rel = path.relative(appDir, path.dirname(file));
    return rel === '' ? '/' : '/' + rel.replace(/\\/g, '/').replace(/\([^)]*\)/g, '').replace(/\[.*?\]/g, '');
  }
  if (isViteApp && file.startsWith(vitePagesDir) && /\.(tsx|ts|jsx|js)$/.test(file)) {
    const rel = path.relative(vitePagesDir, file).replace(/\\/g, '/').replace(/\.(tsx|ts|jsx|js)$/, '');
    const routeMap = {
      Home: '/',
      About: '/about',
      AboutDeveloper: '/about-developer',
      Students: '/students',
      Vendors: '/vendors',
      Universities: '/universities',
      Pricing: '/pricing',
      Help: '/help',
      Contact: '/contact',
      Press: '/press',
      'legal/Terms': '/legal/terms',
      'legal/Privacy': '/legal/privacy',
      'legal/Refunds': '/legal/refunds',
      'compare/Eezipay': '/vs/eezipay',
      'compare/MrD': '/vs/mr-d',
      'compare/VarsityVibe': '/vs/varsity-vibe',
      'compare/CartZA': '/vs/cartza',
      'compare/BestAlternatives': '/best-campus-apps',
      'downloads/CampusCheatSheet': '/downloads/campus-ordering',
      'downloads/VendorOnePager': '/downloads/vendor-one-pager',
    };
    return routeMap[rel] || null;
  }
  if (isCreateReactApp) return null;
  if (file.startsWith(pagesDir) && /\.(tsx|ts|jsx|js)$/.test(file)) {
    const rel = path.relative(pagesDir, file).replace(/\\/g, '/').replace(/\.(tsx|ts|jsx|js)$/, '');
    if (rel.startsWith('api/') || rel.startsWith('_')) return null;
    return '/' + rel.replace(/\/index$/, '').replace(/^index$/, '').replace(/\[.*?\]/g, '');
  }
  return null;
}

const files = [...walk(path.join(root, 'app')), ...walk(path.join(root, 'pages')), ...walk(path.join(root, 'src/pages'))];
const declaredRoutes = isCreateReactApp && fs.existsSync(path.join(root, 'src/index.js'))
  ? Array.from(fs.readFileSync(path.join(root, 'src/index.js'), 'utf8').matchAll(/<Route\s+path=['"]([^'"]+)['"]/g)).map((match) => match[1]).filter((route) => !route.includes(':') && route !== '*')
  : [];
const routes = Array.from(new Set([...files.map(routeFromFile).filter(Boolean), ...declaredRoutes]))
  .map((route) => route.replace(/\/+/g, '/'))
  .filter((route) => !route.includes('[') && !route.includes('('))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

if (!routes.includes('/')) routes.unshift('/');
if (!routes.includes('/about-developer')) routes.push('/about-developer');

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Africa/Johannesburg',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date());
const urlset = routes.map((route) => {
  const priority = route === '/' ? '1.0' : ['/about', '/contact', '/services', '/about-developer'].includes(route) ? '0.8' : '0.6';
  const changefreq = route === '/' ? 'weekly' : 'monthly';
  return `  <url>
    <loc>${siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`);
fs.writeFileSync(path.join(outputDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);
console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
