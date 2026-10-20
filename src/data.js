import Sri_Mayura from './assets/Sri_Mayura.png';
import Tesla_City from './assets/teslahero.png';
import mayura_gate from './assets/mayura_gate.png';
import mayura_road from './assets/mayura_broad_road.png';
import Mayura_Hero_Banner from './assets/Grand_Square_Hero.png';
import Mayura_Plot_Hero_Banner from './assets/plot1.png';
import Grand_Square_Hero_Banner from './assets/hero_homep.png';
import Grand_Square_Gallery from './assets/Grand_Square_hero.png';
import Home_about from './assets/home-about-image-final.webp';
import Home_about_n from './assets/home-about-img.webp';
import street_light from './assets/Street_Lights_Mayura.png';
import road from './assets/Black_top_road.png';
import drainage from './assets/Drainage3.png';
import Overhead from './assets/Overhead.png';
import Trees from './assets/Avenue_Trees.png';
import Walls from './assets/Compound_Walls.png';
import Interior from './assets/Interior.png';
import Lift from './assets/Lift.png';
import Parking from './assets/CoveredParking.png';
import Power from './assets/Power.png';
import CCTV from './assets/CCTV.png';
import Rainwater from './assets/Rainwater.png';
import KidsPlayArea from './assets/KidsPlayArea.png';
import ComingSoonProject from './assets/coming-soon-project.webp';
import Mayura from './assets/Mayura.png';
import mayura_plot from './assets/mayura_plot.png';
import mayura_plot_road from './assets/mayura_plot_road.png';


export const company = {
  name: 'Grand Reality',
  phone: '+91 72996 03701',
  phoneHref: 'tel:+917299603701',
  email: 'info@grandreality.in',
  address: ['7/493, Velachery Main Road,', 'Vijayanagaram, Medavakkam,', 'Chennai - 600100'],
  hours: ['Mon - Sat', '9:30 AM - 6:30 PM'],
  mapQuery: '7/493 Velachery Main Road Vijayanagaram Medavakkam Chennai 600100',
};

export const projects = [
  {
    id: 'tesla-city', name: 'Tesla City', place: 'Poonamallee, Chennai', status: 'ongoing',
    type: '3 BHK Duplex Villas', tag: 'Premium Living', price: '₹63.3 L*',
    image: Tesla_City, cardImage: Tesla_City, link: '/projects/tesla-city',
  },
  {
    id: 'sri-mayura-avenue', name: 'Sri Mayura Avenue', place: 'Kundrathur, Chennai', status: 'completed',
    type: 'Residential Plots', tag: 'Gated Community', price: '₹24.6 L*',
    image: Sri_Mayura, link: '/projects/sri-mayura-avenue',
  },
  {
    id: 'coming-soon', name: 'Coming Soon', place: '', status: 'upcoming',
    type: '', tag: '',
    image: ComingSoonProject, cardImage: ComingSoonProject, link: '/contact',
  },
];

