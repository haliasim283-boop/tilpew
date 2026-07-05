// All editable site content lives here. Swap copy, add rows, or update
// codes without touching component markup.

export const COMPANY = {
  name: 'Trade International Logistics',
  shortName: 'Trade International',
  tagline: "Pakistan's Trusted Air Freight Partner — Since 2009",
  founded: 2009,
  founder: 'Ghulam Yasin Anjum',
  ceo: 'Haider Ali',
  email: 'info@tradeintl.pk',
  phone: '+92 302 8582323',
  address: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  hours: 'Saturday – Thursday, 09:00 – 22:00',
}

// Live "years in business" so the counter stays correct every year.
export const YEARS_IN_BUSINESS = new Date().getFullYear() - COMPANY.founded

export const STATS = [
  { value: YEARS_IN_BUSINESS, label: 'Years in Business', note: `Since ${COMPANY.founded}` },
  { value: 20, label: 'Clients', note: 'Across Pakistan' },
  { value: 14, label: 'Destinations Served', note: 'Gulf, UK & Canada' },
  { value: 11, label: 'Airlines Partnered', note: 'Across the region' },
]

export const SERVICES = [
  {
    icon: 'PlaneTakeoff',
    title: 'Air Freight Export',
    desc: 'Scheduled and priority air cargo space on Gulf, UK and Canada routes, with consolidations to keep your per-kilo rates competitive.',
    image: '/service/airfreight.jpg',
  },
  {
    icon: 'ShieldCheck',
    title: 'Customs Clearance',
    desc: 'In-house clearing for the Peshawar sector and a trusted agent network nationwide, keeping shipments moving without delay.',
    image: '/service/customs-clearance.jpg',
  },
  {
    icon: 'FileCheck2',
    title: 'Form-E Processing',
    desc: 'End-to-end Form-E preparation and bank filing so your export documentation is compliant and ready before flight.',
    image: '/service/forme.jpg',
  },
  {
    icon: 'Radar',
    title: 'Cargo Tracking',
    desc: 'Live AWB milestones from acceptance to arrival, with proactive updates so you always know where your shipment is.',
    image: '/service/air-cargo-tracking-airlines.png',
  },
]

export const ORIGINS = [
  { code: 'PEW', city: 'Peshawar', note: 'Head office & in-house clearing', image: '/origin/pew.jpg' },
  { code: 'ISB', city: 'Islamabad', note: 'Capital gateway', image: '/origin/isb.jpg' },
  { code: 'SKT', city: 'Sialkot', note: 'Export manufacturing hub', image: '/origin/skt.jpg' },
  { code: 'MUX', city: 'Multan', note: 'Southern Punjab', image: '/origin/mux.jpg' },
  { code: 'LHE', city: 'Lahore', note: 'Punjab gateway', image: '/origin/lhr.jpg' },
  { code: 'KHI', city: 'Karachi', note: 'National cargo hub', image: '/origin/khi.jpg' },
]

