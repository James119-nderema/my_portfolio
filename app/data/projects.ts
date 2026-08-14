export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Web' | 'Desktop' | 'Mobile' | 'SaaS';
  technologies: string[];
  screenshots: string[];
  liveUrl?: string;
  liveLabel?: string;
  sourceUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  highlights?: string[];
  liveUrl2?: string;
  liveLabel2?: string;

  status?: 'Live' | 'In Development' | 'Beta';
};

export const projects: Project[] = [
  {
    id: 'sokobiz',
    name: 'SokoBiz',
    tagline: 'Multi-tenant business & inventory SaaS',
    description:
      'A complete business management platform for retailers and wholesalers. Includes inventory, sales, customer management, reports and multi-branch support. Serving live tenants across Kenya.',
    category: 'SaaS',
    technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    screenshots: [
      '/images/Kazam_screenshot_00003.png',
      '/images/Kazam_screenshot_00001.png',
      '/images/Kazam_screenshot_00002.png',
      '/images/Screenshot_2026-08-14_16_26_44.png',
    ],
    liveUrl: 'https://sokobiz.co.ke',
    liveLabel: 'sokobiz.co.ke',

    liveUrl2: 'https://lilian.sokobiz.co.ke',
    liveLabel2: 'See tenantn shop (lilian.sokobiz.co.ke)',
    highlights: [
      'Multi-tenant architecture serving live customers',
      'Real-time sales and inventory reporting',
      'Branch, staff & role-based access control',
    ],
    status: 'Live',
  },

  {
    id: 'schoolmaster',
    name: 'SchoolMaster',
    tagline: 'Multi-tenant school management SaaS',
    description:
      'A hosted school management platform with subdomain-per-tenant onboarding. Manages student records, exams, grading, ranking, report cards, fees, staff and parent communication.',
    category: 'SaaS',
    technologies: ['Django', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    screenshots: [
      '/images/Kazam_screenshot_00004.png',
      '/images/Kazam_screenshot_00005.png',
      '/images/Kazam_screenshot_00006.png',
      '/images/Kazam_screenshot_00007.png',
      '/images/Kazam_screenshot_00008.png',
      '/images/Kazam_screenshot_00009.png',
      '/images/Kazam_screenshot_00010.png',
      '/images/Kazam_screenshot_00011.png',
      '/images/Kazam_screenshot_00012.png',
      '/images/Kazam_screenshot_00013.png',
    ],
    liveUrl: 'https://test.schoolmaster.co.ke',
    liveLabel: 'schoolmaster.co.ke (tenant demo)',
    highlights: [
      'Live onboarded tenant (Lilian)',
      'Automatic report card generation & ranking',
      'Fee tracking and parent portal',
    ],
    status: 'Live',
  },
  {
    id: 'dukapro-mobile',
    name: 'DukaPro Mobile',
    tagline: 'Sales & inventory on Android',
    description:
      'A React Native mobile companion for shop owners — quick sale capture, product lookup, low-stock alerts and daily summaries. Syncs with the DukaPro backend in real time.',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    screenshots: [
      '/images/WhatsApp Image 2026-08-14 at 3.19.10 PM.jpeg',
      '/images/WhatsApp Image 2026-08-14 at 3.19.11 PM (1).jpeg',
      '/images/WhatsApp Image 2026-08-14 at 3.19.11 PM (2).jpeg',
      '/images/WhatsApp Image 2026-08-14 at 3.19.11 PM.jpeg',
      '/images/WhatsApp Image 2026-08-14 at 3.19.12 PM.jpeg'
    ],
    highlights: [
      'Barcode-friendly quick sale flow',
      'Offline queue with background sync',
      'Push notifications for low stock',
    ],
    status: 'Beta',
  },
  {
    id: 'dukapro-desktop',
    name: 'DukaPro Desktop',
    tagline: 'PyQt6 desktop cashier for shops',
    description:
      'A native desktop point-of-sale application built with PyQt6. Fast keyboard-driven billing, thermal printer receipts, day-close reports and local caching for uninterrupted sales.',
    category: 'Desktop',
    technologies: ['Python', 'PyQt6', 'SQLite', 'Qt Stylesheet'],
    screenshots: [
      '/images/Screenshot_2026-08-14_15_59_39.png',
      '/images/Screenshot_2026-08-14_15_43_56.png',
      '/images/Screenshot_2026-08-14_15_43_32.png',
      '/images/Screenshot_2026-08-14_15_43_20.png',
      '/images/Screenshot_2026-08-14_15_43_08.png'
    ],
    highlights: [
      'Offline-first with local SQLite cache',
      'Thermal printer & barcode scanner support',
      'Keyboard-driven cashier UX',
    ],
    status: 'Beta',
  },
  {
    id: 'timetable',
    name: 'School Timetable Generator',
    tagline: 'Automated timetable builder',
    description:
      'A Windows desktop application that generates conflict-free school timetables based on subjects, teachers and available slots. Ships as a signed installer.',
    category: 'Desktop',
    technologies: ['Python', 'PyQt', 'Algorithms', 'Windows Installer'],
    screenshots: ['/images/Screenshot_2026-08-14_15_39_50.png'],
    downloadUrl: '/downloads/SchoolTimetableGeneratorSetup.exe',
    downloadLabel: 'Download for Windows',
    highlights: [
      'Constraint-based scheduling engine',
      'Exports printable PDF timetables',
      'Windows installer included',
    ],
    status: 'Live',
  },
];