// Data for the reusable "completed project" detail page (/projects/:slug)
export const completedProjects = {
  'sri-mayura-avenue': {
    name: ['Sri Mayura', 'Avenue'],
    place: 'Kundrathur, Chennai',
    intro: 'Thoughtfully planned residential plots in a prime location, crafted for a peaceful and prosperous lifestyle.',
    heroImages: [Mayura, mayura_plot, mayura_plot_road ],
    aboutTitle: ['A Perfect Address', 'For Your Future'],
    about: 'Sri Mayura Avenue is a premium plotted development strategically located in Kundrathur, offering excellent connectivity, essential amenities, and a serene environment – ideal for building your dream home.',
    highlights: ['DTCP Approved Plots', 'Black Top Roads', 'Gated Community', '24/7 Security', 'Clear Title & Legal Compliance'],
    galleryImages: [mayura_gate, Mayura_Hero_Banner, mayura_road ],
    stats: [
      { icon: 'Map', label: 'Total Area', value: '4.5 Acres' },
      { icon: 'LayoutGrid', label: 'Total Plots', value: '85+' },
      { icon: 'Ruler', label: 'Plot Sizes', value: '600 - 2400 Sq.ft' },
      { icon: 'Building2', label: 'Project Status', value: 'Completed' },
      { icon: 'ShieldCheck', label: 'Possession', value: 'Ready to Build' },
    ],
    sideImage: mayura_road,
    whyTitle: 'Sri Mayura Avenue',
    why: [
      { icon: 'MapPin', title: 'Prime Location', text: 'Close to schools, colleges, hospitals and IT hubs.' },
      { icon: 'TrendingUp', title: 'High Appreciation Potential', text: 'Located in a fast-developing residential corridor.' },
      { icon: 'Route', title: 'Excellent Connectivity', text: 'Easy access to GST Road, Railway Station & Bus Terminus.' },
      { icon: 'Trees', title: 'Peaceful & Green Surroundings', text: 'Enjoy a calm, clean and pollution-free environment.' },
    ],
    specs: [
      { icon: 'Route', label: 'Black Top Roads', detail: 'Well-laid blacktop roads make it easy to move around the community and reach every plot.', image: road },
      { icon: 'Lightbulb', label: 'Street Lights', detail: 'Street lighting keeps internal roads illuminated and comfortable to use after dark.', image: street_light },
      { icon: 'TreePine', label: 'Avenue Trees', detail: 'Tree-lined avenues bring greenery and shade to the neighbourhood.', image: Trees },
      { icon: 'BrickWall', label: 'Compound Wall', detail: 'A compound wall defines the development and helps create a sense of privacy.', image: Walls },
    ],
    near: [
      ['Kandigai Junction', '8 mins'], ['Vandalur Railway Station', '15 mins'], ['GST Road', '15 mins'], ['New CMBT Bus Terminus ', '15 mins'], ['Chengalpet', '20 mins'], ['Urapakkam Railway Station', '15 mins'], ['Tambaram', '20 mins'], ['Kelambakkam Junction', '15 mins'],
      ['SRM Public School', '15 mins'], ['Chennai International Airport', '25 mins'],
    ],
    locationAdvantages: [
      {
        title: 'Schools',
        items: [
          ['Tamilnadu Police Public School', '5 mins'],
          ['Colors International School', '5 mins'],
          ['Light Workers Academy CBSE', '5 mins'],
          ['Velammal Vidhayshram CBSE (Mambakkam)', '10 mins'],
          ['Srm Public School CBSE', '15 mins'],
          ['Sri Ma Vidhyala School CBSE', '15 mins'],
        ],
      },
      {
        title: 'Colleges',
        items: [
          ['IIITDM', '5 mins'],
          ['Tamil Nadu Sports University', '5 mins'],
          ['VIT University', '10 mins'],
          ['Tagore Engineering College', '10 mins'],
          ['Crescent Engineering College', '15 mins'],
          ['Sri Sathya Sai Medical College', '15 mins'],
          ['Bharath Engineering College', '15 mins'],
        ],
      },
    ],
    mapQuery: 'Kundrathur, Chennai',
    mapImage: '/images/map-mayura.jpg',
  },
  'grand-square': {
    name: ['Grand', 'Square'],
    place: 'Tambaram, Chennai',
    intro: 'Premium apartments in the heart of Tambaram, designed for modern families who want comfort and convenience.',
    heroImages: [Grand_Square_Hero_Banner],
    aboutTitle: ['A Landmark Address', 'In Tambaram'],
    about: 'Grand Square is a completed apartment community in Tambaram offering well-planned homes, quality finishes and easy access to schools, hospitals and the railway station.',
    highlights: ['DTCP Approved Project', 'Spacious 2 & 3 BHK Homes', 'Covered Car Parking', '24/7 Security & CCTV', 'Clear Title & Legal Compliance'],
    galleryImages: [Grand_Square_Gallery, Home_about, Home_about_n],
    stats: [
      { icon: 'Map', label: 'Total Area', value: '1.2 Acres' },
      { icon: 'LayoutGrid', label: 'Total Units', value: '48' },
      { icon: 'Ruler', label: 'Unit Sizes', value: '950 - 1450 Sq.ft' },
      { icon: 'Building2', label: 'Project Status', value: 'Completed' },
      { icon: 'ShieldCheck', label: 'Possession', value: 'Ready to Move' },
    ],
    sideImage: Interior,
    whyTitle: 'Grand Square',
    why: [
      { icon: 'MapPin', title: 'Prime Location', text: 'Walkable to Tambaram railway station, schools and markets.' },
      { icon: 'TrendingUp', title: 'High Appreciation Potential', text: 'Established neighbourhood with steady demand.' },
      { icon: 'Route', title: 'Excellent Connectivity', text: 'Quick access to GST Road, the airport and the OMR corridor.' },
      { icon: 'Trees', title: 'Comfortable Living', text: 'Well-ventilated homes with landscaped common areas.' },
    ],
    specs: [
      { icon: 'ArrowUpDown', label: 'Lift Access', detail: 'Lift access makes it convenient for residents to reach every floor of the apartment community.', image: Lift },
      { icon: 'Car', label: 'Covered Parking', detail: 'Dedicated covered parking keeps residents’ vehicles sheltered and close to home.', image: Parking },
      { icon: 'Zap', label: 'Power Backup', detail: 'Power backup helps keep essential home comforts available during interruptions to the mains supply.', image: Power },
      { icon: 'Cctv', label: 'CCTV Security', detail: 'CCTV surveillance helps monitor shared spaces and supports a more secure community.', image: CCTV },
      { icon: 'Droplets', label: 'Rainwater Harvesting', detail: 'Rainwater harvesting supports responsible water management within the development.', image: Rainwater },
      { icon: 'Baby', label: 'Kids Play Area', detail: 'A dedicated play area gives children space to play close to home.', image: KidsPlayArea },
    ],
    near: [
      ['Tambaram Railway Station', '5 mins'], ['Chromepet', '12 mins'], ['GST Road', '5 mins'],
      ['Leading Schools & Colleges', '10 mins'], ['Chennai International Airport', '20 mins'],
    ],
    mapQuery: 'Tambaram, Chennai',
  },
};

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'On Going Projects', to: '/projects', children: [{ label: 'Tesla City, Ponmar', to: '/projects/tesla-city' }] },
  {
    label: 'Completed Projects', to: '/projects', children: [
      { label: 'Sri Mayura Avenue', to: '/projects/sri-mayura-avenue' },
      //{ label: 'Grand Square', to: '/projects/grand-square' },
    ]
  },
  { label: 'Channel Partners', to: '/channel-partners' },
  { label: 'Contact', to: '/contact' },
];