export const DESTINATIONS = [
  { code: 'DXB', city: 'Dubai', country: 'UAE', flag: '🇦🇪', image: '/destinations/dubai.jpg' },
  { code: 'DOH', city: 'Doha', country: 'Qatar', flag: '🇶🇦', image: '/destinations/doha.jpeg' },
  { code: 'AUH', city: 'Abu Dhabi', country: 'UAE', flag: '🇦🇪', image: '/destinations/abudhabi.jpeg' },
  { code: 'SHJ', city: 'Sharjah', country: 'UAE', flag: '🇦🇪', image: '/destinations/sharjah.jpg' },
  { code: 'BAH', city: 'Bahrain', country: 'Bahrain', flag: '🇧🇭', image: '/destinations/bahrain.jpeg' },
  { code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', flag: '🇸🇦', image: '/destinations/jeddah.jpg' },
  { code: 'MCT', city: 'Muscat', country: 'Oman', flag: '🇴🇲', image: '/destinations/muscat.jpg' },
  { code: 'AAN', city: 'Al Ain', country: 'UAE', flag: '🇦🇪', image: '/destinations/alain.jpg' },
  { code: 'KWI', city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', image: '/destinations/kuwait.jpg' },
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', image: '/destinations/riyad.jpeg' },
  { code: 'RKT', city: 'Ras Al Khaimah', country: 'UAE', flag: '🇦🇪', image: '/destinations/rasalkhaima.jpeg' },
  { code: 'MAN', city: 'Manchester', country: 'United Kingdom', flag: '🇬🇧', image: '/destinations/manchester.jpg' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada', flag: '🇨🇦', image: '/destinations/toronto.jpg' },
  { code: 'LHR', city: 'London', country: 'United Kingdom', flag: '🇬🇧', image: '/destinations/london.jpg' },
]

// `mark` is the placeholder monogram shown in the logo tile.
// `code` is the airline's IATA designator.
export const AIRLINES = [
  { name: 'flydubai', mark: 'FD', code: 'FZ', logo: '/airlines/flydubai.jpg' },
  { name: 'PIA', mark: 'PK', code: 'PK', logo: '/airlines/pia.png' },
  { name: 'Air Arabia', mark: 'G9', code: 'G9', logo: '/airlines/airarabia.jpg' },
  { name: 'Air Arabia', mark: '3L', code: '3L', logo: '/airlines/airarabia.jpg' },
  { name: 'Airsial', mark: 'PF', code: 'PF', logo: '/airlines/airsial.jpg' },
  { name: 'flynas', mark: 'XY', code: 'XY', logo: '/airlines/flynas.jpg' },
  { name: 'Saudi Airlines', mark: 'SV', code: 'SV', logo: '/airlines/saudiairlines.jpg' },
  { name: 'Salam Air', mark: 'OV', code: 'OV', logo: '/airlines/salamair.jpg' },
  { name: 'Emirates', mark: 'EK', code: 'EK', logo: '/airlines/emirates.jpg' },
  { name: 'Qatar Airways', mark: 'QR', code: 'QR', logo: '/airlines/qatar.jpg' },
  { name: 'Fly Jinnah', mark: '9P', code: '9P', logo: '/airlines/flyjinnah.jpg' },
  { name: 'DHL', mark: 'DHL', code: 'DHL', logo: '/airlines/dhl.jpg' },
]

export const TESTIMONIALS = [
  {
    quote:
      'They consistently find us space on the Dubai and Sharjah flights even in peak season. In five years our shipments have never missed a connection.',
    name: 'Imran Khattak',
    company: 'Khattak Marble & Granite, Peshawar',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote:
      'Form-E filing and customs used to be our biggest headache. Trade International handles the whole document chain so our surgical instruments reach Europe on time.',
    name: 'Sana Tariq',
    company: 'Tariq Surgical Instruments, Sialkot',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote:
      'True door-to-door service with clear AWB tracking. I always know exactly where my dry-fruit consignment is, and the rates are honest. A genuinely reliable partner.',
    name: 'Bilal Ahmed',
    company: 'Frontier Dry Fruits, Peshawar',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
]

export const CERTIFICATES = [
  {
    title: 'IATA Cargo Agent',
    issuer: 'IATA Accredited',
    desc: 'Registered IATA cargo agent authorised to issue Air Waybills on partner airlines.',
  },
  {
    title: 'DGR Certification',
    issuer: 'Dangerous Goods Regulations',
    desc: 'Certified handling, acceptance and documentation of dangerous goods for air transport.',
  },
  {
    title: 'Cargo Sales & Rating Basics',
    issuer: 'IATA Training',
    desc: 'Trained in cargo sales, rate construction and Air Waybill completion to IATA standards.',
  },
  {
    title: 'CASS Settlement Agent',
    issuer: 'CASS Pakistan',
    desc: 'Approved CASS agent (27-3) for centralised airline billing and settlement.',
  },
  {
    title: 'Airline Cargo Approvals',
    issuer: 'Partner Carriers',
    desc: 'Approved booking and handling agent across our network of Gulf and Pakistani carriers.',
  },
  {
    title: 'Air Cargo Security',
    issuer: 'Aviation Security Awareness',
    desc: 'Security-aware acceptance procedures aligned with civil aviation cargo requirements.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]
